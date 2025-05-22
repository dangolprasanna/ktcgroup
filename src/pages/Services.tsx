import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';
import MotionWrapper from '@/components/MotionWrapper';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Air-Conditioning, Ventilations & Air Filtration Systems",
      description: "Professional installation, repair, and maintenance of air conditioning units, ventilation systems, and air filtration systems for optimal indoor air quality and comfort. Our certified technicians handle all types of AC systems for residential and commercial properties.",
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
      image: "https://images.unsplash.com/photo-1606225457115-9b0de873c5db?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Lifts & Escalators Contracting",
      description: "Expert installation, maintenance, and repair services for elevators, lifts, and escalators. We ensure safe and efficient vertical transportation systems in commercial and residential buildings, complying with all safety regulations and standards.",
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
          className="lucide lucide-building"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1554413650-308061a4c247?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Electricity Transmission & Control Equipment Installation",
      description: "Comprehensive electrical services including installation, repair, and maintenance of electrical systems, wiring, circuit breakers, panels, and control equipment. Our licensed electricians ensure safe and efficient electrical systems for your property.",
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
      image: "https://images.unsplash.com/photo-1584964139384-7f7d0b7c1eb9?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Plumbing & Sanitary Installation",
      description: "Professional installation and repair of plumbing systems, fixtures, and sanitary equipment. Our skilled plumbers handle everything from faucet repairs to complete bathroom renovations, ensuring proper water flow and drainage.",
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
      image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Floor & Wall Tiling Works",
      description: "Expert installation of ceramic, porcelain, marble, granite, and mosaic tiles for floors and walls. We provide precision cutting, proper adhesive application, and perfect alignment to create beautiful and durable tiled surfaces.",
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
          className="lucide lucide-construction"
        >
          <rect x="2" y="6" width="20" height="8" rx="1" />
          <path d="M17 14v7" />
          <path d="M7 14v7" />
          <path d="M17 3v3" />
          <path d="M7 3v3" />
          <path d="M10 14 2.3 6.3" />
          <path d="m14 6 7.7 7.7" />
          <path d="m8 6 8 8" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Painting Contracting",
      description: "Professional painting services for interior and exterior surfaces. We use high-quality paints and techniques to provide smooth, even coverage and long-lasting results that enhance the appearance and value of your property.",
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
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Carpentry & Wood Flooring Works",
      description: "Skilled carpentry services including custom woodwork, cabinetry, furniture assembly, and wood flooring installation. Our experienced carpenters create and install beautiful, functional wooden elements for your home or business.",
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
          className="lucide lucide-tools"
        >
          <path d="M9 5a3 3 0 0 1 6 0v14a3 3 0 0 1-6 0V5z" />
          <path d="M5 6v4" />
          <path d="M19 6v4" />
          <path d="M5 10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1559553156-2e97137af16f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "False Ceiling & Light Partitions Installation",
      description: "Professional installation of false ceilings, drywall partitions, and light partition systems. We create functional and aesthetically pleasing spaces with precise installation of suspended ceilings and partitions for residential and commercial properties.",
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
          className="lucide lucide-lamp"
        >
          <path d="M8 2h8l4 10H4L8 2Z" />
          <path d="M12 12v6" />
          <path d="M8 22v-2c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2H8Z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1594125674956-61a9b49c8eeb?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sanitary Installation & Pipes Repairing",
      description: "Comprehensive sanitary and pipe repair services including fixing leaks, replacing damaged pipes, unclogging drains, and installing new sanitary fixtures. We ensure proper water flow and prevent damage from leaks and blockages.",
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
          className="lucide lucide-wrench"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1576427099042-7c7c9c9c1d4f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Plaster Works",
      description: "Expert plastering services for walls and ceilings, including new installations, repairs, and decorative plasterwork. Our skilled plasterers provide smooth, even finishes that create the perfect base for painting or other wall finishes.",
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
          className="lucide lucide-construction"
        >
          <rect x="2" y="6" width="20" height="8" rx="1" />
          <path d="M17 14v7" />
          <path d="M7 14v7" />
          <path d="M17 3v3" />
          <path d="M7 3v3" />
          <path d="M10 14 2.3 6.3" />
          <path d="m14 6 7.7 7.7" />
          <path d="m8 6 8 8" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1571989545580-1f8c83a07428?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Building Cleaning Services",
      description: "Comprehensive cleaning services for residential and commercial buildings, including deep cleaning, regular maintenance cleaning, post-construction cleaning, and specialized cleaning services. We use professional equipment and eco-friendly products to ensure hygiene and cleanliness.",
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
          className="lucide lucide-building"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Services Hero */}
      <div className="bg-gradient-to-r from-khum-primary to-khum-accent py-20 md:py-28 relative overflow-hidden">
        {/* Overlay Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-gray-100 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comprehensive technical and cleaning solutions for all your property needs.
          </motion.p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <MotionWrapper>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-khum-primary mb-6 tracking-tight">
                Comprehensive Technical & Cleaning Services
              </h2>
              <p className="text-gray-600 text-lg">
                At KHUM TECHNICAL AND CLEANING SERVICES, we offer a wide range of professional services to meet all your property maintenance and installation needs under one roof. Our experienced team delivers high-quality results for every project.
              </p>
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <MotionWrapper key={index} delay={index * 0.1}>
                <Link to={`/services/${index}`} className="block">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    {service.image && (
                      <div className="w-full h-60 overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                          style={{ backgroundImage: `url(${service.image})` }}
                        ></div>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex">
                        <div className="w-12 h-12 rounded-full bg-khum-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <div className="text-khum-primary">{service.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-khum-primary mb-3">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionWrapper>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-khum-primary mb-6 tracking-tight">
                Why Choose Us
              </h2>
              <p className="text-gray-600 text-lg">
                When you choose KHUM TECHNICAL AND CLEANING SERVICES, you're selecting a partner committed to excellence and customer satisfaction.
              </p>
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-khum-primary/10 to-khum-accent/10 rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-semibold mb-4 text-khum-primary">Experienced Team</h3>
              <p className="text-gray-600">
                Our team consists of skilled professionals with years of experience in their respective fields, ensuring high-quality service delivery.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-khum-primary/10 to-khum-accent/10 rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-semibold mb-4 text-khum-primary">Quality Guarantee</h3>
              <p className="text-gray-600">
                We stand behind our work with a quality guarantee, ensuring that every project meets our high standards and your expectations.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-khum-primary/10 to-khum-accent/10 rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-semibold mb-4 text-khum-primary">Timely Service</h3>
              <p className="text-gray-600">
                We respect your time and schedule, ensuring that all services are delivered promptly and projects are completed on schedule.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Services;
