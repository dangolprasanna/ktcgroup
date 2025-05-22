
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
  company?: string;
}

const Testimonial = ({ quote, author, position, company }: TestimonialProps) => {
  return (
    <Card className="border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center text-khum-primary">
          {/* Quote icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-2"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4 italic">{quote}</p>
        <CardDescription className="text-khum-primary">
          <span className="font-semibold">{author}</span>
          {position && <span className="block text-sm text-gray-500">{position}</span>}
          {company && <span className="block text-sm text-gray-500">{company}</span>}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
