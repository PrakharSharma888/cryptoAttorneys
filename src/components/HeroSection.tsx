import React from 'react';
import { ArrowRight, Scale } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-gradient-to-br from-[#0A2540] to-[#1A365D]">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="inline-flex items-center bg-white/10 px-4 py-1 rounded-full mb-5 backdrop-blur-sm">
              <Scale className="w-4 h-4 text-[#BF9B30] mr-2" />
              <span className="text-white/90 text-sm">Premium Legal Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert Legal Solutions for Your Success
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Our team of experienced attorneys is dedicated to providing exceptional legal services tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-[#BF9B30] hover:bg-[#d5af41] text-white px-8 py-3 rounded-md font-medium transition-all duration-300 text-center w-full sm:w-auto"
              >
                Free Consultation
              </a>
              <a 
                href="#services" 
                className="flex items-center justify-center text-white border border-white/30 hover:border-white px-8 py-3 rounded-md font-medium transition-all duration-300 backdrop-blur-sm bg-white/5 w-full sm:w-auto"
              >
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#BF9B30] rounded-xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <img 
                src="https://ik.imagekit.io/sq77wjdbn/cryptu.webp?updatedAt=1748412440082" 
                alt="Legal professionals meeting" 
                className="relative z-10 w-full h-auto rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;