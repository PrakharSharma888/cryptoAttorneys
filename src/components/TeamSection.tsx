import React, { useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
// import { useEffect } from '../assets/b204da08-13d3-4f37-b431-1c559ca61d84.jpeg';
// import { shu, shre2 } from '../../assets'; // Adjust the import path as necessary

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  education: string[];
  specializations: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Achyut Singh",
      role: "Partner", 
      image: "../../Assets/achyut.jpeg",
      bio: "Sarah leads our practice with over 15 years of experience in corporate law and international business regulations. Her strategic approach has helped numerous clients navigate complex legal challenges successfully.",
      education: ["B.A. LL.B. (Hons.)"],
      specializations: ["Corporate Law", "Mergers & Acquisitions", "International Business"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@lexcounsel.com"
      }
    },
    {
      id: 2,
      name: "Saadiya Sadiq",
      role: "Partner, Business & Corporate Law",
      image: "../../Assets/1f202e5c-7433-4670-a8c0-ff42094cfbfc.jpeg",
      bio: "Saadiya Sadiq is a dedicated partner at our firm, bringing over 4 years of focused experience in business and corporate law. Known for her sharp legal insight and client-centric approach, Saadiya has successfully advised a diverse range of clients on regulatory compliance, transactional structuring, and strategic legal planning. Her commitment to excellence and deep understanding of commercial law make her a trusted advisor in the ever-evolving business landscape.",
      education: ["Bachelor of Commerce (B.Com)", "Bachelor of Laws (LL.B)", "Master of Laws (LL.M)"],
      specializations: ["Business Law", "Corporate Law"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@lexcounsel.com"
      }
    },
    {
      id: 3,
      name: "Shreyansh Raj",
      role: "Partner",
      image: "../../Assets/shre2.jpeg",
      bio: "Shreyansh Raj is a dedicated partner at our firm, bringing over 6 years of focused experience in business and corporate law. Known for his sharp legal insight and client-centric approach, Shreyansh has successfully advised a diverse range of clients on regulatory compliance, transactional structuring, and strategic legal planning. His commitment to excellence and deep understanding of commercial law make him a trusted advisor in the ever-evolving business landscape.",
      education: ["Bachelor of Arts, Bachelor of Laws (B.A. LL.B)", "Master of Laws (LL.M) - Specialization in Constitutional Law and Policy Making"],
      specializations: ["Constitutional Law", "Corporate Law", "Policy Making", "Regulatory Compliance", "Transactional Structuring", "Strategic Legal Planning"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@lexcounsel.com"
      }
    },
    {
      id: 4,
      name: "Shushant Raj",
      role: "Partner",
      image: "../../Assets/shu.jpeg",
      bio: "Shushant Raj is a dedicated tax consultant at our firm, bringing over 4 years of focused experience in business and corporate law. Known for his sharp legal insight and client-centric approach, Shushant has successfully advised a diverse range of clients on tax compliance, transactional structuring, and strategic financial planning. His commitment to excellence and deep understanding of tax and commercial law make him a trusted advisor in the ever-evolving business landscape",
      education: ["Bachelor of Arts, Bachelor of Laws (B.A. LL.B - 5-year program)"],
      specializations: ["Tax Law", "Regulatory Compliance", "Corporate Law", "Regulatory Compliance", "Transactional Structuring", "Strategic Financial and Legal Planning"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@lexcounsel.com"
      }
    }
  ];

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'partners', label: 'Partners' },
    // { id: 'associates', label: 'Associates' }
  ];

  const filteredMembers = teamMembers.filter(member => {
    if (activeTab === 'all') return true;
    if (activeTab === 'partners') return member.role.includes('Partner');
    // if (activeTab === 'associates') return member.role === 'Associate';
    return true;
  });

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">Our Legal Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our experienced attorneys who are dedicated to providing exceptional legal services tailored to your needs.
          </p>
          
          <div className="flex justify-center mt-8 mb-12">
            <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#0A2540] text-white'
                      : 'text-gray-500 hover:text-[#0A2540]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal(member)}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2540]">{member.name}</h3>
                <p className="text-[#BF9B30] mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A2540]">{selectedMember.name}</h3>
                    <p className="text-[#BF9B30] mb-4">{selectedMember.role}</p>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedMember.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#0A2540] mb-2">Education</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedMember.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#0A2540] mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.specializations.map((spec, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  {selectedMember.social.linkedin && (
                    <a href={selectedMember.social.linkedin} className="text-gray-400 hover:text-[#0077B5]">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {selectedMember.social.twitter && (
                    <a href={selectedMember.social.twitter} className="text-gray-400 hover:text-[#1DA1F2]">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {selectedMember.social.email && (
                    <a href={`mailto:${selectedMember.social.email}`} className="text-gray-400 hover:text-[#BF9B30]">
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;