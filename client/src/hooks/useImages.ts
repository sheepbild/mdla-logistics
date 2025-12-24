import { useState, useEffect } from 'react';
import { supabase, type Image } from '@/lib/supabase';

export function useImages(category?: string) {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadImages();
  }, [category]);

  const loadImages = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('images')
        .select('*')
        .eq('is_active', true);

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;
      setImages(data || []);
      setError(null);
    } catch (err: any) {
      console.error('Error loading images:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getImageByCategory = (cat: string) => {
    return images.find(img => img.category === cat);
  };

  const getImagesByCategory = (cat: string) => {
    return images.filter(img => img.category === cat);
  };

  return {
    images,
    loading,
    error,
    refresh: loadImages,
    getImageByCategory,
    getImagesByCategory,
  };
}
