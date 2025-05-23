import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';
import MotionWrapper from '@/components/MotionWrapper';
import servicesData from '@/data/services.json';

interface ServiceData {
  serviceName: string;
  briefExplanation: string;
  detailedDescription: string;
  image?: string;
}

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the service with the matching ID
    if (id && !isNaN(parseInt(id))) {
      const index = parseInt(id);
      if (index >= 0 && index < servicesData.length) {
        setService(servicesData[index] as ServiceData);
      }
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center flex-col p-8">
          <h1 className="text-2xl font-bold text-khum-primary mb-4">Service Not Found</h1>
          <p className="mb-6">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="bg-khum-primary text-white px-6 py-3 rounded-md hover:bg-khum-accent transition-colors">
            Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-r from-khum-primary to-khum-accent py-24 md:py-32 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white opacity-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-2/3"
            style={{
              background: "linear-gradient(to top, rgba(255,255,255,0.05), transparent)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {service.serviceName}
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-white mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.p 
              className="text-gray-100 max-w-3xl mx-auto text-lg text-center leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {service.briefExplanation}
            </motion.p>
            
            <motion.div 
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link 
                to="/contact" 
                className="bg-white text-khum-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-md"
              >
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Content - Redesigned Layout */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Image - Takes 5 columns on large screens */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <MotionWrapper>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <motion.div 
                    className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={service.image || `https://source.unsplash.com/1200x800/?${encodeURIComponent(service.serviceName.split(' ')[0])}`}
                      alt={service.serviceName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://source.unsplash.com/1200x800/?${encodeURIComponent(service.serviceName.split(' ')[0])}`;
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Service Quick Info */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
                  <h3 className="text-xl font-semibold text-khum-primary mb-4">Service Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-khum-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Professional certified technicians</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-khum-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>High-quality materials and equipment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-khum-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Customized solutions for your needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-khum-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Timely service delivery</span>
                    </li>
                  </ul>
                </div>
              </MotionWrapper>
            </div>

            {/* Description - Takes 7 columns on large screens */}
            <div className="lg:col-span-7">
              <MotionWrapper delay={0.2}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-khum-primary mb-6">About This Service</h2>
                  <div className="text-gray-600 space-y-5">
                    {service.detailedDescription.split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                  
                  {/* CTA within description */}
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-khum-primary mb-3">Ready to get started?</h3>
                    <p className="text-gray-600 mb-4">Our team is ready to provide you with the best service experience.</p>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center bg-khum-primary text-white px-6 py-3 rounded-md hover:bg-khum-accent transition-colors"
                    >
                      Contact Us
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionWrapper>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-khum-primary mb-4">Other Services You Might Need</h2>
              <p className="text-gray-600">Discover our complementary services that might be relevant to your project</p>
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {servicesData
              .filter((_, index) => index !== parseInt(id || '0') && index < parseInt(id || '0') + 3 && index > parseInt(id || '0') - 3)
              .slice(0, 3)
              .map((relatedService, index) => {
                // Map index to serviceimages
                const relatedIndex = servicesData.findIndex(s => s.serviceName === relatedService.serviceName);
                // Log the image path for debugging
                const serviceImages = [
                  '/images/serviceimages/acrepair.jpg',
                  '/images/serviceimages/lift.jpg',
                  '/images/serviceimages/electricity.jpg',
                  '/images/serviceimages/plumbing.jpg',
                  '/images/serviceimages/tiling.jpg',
                  '/images/serviceimages/painting.jpg',
                  '/images/serviceimages/carpentry.jpg',
                  '/images/serviceimages/false.jpg',
                  '/images/serviceimages/sanitary.jpg',
                  '/images/serviceimages/plaster.jpg',
                  '/images/serviceimages/buildingcleaning.jpg',
                ];
                console.log('Service index:', relatedIndex, 'Image path:', serviceImages[relatedIndex]);
                const relatedImage = serviceImages[relatedIndex] || '';
                return (
                  <MotionWrapper key={index} delay={index * 0.1}>
                    <Link to={`/services/${relatedIndex}`} className="block h-full">
                      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 h-full transform hover:-translate-y-1">
                        <div className="w-full h-48 overflow-hidden">
                          <div 
                            className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                            style={{ backgroundImage: `url(${relatedImage})` }}
                            onError={(e) => {
                              // If image fails to load, use a fallback
                              const target = e.target as HTMLElement;
                              target.style.backgroundColor = '#f3f4f6';
                            }}
                          >
                            <img 
                              src={relatedImage} 
                              alt={relatedService.serviceName}
                              className="w-full h-full object-cover opacity-0"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-khum-primary mb-3">{relatedService.serviceName}</h3>
                          <p className="text-gray-600 line-clamp-3 mb-4">{relatedService.briefExplanation}</p>
                          <div className="flex items-center text-khum-accent font-medium">
                            <span>Learn more</span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </MotionWrapper>
                );
              })}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-khum-primary text-white px-6 py-3 rounded-md hover:bg-khum-accent transition-colors"
            >
              View All Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default ServiceDetail;