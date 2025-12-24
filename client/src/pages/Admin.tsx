import { useState, useEffect } from 'react';
import { supabase, type Image } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Trash2, Upload, Eye, EyeOff } from 'lucide-react';

export default function Admin() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'hero',
    alt_text: '',
    description: '',
  });

  const categories = ['hero', 'product', 'logo', 'background', 'service', 'general'];

  useEffect(() => {
    initializeBucket();
    loadImages();
  }, []);

  const initializeBucket = async () => {
    try {
      const { data: buckets } = await supabase.storage.listBuckets();
      const bucketExists = buckets?.some(bucket => bucket.name === 'images');

      if (!bucketExists) {
        const { error } = await supabase.storage.createBucket('images', {
          public: true,
          fileSizeLimit: 10485760,
        });

        if (error) {
          console.error('Error creating bucket:', error);
        }
      }
    } catch (error) {
      console.error('Error initializing bucket:', error);
    }
  };

  const loadImages = async () => {
    try {
      const { data, error } = await supabase
        .from('images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error loading images:', error);
      toast.error('Erreur lors du chargement des images');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (!formData.name) {
        setFormData(prev => ({ ...prev, name: file.name.split('.')[0] }));
      }
    }
  };

  const uploadImage = async () => {
    if (!selectedFile) {
      toast.error('Veuillez sélectionner un fichier');
      return;
    }

    if (!formData.name || !formData.alt_text) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setUploading(true);

    try {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${formData.category}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, selectedFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      const img = new window.Image();
      img.src = URL.createObjectURL(selectedFile);
      await new Promise((resolve) => { img.onload = resolve; });

      const { error: dbError } = await supabase
        .from('images')
        .insert({
          name: formData.name,
          category: formData.category,
          url: publicUrl,
          alt_text: formData.alt_text,
          description: formData.description || null,
          file_path: filePath,
          file_size: selectedFile.size,
          mime_type: selectedFile.type,
          width: img.width,
          height: img.height,
          is_active: true,
        });

      if (dbError) throw dbError;

      toast.success('Image uploadée avec succès');
      setFormData({ name: '', category: 'hero', alt_text: '', description: '' });
      setSelectedFile(null);
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      loadImages();
    } catch (error: any) {
      console.error('Error uploading image:', error);
      toast.error('Erreur lors de l\'upload: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const toggleImageStatus = async (image: Image) => {
    try {
      const { error } = await supabase
        .from('images')
        .update({ is_active: !image.is_active })
        .eq('id', image.id);

      if (error) throw error;
      toast.success(`Image ${image.is_active ? 'désactivée' : 'activée'}`);
      loadImages();
    } catch (error) {
      console.error('Error toggling image status:', error);
      toast.error('Erreur lors de la modification');
    }
  };

  const deleteImage = async (image: Image) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette image ?')) return;

    try {
      const { error: storageError } = await supabase.storage
        .from('images')
        .remove([image.file_path]);

      if (storageError) throw storageError;

      const { error: dbError } = await supabase
        .from('images')
        .delete()
        .eq('id', image.id);

      if (dbError) throw dbError;

      toast.success('Image supprimée');
      loadImages();
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Gestion des Images</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Uploader une nouvelle image</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="file-input">Fichier image *</Label>
              <Input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={uploading}
              />
            </div>

            <div>
              <Label htmlFor="name">Nom *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Nom de l'image"
                disabled={uploading}
              />
            </div>

            <div>
              <Label htmlFor="category">Catégorie *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                disabled={uploading}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="alt_text">Texte alternatif *</Label>
              <Input
                id="alt_text"
                value={formData.alt_text}
                onChange={(e) => setFormData(prev => ({ ...prev, alt_text: e.target.value }))}
                placeholder="Description pour l'accessibilité"
                disabled={uploading}
              />
            </div>

            <div>
              <Label htmlFor="description">Description (optionnel)</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Description détaillée de l'image"
                disabled={uploading}
              />
            </div>

            <Button
              onClick={uploadImage}
              disabled={uploading || !selectedFile}
              className="w-full"
            >
              <Upload className="mr-2 h-4 w-4" />
              {uploading ? 'Upload en cours...' : 'Uploader l\'image'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aperçu</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedFile ? (
              <div className="space-y-2">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="text-sm text-muted-foreground">
                  <p>Taille: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  <p>Type: {selectedFile.type}</p>
                </div>
              </div>
            ) : (
              <div className="h-64 border-2 border-dashed border-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Aucune image sélectionnée
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Images existantes ({images.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Chargement...</p>
          ) : images.length === 0 ? (
            <p className="text-muted-foreground">Aucune image pour le moment</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <Card key={image.id} className={!image.is_active ? 'opacity-50' : ''}>
                  <CardContent className="p-4">
                    <img
                      src={image.url}
                      alt={image.alt_text}
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold mb-1">{image.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Catégorie: {image.category}
                    </p>
                    {image.description && (
                      <p className="text-sm mb-2">{image.description}</p>
                    )}
                    <div className="text-xs text-muted-foreground mb-3">
                      {image.width && image.height && (
                        <p>{image.width}x{image.height}px</p>
                      )}
                      {image.file_size && (
                        <p>{(image.file_size / 1024 / 1024).toFixed(2)} MB</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleImageStatus(image)}
                        className="flex-1"
                      >
                        {image.is_active ? (
                          <>
                            <EyeOff className="mr-1 h-3 w-3" />
                            Désactiver
                          </>
                        ) : (
                          <>
                            <Eye className="mr-1 h-3 w-3" />
                            Activer
                          </>
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteImage(image)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
