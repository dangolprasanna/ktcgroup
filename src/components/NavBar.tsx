
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-khum-primary font-bold text-xl md:text-2xl">KHUM</span>
            <span className="hidden md:inline text-khum-secondary text-sm">
              TECHNICAL & CLEANING SERVICES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-khum-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-khum-primary font-medium transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-khum-primary font-medium transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-khum-primary font-medium transition-colors">
              Portfolio
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-khum-primary font-medium transition-colors">
              Contact
            </Link>
            <Button className="bg-khum-primary hover:bg-khum-secondary text-white ml-2">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" className="p-2" onClick={toggleMobileMenu}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-khum-primary font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-khum-primary font-medium py-2"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-khum-primary font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="text-gray-700 hover:text-khum-primary font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-khum-primary font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Button className="bg-khum-primary hover:bg-khum-secondary text-white">
              <Link to="/contact" onClick={toggleMobileMenu}>Request Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
