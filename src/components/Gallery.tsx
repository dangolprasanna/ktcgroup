import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import MotionWrapper from "./MotionWrapper";
import OptimizedImage from "./OptimizedImage";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery = ({ items }: GalleryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <MotionWrapper key={item.id} delay={index * 0.1}>
          <Card className="overflow-hidden group shadow-sm border-0">
            <div className="relative">
              <AspectRatio ratio={4/3}>
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  quality="medium"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white w-full">
                  <h3 className="font-medium text-xl">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </div>
            </div>
          </Card>
        </MotionWrapper>
      ))}
    </div>
  );
};

export default Gallery;
