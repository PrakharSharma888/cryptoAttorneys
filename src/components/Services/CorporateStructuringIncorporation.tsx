import React from "react";
import { BrandHeader } from "../BrandHeader"; // Make sure this is your BrandHeader component

const CorporateStructuringHero = () => {
  return (
    <>
      <BrandHeader />
      <section
        id="corporate-structuring"
        className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-gradient-to-br from-[#0A2540] to-[#1A365D] text-white border-t-2 border-white/20"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row gap-12">
          {/* Left Content - Wider */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Corporate Structuring & Incorporation
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              From a regulatory standpoint, establishing the corporate structure
              of a blockchain-focused startup is arguably one of the most
              critical initial steps. The number and role of entities involved
              must be carefully planned, taking into account the nature of the
              business model, technical operations, customer engagement, and tax
              considerations.
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              We provide comprehensive guidance to blockchain initiatives across
              sectors such as crypto, Web3, NFTs, and DeFi, assisting them with
              incorporation strategies tailored to their specific needs. Our
              services include creating customized legal structures that align
              with the regulatory frameworks governing digital assets,
              securities, financial services, payment systems, and taxation. To
              ensure efficient and compliant incorporation, we collaborate with
              experienced legal and regulatory professionals across multiple
              jurisdictions, including Dubai, Singapore, the British Virgin
              Islands (BVI), the Cayman Islands, Saint Vincent and the
              Grenadines (SVG), the United States (Delaware & Wyoming), Malta,
              Estonia and Switzerland.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
              OUR CORPORATE STRUCTURING AND INCORPORATION SERVICES COVER:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl opacity-90">
              <li>
                <strong>
                  Strategic advice on domestic and cross-border corporate
                  structuring, along with regulatory and licensing assessments
                  tailored to the project's scope and jurisdiction
                </strong>
              </li>
              <li>
                <strong>
                  Drafting and consulting on inter-company agreements to
                  evaluate, allocate, and manage legal and business risks
                </strong>
              </li>
              <li>
                <strong>
                  Guidance on securing regulatory approvals, licenses, and
                  ensuring compliance with relevant legal requirements
                </strong>
              </li>
              <li>
                <strong>
                  Advisory on corporate restructuring, mergers & acquisitions,
                  and other related transactions
                </strong>
              </li>
              <li>
                <strong>
                  Liaising and providing support for entity formation in
                  international jurisdictions
                </strong>
              </li>
            </ul>
            <p className="text-lg md:text-xl mt-6 opacity-90">
              The global FinTech sector continues to evolve rapidly, with
              technological advancements reshaping financial services across
              various jurisdictions. Regulatory authorities worldwide are
              focused on maintaining consumer protection, financial stability,
              and market integrity in this dynamic space. As such, staying
              compliant with complex and frequently changing regulations is
              crucial for FinTech companies.
            </p>
            <p className="text-lg md:text-xl opacity-90">
              Our legal services are designed to guide businesses through this
              evolving regulatory landscape, providing tailored advice and
              in-depth reviews of business models, products, and operations to
              ensure full compliance with applicable laws and regulations.
              Whether you’re in the initial stages of launching a FinTech
              product or expanding into new markets, our expertise will help you
              navigate regulatory challenges and protect your business
              interests.
            </p>
          </div>
          {/* Right Content - Smaller, Visual Focus */}
          <div className="w-full md:w-1/3 flex flex-col gap-8 items-center">
            <div className="bg-opacity-10 bg-white p-8 rounded-3xl backdrop-blur-md border border-white border-opacity-20 shadow-lg flex items-center justify-center sticky top-24">
              <span className="text-6xl">🏢</span>
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

export default CorporateStructuringHero;
