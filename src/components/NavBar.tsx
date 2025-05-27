import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import OptimizedImage from "./OptimizedImage";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isVisible = useScrollDirection();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "bg-[rgb(255,255,255)] shadow-md sticky top-0 z-50 transition-transform duration-300",
        !isVisible && "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <OptimizedImage
              src="/images/Home-images/KHUM.png"
              alt="KHUM Technical and Cleaning Services"
              className="h-16 md:h-20 w-auto"
              quality="logo"
              priority={true}
              width={200}
              height={80}
              sizes="200px"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={cn("nav-link", isActivePage("/") && "active")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn("nav-link", isActivePage("/about") && "active")}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={cn("nav-link", isActivePage("/services") && "active")}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={cn("nav-link", isActivePage("/portfolio") && "active")}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={cn("nav-link", isActivePage("/contact") && "active")}
            >
              Contact
            </Link>
            <Button asChild className="bg-khum-primary hover:bg-khum-secondary text-white ml-2">
              <Link to="/contact">
                Request Quote
              </Link>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
              className={cn(
                "text-gray-700 hover:text-khum-primary font-medium py-2",
                isActivePage("/") && "text-khum-primary"
              )}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-gray-700 hover:text-khum-primary font-medium py-2",
                isActivePage("/about") && "text-khum-primary"
              )}
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={cn(
                "text-gray-700 hover:text-khum-primary font-medium py-2",
                isActivePage("/services") && "text-khum-primary"
              )}
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={cn(
                "text-gray-700 hover:text-khum-primary font-medium py-2",
                isActivePage("/portfolio") && "text-khum-primary"
              )}
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-gray-700 hover:text-khum-primary font-medium py-2",
                isActivePage("/contact") && "text-khum-primary"
              )}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Button className="bg-khum-primary hover:bg-khum-secondary text-white">
              <Link to="/contact" onClick={toggleMobileMenu}>
                Request Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
      <style>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color:rgb(0, 167, 204);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #1D7874 0%, #328CC1 100%);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }
        .nav-link.active {
          color: #0B3C5D;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
