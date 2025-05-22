
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const ServiceCard = ({ title, description, icon, link = "/services" }: ServiceCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-khum-primary/10 flex items-center justify-center text-khum-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-khum-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-khum-secondary hover:text-khum-primary p-0">
          <Link to={link} className="flex items-center">
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
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
