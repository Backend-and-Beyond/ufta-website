import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations, viewportSettings } from "../../utils/animations"

const ProgramsSection = () => {
  const { fadeInUp, staggerContainer } = pageAnimations.standard;

  return (
    <>
      {/* Degree Programs Section */}
      <motion.section 
        id="degree" 
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </motion.svg>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center relative group">
            University <span className="text-[#00c8ff] inline-block relative">
              Degree Programs
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
          {/* Introduction & Badge Section */}
          <motion.div 
            className="relative mb-12 md:mb-16 flex flex-col md:flex-row items-center"
            variants={staggerContainer}
          >
            {/* University Badge */}
            <motion.div 
              className="relative w-full max-w-xs mx-auto md:mx-0 mb-8 md:mb-0 md:mr-12"
              variants={fadeInUp}
              custom={1}
            >
              <div className="absolute inset-0 w-full h-full bg-[rgba(0,200,255,0.03)] rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
              <div className="absolute inset-0 w-full h-full border-4 border-[#00c8ff]/10 rounded-full animate-ping" style={{animationDuration: '3s', animationIterationCount: 'infinite'}}></div>
              <motion.div 
                className="relative z-10 flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-28 h-28 md:w-32 lg:w-36 md:h-32 lg:h-36 text-[#00c8ff] opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M12 1L2 6v2h20V6L12 1z" strokeWidth="0.8"/>
                  <path d="M2 9v10h20V9" strokeWidth="0.8" strokeDasharray="1 1"/>
                  <path d="M5 9v10M9 9v10M13 9v10M17 9v10M21 9v10" strokeWidth="0.8" strokeDasharray="1 1"/>
                  <rect x="2" y="19" width="20" height="2" strokeWidth="0.8"/>
                  <rect x="5" y="11" width="2" height="6" rx="0.5" strokeWidth="0.8"/>
                  <rect x="9" y="11" width="2" height="6" rx="0.5" strokeWidth="0.8"/>
                  <rect x="13" y="11" width="2" height="6" rx="0.5" strokeWidth="0.8"/>
                  <rect x="17" y="11" width="2" height="6" rx="0.5" strokeWidth="0.8"/>
                </svg>
              </motion.div>
              <div className="text-center mt-4">
                <motion.p 
                  className="text-xl md:text-2xl font-medium text-[#00c8ff] text-shadow-sm"
                  variants={fadeInUp}
                  custom={2}
                >
                  UGC Approved
                </motion.p>
                <motion.div 
                  className="flex items-center justify-center mt-1"
                  variants={fadeInUp}
                  custom={3}
                >
                  <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30 flex items-center">
                    <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                    First in India
                  </span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Introduction Text */}
            <motion.div 
              className="md:flex-1"
              variants={fadeInUp}
              custom={4}
            >
              <div className="bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_25px_rgba(0,200,255,0.07)]">
                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-70">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-[#00c8ff]"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                </div>
                
                <motion.div 
                  className="mb-4 md:mb-6 border-l-4 border-[#00c8ff] pl-4 py-1"
                  variants={fadeInUp}
                  custom={5}
                >
                  <p className="text-base md:text-lg lg:text-xl font-medium text-white italic">UFTA is the first institute in India to launch a UGC-approved undergraduate program in fitness and athletic sciences.</p>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base"
                  variants={fadeInUp}
                  custom={6}
                >
                  Our flagship B.Sc. in Fitness and Athletic Conditioning provides students with comprehensive knowledge in sports science, exercise physiology, biomechanics, and athletic training methodologies. This program is designed to meet the growing demand for qualified fitness professionals with academic credentials.
                </motion.p>
                
                <motion.div 
                  className="bg-[#111111] border border-[#222222] rounded-lg p-4 md:p-5 mb-4 md:mb-6"
                  variants={fadeInUp}
                  custom={7}
                  whileHover={{ boxShadow: "0 0 20px rgba(0,200,255,0.1)" }}
                >
                  <h4 className="text-base md:text-lg font-semibold text-white mb-3 flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                    Program Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z", text: "Multiple exit pathways" },
                      { icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z", text: "Industry-aligned curriculum" },
                      { icon: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z", text: "Nationally recognized degree" },
                      { icon: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z", text: "Practical training focus" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start"
                        variants={fadeInUp}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#00c8ff] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                        <span className="ml-2 text-gray-300 text-xs md:text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex justify-end"
                  variants={fadeInUp}
                  custom={8}
                >
                  <div className="bg-[#00c8ff]/5 border border-[#00c8ff]/20 px-3 py-2 md:px-4 md:py-2 rounded-lg inline-flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <p className="text-xs md:text-sm text-gray-400">Annual Tuition</p>
                      <p className="text-lg md:text-xl font-bold text-[#00c8ff]">₹50,000</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* BSc Degree Details Card */}
          <motion.div 
            className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-6 md:p-10 relative overflow-hidden shadow-[0_0_25px_rgba(0,200,255,0.07)] mb-8 md:mb-10"
            variants={fadeInUp}
            custom={1}
            whileHover={{ 
              boxShadow: "0 0 30px rgba(0,200,255,0.15)", 
              transition: { duration: 0.3 } 
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-70"></div>
            
            {/* Enhanced SVG Background Pattern */}
            <div className="absolute -right-16 md:-right-20 -bottom-16 md:-bottom-20 opacity-10 w-[30rem] md:w-[40rem] h-[30rem] md:h-[40rem] pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                <path d="M10 10h80v80h-80z" strokeOpacity="0.2"/>
                <path d="M30 10v80M50 10v80M70 10v80M10 30h80M10 50h80M10 70h80" strokeOpacity="0.2"/>
                <circle cx="30" cy="30" r="3" strokeOpacity="0.8"/>
                <circle cx="50" cy="50" r="3" strokeOpacity="0.8"/>
                <circle cx="70" cy="70" r="3" strokeOpacity="0.8"/>
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-[#00c8ff]/10 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">B.Sc. in Fitness and Athletic Conditioning</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center mt-2 gap-2 sm:gap-3">
                    <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">UGC Approved</span>
                    <span className="bg-[#333]/50 text-gray-300 px-3 py-1 rounded-full text-sm">4-Year Program</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-10">
              <div>
                <h4 className="flex items-center text-lg md:text-xl font-semibold text-white mb-4 md:mb-5">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                  </svg>
                  Program Structure
                </h4>
                <motion.div 
                  className="space-y-3 md:space-y-4"
                  variants={staggerContainer}
                >
                  {[
                    { year: "Year 1", outcome: "Certificate in Athletic Sciences", color: "from-[#1a1a1a] to-[#1a1a1a]" },
                    { year: "Year 2", outcome: "Diploma in Athletic Sciences", color: "from-[#1a1a1a] to-[#1a1a1a]" },
                    { year: "Year 3", outcome: "Bachelor's Degree", color: "from-[#1a1a1a] to-[#1a1a1a]" },
                    { year: "Year 4", outcome: "Bachelor's Degree with Research (Honours)", color: "from-[#00c8ff]/5 to-[#111]" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className={`flex items-center p-3 rounded-lg bg-gradient-to-r ${item.color} border border-[#2A2A2A] group hover:border-[#00c8ff]/50 transition-all duration-300`}
                      variants={fadeInUp}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="bg-[#222] rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mr-3 md:mr-4 group-hover:bg-[#00c8ff]/10 transition-all duration-300">
                        <span className="text-[#00c8ff] font-bold text-sm md:text-base">{index+1}</span>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs md:text-sm">{item.year}</p>
                        <p className="text-white font-medium text-sm md:text-base">{item.outcome}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              <div>
                <h4 className="flex items-center text-lg md:text-xl font-semibold text-white mb-4 md:mb-5">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                  Career Opportunities
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                  {[
                    { name: "High-performance centers", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
                    { name: "Sports academies", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
                    { name: "Fitness industry leadership", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
                    { name: "Research and development", icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 01-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-lg p-3 md:p-4 flex items-center hover:border-[#00c8ff]/30 transition-all duration-300"
                      variants={fadeInUp}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="bg-[#00c8ff]/10 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-xs md:text-sm font-medium">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-4 md:mt-6 bg-[#1a1a1a] border border-[#2A2A2A] rounded-lg p-3 md:p-4">
                  <h5 className="flex items-center text-base md:text-lg font-semibold text-white mb-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    Eligibility
                  </h5>
                  <p className="text-gray-300 text-sm md:text-base">At least 45% marks or equivalent in 10+2 (any discipline)</p>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a 
                href="tel:+919864047046" 
                className="bg-gradient-to-r from-[#00c8ff]/80 to-[#00c8ff] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00c8ff]/25 flex items-center font-medium text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Contact for Admission
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default ProgramsSection
