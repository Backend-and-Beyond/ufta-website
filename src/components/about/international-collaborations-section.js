import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"
import proptaLogo from "../../images/propta-logo.png"
import casesLogo from "../../images/logos/CASES_logo.png"
import iuscaLogo from "../../images/logos/iusca.png"

const InternationalCollaborationsSection = () => {
  const { staggerContainer, gentleFadeUp, cardVariant } = pageAnimations.standard;

  const collaborations = [
    {
      id: "cases",
      title: "CASES UK",
      logo: casesLogo,
      color: "from-blue-500 to-blue-600",
      description: "Our affiliation with CASES UK underscores our commitment to promoting excellence through evidence-based practice on an international level."
    },
    {
      id: "nyshsi",
      title: "NYSHSI U.S.A.",
      logo: null,
      color: "from-green-500 to-green-600",
      description: "Recognition as a 'Best Practices Partner' by NYSHSI U.S.A. reflects our dedication to upholding the highest standards in youth sports health and safety."
    },
    {
      id: "propta",
      title: "PROPTA USA Network",
      logo: proptaLogo,
      color: "from-red-500 to-red-600",
      description: "Our partnership with PROPTA USA connects UFTA to a global network of fitness professionals, with certifications recognized in 199 countries."
    },
    {
      id: "iusca",
      title: "IUSCA UK",
      logo: iuscaLogo,
      color: "from-purple-500 to-purple-600",
      description: "Our Founder's IUSCA UK certification brings global S&C expertise from an association partnered with 150+ top universities worldwide."
    }
  ];

  return (
    <motion.section 
      id="collaborations" 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div 
        className="flex items-center justify-center mb-10"
        variants={gentleFadeUp}
      >
        <motion.svg 
          className="w-10 h-10 mr-3 text-[#00c8ff]" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296A3.745 3.745 0 0 1 16.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 12 21a3.745 3.745 0 0 1-1.637-.332A3.745 3.745 0 0 1 7.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 3 18.368a3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 1.593 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296A3.745 3.745 0 0 1 7.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 12 3a3.745 3.745 0 0 1 1.637.332A3.745 3.745 0 0 1 16.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 21 5.632A3.745 3.745 0 0 1 22.407 12Z" />
        </motion.svg>
        <h2 className="text-4xl font-bold text-white text-center relative">
          International Collaborations
          <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
        </h2>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={staggerContainer}
      >
        {collaborations.map((collab, index) => (
          <motion.div 
            key={index} 
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group"
            variants={cardVariant}
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${collab.color} rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-30`}></div>
            </div>

            {/* Logo Section */}
            {collab.logo ? (
              <motion.div 
                className="mb-6 flex justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center p-4 border border-gray-600/30 group-hover:border-[#00c8ff]/50 transition-all duration-300 shadow-lg">
                  <img 
                    src={collab.logo} 
                    alt={`${collab.title} Logo`}
                    className="w-full h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                    onError={(e) => {
                      console.log(`Failed to load logo for ${collab.title}:`, e.target.src);
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded logo for ${collab.title}`);
                    }}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="mb-6 flex justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${collab.color} rounded-xl flex items-center justify-center border border-gray-600/30 group-hover:border-[#00c8ff]/50 transition-all duration-300 shadow-lg`}>
                  <span className="text-white font-bold text-lg text-center">
                    {collab.title.split(' ')[0]}
                  </span>
                </div>
              </motion.div>
            )}

            <h3 className="text-xl font-bold mb-3 relative z-10">
              {collab.title.includes('UK') ? (
                <>
                  <span className="text-white">{collab.title.split(' ')[0]}</span>{' '}
                  <span className="text-[#00c8ff]">{collab.title.split(' ')[1]}</span>
                </>
              ) : (
                <>
                  <span className="text-white">{collab.title.split(' ')[0]}</span>{' '}
                  <span className="text-[#00c8ff]">{collab.title.split(' ').slice(1).join(' ')}</span>
                </>
              )}
            </h3>
            <p className="leading-relaxed text-gray-300 relative z-10">{collab.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default InternationalCollaborationsSection;
