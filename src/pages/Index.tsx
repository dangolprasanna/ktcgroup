
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import Testimonial from '@/components/Testimonial';
import CallToAction from '@/components/CallToAction';

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
      )
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
      )
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
      )
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
      )
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

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-khum-primary mb-4">
              Your Trusted Technical & Cleaning Partner in Dubai
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              KHUM TECHNICAL AND CLEANING SERVICES L.L.C S.O.C is a One Person Limited Liability Company 
              owned by Mr. KHUM PRASAD BHANDARI. We provide comprehensive technical and cleaning services 
              with a commitment to quality, reliability, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-khum-primary">Quality Service</h3>
              <p className="text-gray-600">
                We deliver exceptional quality in all our technical and cleaning services, ensuring 
                client satisfaction with every project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
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
                  <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                  <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                  <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
                  <path d="M14 6h0a6 6 0 0 1 6 6v3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-khum-primary">Professional Team</h3>
              <p className="text-gray-600">
                Our experienced professionals are skilled, certified, and dedicated to providing 
                the highest standards of service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
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
              <h3 className="text-xl font-medium mb-2 text-khum-primary">Timely Completion</h3>
              <p className="text-gray-600">
                We respect your time and deliver services promptly, ensuring minimal disruption 
                to your business or residential life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-khum-primary mb-4">
              Our Services
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We offer a wide range of technical and cleaning services to meet all your maintenance 
              and installation needs under one roof.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="/services" 
              className="text-khum-secondary hover:text-khum-primary font-medium inline-flex items-center transition-colors"
            >
              View All Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
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
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-khum-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
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
