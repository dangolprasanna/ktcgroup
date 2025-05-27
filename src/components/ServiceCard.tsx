import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import OptimizedImage from "./OptimizedImage";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  image?: string;
  serviceId?: number;
}

const ServiceCard = ({ title, description, icon, link = "/services", image, serviceId }: ServiceCardProps) => {
  // If serviceId is provided, create a direct link to the service detail page
  const serviceLink = serviceId !== undefined ? `/services/${serviceId}` : link;
  
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="h-[450px]">
      <Card className="border-0 shadow-sm hover:shadow-md h-full min-h-[500px] max-h-[950px] transition-shadow overflow-hidden flex flex-col">
        <div className="w-full shrink-0 overflow-hidden">
          {image ? (
            <OptimizedImage
              src={image.replace(import.meta.env.BASE_URL, '/')}
              alt={title}
              className="w-50 object-center transition-transform duration-500 hover:scale-105"
              quality="medium"
            />
          ) : (
            <div className="w-full h-full bg-khum-primary/5 flex items-center justify-center">
              <div className="w-16 h-16 text-khum-primary/30">
                {icon}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 min-h-0">
          <CardHeader className="flex-none space-y-3 py-4">
            <div className="w-12 h-12 rounded-full bg-khum-primary/10 flex items-center justify-center text-khum-primary">
              {icon}
            </div>
            <CardTitle className="text-xl text-khum-primary">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-visible py-2 px-2">
            <CardDescription className="hidden px-4 lg:block text-gray-600 w-full text-sm leading-relaxed line-clamp-3">
              {description}
            </CardDescription>
          </CardContent>
          {/* <CardFooter className="mt-auto pt-2 pb-4 px-4">
            <Button variant="ghost" className="text-khum-secondary hover:text-khum-primary p-0">
              <Link to={serviceLink} className="flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </Button>
          </CardFooter> */}
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
