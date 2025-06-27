import * as React from "react"
import { motion } from "framer-motion"

const StrengthConditioningSection = () => {
  // Simple, non-blinking animation variants
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="strength-conditioning" 
      className="py-12 md:py-16 relative"
    >
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 right-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#00c8ff]/10" />
        <div className="absolute bottom-20 left-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#00c8ff]/10" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-20"></div>
      </div>

      {/* Section title */}
      <motion.div 
        className="relative z-10 mb-8 md:mb-12 px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideUpVariant}
      >
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <svg 
              className="w-8 h-8 md:w-12 md:h-12 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center relative tracking-wide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            Offline/Online Strength & <span className="text-[#00c8ff] relative">
              Conditioning
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00c8ff] opacity-80" />
            </span>
          </motion.h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mt-6 opacity-60" />
        </div>
      </motion.div>
      
      {/* Main content cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start px-4 md:px-0">
        <motion.div 
          className="bg-black/40 backdrop-blur-sm rounded-lg p-4 md:p-8 relative overflow-hidden border border-[#2A2A2A] hover:border-[#00c8ff]/70 transition-colors duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          whileHover={{ y: -5 }}
          style={{
            boxShadow: "0 0 20px rgba(0, 200, 255, 0.1), inset 0 0 15px rgba(0, 200, 255, 0.03)"
          }}
        >
          {/* Animated border effects */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-[#00c8ff] via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#00c8ff] via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-transparent to-[#00c8ff] opacity-30"></div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl border-[#00c8ff]/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr border-[#00c8ff]/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl border-[#00c8ff]/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br border-[#00c8ff]/50"></div>
          
          {/* Training program header */}
          <motion.div 
            className="w-full h-32 md:h-48 rounded-lg mb-4 md:mb-6 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-700/90 backdrop-blur"></div>
            <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-20"></div>
            
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-white font-bold text-lg md:text-xl tracking-wide flex flex-col items-center">
                <span className="uppercase text-xl md:text-2xl tracking-widest">
                  S&C Training
                </span>
                <span className="text-xs md:text-sm mt-2 opacity-80 tracking-wider">PERFORMANCE PROGRAMS</span>
              </div>
            </div>
          </motion.div>
          
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white tracking-wide">Elite S&C Training Programs</h3>
          <p className="text-gray-300 leading-relaxed mb-4 font-light text-sm md:text-base">UFTA offers specialized Strength and Conditioning (S&C) training programs designed for athletes, fitness enthusiasts, and aspiring S&C coaches. Our expert faculty, including renowned Sports & Exercise Scientists, deliver these programs both in-person at our state-of-the-art facilities and through comprehensive online modules.</p>
          <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base">We focus on <span className="text-[#00c8ff] font-normal">evidence-based methodologies</span> to enhance athletic performance, prevent injuries, and optimize physical conditioning. Our training incorporates the latest research and practical techniques in sports science, ensuring you receive world-class coaching and education.</p>
        </motion.div>
        
        <motion.div 
          className="bg-black/40 backdrop-blur-sm rounded-lg p-4 md:p-8 relative overflow-hidden border border-[#2A2A2A] hover:border-[#00c8ff]/70 transition-colors duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          whileHover={{ y: -5 }}
          style={{
            boxShadow: "0 0 20px rgba(0, 200, 255, 0.1), inset 0 0 15px rgba(0, 200, 255, 0.03)"
          }}
        >
          {/* Animated border effects */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-[#00c8ff] via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#00c8ff] via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-transparent to-[#00c8ff] opacity-30"></div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl border-[#00c8ff]/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr border-[#00c8ff]/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl border-[#00c8ff]/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br border-[#00c8ff]/50"></div>
          
          <motion.h3 
            className="text-xl md:text-2xl font-semibold mb-4 text-white tracking-wide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >S&C Certification Courses</motion.h3>
          
          <p className="text-gray-300 leading-relaxed mb-4 font-light text-sm md:text-base">Become a certified Strength & Conditioning professional with UFTA. Our courses are designed to provide in-depth knowledge and practical skills.</p>
          
          <motion.div 
            className="mb-6 p-4 md:p-5 bg-black/30 border border-[#2A2A2A] rounded-lg relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit-pattern.svg')] opacity-5 pointer-events-none"></div>
            
            <h4 className="font-semibold text-[#00c8ff] mb-3 flex items-center text-sm md:text-base">
              <span className="inline-block w-2 h-2 bg-[#00c8ff] mr-2 rounded-full opacity-70" />
              Accredited Advanced Diploma in Strength and Conditioning (Level-6):
            </h4>
            
            <ul className="list-none pl-4 text-gray-300 space-y-2 text-xs md:text-sm">
              <li className="flex items-start md:items-center">
                <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70 mt-2 md:mt-0 flex-shrink-0"></span>
                <div className="flex flex-col md:flex-row">
                  <span className="text-white font-medium">Price:</span> 
                  <span className="md:ml-2">₹1,27,700</span>
                </div>
              </li>
              <li className="flex items-start md:items-center">
                <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70 mt-2 md:mt-0 flex-shrink-0"></span>
                <div className="flex flex-col md:flex-row">
                  <span className="text-white font-medium">Duration:</span> 
                  <span className="md:ml-2">7 months (including 1-month compulsory internship)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70 mt-2 flex-shrink-0"></span>
                <div className="flex flex-col">
                  <span className="text-white font-medium">Eligibility:</span> 
                  <span className="mt-1 md:mt-0 md:ml-2">Minimum 20 years of age, holder of Diploma in Fitness Training (NSQF Level 5) or two years of experience as a gym trainer</span>
                </div>
              </li>
              <li className="flex items-start md:items-center">
                <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70 mt-2 md:mt-0 flex-shrink-0"></span>
                <div className="flex flex-col md:flex-row">
                  <span className="text-white font-medium">Mode:</span> 
                  <span className="md:ml-2">Offline & Online</span>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <p className="text-gray-300 leading-relaxed mb-6 font-light text-sm md:text-base">Our S&C courses equip you to design and implement effective training programs for diverse populations, from amateur athletes to <span className="text-[#00c8ff] font-normal">elite competitors</span>.</p>
          
          <motion.a 
            href="#contact-form" 
            className="inline-flex items-center justify-center bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 md:px-6 py-2 rounded transition-colors duration-300 relative overflow-hidden text-sm md:text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Enquire Now</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default StrengthConditioningSection
