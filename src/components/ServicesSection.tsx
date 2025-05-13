import React, { useState } from "react";
import {
  Briefcase,
  FileText,
  Users,
  Building,
  Scale,
  ArrowRight,
  X,
} from "lucide-react";

const ServiceCard = ({
  icon,
  title,
  description,
  expandable = false,
  expanded = false,
  onToggle,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#BF9B30]/30 group">
      <div className="inline-block p-4 rounded-full bg-[#0A2540]/5 text-[#0A2540] mb-5 group-hover:bg-[#BF9B30]/10 group-hover:text-[#BF9B30] transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#0A2540] mb-3">{title}</h3>
      <div className="text-gray-600">
        {Array.isArray(description)
          ? description.map((desc, idx) =>
              typeof desc === "string" ? (
                <p key={idx} className="mb-2">
                  {desc}
                </p>
              ) : (
                <div key={idx} className="mb-2">
                  <p className="font-medium">{desc.text}</p>
                  {expanded && desc.subpoints && (
                    <ul className="ml-5 mt-1 list-disc text-sm text-gray-500">
                      {desc.subpoints.map((sub, subIdx) => (
                        <li key={subIdx} className="mb-1">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )
          : null}
      </div>
      {expandable && (
        <button
          type="button"
          onClick={onToggle}
          className="mt-4 px-4 py-2 bg-[#BF9B30] hover:bg-[#a88427] text-white rounded transition-all duration-200 font-semibold"
        >
          More
        </button>
      )}
    </div>
  );
};

const ServicesSection = () => {
  const [popupIndex, setPopupIndex] = useState(null);

  const services = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Web3 & Blockchain Legal Services",
      expandable: true,
      description: [
        {
          text: "Token Structuring & Documentation",
          subpoints: [
            "Token utility vs. security analysis",
            "Token purchase agreements and whitepaper disclaimers",
            "SAFT (Simple Agreement for Future Tokens) preparation",
            "Legal opinions on token classification and jurisdictional risks",
          ],
        },
        {
          text: "DAO Structuring & Legal Wrappers",
          subpoints: [
            "Formation of LLCs, foundations, and hybrid structures for DAOs",
            "Drafting governance frameworks and contributor agreements",
            "Fiduciary responsibility guidance for DAO stewards and multisig signers",
          ],
        },
        {
          text: "Platform & Protocol Legal Frameworks",
          subpoints: [
            "Terms of use, community guidelines, privacy policies",
            "API terms and licensing for infrastructure or tooling protocols",
            "Content moderation and liability disclaimers for dApps and marketplaces",
          ],
        },
        {
          text: "NFT and IP Protection",
          subpoints: [
            "NFT minting rights and ownership structuring",
            "Licensing terms for creative IP, art, and music NFTs",
            "Royalty and resale right agreements",
          ],
        },
        {
          text: "DEX/CEX Compliance & Risk Management",
          subpoints: [
            "Jurisdictional regulatory mapping",
            "AML/KYC program development",
            "Risk mitigation strategies for automated market makers (AMMs) and liquidity pools",
          ],
        },
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Crypto Taxation & Cross-Border Structuring",
      description: [
        "Cross-border tax strategy and jurisdictional tax mapping",
        "Income, capital gains, and staking/airdrop tax treatment",
        "Tax-efficient entity and foundation structuring (onshore/offshore)",
        "Corporate tax planning for exchanges, DAOs, and NFT platforms",
        "Legal structuring for token vesting, unlocks, and liquidity events",
        "Personal tax strategy for founders, token holders, and investors",
        "Regulatory risk mitigation through robust tax compliance frameworks",
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Regulatory Compliance & International Licensing",
      description: [
        "Jurisdiction selection and comparative legal analysis",
        "VASP licensing (EU, UAE, BVI, Cayman Islands, Singapore, Hong Kong, etc.)",
        "AML/KYC framework development and internal policy creation",
        "Securities classification and exemption strategies",
        "E-money, payment, and custodial license advisory",
        "Data privacy compliance (GDPR, CCPA, PDPA, etc.)",
        "International product compliance for mobile/web apps",
        "Regulator engagement and formal communication support",
      ],
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Contract Management",
      expandable: true,
      description: [
        {
          text: "Technology & SaaS Agreements",
          subpoints: [
            "Software licensing agreements",
            "Service-level agreements (SLAs)",
            "API and white-label licensing terms",
          ],
        },
        {
          text: "Token and Financing Instruments",
          subpoints: [
            "SAFTs (Simple Agreements for Future Tokens)",
            "SAFEs (Simple Agreements for Future Equity)",
            "Convertible notes and subscription agreements",
            "Investor side letters and advisory share agreements",
          ],
        },
        {
          text: "Employment & Compensation Agreements",
          subpoints: [
            "Employment contracts (full-time, part-time, remote)",
            "Independent contractor and consulting agreements",
            "Contributor and core team agreements for DAOs",
            "Commission-based and incentive compensation agreements",
            "IP assignment and invention ownership clauses",
            "Non-disclosure (NDA), non-compete, and non-solicitation terms",
          ],
        },
        {
          text: "Founder & Equity Agreements",
          subpoints: [
            "Founders' agreements with equity allocation, vesting, and decision rights",
            "Equity incentive plans (ESOPs/ISOs)",
            "Restricted stock purchase agreements (RSPAs)",
          ],
        },
        {
          text: "Commercial Contracts",
          subpoints: [
            "Vendor, partnership, and service provider agreements",
            "Joint venture, reseller, and distribution agreements",
            "Influencer, ambassador, and affiliate marketing agreements",
            "White-label and product licensing agreements",
          ],
        },
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Regulatory Compliance & International Structuring",
      expandable: true,
      description: [
        {
          text: "Jurisdiction Selection & Entity Structuring",
          subpoints: [
            "Comparative jurisdiction analysis for crypto and tech companies",
            "Formation of onshore and offshore entities (LLCs, foundations, Ltd., etc.)",
            "Establishment of IP holding companies and treasury structures",
          ],
        },
        {
          text: "Regulatory Licensing & Exemptions",
          subpoints: [
            "VASP registration and compliance programs",
            "Crypto exchange and wallet compliance frameworks",
            "Legal structuring for unregistered token offerings under exemptions",
          ],
        },
        {
          text: "Data, Privacy, and Financial Conduct Compliance",
          subpoints: [
            "GDPR, CCPA, and cross-border data protection",
            "E-money, payments, and consumer protection regulation",
            "AML/KYC program design and policy drafting",
          ],
        },
        {
          text: "Founder & Team Liability Protection",
          subpoints: [
            "Shielding individuals from personal liability",
            "Implementing corporate governance safeguards",
            "Managing legal risks for contributors, core teams, and advisors",
          ],
        },
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Policy Advisory & Legal Research",
      description: [
        "Policy papers, regulatory whitepapers, and industry submissions",
        "Legal research for public-private initiatives and digital economy bills",
        "Consultation support for legislative and regulatory change proposals",
        "Guidance on digital asset sandbox programs and innovation hubs",
        "Stakeholder engagement strategies (regulators, ministries, trade bodies)",
        "Participation in industry consultations and compliance coalitions",
        "Strategic positioning for public perception, lobbying, and advocacy",
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Legal Services for Startups",
      description: [
        "Entity formation and jurisdictional selection",
        "Founders’ agreements and internal governance documents",
        "SAFE, convertible note, and priced equity round documentation",
        "Intellectual property protection and licensing",
        "Employee agreements and equity incentive plans",
        "Product compliance reviews for app launches, dApps, and token-based systems",
        "General counsel services for ongoing legal needs",
      ],
    },
  ];

  const Popup = ({ title, description, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
      {/* Popup box */}
      <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#BF9B30]/30 max-w-lg w-full p-8 animate-fade-in">
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-white/70 hover:bg-[#BF9B30]/20 border border-[#BF9B30]/30 shadow transition-all duration-200"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-6 w-6 text-[#BF9B30] hover:text-[#0A2540] transition-colors" />
        </button>
        <h3 className="text-2xl font-extrabold text-[#0A2540] mb-4">{title}</h3>
        <div className="text-gray-700 max-h-[60vh] overflow-y-auto pr-2">
          {Array.isArray(description)
            ? description.map((desc, idx) =>
                typeof desc === "string" ? (
                  <p key={idx} className="mb-3">
                    {desc}
                  </p>
                ) : (
                  <div key={idx} className="mb-4">
                    <p className="font-semibold text-[#BF9B30]">{desc.text}</p>
                    {desc.subpoints && (
                      <ul className="ml-5 mt-1 list-disc text-sm text-[#0A2540]/80">
                        {desc.subpoints.map((sub, subIdx) => (
                          <li key={subIdx} className="mb-1">
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              )
            : null}
        </div>
      </div>
      {/* Click outside to close */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        style={{ pointerEvents: "auto" }}
      />
      {/* Animation */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeInUp 0.35s cubic-bezier(.39,.575,.565,1.000) both;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.98);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-2">
            Web3 & Blockchain Legal Services
          </h2>
          <h3 className="text-xl font-semibold text-[#0A2540] mb-4">
            Strategic Legal Support for Decentralized Innovation
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Web3 ecosystem presents transformative opportunities-and complex
            legal challenges. At [Firm Name], we deliver comprehensive legal
            support to stakeholders across the blockchain space, including
            infrastructure providers, token projects, decentralized protocols,
            exchanges, NFT platforms, and DAOs.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              expandable={service.expandable}
              onToggle={
                service.expandable ? () => setPopupIndex(index) : undefined
              }
            />
          ))}
        </div>
        {popupIndex !== null && (
          <Popup
            title={services[popupIndex].title}
            description={services[popupIndex].description}
            onClose={() => setPopupIndex(null)}
          />
        )}

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-[#0A2540] hover:bg-[#0A2540]/90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300"
          >
            Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
