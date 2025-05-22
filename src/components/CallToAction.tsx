
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-khum-primary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Professional Technical or Cleaning Services?
          </h2>
          <p className="text-gray-100 max-w-2xl mb-8">
            From air conditioning installation to building cleaning services, our experienced team is ready to help you with all your technical and maintenance needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-khum-primary hover:bg-gray-100">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
