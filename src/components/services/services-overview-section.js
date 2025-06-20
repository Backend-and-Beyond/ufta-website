import * as React from "react"
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { pageAnimations, viewportSettings } from "../../utils/animations"

const ServicesOverviewSection = () => {
  const { fadeInUp, staggerContainer, scaleUp, slideInLeft, slideInRight } = pageAnimations.standard;
  const [activeService, setActiveService] = React.useState(null);
  const [isHovering, setIsHovering] = React.useState(false);
  const controls = useAnimation();
  
  // Reactive values for glow effect
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useTransform(glowX, [-100, 0, 100], [0.3, 0.6, 0.3]);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    glowX.set(x);
    glowY.set(y);
  };

  // Pulse animation for section title
  React.useEffect(() => {
    controls.start({
      scale: [1, 1.03, 1],
      transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
    });
  }, [controls]);
  
  // Services data with icons and descriptions
  const services = [
    {
      id: 'certification',
      title: 'Professional Certification',
      description: 'Become a certified fitness professional with our internationally recognized courses.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: '#00c8ff',
      details: 'Our certification programs are internationally accredited and designed to equip you with cutting-edge knowledge in fitness science. Courses range from basic to advanced levels, with flexible learning options.'
    },
    {
      id: 'strength',
      title: 'Strength & Conditioning',
      description: 'Access elite S&C training and coaching for peak athletic performance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      color: '#7E57C2',
      details: 'Our strength and conditioning programs are built on science-backed methodologies. We offer personalized training regimens for athletes, sports teams, and fitness enthusiasts seeking peak performance.'
    },
    {
      id: 'nutrition',
      title: 'Nutritional Counselling',
      description: 'Personalized, evidence-based nutrition plans for your health and fitness goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M8 7H4 M8 12H4 M8 17H4" />
        </svg>
      ),
      color: '#43A047',
      details: 'Our nutrition experts create customized meal plans and dietary strategies based on your unique biochemistry, fitness goals, and lifestyle factors. We focus on sustainable approaches that deliver long-term results.'
    },
    {
      id: 'gym',
      title: 'Gym Setup & Support',
      description: 'Guidance on gym equipment sourcing and franchise opportunities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: '#FF7043',
      details: 'From concept to completion, we provide end-to-end support for gym setup, including equipment selection, layout design, staff training, and operational best practices.'
    },
    {
      id: 'research',
      title: 'Research & Development',
      description: 'Contributing to the advancement of sports and exercise sciences through ongoing research.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: '#EC407A',
      details: 'Our dedicated research team conducts groundbreaking studies in exercise physiology, sports nutrition, and biomechanics. Our findings are published in peer-reviewed journals and integrated into our training methodologies.'
    },
    {
      id: 'education',
      title: 'Continuing Education',
      description: 'Advanced workshops and specializations for continuous professional growth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: '#26A69A',
      details: 'Stay at the cutting edge of the fitness industry with our continuing education programs. We offer specialized workshops, webinars, and advanced certifications to help you expand your expertise.'
    },
  ];

  return (
    <motion.section 
      id="overview" 
      className="py-12 md:py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <motion.circle 
              cx="50" 
              cy="50" 
              r="50" 
              fill="url(#glowGradient)"
              style={{ 
                opacity: glowOpacity,
                x: glowX,
                y: glowY
              }}
            />
          </svg>
        </div>
        <div className="grid grid-cols-12 grid-rows-12 absolute inset-0">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div 
              key={i}
              className="w-1 h-1 bg-[#00c8ff] rounded-full opacity-10" 
              style={{ 
                x: Math.random() * 100 - 50, 
                y: Math.random() * 100 - 50 
              }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-30"></div>
      </div>

      {/* Sci-fi title with animated elements */}
      <div className="relative z-10 mb-12 md:mb-16">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="relative"
            animate={controls}
          >
            <svg className="w-12 h-12 md:w-16 md:h-16 text-[#00c8ff] opacity-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M12 2L2 7L12 12L22 7L12 2Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path 
                d="M2 17L12 22L22 17" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.path 
                d="M2 12L12 17L22 12" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
              />
            </svg>
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-[#00c8ff]"
              animate={{ 
                width: ["0%", "100%", "0%"],
                opacity: [0, 0.8, 0],
                x: ["-50%", "-50%", "-50%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-white text-center relative mt-6 tracking-wider"
            variants={slideInLeft}
          >
            OUR <span className="text-[#00c8ff] relative">
              SERVICES
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00c8ff]"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 0.8 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-lg mt-4 max-w-2xl text-center font-light"
            variants={slideInRight}
          >
            <span className="text-[#00c8ff]">Advanced</span> fitness solutions powered by <span className="text-[#00c8ff]">cutting-edge</span> methodology
          </motion.p>
          
          <motion.div 
            className="w-16 h-px bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mt-6 opacity-80"
            animate={{ 
              width: ["0%", "100%", "0%"],
              opacity: [0, 0.8, 0] 
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
      
      {/* Futuristic container with holographic effect */}
      <motion.div 
        className="bg-black/40 backdrop-blur-sm rounded-lg p-6 md:p-10 relative overflow-hidden border border-[#2A2A2A] z-10"
        variants={fadeInUp}
        style={{
          boxShadow: "0 0 30px rgba(0, 200, 255, 0.1), inset 0 0 30px rgba(0, 200, 255, 0.05)"
        }}
      >
        {/* Animated border effects */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-[#00c8ff] via-transparent to-transparent opacity-50"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#00c8ff] via-transparent to-transparent opacity-50"></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-transparent to-[#00c8ff] opacity-50"></div>
        
        {/* Animated circuit-like pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <motion.path 
              d="M0,40 L40,40 L40,0" 
              stroke="#00c8ff" 
              strokeWidth="0.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path 
              d="M100,60 L60,60 L60,100" 
              stroke="#00c8ff" 
              strokeWidth="0.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            {/* More circuit patterns */}
            <motion.path 
              d="M0,80 L20,80 L20,100" 
              stroke="#00c8ff" 
              strokeWidth="0.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 1.1 }}
            />
            <motion.path 
              d="M100,20 L80,20 L80,0" 
              stroke="#00c8ff" 
              strokeWidth="0.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 1.4 }}
            />
          </svg>
        </div>
        
        {/* Section content with enhanced typography */}
        <div className="relative z-10">
          <motion.p 
            className="text-gray-300 leading-relaxed mb-5 text-lg font-light"
            variants={fadeInUp}
            custom={1}
          >
            Universal Fitness Training Academy (UFTA) has been a <span className="text-[#00c8ff] font-normal">pioneer</span> in providing fitness education in India since 2006. We are dedicated to certifying professional personal trainers, Strength & Conditioning (S&C) coaches, and sports nutritionists. UFTA is also recognized as one of the world's top fitness academies, actively conducting research in sport & exercise sciences, S&C, and nutrition.
          </motion.p>
          
          <motion.p 
            className="text-gray-300 leading-relaxed mb-5 text-lg font-light"
            variants={fadeInUp}
            custom={2}
          >
            Our courses, including Degrees, Diplomas, and Certifications, are designed to equip fitness professionals with <span className="text-[#00c8ff] font-normal">evidence-based knowledge</span> and practical skills, recognized globally in private and government universities, sports academies, gyms, and high-performance centers.
          </motion.p>
          
          <motion.p 
            className="text-gray-300 leading-relaxed mb-10 text-lg font-light"
            variants={fadeInUp}
            custom={3}
          >
            Our services extend beyond education. We offer specialized training programs, nutritional guidance, and support for fitness entrepreneurs. UFTA is committed to advancing the fitness industry through <span className="text-[#00c8ff] font-normal">excellence in education</span>, research, and practical application.
          </motion.p>
        </div>
        
        {/* Sci-fi services display */}
        <motion.h3 
          className="text-3xl font-bold text-center mb-12 mt-8 text-white relative inline-block"
          variants={scaleUp}
          custom={4}
        >
          <span className="relative z-10">
            KEY <span className="text-[#00c8ff]">SERVICE</span> AREAS
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent"
              animate={{ 
                width: ["0%", "100%"],
                x: ["0%", "0%"]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut" 
              }}
            />
          </span>
        </motion.h3>
        
        {/* Interactive service cards with hover effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          custom={5}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="group relative"
              variants={scaleUp}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/90 rounded-lg transform scale-[1.02] opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              <div className="relative bg-black/30 p-4 md:p-6 rounded-lg border border-[#2A2A2A] group-hover:border-[#00c8ff]/70 transition-all duration-300 h-full flex flex-col">
                {/* Top glowing line */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{ background: service.color }}
                  animate={{ 
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse", 
                    delay: index * 0.2
                  }}
                />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l rounded-tl" style={{ borderColor: service.color }} />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r rounded-tr" style={{ borderColor: service.color }} />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l rounded-bl" style={{ borderColor: service.color }} />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r rounded-br" style={{ borderColor: service.color }} />
                
                {/* Service content */}
                <motion.div
                  style={{ color: service.color }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service.icon}
                </motion.div>
                
                <h4 
                  className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h4>
                
                <p className="text-gray-300 text-sm flex-grow">{service.description}</p>
                
                <motion.button
                  className="mt-4 text-[#00c8ff] text-sm flex items-center gap-1 opacity-80 group-hover:opacity-100"
                  whileHover={{ x: 3 }}
                  style={{ color: service.color }}
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Service details popup */}
        <AnimatePresence>
          {activeService && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
            >
              <motion.div 
                className="bg-[#0a0a0a] border border-[#2A2A2A] rounded-lg p-8 max-w-2xl w-full relative overflow-hidden"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Detail popup decorative elements */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
                <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5 pointer-events-none"></div>
                
                {services.find(s => s.id === activeService) && (
                  <>
                    <div className="flex items-center mb-6">
                      <div style={{ color: services.find(s => s.id === activeService).color }}>
                        {services.find(s => s.id === activeService).icon}
                      </div>
                      <h3 
                        className="text-2xl font-bold ml-4"
                        style={{ color: services.find(s => s.id === activeService).color }}
                      >
                        {services.find(s => s.id === activeService).title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {services.find(s => s.id === activeService).details}
                    </p>
                    
                    <motion.button
                      className="absolute top-4 right-4 text-gray-400 hover:text-white"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setActiveService(null)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  )
}

export default ServicesOverviewSection
