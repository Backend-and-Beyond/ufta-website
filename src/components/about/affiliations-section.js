import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const AffiliationsSection = () => {
  const { staggerContainer, gentleFadeUp, cardVariant } = pageAnimations.standard;

  const affiliations = [
    {
      acronym: "SPEFL-SC",
      title: "SPEFL-SC",
      highlight: "SPEFL-SC",
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
      className="py-8 md:py-16 px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-10"
        variants={gentleFadeUp}
      >
        <motion.svg 
          className="w-8 h-8 md:w-10 md:h-10 md:mr-3 mb-2 md:mb-0 text-[#00c8ff]" 
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
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center relative">
          Our <span className="text-[#00c8ff]">Affiliations</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none w-12 md:w-16 h-0.5 bg-[#00c8ff]"></span>
        </h2>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        variants={staggerContainer}
      >
        {affiliations.map((affiliation, index) => (
          <motion.div 
            key={index}
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-4 md:p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-200"
            variants={cardVariant}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            <motion.div 
              className="h-16 w-16 md:h-24 md:w-24 mx-auto mb-3 md:mb-5 bg-[#00c8ff]/10 rounded-full flex items-center justify-center text-[#00c8ff] font-bold text-xs md:text-sm border border-[#00c8ff]/30"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              {affiliation.acronym}
            </motion.div>
            <h3 className="text-base md:text-lg font-semibold text-center mb-2">
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
            <p className="text-center text-xs md:text-sm text-gray-400">{affiliation.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AffiliationsSection;
