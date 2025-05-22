
import { AspectRatio } from "@/components/ui/aspect-ratio";
import MotionWrapper from "./MotionWrapper";

interface ImageGridProps {
  images: { src: string; alt: string }[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {images.map((image, index) => (
        <MotionWrapper key={index} delay={index * 0.1}>
          <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100 group">
            <AspectRatio ratio={1}>
              <div 
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${image.src})` }}
                aria-label={image.alt}
              />
            </AspectRatio>
          </div>
        </MotionWrapper>
      ))}
    </div>
  );
};

export default ImageGrid;
