import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimations, viewportSettings } from '../../utils/animations';

const { fadeInUp, staggerContainer } = pageAnimations;

const DiplomaProgramsSection = () => {
  return (
    <motion.section 
      id="diploma" 
      className="py-12 md:py-20 px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
    >
      <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
        <motion.svg 
          className="w-8 h-8 md:w-12 md:h-12 mb-4 md:mb-2 text-[#00c8ff]" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </motion.svg>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center relative group">
          Professional <span className="text-[#00c8ff] inline-block relative">
            Diploma Programs
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#00c8ff]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.span>
          </span>
        </h2>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <motion.div
          className="mb-12 md:mb-16 bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_25px_rgba(0,200,255,0.07)]"
          variants={fadeInUp}
          custom={1}
          whileHover={{ 
            boxShadow: "0 0 30px rgba(0,200,255,0.12)", 
            transition: { duration: 0.3 } 
          }}
        >
          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-70">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-[#00c8ff]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <motion.div
                className="relative"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 w-full h-full bg-[rgba(0,200,255,0.03)] rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                <svg className="w-24 h-24 md:w-28 lg:w-32 md:h-28 lg:h-32 text-[#00c8ff] relative z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" strokeWidth="0.8"/>
                  <path d="M12 9l-3 3h2v4h2v-4h2l-3-3z" strokeWidth="0.8"/>
                  <path d="M3 3l18 18M21 3L3 21" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.5"/>
                  <circle cx="12" cy="12" r="8" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.5"/>
                </svg>
              </motion.div>
            </div>
            
            <div className="w-full md:w-3/4 md:pl-8">
              <motion.div 
                className="mb-4 md:mb-6 border-l-4 border-[#00c8ff] pl-4 py-1"
                variants={fadeInUp}
                custom={2}
              >
                <p className="text-base md:text-lg lg:text-xl font-medium text-white italic">Our diploma programs are designed to provide industry-ready skills for those looking to excel in specific fitness disciplines.</p>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base"
                variants={fadeInUp}
                custom={3}
              >
                UFTA's professional diploma programs combine theoretical knowledge with extensive practical training to ensure graduates are fully prepared for the demands of the modern fitness industry. Each program includes a mandatory internship period to provide real-world experience.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6"
                variants={staggerContainer}
                custom={4}
              >
                {[
                  { text: "Internationally recognized credentials", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
                  { text: "Taught by industry professionals", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
                  { text: "Extensive practical training", icon: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3ZM6.75 13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Zm.75-6.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" },
                  { text: "Guaranteed internship placement", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center text-center bg-[#1a1a1a] border border-[#2A2A2A] rounded-lg p-3 md:p-4 hover:border-[#00c8ff]/30 transition-all duration-300"
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-[#00c8ff]/10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 md:mb-3">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-xs md:text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Diplomas Card Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          variants={staggerContainer}
        >
          {/* Personal Training Diploma */}
          <motion.div 
            className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] transition-all duration-500"
            variants={fadeInUp}
            custom={1}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="h-20 bg-gradient-to-r from-[#003145] to-[#005573] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid1" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid1)" />
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center w-full">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00c8ff]">Personal Training</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Level 5</span>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#00c8ff]">₹85,000</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-sm">Comprehensive program to become a certified professional personal trainer. Master the art and science of creating effective exercise programs.</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Duration</p>
                    <p className="text-gray-400 text-sm">6 months (incl. 1-month internship)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Eligibility</p>
                    <p className="text-gray-400 text-sm">Age 18+, 10+2 qualification</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Career Path</p>
                    <p className="text-gray-400 text-sm">Fitness centers, gyms, studios, hotels</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a href="tel:+919864047046" className="w-full bg-gradient-to-r from-[#00c8ff]/80 to-[#00c8ff] text-white py-3 rounded-lg transition-all duration-300 text-center block font-medium hover:shadow-lg hover:shadow-[#00c8ff]/25">
                  Enquire Now
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Sports Rehabilitation & Reconditioning */}
          <motion.div 
            className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] transition-all duration-500"
            variants={fadeInUp}
            custom={2}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="h-20 bg-gradient-to-r from-[#003145] to-[#005573] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid2" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid2)" />
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center w-full">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00c8ff]">Sports Rehabilitation</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Level 7</span>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#00c8ff]">₹125,250</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-sm">Specialized program focusing on functional muscle testing, movement assessment, and injury rehabilitation for athletes.</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Duration</p>
                    <p className="text-gray-400 text-sm">8 months (incl. 1-month internship)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Eligibility</p>
                    <p className="text-gray-400 text-sm">Age 21+, prior diplomas/degree, 3 yrs experience</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Career Path</p>
                    <p className="text-gray-400 text-sm">Sports teams, rehab centers, private practice</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a href="tel:+919864047046" className="w-full bg-gradient-to-r from-[#00c8ff]/80 to-[#00c8ff] text-white py-3 rounded-lg transition-all duration-300 text-center block font-medium hover:shadow-lg hover:shadow-[#00c8ff]/25">
                  Enquire Now
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Strength & Conditioning */}
          <motion.div 
            className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] transition-all duration-500"
            variants={fadeInUp}
            custom={3}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="h-20 bg-gradient-to-r from-[#003145] to-[#005573] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid3" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid3)" />
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center w-full">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00c8ff]">Strength & Conditioning</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Level 6</span>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#00c8ff]">₹127,700</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-sm">Develop expertise in designing and implementing strength and conditioning programs for athletes and sports performance.</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Duration</p>
                    <p className="text-gray-400 text-sm">7 months (incl. 1-month internship)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Eligibility</p>
                    <p className="text-gray-400 text-sm">Age 18+, relevant fitness/sports background</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Career Path</p>
                    <p className="text-gray-400 text-sm">Sports teams, athletic departments, academies</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a href="tel:+919864047046" className="w-full bg-gradient-to-r from-[#00c8ff]/80 to-[#00c8ff] text-white py-3 rounded-lg transition-all duration-300 text-center block font-medium hover:shadow-lg hover:shadow-[#00c8ff]/25">
                  Enquire Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Advantages Banner */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#00344d] to-[#00496e] rounded-xl p-8 relative overflow-hidden"
          variants={fadeInUp}
          custom={1}
          whileHover={{ 
            boxShadow: "0 0 30px rgba(0,200,255,0.2)", 
            transition: { duration: 0.3 } 
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: 'white', strokeWidth: 1 }} />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <svg className="w-8 h-8 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">Why Choose UFTA Diploma Programs?</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Job-Ready Skills", text: "Our curriculum is designed with industry input to ensure you graduate with the exact skills employers are seeking." },
                { title: "Placement Assistance", text: "We have partnerships with leading fitness centers, sports academies and corporate wellness programs across India." },
                { title: "Flexible Learning", text: "Choose from weekday, weekend, and part-time schedules to balance your education with other commitments." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20"
                  variants={fadeInUp}
                  custom={index+2}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-200 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <motion.a 
                href="/about" 
                className="inline-flex items-center bg-white text-[#003145] px-6 py-3 rounded-lg font-medium hover:bg-[#00c8ff] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Learn More About Our Teaching Approach
                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DiplomaProgramsSection;
