
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-khum-primary py-20 md:py-32">
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl mx-auto md:mx-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Professional Technical & Cleaning Services in Dubai
          </h1>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl">
            Your reliable partner for high-quality technical installations, maintenance, and cleaning services across Dubai. Committed to excellence in every project.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-khum-accent hover:bg-khum-secondary text-white">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-khum-primary">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
