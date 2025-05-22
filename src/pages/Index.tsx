import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import Testimonial from '@/components/Testimonial';
import CallToAction from '@/components/CallToAction';
import ImageGrid from '@/components/ImageGrid';
import FeaturesSection from '@/components/FeaturesSection';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import MotionWrapper from '@/components/MotionWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Define the mapping between featured services and their service IDs
const serviceIdMapping = {
  "Air-Conditioning & Ventilation": 0,  // Maps to "Air-Conditioning, Ventilations & Air Filtration Systems"
  "Electrical Installation": 2,        // Maps to "Electricity Transmission & Control Equipment Installation"
  "Plumbing & Sanitary": 3,           // Maps to "Plumbing & Sanitary Installation"
  "Painting & Finishing": 5,          // Maps to "Painting Contracting"
};

const Index = () => {
  // Sample service data
  const featuredServices = [
    {
      title: "Air-Conditioning & Ventilation",
      description: "Professional installation, maintenance, and repair of AC systems and ventilation equipment for optimal indoor air quality.",
      icon: (
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
          className="lucide lucide-air-vent"
        >
          <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <path d="M6 8h12" />
          <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
          <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1605374005175-fa0a768522a3?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Electrical Installation",
      description: "Expert installation and maintenance of electrical systems, ensuring safety and efficiency in residential and commercial buildings.",
      icon: (
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
          className="lucide lucide-electricity"
        >
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
      ),
      image: "https://images.unsplash.com/photo-1584964139384-7f7d0b7c1eb9?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Plumbing & Sanitary",
      description: "Comprehensive plumbing services including installation, repair, and maintenance of pipes, fixtures, and sanitary systems.",
      icon: (
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
          className="lucide lucide-plumbing"
        >
          <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          <path d="M16 12h4" />
          <path d="M4 12h4" />
          <path d="M10 19v-2" />
          <path d="M14 19v-2" />
          <path d="M10 5v2" />
          <path d="M14 5v2" />
          <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          <path d="M16 12h6" />
          <path d="M2 12h6" />
          <path d="M5 2v3" />
          <path d="M5 19v3" />
          <path d="M19 2v3" />
          <path d="M19 19v3" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Painting & Finishing",
      description: "Professional painting services for interior and exterior surfaces, providing aesthetically pleasing and long-lasting results.",
      icon: (
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
          className="lucide lucide-paint-roller"
        >
          <path d="M18 4v16" />
          <path d="M18 12h-7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
          <path d="M2 12h6" />
          <path d="M2 16h6" />
          <path d="M18 16h4" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // Sample testimonial data
  const testimonials = [
    {
      quote: "Excellent service! The team was professional, efficient, and completed our AC installation flawlessly. Highly recommended!",
      author: "Mohammed A.",
      position: "Property Manager",
      company: "Al Falah Properties"
    },
    {
      quote: "KHUM Technical Services has been our go-to maintenance partner for the past year. Their attention to detail and prompt service have saved us both time and money.",
      author: "Sara K.",
      position: "Facility Manager",
      company: "Dubai Business Center"
    },
    {
      quote: "The cleaning team was thorough and professional. Our office building has never looked better. We'll definitely continue using their services.",
      author: "Ahmed R.",
      position: "Operations Director",
      company: "Gulf Star Group"
    }
  ];

  // Sample project images
  const projectImages = [
    { 
      src: "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=80&w=800&auto=format&fit=crop", 
      alt: "AC Installation Project" 
    },
    { 
      src: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?q=80&w=800&auto=format&fit=crop", 
      alt: "Electrical Installation" 
    },
    { 
      src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?q=80&w=800&auto=format&fit=crop", 
      alt: "Plumbing Work" 
    },
    { 
      src: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?q=80&w=800&auto=format&fit=crop", 
      alt: "Building Cleaning" 
    },
  ];

  // Company features
  const features = [
    {
      title: "Quality Service",
      description: "We deliver exceptional quality in all our technical and cleaning services, ensuring client satisfaction with every project.",
      icon: (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      )
    },
    {
      title: "Professional Team",
      description: "Our experienced professionals are skilled, certified, and dedicated to providing the highest standards of service.",
      icon: (
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
          <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
          <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
          <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
          <path d="M14 6h0a6 6 0 0 1 6 6v3" />
        </svg>
      )
    },
    {
      title: "Timely Completion",
      description: "We respect your time and deliver services promptly, ensuring minimal disruption to your business or residential life.",
      icon: (
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
      )
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-khum-primary mb-6 tracking-tight">
                Your Trusted Technical & Cleaning Partner in Dubai
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                KHUM TECHNICAL AND CLEANING SERVICES L.L.C S.O.C is a One Person Limited Liability Company 
                owned by Mr. KHUM PRASAD BHANDARI. We provide comprehensive technical and cleaning services 
                with a commitment to quality, reliability, and customer satisfaction.
              </p>
            </div>
          </MotionWrapper>
          
          <FeaturesSection features={features} className="max-w-5xl mx-auto" />
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-khum-primary mb-6 tracking-tight">
                Our Recent Projects
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-12">
                Take a look at some of our latest technical and cleaning projects across Dubai. 
                We take pride in delivering quality results for every client.
              </p>
            </div>
          </MotionWrapper>
          
          <ImageGrid images={projectImages} />
          
          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full border-khum-primary text-khum-primary px-8 hover:bg-khum-primary hover:text-white">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-khum-primary mb-6 tracking-tight">
                Our Services
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-12">
                We offer a wide range of technical and cleaning services to meet all your maintenance 
                and installation needs under one roof.
              </p>
            </div>
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                icon={service.icon}
                image={service.image}
                serviceId={serviceIdMapping[service.title]}
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button className="rounded-full bg-khum-primary hover:bg-khum-primary/90 px-8">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Divider />

      {/* Why Choose Us Section */}
      <MotionWrapper>
        <section className="section bg-white rounded-2xl shadow-lg py-12 px-2 sm:px-6 lg:px-12 my-12">
          <div className="container mx-auto px-0">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-khum-primary mb-4 tracking-tight">Why Choose Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">We are committed to delivering excellence in every service we provide.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div className="bg-khumBlue-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-khumBlue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-khumBlue">Experienced Professionals</h3>
                <p className="text-gray-600">Our team consists of skilled and certified technicians with years of experience.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div className="bg-khumBlue-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-khumBlue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-khumBlue">Quality Service</h3>
                <p className="text-gray-600">We are committed to delivering high-quality services that exceed expectations.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div className="bg-khumBlue-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-khumBlue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-khumBlue">Timely Delivery</h3>
                <p className="text-gray-600">We understand the value of your time and always complete projects on schedule.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div className="bg-khumBlue-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-khumBlue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-khumBlue">Competitive Pricing</h3>
                <p className="text-gray-600">We offer affordable rates without compromising on quality or service.</p>
              </div>
            </div>
          </div>
        </section>
      </MotionWrapper>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <MotionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-khum-primary mb-6 tracking-tight">
                What Our Clients Say
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                Don't just take our word for it. Here's what our satisfied clients have to say about our services.
              </p>
            </div>
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <MotionWrapper key={index} delay={index * 0.2}>
                <Testimonial 
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
