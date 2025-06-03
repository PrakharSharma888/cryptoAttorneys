import React, { useState, useEffect } from "react";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  // Define your services here
  const services = [
    { title: "Contract Drafting", route: "/services/contractDrafting" },
    { title: "Taxation", route: "/services/taxation" },
    {
      title: "Corporate Structuring & Incorporation",
      route: "/services/corporateStIn",
    },
    { title: "FinTech Law", route: "/services/fintech" },
    { title: "Token Launch & ICOs", route: "/services/tokenLaunch" },
    { title: "Tech & Privacy Law", route: "/services/techPrivacy" },
    { title: "Regulatory Compliance", route: "/services/regulatoryComplaince" },
    { title: "Policy & Research", route: "/services/policyAndResearch" },
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: null, isDropdown: true },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setServicesOpen(!servicesOpen);
  };

  const handleServiceClick = (route) => {
    navigate(route);
    setServicesOpen(false);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-[#0A2540]/10 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Shield
              className={`h-8 w-8 ${
                isScrolled ? "text-[#BF9B30]" : "text-white"
              }`}
            />
            <span
              className={`ml-2 text-xl font-bold ${
                isScrolled ? "text-[#0A2540]" : "text-white"
              }`}
            >
              Crypto Attorney's
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isDropdown ? (
                <div key={item.name} className="relative group">
                  <button
                    onClick={toggleServices}
                    className={`flex items-center gap-1 transition-colors duration-300 font-medium ${
                      isScrolled
                        ? "text-[#0A2540] hover:text-[#BF9B30]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {services.map((service) => (
                          <button
                            key={service.route}
                            onClick={() => handleServiceClick(service.route)}
                            className="block w-full text-left px-4 py-2 text-sm text-[#0A2540] hover:bg-[#BF9B30]/10"
                          >
                            {service.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 font-medium ${
                    isScrolled
                      ? "text-[#0A2540] hover:text-[#BF9B30]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              )
            )}
            <a
              href="#contact"
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                isScrolled
                  ? "bg-[#0A2540] text-white hover:bg-opacity-90"
                  : "bg-white text-[#0A2540] hover:bg-white/90"
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
                isScrolled ? "text-[#0A2540]" : "text-white"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.isDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={toggleServices}
                    className="flex justify-between items-center w-full px-3 py-2 text-[#0A2540] hover:bg-gray-50 hover:text-[#BF9B30] rounded-md font-medium"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4">
                      {services.map((service) => (
                        <button
                          key={service.route}
                          onClick={() => handleServiceClick(service.route)}
                          className="block w-full text-left px-3 py-2 text-sm text-[#0A2540] hover:bg-gray-50 hover:text-[#BF9B30] rounded-md"
                        >
                          {service.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block px-3 py-2 text-[#0A2540] hover:bg-gray-50 hover:text-[#BF9B30] rounded-md font-medium"
                >
                  {item.name}
                </a>
              )
            )}
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
