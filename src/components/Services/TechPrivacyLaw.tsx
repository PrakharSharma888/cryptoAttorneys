import React from "react";
import { BrandHeader } from "../BrandHeader"; // Make sure this is your BrandHeader component

const TechPrivacyLawHero = () => {
  return (
    <>
      <BrandHeader />
      <section
        id="tech-privacy-law"
        className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-gradient-to-br from-[#0A2540] to-[#1A365D] text-white border-t-2 border-white/20"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row gap-12">
          {/* Left Content - Wider */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Technology & Privacy Law
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              As the world continues its rapid digital transformation, legal
              frameworks must evolve to address the ethical, political, and
              economic challenges that come with it. Foundational legislation in
              this space, the Information Technology Acts, marked a significant
              step by granting legal recognition to electronic transactions and
              establishing a regulatory framework for cybercrime and e-commerce.
              Since its enactment, the Act has undergone multiple amendments,
              and new rules have been introduced to keep pace with technological
              advancement, covering areas such as digital security, data
              governance, and intermediary liability, including the IT
              (Intermediary Guidelines and Digital Media Ethics Code) Rules and
              other sector-specific regulations.
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              In the realm of data protection and privacy, these rules govern
              the collection, handling, processing, and storage of personal and
              sensitive personal data, imposing compliance obligations and
              security standards on all body corporates operating in the world.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
              OUR TECH & PRIVACY LAW SERVICES INCLUDE:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl opacity-90">
              <li>
                <strong>
                  Legal advisory on compliance with the IT Acts and relevant
                  Rules
                </strong>
              </li>
              <li>
                <strong>
                  Drafting and reviewing privacy policies, terms of service, and
                  data protection frameworks
                </strong>
              </li>
              <li>
                <strong>
                  Jurisdiction-specific analysis to evaluate regulatory risks
                  and strategic benefits for tech-driven projects
                </strong>
              </li>
            </ul>
          </div>
          {/* Right Content - Smaller, Visual Focus */}
          <div className="w-full md:w-1/3 flex flex-col gap-8 items-center">
            <div className="bg-opacity-10 bg-white p-8 rounded-3xl backdrop-blur-md border border-white border-opacity-20 shadow-lg flex items-center justify-center sticky top-24">
              <span className="text-6xl">🔒</span>
              {/* Or use a custom icon if you have one */}
            </div>
            <div className="bg-opacity-10 bg-white p-6 rounded-2xl backdrop-blur-md border border-white border-opacity-20 shadow-lg w-full">
              <h3 className="text-xl font-bold mb-4 opacity-90">
                Why Choose Us?
              </h3>
              <ul className="space-y-2 opacity-90">
                <li>✓ Customized for your jurisdiction</li>
                <li>✓ Secure and compliant</li>
                <li>✓ Fast turnaround</li>
                <li>✓ Expert legal review</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
      </section>
    </>
  );
};

export default TechPrivacyLawHero;
