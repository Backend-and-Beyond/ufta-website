import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const AffiliationsSection = () => {
  const { staggerContainer, gentleFadeUp, cardVariant } = pageAnimations.standard;

  const affiliations = [
    {
      acronym: "SPEFL-SC",
      title: "SPEFL-SC",
      highlight: "SC",
      description: "Affiliated with Sports, Physical Education, Fitness and Leisure Skills Council."
    },
    {
      acronym: "NCSPE",
      title: "NCSPE & ICSSPE",
      highlight: "ICSSPE",
      description: "Supported by National Council of Sports Science & Physical Education (NCSPE)."
    },
    {
      acronym: "NYSHSI",
      title: "NYSHSI U.S.A.",
      highlight: "U.S.A.",
      description: "\"Best Practices Partner\" by National Youth Sports Health & Safety Institute U.S.A."
    },
    {
      acronym: "CASES UK",
      title: "CASES UK",
      highlight: "UK",
      description: "Affiliated with Chartered Association of Sport and Exercise Sciences UK."
    }
  ];

  return (
    <motion.section 
      id="affiliations" 
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </motion.svg>
        <h2 className="text-4xl font-bold text-white text-center relative">
          Our <span className="text-[#00c8ff]">Affiliations</span>
          <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
        </h2>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
      >
        {affiliations.map((affiliation, index) => (
          <motion.div 
            key={index}
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-200"
            variants={cardVariant}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            <motion.div 
              className="h-24 w-24 mx-auto mb-5 bg-[#00c8ff]/10 rounded-full flex items-center justify-center text-[#00c8ff] font-bold text-sm border border-[#00c8ff]/30"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              {affiliation.acronym}
            </motion.div>
            <h3 className="text-lg font-semibold text-center mb-2">
              {affiliation.title.includes('&') ? (
                <>
                  {affiliation.title.split('&')[0].trim()}&{' '}
                  <span className="text-[#00c8ff]">{affiliation.title.split('&')[1].trim()}</span>
                </>
              ) : (
                <>
                  {affiliation.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-[#00c8ff]">{affiliation.highlight}</span>
                </>
              )}
            </h3>
            <p className="text-center text-sm text-gray-400">{affiliation.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AffiliationsSection;
