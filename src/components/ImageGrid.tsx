import { AspectRatio } from "@/components/ui/aspect-ratio";
import MotionWrapper from "./MotionWrapper";
import OptimizedImage from "./OptimizedImage";

interface ImageGridProps {
  images: { src: string; alt: string }[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {images.map((image, index) => (
        <MotionWrapper key={index} delay={index * 0.1}>
          <div className="overflow-hidden max-h-56 rounded-lg shadow-sm border border-gray-100 group h-auto">
            <AspectRatio>
              <OptimizedImage
                src={image.src.replace(import.meta.env.BASE_URL, '/')}
                alt={image.alt}
                className="w-full bg-center bg-cover group-hover:scale-105 transition-transform duration-700"
                quality="medium"
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
              />
            </AspectRatio>
          </div>
        </MotionWrapper>
      ))}
    </div>
  );
};

export default ImageGrid;
