import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const InternationalCollaborationsSection = () => {
  const { staggerContainer, gentleFadeUp, cardVariant } = pageAnimations.standard;

  const collaborations = [
    {
      title: "CASES UK",
      description: "Our affiliation with CASES UK underscores our commitment to promoting excellence through evidence-based practice on an international level."
    },
    {
      title: "NYSHSI U.S.A.",
      description: "Recognition as a 'Best Practices Partner' by NYSHSI U.S.A. reflects our dedication to upholding the highest standards in youth sports health and safety."
    },
    {
      title: "PROPTA USA Network",
      description: "Our partnership with PROPTA USA connects UFTA to a global network of fitness professionals, with certifications recognized in 199 countries."
    },
    {
      title: "IUSCA UK",
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
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6"
            variants={cardVariant}
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-3">
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
            <p className="leading-relaxed text-gray-300">{collab.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default InternationalCollaborationsSection;
