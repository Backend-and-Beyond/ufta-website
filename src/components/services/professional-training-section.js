import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { pageAnimations, viewportSettings } from "../../utils/animations"

const ProfessionalTrainingSection = () => {
  const { fadeInUp, staggerContainer, scaleUp, slideInLeft, slideInRight } = pageAnimations.standard;
  const controls = useAnimation();
  
  // Pulse animation for icon
  React.useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
    });
  }, [controls]);

  const trainingPrograms = [
    {
      title: "Diploma in Professional Personal Fitness Training (Level-5)",
      description: "Become a certified Personal Trainer, equipped with the skills to guide clients towards their fitness goals effectively and safely.",
      price: "₹95,000",
      duration: "6 months (incl. 1-month internship)",
      eligibility: "18+ years, 10+2 diploma, 1-year weight training experience",
      mode: "Offline & Online",
      gradient: "from-purple-600 to-purple-700",
      label: "Personal Trainer Cert",
      color: "#9C27B0"
    },
    {
      title: "Diploma in Professional Group Fitness Training (Level-5)",
      description: "Master the art of leading dynamic and effective group fitness classes, catering to diverse fitness levels and interests.",
      price: "₹95,000",
      duration: "6 months (incl. 1-month internship)",
      eligibility: "18+ years, 10+2 diploma, 1-year weight training experience",
      mode: "Offline & Online",
      gradient: "from-pink-600 to-pink-700",
      label: "Group Fitness Cert",
      color: "#E91E63"
    },
    {
      title: "Diploma in Fitness & Gym Management (Level-7)",
      description: "Gain the expertise to manage fitness centers and gyms efficiently, covering operations, marketing, and client relations.",
      price: "₹1,53,776",
      duration: "12 months (incl. 1-month internship)",
      eligibility: "21+ years, Diploma in S&C (NSQF L6), 2 years S&C coach experience",
      mode: "Offline & Online",
      gradient: "from-yellow-600 to-yellow-700",
      label: "Gym Management Cert",
      color: "#FFC107"
    },
    {
      title: "Professional Diploma in Sports Injury Rehabilitation & Return to Performance (Level-7)",
      description: "Specialize in sports injury rehabilitation, helping athletes recover and return to peak performance safely and effectively.",
      price: "₹1,25,250",
      duration: "8 months (incl. 1-month internship)",
      eligibility: "21+ years, relevant diplomas or degree, 3 years S&C coach experience",
      mode: "Offline & Online",
      gradient: "from-red-600 to-red-700",
      label: "Injury Rehab Cert",
      color: "#F44336"
    },
    {
      title: "PROPTA International Personal Trainer Certification",
      description: "Achieve a globally recognized Personal Trainer certification from PROPTA USA, valid in 199 countries. Endorsed by IFBB Pro League & BSE, Govt of California.",
      price: "$1800 USD",
      duration: "6 Weeks (Online/Offline Blend Mode)",
      eligibility: "18+ years, CPR/AED certification required for graduation",
      mode: "Online/Offline Blend",
      gradient: "from-green-600 to-green-700",
      label: "PROPTA PT Cert",
      color: "#4CAF50"
    },
    {
      title: "University Affiliated Degree Programs",
      description: "UFTA is the first institute in India to launch a UGC approved B.Sc. in Fitness and Athletic Conditioning in association with Mahapurusha Srimanta Sankaradeva Viswavidyalaya. We also offer other degree pathways.",
      gradient: "from-blue-600 to-blue-700",
      label: "University Degrees",
      color: "#2196F3",
      isSpecial: true
    }
  ];

  return (
    <motion.section 
      id="professional-training" 
      className="py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
    >
      {/* Sci-fi background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full">
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <radialGradient id="gridGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridGradient)" />
          </svg>
        </div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div 
              key={`v-${i}`} 
              className="h-full w-px bg-[#00c8ff]/20"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div 
              key={`h-${i}`} 
              className="w-full h-px bg-[#00c8ff]/20"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Section header with animated icon */}
      <div className="relative z-10 mb-16">
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
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative tracking-wider"
            variants={slideInLeft}
          >
            Online/Offline Professional <span className="text-[#00c8ff] relative">
              Training
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
      
      <motion.p 
        className="text-center text-xl leading-relaxed mb-12 text-gray-300 relative z-10 max-w-4xl mx-auto font-light"
        variants={fadeInUp}
      >
        Turn your passion for fitness into a <span className="text-[#00c8ff] font-normal">rewarding career</span> with UFTA's comprehensive professional training programs. We have certified over <span className="text-[#00c8ff] font-semibold">2,500</span> fitness professionals since 2006.
      </motion.p>
      
      {/* Program cards with enhanced sci-fi UI */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        variants={staggerContainer}
      >
        {trainingPrograms.map((program, index) => (
          <motion.div 
            key={index}
            className="bg-black/40 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden group border border-[#2A2A2A] hover:border-[#00c8ff]/70 transition-all duration-300"
            variants={scaleUp}
            custom={index}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            style={{
              boxShadow: "0 0 20px rgba(0, 200, 255, 0.05), inset 0 0 15px rgba(0, 200, 255, 0.02)"
            }}
          >
            {/* Border and corner effects */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l rounded-tl" style={{ borderColor: program.color }}></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r rounded-tr" style={{ borderColor: program.color }}></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l rounded-bl" style={{ borderColor: program.color }}></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r rounded-br" style={{ borderColor: program.color }}></div>
            
            {/* Program header with futuristic style */}
            <motion.div 
              className={`w-full h-32 rounded-lg mb-5 relative overflow-hidden`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${program.gradient} bg-opacity-90`}></div>
              <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-20"></div>
              
              {/* Animated glow effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  translateX: ['-100%', '100%', '100%'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  ease: "linear",
                  delay: index * 0.5
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </motion.div>
              
              {/* Program label */}
              <div className="absolute inset-0 flex items-center justify-center flex-col p-3">
                <span className="text-white font-bold tracking-wider text-lg">{program.label}</span>
                {program.isSpecial && (
                  <div className="flex items-center mt-2">
                    <motion.div 
                      className="w-2 h-2 bg-white rounded-full mx-1"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-white rounded-full mx-1"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-white rounded-full mx-1"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
            
            {/* Program content */}
            <motion.h3 
              className="text-lg font-semibold mb-3 text-white tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
            >
              {program.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-400 mb-3 text-sm font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
            >
              {program.description}
            </motion.p>
            
            {!program.isSpecial && (
              <motion.ul 
                className="list-none pl-1 text-gray-300 space-y-2 text-xs mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70"></span>
                  <span className="text-white font-medium">Price:</span> 
                  <span className="ml-2">{program.price}</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70"></span>
                  <span className="text-white font-medium">Duration:</span> 
                  <span className="ml-2">{program.duration}</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70"></span>
                  <span className="text-white font-medium">Eligibility:</span> 
                  <span className="ml-2">{program.eligibility}</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 bg-[#00c8ff] mr-2 rounded-full opacity-70"></span>
                  <span className="text-white font-medium">Mode:</span> 
                  <span className="ml-2">{program.mode}</span>
                </li>
              </motion.ul>
            )}
            
            {/* Animated button */}
            <motion.a 
              href="#contact-form" 
              className="inline-flex items-center justify-center bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded text-xs transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ borderColor: program.color }}
            >
              <span className="relative z-10">{program.isSpecial ? "Explore Degrees" : "Learn More"}</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%]"
                animate={{ translateX: ['100%', '-100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
              />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default ProfessionalTrainingSection
