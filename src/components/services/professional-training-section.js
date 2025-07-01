import * as React from "react"
import { motion } from "framer-motion"

const ProfessionalTrainingSection = () => {
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
      id="professional-training" 
      className="py-12 md:py-16 relative"
    >
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-orange-500/10" />
        <div className="absolute bottom-20 right-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-orange-500/10" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20"></div>
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
              className="w-8 h-8 md:w-12 md:h-12 mr-3 text-orange-500" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
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
            Professional <span className="text-orange-500 relative">
              Training
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 opacity-80" />
            </span>
          </motion.h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-6 opacity-60" />
        </div>
      </motion.div>
      
      {/* Main content cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start px-4 md:px-0">
        <motion.div 
          className="bg-black/40 backdrop-blur-sm rounded-lg p-4 md:p-8 relative overflow-hidden border border-[#2A2A2A] hover:border-orange-500/70 transition-colors duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          whileHover={{ y: -5 }}
          style={{
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.1), inset 0 0 15px rgba(249, 115, 22, 0.03)"
          }}
        >
          {/* Static border effects */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-orange-500 via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-orange-500 via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-transparent to-orange-500 opacity-30"></div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl border-orange-500/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr border-orange-500/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl border-orange-500/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br border-orange-500/50"></div>
          
          {/* Training program header */}
          <motion.div 
            className="w-full h-32 md:h-48 rounded-lg mb-4 md:mb-6 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-700/90 backdrop-blur"></div>
            <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-20"></div>
            
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-white font-bold text-lg md:text-xl tracking-wide flex flex-col items-center">
                <span className="uppercase text-xl md:text-2xl tracking-widest">
                  Pro Training
                </span>
                <span className="text-xs md:text-sm mt-2 opacity-80 tracking-wider">CERTIFICATION PROGRAMS</span>
              </div>
            </div>
          </motion.div>
          
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white tracking-wide">Professional Fitness Training Courses</h3>
          <p className="text-gray-300 leading-relaxed mb-4 font-light text-sm md:text-base">UFTA offers comprehensive professional fitness training courses designed to transform passionate individuals into certified fitness professionals. Our curriculum combines theoretical knowledge with practical application, ensuring graduates are well-equipped to excel in the fitness industry.</p>
          <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base">Our training programs are delivered by <span className="text-orange-500 font-normal">industry experts</span> with years of experience in fitness coaching, sports science, and professional development. We provide both foundational and advanced courses to suit different career aspirations.</p>
        </motion.div>
        
        <motion.div 
          className="bg-black/40 backdrop-blur-sm rounded-lg p-4 md:p-8 relative overflow-hidden border border-[#2A2A2A] hover:border-orange-500/70 transition-colors duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          whileHover={{ y: -5 }}
          style={{
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.1), inset 0 0 15px rgba(249, 115, 22, 0.03)"
          }}
        >
          {/* Static border effects */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-orange-500 via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-orange-500 via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-transparent to-orange-500 opacity-30"></div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl border-orange-500/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr border-orange-500/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl border-orange-500/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br border-orange-500/50"></div>
          
          <motion.h3 
            className="text-xl md:text-2xl font-semibold mb-4 text-white tracking-wide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >Certification Programs</motion.h3>
          
          <p className="text-gray-300 leading-relaxed mb-4 font-light text-sm md:text-base">Achieve professional recognition with our accredited fitness training certifications. Our programs are designed to meet industry standards and employer expectations.</p>
          
          <motion.div 
            className="mb-6 p-4 md:p-5 bg-black/30 border border-[#2A2A2A] rounded-lg relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit-pattern.svg')] opacity-5 pointer-events-none"></div>
            
            <h4 className="font-semibold text-orange-500 mb-3 flex items-center text-sm md:text-base">
              <span className="inline-block w-2 h-2 bg-orange-500 mr-2 rounded-full opacity-70" />
              Diploma in Fitness Training (NSQF Level-5):
            </h4>
            
            <ul className="list-none pl-4 text-gray-300 space-y-2 text-xs md:text-sm">
              <li className="flex items-start md:items-center">
                <span className="inline-block w-1 h-1 bg-orange-500 mr-2 rounded-full opacity-70 mt-2 md:mt-0 flex-shrink-0"></span>
                <div className="flex flex-col md:flex-row">
                  <span className="text-white font-medium">Price:</span> 
                  <span className="md:ml-2">₹76,620</span>
                </div>
              </li>
              <li className="flex items-start md:items-center">
                <span className="inline-block w-1 h-1 bg-orange-500 mr-2 rounded-full opacity-70 mt-2 md:mt-0 flex-shrink-0"></span>
                <div className="flex flex-col md:flex-row">
                  <span className="text-white font-medium">Duration:</span> 
                  <span className="md:ml-2">6 months (including 1-month compulsory internship)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 bg-orange-500 mr-2 rounded-full opacity-70 mt-2 flex-shrink-0"></span>
                <div className="flex flex-col">
                  <span className="text-white font-medium">Eligibility:</span> 
                  <span className="mt-1 md:mt-0 md:ml-2">Minimum 18 years of age and 10th pass or equivalent</span>
                </div>
              </li>
              <li className="flex items-start md:items-center">
                <span className="inline-block w-1 h-1 bg-orange-500 mr-2 rounded-full opacity-70 mt-2 md:mt-0 flex-shrink-0"></span>
                <div className="flex flex-col md:flex-row">
                  <span className="text-white font-medium">Mode:</span> 
                  <span className="md:ml-2">Offline & Online</span>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <p className="text-gray-300 leading-relaxed mb-6 font-light text-sm md:text-base">Our certification programs prepare you for successful careers as <span className="text-orange-500 font-normal">fitness trainers, gym instructors</span>, and wellness coaches in various fitness environments.</p>
          
          <motion.a 
            href="#contact-form" 
            className="inline-flex items-center justify-center bg-transparent border border-orange-500 text-white hover:bg-orange-500/10 px-4 md:px-6 py-2 rounded transition-colors duration-300 relative overflow-hidden text-sm md:text-base"
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

export default ProfessionalTrainingSection
