import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What areas of law does your firm specialize in?",
      answer: "Our firm specializes in a wide range of practice areas including corporate law, contract law, family law, real estate law, litigation, international law, intellectual property, and criminal defense. Each practice area is led by attorneys with extensive experience and expertise in their respective fields."
    },
    {
      question: "How much does an initial consultation cost?",
      answer: "We offer a free initial 30-minute consultation for new clients. During this consultation, we'll discuss your legal needs and determine how we can best assist you. Following the consultation, we'll provide you with information about our fee structure for the specific services you require."
    },
    {
      question: "How long will my legal matter take to resolve?",
      answer: "The timeline for resolving legal matters varies greatly depending on the complexity of the case, the specific area of law involved, and external factors such as court schedules. During your initial consultation, we'll provide you with a general timeline based on our experience with similar cases, and we'll keep you updated on the progress of your case throughout the process."
    },
    {
      question: "Can you represent clients outside your local area?",
      answer: "Yes, we represent clients throughout the state and even nationally for certain practice areas such as intellectual property and corporate law. For matters that require local court appearances, we have a network of trusted partner attorneys in other jurisdictions who can assist with your case when necessary."
    },
    {
      question: "What information should I bring to my first meeting?",
      answer: "To make the most of your initial consultation, please bring any documents relevant to your legal matter. This might include contracts, correspondence, court documents, financial records, or other materials specific to your situation. Additionally, it's helpful to prepare a chronological summary of the facts related to your case and a list of questions you'd like to discuss."
    },
    {
      question: "How do you charge for your services?",
      answer: "Our fee structure varies depending on the type of legal service provided. We offer hourly billing, flat fees for certain services, contingency arrangements for some cases, and retainer agreements for ongoing legal support. During your initial consultation, we'll discuss the most appropriate fee arrangement for your specific needs and provide you with a clear understanding of the estimated costs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our legal services and processes.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`flex justify-between items-center w-full p-5 text-left font-medium transition-colors duration-300 ${
                    openIndex === index ? 'bg-[#0A2540] text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Don't see your question here? Contact us directly for assistance.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-[#BF9B30] hover:text-[#0A2540] font-medium transition-colors duration-300"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;