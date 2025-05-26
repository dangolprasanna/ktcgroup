import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import CallToAction from '@/components/CallToAction';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Portfolio items data - using placeholder images for now
  const portfolioItems = [
    {
      id: 1,
      title: "Air Conditioning Installation",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/acrep1.jpg`,
      category: "air-conditioning"
    },
    {
      id: 2,
      title: "Commercial Building Cleaning",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/builclean1.jpg`,
      category: "cleaning"
    },
    {
      id: 3,
      title: "Bathroom Plumbing Renovation",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/bathplumb1.jpg`,
      category: "plumbing"
    },
    {
      id: 4,
      title: "Interior Painting Project",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/intpain1.jpg`,
      category: "painting"
    },
    {
      id: 5,
      title: "Electrical Panel Installation",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/elecpanel1.jpg`,
      category: "electrical"
    },
    {
      id: 6,
      title: "Kitchen Tiling Work",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/kitctiling1.jpg`,
      category: "tiling"
    },
    {
      id: 7,
      title: "Office Cleaning Service",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/officclean1.jpg`,
      category: "cleaning"
    },
    {
      id: 8,
      title: "Wooden Flooring Installation",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/woodfloor1.jpg`,
      category: "carpentry"
    },
    {
      id: 9,
      title: "False Ceiling Installation",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/falseceil1.jpg`,
      category: "ceiling"
    },
    {
      id: 10,
      title: "False Ceiling & Lighting - Real Project 1",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/realimg1.jpg`,
      category: "ceiling"
    },
    {
      id: 11,
      title: "False Ceiling & Lighting - Real Project 2",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/realimg2.jpg`,
      category: "ceiling"
    },
    {
      id: 12,
      title: "False Ceiling & Lighting - Real Project 3",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/realimg3.jpg`,
      category: "ceiling"
    },
    {
      id: 13,
      title: "False Ceiling & Lighting - Real Project 4",
      image: `${import.meta.env.BASE_URL}images/portfolio-images/realimg4.jpg`,
      category: "ceiling"
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'air-conditioning', name: 'AC & Ventilation' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'tiling', name: 'Tiling' },
    { id: 'painting', name: 'Painting' },
    { id: 'carpentry', name: 'Carpentry' },
    { id: 'ceiling', name: 'False Ceiling' },
    { id: 'cleaning', name: 'Cleaning' },
  ];

  // Filter portfolio items based on active category
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Portfolio Hero */}
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
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Take a look at some of our completed projects showcasing our quality work across different services.
          </motion.p>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`mb-2 ${
                  activeFilter === category.id 
                    ? "bg-khum-primary hover:bg-khum-secondary" 
                    : "hover:text-khum-primary"
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Portfolio Gallery */}
          <Gallery items={filteredItems} />

          {/* Note about placeholder images */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 italic">
              * These are representative project images. Contact us to see our actual completed projects.
            </p>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-khum-primary mb-4">
              Our Project Process
            </h2>
            <p className="text-gray-600">
              We follow a structured approach to ensure quality results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 mx-auto bg-khum-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-lg text-khum-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-khum-primary">Consultation</h3>
              <p className="text-gray-600">
                We begin by understanding your specific requirements and providing expert advice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 mx-auto bg-khum-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-lg text-khum-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-khum-primary">Planning</h3>
              <p className="text-gray-600">
                We create a detailed project plan including timeline, materials, and cost estimates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 mx-auto bg-khum-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-lg text-khum-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-khum-primary">Execution</h3>
              <p className="text-gray-600">
                Our skilled team executes the project with precision, following industry best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 mx-auto bg-khum-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-lg text-khum-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-khum-primary">Quality Check</h3>
              <p className="text-gray-600">
                We conduct thorough quality checks and ensure your complete satisfaction.
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

export default Portfolio;
