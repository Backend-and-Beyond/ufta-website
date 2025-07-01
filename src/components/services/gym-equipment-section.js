import * as React from "react"
import { motion } from "framer-motion"

const GymEquipmentSection = () => {
  // Local animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="gym-equipment" 
      className="py-12 md:py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      {/* Static decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Static technical pattern for machinery/equipment theme */}
        <div className="absolute bottom-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={`grid-${i}`}
              className="absolute h-px bg-cyan-500/50"
              style={{
                width: `${Math.random() * 20 + 5}%`,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 90 - 45}deg`,
              }}
            />
          ))}
        </div>
        
        {/* Static gear-like element to represent machinery */}
        <div className="absolute -bottom-20 right-10 w-40 h-40 rounded-full border border-cyan-800/20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={`tooth-${i}`}
              className="absolute w-3 h-8 bg-cyan-800/10"
              style={{ 
                left: 'calc(50% - 1.5px)', 
                top: '-5px', 
                transformOrigin: 'bottom center',
                transform: `rotate(${i * 30}deg) translateY(-15px)` 
              }}
            />
          ))}
        </div>
      </div>

      {/* Section header with icon */}
      <div className="relative z-10 mb-8 md:mb-12 px-4 md:px-0">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
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
                d="M4.5 7.5A2.25 2.25 0 0 1 6.75 5.25h10.5a2.25 2.25 0 0 1 2.25 2.25v3.75a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V7.5Z"
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M5.25 5.25V3m13.5 2.25V3"
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M5.25 13.5v2.25m13.5-2.25v2.25"
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M7.5 15.75h9"
              />
            </svg>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center relative tracking-wider"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            Gym Equipment <span className="text-[#00c8ff] relative">
              Sourcing
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00c8ff] opacity-80" />
            </span>
          </motion.h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mt-6 opacity-60" />
        </div>
      </div>
      
      {/* Main content */}
      <motion.div 
        className="bg-black/40 backdrop-blur-sm rounded-lg p-4 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 border border-[#2A2A2A] hover:border-cyan-500/70 transition-all duration-300 relative z-10 mx-4 md:mx-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{
          boxShadow: "0 0 20px rgba(0, 200, 255, 0.05), inset 0 0 15px rgba(0, 200, 255, 0.02)"
        }}
      >
        {/* Static border effects */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-transparent to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-transparent to-transparent opacity-30"></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-transparent to-cyan-500 opacity-30"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl border-cyan-500/70"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr border-cyan-500/70"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl border-cyan-500/70"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br border-cyan-500/70"></div>
        
        {/* Background circuit pattern */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5 pointer-events-none"></div>
        
        {/* Equipment display */}
        <div className="w-full md:w-2/5 h-48 md:h-48 rounded-lg relative overflow-hidden hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-cyan-700/90 backdrop-blur"></div>
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-20"></div>
          
          {/* Equipment display content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white font-bold text-lg md:text-xl flex flex-col items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 md:h-12 md:w-12 mb-3 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" 
                />
              </svg>
              <span className="uppercase text-xl md:text-2xl tracking-widest">
                GYM EQUIPMENT
              </span>
              <span className="text-xs md:text-sm mt-2 opacity-80 tracking-wider">
                PREMIUM QUALITY
              </span>
            </div>
          </div>
        </div>
        
        {/* Service content */}
        <div className="md:w-3/5">
          <motion.h3 
            className="text-xl md:text-2xl font-semibold mb-4 text-white tracking-wide text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Source High-Quality Gym Equipment
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 leading-relaxed mb-3 font-light text-sm md:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Planning to set up a new gym or upgrade your existing facility? UFTA can assist you in sourcing <span className="text-cyan-400 font-normal">top-quality, durable, and biomechanically sound</span> fitness equipment. Through our strategic partnerships, including with entities like XSPORTON FITNESS, an exclusive showroom for brands such as Realleader Fitness USA, we connect you with reliable sellers and a wide range of equipment options to suit your specific requirements and budget.
          </motion.p>
          
          <motion.p 
            className="text-gray-300 leading-relaxed mb-6 font-light text-sm md:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Our guidance ensures you invest in equipment that provides the <span className="text-cyan-400 font-normal">best training experience</span> and long-term value for your fitness center.
          </motion.p>
          
          <motion.a 
            href="#contact-form" 
            className="inline-flex items-center justify-center bg-transparent border border-cyan-500 text-white hover:bg-cyan-500/10 px-4 md:px-6 py-2 md:py-3 rounded transition-all duration-300 relative overflow-hidden text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <span className="relative z-10">Enquire About Equipment</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default GymEquipmentSection
