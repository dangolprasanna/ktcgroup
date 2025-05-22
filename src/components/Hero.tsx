
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-khum-primary py-28 md:py-40 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-khum-primary to-khum-accent opacity-90 z-0"></div>
      
      {/* Animated Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl mx-auto md:mx-0 relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Professional Technical & Cleaning Services in Dubai
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-100 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your reliable partner for high-quality technical installations, maintenance, and cleaning services across Dubai. Committed to excellence in every project.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-khum-accent hover:bg-khum-accent/90 text-white rounded-full px-8">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-khum-primary rounded-full px-8">
              <Link to="/services">Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
