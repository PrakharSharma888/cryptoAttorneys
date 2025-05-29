import React, { useState, useEffect } from "react";
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

  // Add this to your component
  useEffect(() => {
    if (popupIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [popupIndex]);

  const services = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Contract Drafting",
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
      icon: <FileText className="h-6 w-6" />,
      title: "TAXATION",
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
      title: "Corporate Structuring & Incorporation",
      description: [
        "Strategic advice on domestic and cross-border corporate structuring, along with regulatory and licensing assessments tailored to the project's scope and jurisdiction",
        "Drafting and consulting on inter-company agreements to evaluate, allocate, and manage legal and business risks",
        "Guidance on securing regulatory approvals, licenses, and ensuring compliance with relevant legal requirements",
        "Advisory on corporate restructuring, mergers & acquisitions, and other related transactions",
        "Liaising and providing support for entity formation in international jurisdictions",
      ],
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "FINTECH LAW ADVISORY",
      expandable: true,
      description: [
        {
          text: "Regulatory Licensing & Registration Advisory",
          subpoints: [
            "Guidance on obtaining necessary regulatory licenses and registrations for financial services businesses, including payment systems, digital wallets, lending platforms, and alternative investment funds (AIFs) across multiple jurisdictions",
          ],
        },
        {
          text: "Business Model & Product Review",
          subpoints: [
            "Legal review and advisory on proposed business models, products, and service offerings to ensure compliance with local and international financial regulations, including anti-money laundering (AML), data protection, consumer protection, and financial services laws.",
          ],
        },
        {
          text: "Foreign Exchange Management Act (FEMA) Compliance",
          subpoints: [
            "Advisory services focused on international cross-border transactions, foreign investments, and compliance with global foreign exchange regulations",
          ],
        },
        {
          text: "Foreign Direct Investment (FDI) & Corporate Restructuring",
          subpoints: [
            "Legal review of corporate structures, FDI compliance, and restructuring strategies to optimize your FinTech company’s global operations and investment opportunities",
          ],
        },
        {
          text: "Investment Transaction Advisory",
          subpoints: [
            "Providing legal insights into funding strategies, investment agreements, and corporate governance for FinTech startups and established companies",
          ],
        },
        {
          text: "Overseas Direct Investment (ODI) Compliance & Advisory",
          subpoints: [
            "Assistance with navigating the legal complexities of overseas investments, ensuring full compliance with local regulations and international trade laws",
          ],
        },
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Token Launch ICO / IDO / IEO / ILO / INO",
      expandable: false,
      description: [
        {
          text: "Legal review and analysis of token and its possible characterisation",
        },
        {
          text: "Advisory on Token Structuring & Documentation",
        },
        {
          text: "DAO Structuring & Legal Wrappers",
        },
        {
          text: "Platform & Protocol Legal Frameworks",
        },
        {
          text: "NFT and IP Protection",
        },
        {
          text: "DEX/CEX Compliance & Risk Management",
        },
        {
          text: "Advisory services relating to appropriate corporate structuring and incorporation of the token issuing entity",
        },
        {
          text: "Preparation of documentation and liaising with centralized and decentralized exchanges for token listings",
        },
        {
          text: "Comprehensive review of tokenomics and evaluation of security-related concerns",
        },
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Policy & Research",
      description: [
        "In-depth, sector-specific research​",
        "Exploration and promotion of blockchain use-cases",
        "Policy analysis and advocacy initiatives",
        "Social impact assessments for blockchain and emerging technologies",
        "Stakeholder mapping and engagement strategies​)",
        "Legal and policy analysis across jurisdictions",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 p-4">
      {/* Popup box */}
      <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#BF9B30]/30 max-w-2xl w-full max-h-[90vh] flex flex-col animate-fade-in">
        {/* Header - Fixed */}
        <div className="flex-shrink-0 p-6 pb-4 border-b border-gray-200/50">
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/70 hover:bg-[#BF9B30]/20 border border-[#BF9B30]/30 shadow transition-all duration-200"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-5 w-5 text-[#BF9B30] hover:text-[#0A2540] transition-colors" />
          </button>
          <h3 className="text-2xl font-extrabold text-[#0A2540] pr-12">
            {title}
          </h3>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 pt-4">
          <div className="text-gray-700 space-y-4">
            {Array.isArray(description)
              ? description.map((desc, idx) =>
                  typeof desc === "string" ? (
                    <p key={idx} className="leading-relaxed">
                      {desc}
                    </p>
                  ) : (
                    <div key={idx} className="">
                      <p className="font-semibold text-[#BF9B30] mb-2">
                        {desc.text}
                      </p>
                      {desc.subpoints && (
                        <ul className="ml-5 space-y-1 list-disc text-sm text-[#0A2540]/80">
                          {desc.subpoints.map((sub, subIdx) => (
                            <li key={subIdx} className="leading-relaxed">
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
      </div>

      {/* Click outside to close */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

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
            Crypto, Web3 & Blockchain Legal Services
          </h2>
          <h3 className="text-xl font-semibold text-[#0A2540] mb-4">
            Strategic Legal Support for Decentralized Innovation
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At <b>Crypto Attorneys</b>, we provide future-facing tech legal
            services for businesses operating at the progressive of technology,
            innovation, and global finance. Our team brings deep experience
            across traditional legal practice areas and emerging sectors like
            blockchain, digital assets, decentralized finance (DeFi), and Web3.
            We serve clients at every stage—from startup formation to scaling
            internationally—offering tailored legal counsel that ensures
            compliance, reduces risk, and supports long-term growth. Our
            services are designed to meet the unique challenges of modern
            enterprises, with tailored legal solutions in the fields of Crypto
            and Web3, contract law, regulatory compliance, international
            structuring, legal research, and startup support.
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
