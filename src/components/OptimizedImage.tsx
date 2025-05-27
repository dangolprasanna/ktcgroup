import React from 'react';

interface OptimizedImageProps {
  src: string; // Original image path (e.g., "/images/Home-images/homeimg1.jpg")
  alt: string;
  className?: string;
  sizes?: string; // CSS sizes attribute for responsive images
  priority?: boolean; // Whether to preload this image
  width?: number;
  height?: number;
  quality?: 'thumbnail' | 'small' | 'medium' | 'large' | 'hero' | 'logo';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '100vw',
  priority = false,
  width,
  height,
  quality = 'medium'
}) => {
  // Extract filename and directory from src
  const getOptimizedPath = (originalSrc: string, size: string, format: 'webp' | 'jpg' | 'png' = 'webp') => {
    // Clean the source path - remove base URL and leading slash
    let cleanSrc = originalSrc;
    if (cleanSrc.includes(import.meta.env.BASE_URL)) {
      cleanSrc = cleanSrc.replace(import.meta.env.BASE_URL, '');
    }
    cleanSrc = cleanSrc.replace(/^\/+/, ''); // Remove leading slashes
    
    // Remove the 'images/' prefix if present since optimized images are stored without it
    if (cleanSrc.startsWith('images/')) {
      cleanSrc = cleanSrc.substring(7); // Remove 'images/'
    }
    
    // Extract directory and filename
    const lastSlashIndex = cleanSrc.lastIndexOf('/');
    const directory = cleanSrc.substring(0, lastSlashIndex);
    const filename = cleanSrc.substring(lastSlashIndex + 1);
    
    // Extract name and extension
    const lastDotIndex = filename.lastIndexOf('.');
    const name = filename.substring(0, lastDotIndex);
    const originalExt = filename.substring(lastDotIndex + 1).toLowerCase();
    
    // Determine output extension
    let ext = format;
    if (format === 'jpg' || format === 'png') {
      ext = originalExt === 'png' ? 'png' : 'jpg';
    }
    
    // Construct the optimized path
    const optimizedPath = `${import.meta.env.BASE_URL}images-optimized/${directory}/${name}-${size}.${ext}`;
    return optimizedPath;
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (originalSrc: string, format: 'webp' | 'jpg' | 'png' = 'webp') => {
    const sizes = ['small', 'medium', 'large'];
    const widths = { small: 400, medium: 800, large: 1200 };
    
    return sizes
      .map(size => `${getOptimizedPath(originalSrc, size, format)} ${widths[size as keyof typeof widths]}w`)
      .join(', ');
  };

  // Special handling for specific images
  const getSpecialSrcSet = (originalSrc: string, format: 'webp' | 'jpg' | 'png' = 'webp') => {
    if (originalSrc.includes('homeimg1.jpg')) {
      return [
        `${getOptimizedPath(originalSrc, 'small', format)} 400w`,
        `${getOptimizedPath(originalSrc, 'medium', format)} 800w`,
        `${getOptimizedPath(originalSrc, 'hero', format)} 1200w`
      ].join(', ');
    }
    
    if (originalSrc.includes('KHUM.png')) {
      return [
        `${getOptimizedPath(originalSrc, 'small', format)} 100w`,
        `${getOptimizedPath(originalSrc, 'logo', format)} 200w`
      ].join(', ');
    }
    
    return generateSrcSet(originalSrc, format);
  };

  // Get the main source (fallback) - use original format for fallback
  const getMainSrc = () => {
    if (src.includes('KHUM.png')) {
      return getOptimizedPath(src, quality, 'png');
    }
    return getOptimizedPath(src, quality, 'jpg');
  };

  const mainSrc = getMainSrc();
  
  // Get WebP sources
  const webpSrcSet = getSpecialSrcSet(src, 'webp');
  const jpegSrcSet = getSpecialSrcSet(src, src.includes('.png') ? 'png' : 'jpg');

  return (
    <picture>
      {/* WebP source for modern browsers */}
      <source
        srcSet={webpSrcSet}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* Fallback JPEG/PNG source */}
      <source
        srcSet={jpegSrcSet}
        sizes={sizes}
        type={src.includes('.png') ? 'image/png' : 'image/jpeg'}
      />
      
      {/* Fallback img element */}
      <img
        src={mainSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{
          width: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
        }}
      />
    </picture>
  );
};

export default OptimizedImage; 