
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

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
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden group">
          <div className="relative">
            <AspectRatio ratio={4/3}>
              <div 
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white w-full">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.category}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
