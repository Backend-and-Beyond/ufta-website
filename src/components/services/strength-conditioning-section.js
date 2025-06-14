import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { pageAnimations, viewportSettings } from "../../utils/animations"

const StrengthConditioningSection = () => {
  const { fadeInUp, staggerContainer, scaleUp, slideInLeft, slideInRight } = pageAnimations.standard;
  const controls = useAnimation();
  
  // Animation for the section title glow effect
  React.useEffect(() => {
    controls.start({
      opacity: [0.5, 1, 0.5],
      transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
    });
  }, [controls]);

  return (
    <motion.section 
      id="strength-conditioning" 
      className="py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
    >
      {/* Sci-fi background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute top-10 right-10 w-24 h-24 rounded-full bg-[#00c8ff]/5"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-[#00c8ff]/5"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-20"></div>
      </div>

      {/* Section title with animated elements */}
      <div className="relative z-10 mb-12">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="flex items-center justify-center mb-6"
            animate={controls}
          >
            <motion.svg 
              className="w-12 h-12 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative tracking-wide"
            variants={slideInLeft}
          >
            Offline/Online Strength & <span className="text-[#00c8ff] relative">
              Conditioning
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00c8ff]"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 0.8 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mt-6 opacity-60"
            animate={{ 
              width: ["0%", "100%", "0%"],
              opacity: [0, 0.6, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut" 
            }}
          />
        </div>
      </div>
      
      {/* Main content with holographic card effect */}
      <motion.div 
        className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        variants={staggerContainer}
      >
        <motion.div 
          className="bg-black/40 backdrop-blur-sm rounded-lg p-8 relative overflow-hidden border border-[#2A2A2A] group hover:border-[#00c8ff]/70 transition-all duration-300"
          variants={scaleUp}
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
          
          {/* Training program header with futuristic effect */}
          <motion.div 
            className="w-full h-48 rounded-lg mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-700/90 backdrop-blur"></div>
            <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-20"></div>
            <motion.div 
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#00c8ff]/20 to-transparent transform translate-x-full"></div>
            </motion.div>
            
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-white font-bold text-xl tracking-wide flex flex-col items-center">
                <motion.span 
                  className="uppercase text-2xl tracking-widest"
                  animate={{ 
                    textShadow: ["0 0 5px rgba(0,200,255,0.5)", "0 0 15px rgba(0,200,255,0.8)", "0 0 5px rgba(0,200,255,0.5)"] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  S&C Training
                </motion.span>
                <span className="text-sm mt-2 opacity-80 tracking-wider">PERFORMANCE PROGRAMS</span>
              </div>
            </div>
          </motion.div>
          
          <h3 className="text-2xl font-semibold mb-4 text-white tracking-wide">Elite S&C Training Programs</h3>
          <p className="text-gray-300 leading-relaxed mb-4 font-light">UFTA offers specialized Strength and Conditioning (S&C) training programs designed for athletes, fitness enthusiasts, and aspiring S&C coaches. Our expert faculty, including renowned Sports & Exercise Scientists, deliver these programs both in-person at our state-of-the-art facilities and through comprehensive online modules.</p>
          <p className="text-gray-300 leading-relaxed font-light">We focus on <span className="text-[#00c8ff] font-normal">evidence-based methodologies</span> to enhance athletic performance, prevent injuries, and optimize physical conditioning. Our training incorporates the latest research and practical techniques in sports science, ensuring you receive world-class coaching and education.</p>
        </motion.div>
        
        <motion.div 
          className="bg-black/40 backdrop-blur-sm rounded-lg p-8 relative overflow-hidden border border-[#2A2A2A] group hover:border-[#00c8ff]/70 transition-all duration-300"
          variants={scaleUp}
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
            className="text-2xl font-semibold mb-4 text-white tracking-wide"
            variants={fadeInUp}
          >S&C Certification Courses</motion.h3>
          
          <p className="text-gray-300 leading-relaxed mb-4 font-light">Become a certified Strength & Conditioning professional with UFTA. Our courses are designed to provide in-depth knowledge and practical skills.</p>
          
          <motion.div 
            className="mb-6 p-5 bg-black/30 border border-[#2A2A2A] rounded-lg relative"
            variants={fadeInUp}
            custom={1}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit-pattern.svg')] opacity-5 pointer-events-none"></div>
            
            <h4 className="font-semibold text-[#00c8ff] mb-3 flex items-center">
              <motion.span 
                className="inline-block w-2 h-2 bg-[#00c8ff] mr-2 rounded-full"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  boxShadow: ["0 0 0px #00c8ff", "0 0 10px #00c8ff", "0 0 0px #00c8ff"] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Accredited Advanced Diploma in Strength and Conditioning (Level-6):
            </h4>
            
            <ul className="list-none pl-4 text-gray-300 space-y-2 text-sm">
              <li className="flex items-center">
                <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70"></span>
                <span className="text-white font-medium">Price:</span> 
                <span className="ml-2">₹1,27,700</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70"></span>
                <span className="text-white font-medium">Duration:</span> 
                <span className="ml-2">7 months (including 1-month compulsory internship)</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70"></span>
                <span className="text-white font-medium">Eligibility:</span> 
                <span className="ml-2">Minimum 20 years of age, holder of Diploma in Fitness Training (NSQF Level 5) or two years of experience as a gym trainer</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70"></span>
                <span className="text-white font-medium">Mode:</span> 
                <span className="ml-2">Offline & Online</span>
              </li>
            </ul>
          </motion.div>
          
          <p className="text-gray-300 leading-relaxed mb-6 font-light">Our S&C courses equip you to design and implement effective training programs for diverse populations, from amateur athletes to <span className="text-[#00c8ff] font-normal">elite competitors</span>.</p>
          
          <motion.a 
            href="#contact-form" 
            className="inline-flex items-center justify-center bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-6 py-2 rounded transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Enroll Now</span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/0 via-[#00c8ff]/20 to-[#00c8ff]/0 transform translate-x-[-100%]"
              animate={{ translateX: ['100%', '-100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default StrengthConditioningSection
