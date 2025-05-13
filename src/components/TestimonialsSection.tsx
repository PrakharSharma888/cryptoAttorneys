import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Prakhar Sharma",
      position: "Software Developer",
      company: "Nexus Technologies",
      text: "Crypto Attorney's provided exceptional legal guidance during our company's merger. Their attention to detail and strategic approach saved us from potential compliance issues and ensured a smooth transition.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 2,
      name: "Priya Singh",
      position: "Founder",
      company: "Innovate Studios",
      text: "When our startup faced intellectual property challenges, the team at Crypto Attorney's developed a comprehensive strategy that protected our innovations. Their expertise in tech law is truly impressive.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 3,
      name: "Abhishek Sharma",
      position: "Real Estate Developer",
      company: "Urban Horizon",
      text: "I've worked with many law firms over my 20-year career, but Crypto Attorney's stands out for their combination of legal expertise and business acumen. They don't just identify problems—they provide solutions.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoplay(false);
    
    // Resume autoplay after 5 seconds of inactivity
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
    
    autoplayRef.current = setTimeout(() => {
      setIsAutoplay(true);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      
      return () => clearInterval(interval);
    }
    
    return undefined;
  }, [isAutoplay, testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about our legal services and expertise.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 -left-12 text-[#BF9B30]/10">
            <Quote className="h-32 w-32" />
          </div>
          
          <div className="relative z-10 bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                style={{ display: activeIndex === index ? 'block' : 'none' }}
              >
                <div className="md:flex items-center">
                  <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#BF9B30]/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-8">
                    <p className="text-gray-600 text-lg italic mb-6">"{testimonial.text}"</p>
                    <div>
                      <h4 className="text-lg font-bold text-[#0A2540]">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevSlide}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'bg-[#BF9B30] w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;