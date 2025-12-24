import { useImages } from '@/hooks/useImages';

interface ImageLoaderProps {
  category: string;
  fallbackUrl?: string;
  alt?: string;
  className?: string;
  multiple?: boolean;
}

export function ImageLoader({
  category,
  fallbackUrl,
  alt,
  className,
  multiple = false
}: ImageLoaderProps) {
  const { images, loading, getImagesByCategory } = useImages(category);

  if (loading) {
    return (
      <div className={`animate-pulse bg-muted ${className}`}>
        <div className="h-full w-full" />
      </div>
    );
  }

  const categoryImages = getImagesByCategory(category);

  if (!multiple) {
    const image = categoryImages[0];
    const src = image?.url || fallbackUrl;
    const altText = image?.alt_text || alt || 'Image';

    if (!src) return null;

    return (
      <img
        src={src}
        alt={altText}
        className={className}
      />
    );
  }

  if (categoryImages.length === 0 && fallbackUrl) {
    return (
      <img
        src={fallbackUrl}
        alt={alt || 'Image'}
        className={className}
      />
    );
  }

  return (
    <>
      {categoryImages.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt={image.alt_text}
          className={className}
        />
      ))}
    </>
  );
}
