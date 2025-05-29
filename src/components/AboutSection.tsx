import React from "react";
import { CheckCircle, Award, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Successful Cases" },
    { value: "50+", label: "Legal Experts" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: <CheckCircle className="h-6 w-6 text-[#BF9B30]" />,
      title: "Excellence",
      description:
        "We strive for excellence in every case we handle, ensuring the highest quality of legal services.",
    },
    {
      icon: <Award className="h-6 w-6 text-[#BF9B30]" />,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards, providing honest and transparent legal counsel.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#BF9B30]" />,
      title: "Client Focus",
      description:
        "Your success is our priority. We work tirelessly to achieve the best possible outcomes for our clients.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#0A2540]/5 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#BF9B30]/5 rounded-full"></div>
              <img
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Legal team"
                className="relative z-10 rounded-xl shadow-xl w-full"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 z-20">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-[#0A2540]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
              About Crypto Attorney's
            </h2>
            <p className="text-gray-600 mb-8">
              At Crypto Attorney's, we provide future-facing legal services for
              businesses operating at the progressive of technology, innovation,
              and global finance. Our team brings deep experience across
              traditional legal practice areas and emerging sectors like
              blockchain, digital assets, crypto,decentralized finance (DeFi), and
              Web3.
            </p>
            <p className="text-gray-600 mb-8">
              We serve clients at every stage—from startup formation to scaling
              internationally—offering tailored legal counsel that ensures
              compliance, reduces risk, and supports long-term growth. Our
              services are designed to meet the unique challenges of modern
              enterprises, with tailored legal solutions in the fields of
              blockchain and Web3, contract law, regulatory compliance,
              international structuring, legal research, and startup support.
            </p>
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4">{value.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A2540]">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#team"
              className="inline-block text-[#BF9B30] font-medium hover:text-[#0A2540] transition-colors duration-300"
            >
              Meet our team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
