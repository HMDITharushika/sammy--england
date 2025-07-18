import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const LINKS = [
    { text: "Home", targetId: "home" },
    { text: "Products", targetId: "products" },
    { text: "About Us", targetId: "aboutus" },
    { text: "Contact", targetId: "contactus" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-24">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img src={logo} alt="Logo" className="h-24 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 text-xl">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              onClick={(e) => handleScroll(e, link.targetId)}
              className="text-gray-700 hover:text-[#C51124] font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-[#D6AD5F]"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#5E8F8D] hover:text-[#C51124] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={`#${link.targetId}`}
                onClick={(e) => handleScroll(e, link.targetId)}
                className="block text-gray-700 hover:bg-[#5E8F8D] hover:text-white rounded px-3 py-2 font-medium transition"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
