import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-[#0A2540]/10 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Shield className={`h-8 w-8 ${isScrolled ? 'text-[#BF9B30]' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-[#0A2540]' : 'text-white'}`}>Crypto Attorney's</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-[#0A2540] hover:text-[#BF9B30]' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#0A2540] text-white hover:bg-opacity-90'
                  : 'bg-white text-[#0A2540] hover:bg-white/90'
              }`}
            >
              Consult Now
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${
                isScrolled ? 'text-[#0A2540]' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="block px-3 py-2 text-[#0A2540] hover:bg-gray-50 hover:text-[#BF9B30] rounded-md font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="block w-full text-center bg-[#0A2540] text-white px-3 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium"
            >
              Consult Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;