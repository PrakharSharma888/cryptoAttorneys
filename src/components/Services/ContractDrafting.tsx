import React from 'react';
import { ArrowRight, Scale } from 'lucide-react';
import { BrandHeader } from "../BrandHeader";

const ContractDraftingHero = () => {
  return (
    <>
    <BrandHeader />
    <section
      id="contract-drafting"
      className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-gradient-to-br from-[#0A2540] to-[#1A365D] text-white border-t-2 border-white/20"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row gap-12">
        {/* Left Content - Wider */}
        
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Effortless Contract Drafting
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            From a legal standpoint, contracts form the backbone of any business—and crypto startups are no exception. From the moment of incorporation, these ventures must navigate a broad range of agreements to support both internal operations and external relationships. This includes forming legally binding relationships with individuals (such as employees, co-founders, directors, and promoters) as well as with legal entities (like service providers, partners, customers, and creditors) to clearly define roles, responsibilities, and rights under applicable laws.
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Effective contracts must balance long-term strategic objectives with practical day-to-day requirements. They should be designed not only to mitigate existing legal risks but also to stay adaptive to the rapidly evolving regulatory landscape in the crypto and tech space.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
            OUR CONTRACT DRAFTING SERVICES INCLUDE:
          </h2>
          <ul className="space-y-4 text-lg md:text-xl opacity-90">
            <li>
              <strong>Technology & SaaS Agreements</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>Software licensing agreements</li>
                <li>Service-level agreements (SLAs)</li>
                <li>API and white-label licensing terms</li>
              </ul>
            </li>
            <li>
              <strong>Token and Financing Instruments</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>SAFTs (Simple Agreements for Future Tokens)</li>
                <li>SAFEs (Simple Agreements for Future Equity)</li>
                <li>Convertible notes and subscription agreements</li>
                <li>Investor side letters and advisory share agreements</li>
              </ul>
            </li>
            <li>
              <strong>Employment & Compensation Agreements</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>Employment contracts (full-time, part-time, remote)</li>
                <li>Independent contractor and consulting agreements</li>
                <li>Contributor and core team agreements for DAOs</li>
                <li>Commission-based and incentive compensation agreements</li>
                <li>IP assignment and invention ownership clauses</li>
                <li>Non-disclosure (NDA), non-compete, and non-solicitation terms</li>
              </ul>
            </li>
            <li>
              <strong>Founder & Equity Agreements</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>Founders' agreements with equity allocation, vesting, and decision rights</li>
                <li>Equity incentive plans (ESOPs/ISOs)</li>
                <li>Restricted stock purchase agreements (RSPAs)</li>
              </ul>
            </li>
            <li>
              <strong>Commercial Contracts</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>Vendor, partnership, and service provider agreements</li>
                <li>Joint venture, reseller, and distribution agreements</li>
                <li>Influencer, ambassador, and affiliate marketing agreements</li>
                <li>White-label and product licensing agreements</li>
              </ul>
            </li>
            <li>
              Each contract is customized to your jurisdiction, operational structure, and strategic needs—whether you're a bootstrapped startup or a multinational Web3 project.
            </li>
            <li>Privacy Policies</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        {/* Right Content - Smaller, Visual Focus */}
        <div className="w-full md:w-1/3 flex flex-col gap-8 items-center">
          <div className="bg-opacity-10 bg-white p-8 rounded-3xl backdrop-blur-md border border-white border-opacity-20 shadow-lg flex items-center justify-center sticky top-24">
            <Scale size={120} className="text-white" />
          </div>
          <div className="bg-opacity-10 bg-white p-6 rounded-2xl backdrop-blur-md border border-white border-opacity-20 shadow-lg w-full">
            <h3 className="text-xl font-bold mb-4 opacity-90">Why Choose Us?</h3>
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

export default ContractDraftingHero;
