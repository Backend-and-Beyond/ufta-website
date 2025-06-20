import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { pageAnimations, viewportSettings } from "../../utils/animations"

const GymFranchiseSection = () => {
  const { fadeInUp, staggerContainer, scaleUp, slideInLeft, slideInRight } = pageAnimations.standard;
  const controls = useAnimation();
  
  // Animation for the icon
  React.useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
    });
  }, [controls]);

  return (
    <motion.section 
      id="gym-franchise" 
      className="py-12 md:py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
    >
      {/* Sci-fi background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Futuristic network grid for business/franchise concept */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div 
              key={`v-${i}`} 
              className="h-full w-px bg-purple-500/30"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 opacity-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div 
              key={`h-${i}`} 
              className="w-full h-px bg-purple-500/30"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
        
        {/* Connected node animations for franchise network representation */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div 
              key={`node-${i}`}
              className="absolute w-2 h-2 rounded-full bg-purple-500/30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 2 + i, repeat: Infinity }}
            />
          ))}
          
          {/* Connection lines between nodes */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.1)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
              </linearGradient>
            </defs>
            <motion.path 
              d="M20,40 L35,50 L50,30 L65,50 L80,40" 
              stroke="url(#lineGradient)" 
              strokeWidth="1" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            />
          </svg>
        </div>
      </div>

      {/* Section header with animated icon */}
      <div className="relative z-10 mb-8 md:mb-12 px-4 md:px-0">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="flex items-center justify-center mb-6"
            animate={controls}
          >
            <motion.svg 
              className="w-8 h-8 md:w-12 md:h-12 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M13.5 21H5.25A2.25 2.25 0 0 1 3 18.75V16.5M13.5 21V11.25M13.5 21H21M3.75 10.5V18.75c0 .621.504 1.125 1.125 1.125H9.75V11.25H3.75Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M10.5 6h9.75M10.5 6a2.25 2.25 0 1 0-4.5 0h4.5Zm0 0V3.75m4.125 2.25V3.75m0 0H21m-4.125 0a2.25 2.25 0 1 0-4.5 0h4.5Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center relative tracking-wider"
            variants={slideInLeft}
          >
            Gym Franchise & Setup <span className="text-[#00c8ff] relative">
              Consultancy
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
      
      {/* Main content with holographic effect */}
      <motion.div 
        className="bg-black/40 backdrop-blur-sm rounded-lg p-4 md:p-10 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 border border-[#2A2A2A] hover:border-purple-500/70 transition-all duration-300 relative z-10 mx-4 md:mx-0"
        variants={fadeInUp}
        style={{
          boxShadow: "0 0 20px rgba(0, 200, 255, 0.05), inset 0 0 15px rgba(0, 200, 255, 0.02)"
        }}
      >
        {/* Animated border effects */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-transparent to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-purple-500 via-transparent to-transparent opacity-30"></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-transparent to-purple-500 opacity-30"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl border-purple-500/70"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr border-purple-500/70"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl border-purple-500/70"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br border-purple-500/70"></div>
        
        {/* Background circuit pattern */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5 pointer-events-none"></div>
        
        {/* Franchise holographic image */}
        <motion.div 
          className="w-full md:w-2/5 h-48 md:h-48 rounded-lg relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 md:transform md:perspective-1000"
          whileHover={{ scale: 1.05, rotateY: -5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-purple-700/90 backdrop-blur"></div>
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-20"></div>
          
          {/* Holographic franchise display */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div className="text-white font-bold text-lg md:text-xl flex flex-col items-center">
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 md:h-12 md:w-12 mb-3 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" 
                />
              </motion.svg>
              <motion.span 
                className="uppercase text-xl md:text-2xl tracking-widest"
                animate={{ 
                  textShadow: ["0 0 5px rgba(147,51,234,0.5)", "0 0 15px rgba(147,51,234,0.8)", "0 0 5px rgba(147,51,234,0.5)"] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                GYM FRANCHISE
              </motion.span>
              <motion.span 
                className="text-xs md:text-sm mt-2 opacity-80 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 1 }}
              >
                BUSINESS SOLUTIONS
              </motion.span>
            </motion.div>
          </motion.div>
          
          {/* Animated scanning effect */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: ['-100%', '100%', '100%'] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "loop", 
              ease: "linear"
            }}
          >
            <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-purple-400/30 to-transparent"></div>
          </motion.div>
          
          {/* Network connection nodes */}
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div 
                key={`node-inner-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-white"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + (i % 3) * 25}%`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Service content */}
        <div className="md:w-3/5">
          <motion.h3 
            className="text-xl md:text-2xl font-semibold mb-4 text-white tracking-wide text-center md:text-left"
            variants={fadeInUp}
          >
            Launch Your Own Fitness Center
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 leading-relaxed mb-3 font-light text-sm md:text-base"
            variants={fadeInUp}
            custom={1}
          >
            Dreaming of owning a successful fitness center? UFTA offers expert consultancy and support for aspiring gym owners. While we currently do not offer a direct franchise model, we provide <span className="text-purple-400 font-normal">comprehensive guidance</span> on setting up and managing your gym, drawing from our extensive experience since 2006 in the fitness industry.
          </motion.p>
          
          <motion.p 
            className="text-gray-300 leading-relaxed mb-6 font-light text-sm md:text-base"
            variants={fadeInUp}
            custom={2}
          >
            Our consultancy services cover facility design, equipment selection, operational strategies, staff training, and marketing to help you establish a <span className="text-purple-400 font-normal">thriving fitness business</span>. Explore potential opportunities to leverage our expertise and build a recognized fitness brand.
          </motion.p>
          
          <motion.a 
            href="#contact-form" 
            className="inline-flex items-center justify-center bg-transparent border border-purple-500 text-white hover:bg-purple-500/10 px-4 md:px-6 py-2 md:py-3 rounded transition-all duration-300 relative overflow-hidden text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={scaleUp}
            custom={3}
          >
            <span className="relative z-10">Discuss Your Project</span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 transform translate-x-[-100%]"
              animate={{ translateX: ['100%', '-100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            />
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default GymFranchiseSection
