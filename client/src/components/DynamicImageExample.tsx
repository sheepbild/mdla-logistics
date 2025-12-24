import { ImageLoader } from './ImageLoader';

export function DynamicImageExample() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Exemple 1: Image Hero avec fallback</h3>
        <ImageLoader
          category="hero"
          fallbackUrl="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Image Hero"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Exemple 2: Logo</h3>
        <ImageLoader
          category="logo"
          fallbackUrl="/logo-mdla-globe.png"
          alt="Logo"
          className="h-12 w-auto"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Exemple 3: Images Produits (multiples)</h3>
        <div className="grid grid-cols-3 gap-4">
          <ImageLoader
            category="product"
            multiple={true}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
