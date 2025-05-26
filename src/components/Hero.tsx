import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  // Stats for the counter section
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Satisfied Clients", value: "300+" },
    { label: "Team Members", value: "25+" },
    { label: "Years Experience", value: "10+" },
  ];

  return (
    <div className="relative bg-khum-primary overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-khum-primary to-khum-accent opacity-90 z-0"></div>
      
      {/* Animated Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      
      {/* Decorative Shapes */}
      <motion.div 
        className="hidden md:block absolute top-20 right-[10%] w-64 h-64 rounded-full bg-white opacity-5 z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      ></motion.div>
      
      <motion.div 
        className="hidden md:block absolute bottom-10 left-[5%] w-40 h-40 rounded-full bg-white opacity-5 z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      ></motion.div>
      
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Professional Technical & Cleaning Services in Dubai
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-100 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your reliable partner for high-quality technical installations, maintenance, and cleaning services across Dubai. Committed to excellence in every project.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-khum-accent hover:bg-khum-accent/90 text-white rounded-full px-8">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-khum-primary border-white hover:bg-white hover:text-khum-primary rounded-full px-8">
                  Our Services
                </Button>
              </Link>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap items-center gap-6 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-white text-sm">Certified Professionals</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white text-sm">Fast Response Time</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-sm">Quality Guaranteed</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Hero Image */}
          <motion.div 
            className="relative z-10 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tl from-khum-primary/50 to-transparent rounded-lg z-10"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/Home-images/homeimg1.jpg`} 
                alt="KHUM Technical and Cleaning Services" 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              /> 
              
              {/* Floating Service Icons */}
              <motion.div 
                className="absolute -left-8 top-1/4 bg-white p-4 rounded-lg shadow-lg z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <svg className="w-10 h-10 text-khum-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <path d="M6 8h12" />
                  <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
                  <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute right-10 top-10 bg-white p-4 rounded-lg shadow-lg z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <svg className="w-10 h-10 text-khum-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12h-5" />
                  <path d="M2 12h5" />
                  <path d="M12 2v5" />
                  <path d="M12 17v5" />
                  <path d="m4.93 19.07 2.83-2.83" />
                  <path d="m16.24 7.76 2.83-2.83" />
                  <path d="m19.07 19.07-2.83-2.83" />
                  <path d="m7.76 7.76-2.83-2.83" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute right-4 bottom-20 bg-white p-4 rounded-lg shadow-lg z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <svg className="w-10 h-10 text-khum-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M18 4v16" />
                  <path d="M18 12h-7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                  <path d="M2 12h6" />
                  <path d="M2 16h6" />
                  <path d="M18 16h4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => {
            // Extract number and suffix (e.g., 500+)
            const match = stat.value.match(/(\d+)(\D*)/);
            const target = match ? parseInt(match[1]) : 0;
            const suffix = match ? match[2] : '';
            return (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
              >
                <h3 className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={target} duration={2000} suffix={suffix} />
                </h3>
                <p className="text-gray-200 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
