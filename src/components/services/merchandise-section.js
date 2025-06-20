import * as React from "react"
import { motion, useAnimation, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { pageAnimations, viewportSettings } from "../../utils/animations"

const MerchandiseSection = () => {
  const animations = pageAnimations.standard;
  const controls = useAnimation();
  const [selectedItem, setSelectedItem] = React.useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Animation for the holographic effect
  React.useEffect(() => {
    controls.start({
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      transition: { duration: 10, repeat: Infinity, repeatType: "loop" }
    });
    
    const intervalId = setInterval(() => {
      controls.start({
        opacity: [0.7, 1, 0.7],
        scale: [1, 1.02, 1],
        transition: { duration: 2 }
      });
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, [controls]);
  
  // Merchandise items for the showcase
  const merchandiseItems = [
    { id: 1, name: "Performance Tee", description: "Moisture-wicking fabric with UFTA logo", color: "from-blue-400 to-purple-500" },
    { id: 2, name: "Training Shorts", description: "Flexible, lightweight with pockets", color: "from-purple-400 to-pink-500" },
    { id: 3, name: "Gym Bag", description: "Spacious with dedicated compartments", color: "from-teal-400 to-blue-500" },
    { id: 4, name: "Water Bottle", description: "Insulated stainless steel design", color: "from-green-400 to-teal-500" }
  ];
  
  // Handle mouse movement for holographic effect
  const handleMouseMove = (event) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  
  // Calculate highlight position
  const highlightX = useTransform(mouseX, (val) => val - 150);
  const highlightY = useTransform(mouseY, (val) => val - 150);

  return (
    <motion.section 
      id="merchandise" 
      className="py-12 md:py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={animations.fadeInUp}
    >
      {/* Sci-fi background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Digital product display grid */}
        <div className="absolute inset-0 grid grid-cols-8 opacity-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div 
              key={`v-${i}`} 
              className="h-full w-px bg-blue-400/30"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-8 opacity-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div 
              key={`h-${i}`} 
              className="w-full h-px bg-blue-400/30"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
        
        {/* Digital storefront animations */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="merchandiseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 200, 255, 0.1)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 200, 255, 0.1)" />
            </linearGradient>
          </defs>
          <motion.path 
            d="M10,50 C30,20 70,20 90,50 C70,80 30,80 10,50 Z" 
            stroke="url(#merchandiseGradient)" 
            strokeWidth="1" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          />
        </svg>
      </div>

      {/* Section header with animated icon */}
      <div className="relative z-10 mb-8 md:mb-12 px-4 md:px-0">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="flex items-center justify-center mb-6"
            animate={{
              filter: ['drop-shadow(0 0 8px rgba(0, 200, 255, 0.3))', 'drop-shadow(0 0 16px rgba(0, 200, 255, 0.6))', 'drop-shadow(0 0 8px rgba(0, 200, 255, 0.3))'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-8 h-8 md:w-12 md:h-12 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 3.545A2.25 2.25 0 0 0 10.5 1.5h-3A2.25 2.25 0 0 0 5.25 3.545m0 0v1.909A2.25 2.25 0 0 0 7.5 7.5h9A2.25 2.25 0 0 0 18.75 5.454V3.545m0 0h4.5m-4.5 0a2.25 2.25 0 0 1-2.25-2.25h-3a2.25 2.25 0 0 1-2.25 2.25m16.5 0H3.375" />
            </svg>
          </motion.div>

          <motion.div className="relative mb-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              UFTA <span className="text-[#00c8ff]">Merchandise</span>
            </h2>
            
            {/* Animated underline */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#00c8ff]"
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {/* Holographic indicators */}
            <motion.div 
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#00c8ff]"
              animate={{
                opacity: [0.2, 1, 0.2],
                boxShadow: [
                  '0 0 2px rgba(0, 200, 255, 0.3)',
                  '0 0 10px rgba(0, 200, 255, 0.7)',
                  '0 0 2px rgba(0, 200, 255, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#00c8ff]"
              animate={{
                opacity: [0.2, 1, 0.2],
                boxShadow: [
                  '0 0 2px rgba(0, 200, 255, 0.3)',
                  '0 0 10px rgba(0, 200, 255, 0.7)',
                  '0 0 2px rgba(0, 200, 255, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
          
          <motion.p 
            className="text-gray-300 text-center max-w-2xl mx-auto mt-4 text-sm md:text-base px-4 md:px-0"
            variants={animations.fadeInUp}
            custom={1}
          >
            The future of fitness apparel is here. Our technologically advanced, performance-enhancing merchandise is designed for the modern athlete.
          </motion.p>
        </div>
      </div>
      
      <motion.div 
        className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-4 md:p-10 text-center hover:border-[#00c8ff] transition-all duration-300 relative overflow-hidden mx-4 md:mx-0"
        variants={animations.fadeInUp}
        custom={2}
        onMouseMove={handleMouseMove}
      >
        {/* Holographic highlight effect */}
        <motion.div 
          className="pointer-events-none absolute w-300 h-300 rounded-full bg-gradient-to-r from-[#00c8ff]/10 to-purple-500/10 blur-3xl"
          style={{ x: highlightX, y: highlightY }}
        />
      
        {/* Circuit corner accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00c8ff]/30 opacity-70"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00c8ff]/30 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#00c8ff]/30 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00c8ff]/30 opacity-70"></div>
        
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-70"></div>
        
        {/* Coming soon holographic display */}
        <motion.div 
          className="w-full max-w-md mx-auto h-48 md:h-60 bg-gradient-to-r from-[#00c8ff]/20 to-purple-600/20 rounded-lg mb-6 md:mb-10 flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-[#00c8ff]/30"
          animate={controls}
          style={{ backgroundSize: '200% 200%' }}
        >
          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00c8ff]/10 to-transparent opacity-50 z-0"></div>
          
          {/* Scanning line animation */}
          <motion.div 
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent z-10"
            animate={{ 
              top: ['0%', '100%', '0%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="z-20 relative text-center">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              animate={{ 
                textShadow: [
                  '0 0 5px rgba(0, 200, 255, 0.5)', 
                  '0 0 20px rgba(0, 200, 255, 0.8)', 
                  '0 0 5px rgba(0, 200, 255, 0.5)'
                ] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              UFTA MERCH
            </motion.h3>
            <motion.div 
              className="text-lg md:text-xl text-[#00c8ff] font-medium tracking-wider"
              animate={{ 
                letterSpacing: ['0.1em', '0.15em', '0.1em'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              LAUNCHING SOON
            </motion.div>
            
            <motion.div 
              className="mt-4 text-sm text-white/70"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {new Date().getFullYear() + 1}
            </motion.div>
          </div>
        </motion.div>
        
        <motion.h3 
          className="text-xl md:text-2xl font-semibold mb-6 text-white relative inline-block"
          variants={animations.scaleUp}
          custom={3}
        >
          Show Your UFTA Pride
          <motion.span 
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent"
            initial={{ width: 0, left: "50%" }}
            animate={{ width: "100%", left: 0 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.h3>
        
        {/* Product showcase */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8"
          variants={animations.staggerContainer}
          custom={4}
        >
          {merchandiseItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4 relative overflow-hidden cursor-pointer"
              variants={animations.scaleUp}
              custom={index}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 20px rgba(0, 200, 255, 0.3)',
                borderColor: '#00c8ff'
              }}
              onClick={() => setSelectedItem(item)}
            >
              <div className={`h-32 rounded bg-gradient-to-br ${item.color} mb-4 flex items-center justify-center text-white`}>
                <motion.div 
                  className="font-bold tracking-wider"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  UFTA
                </motion.div>
              </div>
              <h4 className="text-base md:text-lg font-medium text-white mb-1">{item.name}</h4>
              <p className="text-xs md:text-sm text-gray-300 mb-2">{item.description}</p>
              <motion.div 
                className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#00c8ff]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-6 md:mt-8 space-y-4 text-left px-2 md:px-0"
          variants={animations.fadeInUp}
          custom={5}
        >
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">Get ready to represent the Universal Fitness Training Academy spirit! Our exclusive line of UFTA merchandise will feature high-quality apparel, including performance activewear and comfortable casuals, along with essential fitness accessories like gym bags, water bottles, and more.</p>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">Each item is designed with cutting-edge technology and materials, embodying the quality and dedication that UFTA stands for.</p>
        </motion.div>
        
        {/* Notify button */}
{/*         <motion.button
          className="mt-8 px-8 py-3 bg-transparent border border-[#00c8ff] text-white rounded relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Notify Me When Available</span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/0 via-[#00c8ff]/30 to-[#00c8ff]/0"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </motion.button> */}
      </motion.div>
      
      {/* Product detail modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="bg-[#141414] border border-[#00c8ff]/50 rounded-lg p-6 max-w-md w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-2 right-2 text-gray-300 hover:text-white"
                onClick={() => setSelectedItem(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className={`h-40 rounded bg-gradient-to-br ${selectedItem.color} mb-6 flex items-center justify-center`}>
                <motion.div 
                  className="font-bold text-2xl text-white tracking-wider"
                  animate={{ 
                    textShadow: ['0 0 5px rgba(255,255,255,0.5)', '0 0 15px rgba(255,255,255,0.8)', '0 0 5px rgba(255,255,255,0.5)'] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  UFTA {selectedItem.name}
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{selectedItem.name}</h3>
              <p className="text-gray-300 mb-6">{selectedItem.description}</p>
              
              <div className="flex justify-between items-center">
                <div className="text-[#00c8ff] font-medium">Coming Soon</div>
                <motion.button
                  className="px-4 py-2 bg-[#00c8ff]/10 border border-[#00c8ff] text-white rounded-md"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 200, 255, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Notify Me
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default MerchandiseSection
