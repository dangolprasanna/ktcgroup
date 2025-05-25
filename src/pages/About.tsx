import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* About Hero */}
      <div className="relative bg-khum-primary py-12 md:py-20 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-khum-primary to-khum-accent opacity-90 z-0"></div>
        {/* Animated Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        ></motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn more about KHUM TECHNICAL AND CLEANING SERVICES L.L.C S.O.C and our commitment to excellence.
          </motion.p>
        </div>
      </div>

      {/* Company Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-khum-primary mb-6">
                Your Reliable Technical & Cleaning Partner in Dubai
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  KHUM TECHNICAL AND CLEANING SERVICES L.L.C S.O.C is a One Person Limited Liability Company 
                  based in Dubai, United Arab Emirates. Owned and managed by Mr. KHUM PRASAD BHANDARI, we 
                  specialize in providing comprehensive technical and cleaning services for residential, 
                  commercial, and industrial properties across Dubai.
                </p>
                
                <p className="text-gray-600">
                  With our team of skilled professionals, we deliver high-quality services in air conditioning, 
                  electrical work, plumbing, painting, carpentry, and building cleaning, ensuring that all your 
                  technical and maintenance needs are met efficiently under one roof.
                </p>
                
                <p className="text-gray-600">
                  Our company is officially registered in Dubai as a One Person Limited Liability Company 
                  (L.L.C S.O.C), operating with all necessary licenses and permits to provide our comprehensive 
                  range of services.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-khum-primary mb-3">Company Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Company Name:</strong> KHUM TECHNICAL AND CLEANING SERVICES L.L.C S.O.C</li>
                  <li><strong>Company Type:</strong> One Person Limited Liability Company</li>
                  <li><strong>Owner & Manager:</strong> Mr. KHUM PRASAD BHANDARI</li>
                  <li><strong>Location:</strong> Dubai, United Arab Emirates</li>
                </ul>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Placeholder for company image */}
                <div className="w-full h-full bg-gradient-to-br from-khum-primary to-khum-secondary flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/aboutus-images/aboutus1.jpg`}
                    alt="Company Team"
                    className="object-cover w-full h-full rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-khum-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-khum-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-khum-primary">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional technical and cleaning services that exceed client expectations, 
                delivering reliable, efficient, and high-quality solutions for all property maintenance 
                and installation needs in Dubai.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-khum-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-khum-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-khum-primary">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and preferred technical and cleaning service provider in Dubai, 
                known for our commitment to quality, professionalism, and customer satisfaction, while 
                continuously expanding our service capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-khum-primary mb-4">
              Our Core Values
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              The principles that guide us in delivering exceptional service to all our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-khum-primary/10 rounded-full flex items-center justify-center mb-4">
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
                  className="h-8 w-8 text-khum-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-khum-primary">Quality</h3>
              <p className="text-gray-600">
                We uphold the highest standards of quality in all our services, ensuring lasting results.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-khum-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-khum-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-khum-primary">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, ensuring timely completion of all projects and services.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-khum-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-khum-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-khum-primary">Professionalism</h3>
              <p className="text-gray-600">
                Our team conducts business with integrity, respect, and the highest ethical standards.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-khum-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-khum-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-khum-primary">Customer Focus</h3>
              <p className="text-gray-600">
                We prioritize our clients' needs, offering personalized solutions and outstanding service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
