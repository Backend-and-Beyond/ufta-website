import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations, viewportSettings } from "../../utils/animations"

const CertificationsSection = () => {
  const { fadeInUp, staggerContainer } = pageAnimations.standard;

  return (
    <section 
      id="propta" 
      className="py-12 md:py-20 px-4 md:px-6"
    >
      <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
        <motion.svg 
          className="w-8 h-8 md:w-12 md:h-12 mb-4 md:mb-2 text-[#00c8ff]" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor"
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
        </motion.svg>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center relative group">
          PROPTA USA <span className="text-[#00c8ff] inline-block relative">
            Certifications
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
          {/* Globe Badge */}
          <motion.div 
            className="relative w-full max-w-xs mx-auto md:mx-0 mb-8 md:mb-0 md:mr-12"
            variants={fadeInUp}
            custom={1}
          >
            <div className="absolute inset-0 w-full h-full bg-[rgba(0,200,255,0.03)] rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
            <div className="absolute inset-0 w-full h-full border-4 border-[#00c8ff]/10 rounded-full animate-ping" style={{animationDuration: '3s', animationIterationCount: 'infinite'}}></div>
            <motion.div 
              className="relative z-10 flex items-center justify-center"
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-28 h-28 md:w-32 lg:w-36 md:h-32 lg:h-36 text-[#00c8ff] opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="12" cy="12" r="10" opacity="0.5"/>
                <circle cx="12" cy="12" r="6" opacity="0.7"/>
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" opacity="0.8"/>
                <path d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" opacity="0.6"/>
                <path d="M12 7l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5L12 7z" opacity="0.9"/>
              </svg>
            </motion.div>
            <div className="text-center mt-4">
              <motion.p 
                className="text-xl md:text-2xl font-medium text-[#00c8ff] text-shadow-sm"
                variants={fadeInUp}
                custom={2}
              >
                Global Recognition
              </motion.p>
              <motion.div 
                className="flex items-center justify-center mt-1"
                variants={fadeInUp}
                custom={3}
              >
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30 flex items-center">
                  <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
                  </svg>
                  Valid in 199 countries
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
            <div className="bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-6 md:p-8 relative overflow-hidden">
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
                className="mb-6 border-l-4 border-[#00c8ff] pl-4 py-1"
                variants={fadeInUp}
                custom={5}
              >
                <p className="text-xl font-medium text-white italic">UFTA is the exclusive authorized center for PROPTA USA certifications in India.</p>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 leading-relaxed mb-6"
                variants={fadeInUp}
                custom={6}
              >
                PROPTA (Professional Personal Trainers Association) USA is one of the leading global education bodies dedicated to training fitness professionals since 1980. Our partnership enables us to offer internationally recognized certifications that open doors to global career opportunities.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 gap-4 mb-6"
                variants={staggerContainer}
                custom={7}
              >
                {[
                  { icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z", text: "IFBB Pro League Endorsed" },
                  { icon: "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3", text: "BSE, Govt. of California Endorsed" },
                  { icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-8.25-3l1.5 1.5 3-3.75", text: "Industry-Recognized Curriculum" },
                  { icon: "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525", text: "Globally Accepted Standards" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <svg className="w-5 h-5 text-[#00c8ff] mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="ml-2 text-gray-300 text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.a 
                href="https://propta.com/india-propta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#00c8ff] hover:text-white transition-colors duration-300"
                variants={fadeInUp}
                custom={8}
                whileHover={{ x: 5 }}
              >
                <span>Visit PROPTA USA Official Site</span>
                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* PROPTA USA Certifications Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
            <span className="inline-block w-8 h-0.5 bg-[#00c8ff] mr-3"></span>
            Available PROPTA USA Certifications
            <span className="inline-block w-8 h-0.5 bg-[#00c8ff] ml-3"></span>
          </h3>
        
          <div className="grid md:grid-cols-2 gap-10">
            {/* Sports Nutrition Certification */}
            <div 
              className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{
                animationDelay: '0.2s',
                animationFillMode: 'forwards'
              }}
            >
              <div className="h-32 bg-gradient-to-r from-[#003145] to-[#005573] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center w-full">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00c8ff]">Sports Performance Nutrition Certification</span>
                </div>
{/*                 <div className="absolute top-4 right-4">
                  <motion.div 
                    className="flex items-center bg-[#00c8ff]/10 backdrop-blur-sm px-3 py-1 rounded-full border border-[#00c8ff]/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg className="w-4 h-4 text-[#00c8ff] mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#00c8ff] text-xs font-medium">8 Weeks</span>
                  </motion.div>
                </div> */}
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="mb-3">
                      <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">International Certification</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00c8ff] transition-colors duration-300">Sports Nutrition Specialist</h3>
                  </div>
{/*                   <div className="text-right">
                    <p className="text-2xl font-bold text-[#00c8ff]">$1600</p>
                    <p className="text-sm text-gray-400">USD (approx.)</p>
                  </div> */}
                </div>
                
                <p className="text-gray-300 mb-6">Comprehensive certification program focused on performance nutrition strategies for athletes. Learn to create customized nutrition plans for optimal performance, recovery, and health.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Prerequisites</h4>
                      <p className="text-gray-400 text-sm">Age 18+, Level 1 PT cert, Nutrition Tech cert, 1 year PT experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Key Modules</h4>
                      <p className="text-gray-400 text-sm">Macronutrient manipulation, supplement protocols, hydration strategies, athletic performance nutrition</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://propta.com/india-propta/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-gradient-to-r from-[#008fc7] to-[#00c8ff] text-white hover:from-[#00c8ff] hover:to-[#008fc7] px-6 py-3 rounded-lg transition-all duration-300 text-center block flex items-center justify-center group hover:scale-105"
                >
                  <span>Enquire Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Personal Training Certification */}
            <div 
              className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{
                animationDelay: '0.4s',
                animationFillMode: 'forwards'
              }}
            >
              <div className="h-32 bg-gradient-to-r from-[#003145] to-[#005573] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center w-full">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00c8ff]">International Personal Trainer Certification</span>
                </div>
                {/* <div className="absolute top-4 right-4">
                  <motion.div 
                    className="flex items-center bg-[#00c8ff]/10 backdrop-blur-sm px-3 py-1 rounded-full border border-[#00c8ff]/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg className="w-4 h-4 text-[#00c8ff] mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#00c8ff] text-xs font-medium">6 Weeks</span>
                  </motion.div>
                </div> */}
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="mb-3">
                      <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">International Certification</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00c8ff] transition-colors duration-300">Certified Personal Trainer</h3>
                  </div>
                  {/* <div className="text-right">
                    <p className="text-2xl font-bold text-[#00c8ff]">$1800</p>
                    <p className="text-sm text-gray-400">USD (approx.)</p>
                  </div> */}
                </div>
                
                <p className="text-gray-300 mb-6">Foundation certification for aspiring international personal trainers. Master the science of exercise prescription, client assessment, and program design for diverse populations.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Prerequisites</h4>
                      <p className="text-gray-400 text-sm">Age 18+, CPR & AED certification required for graduation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Key Modules</h4>
                      <p className="text-gray-400 text-sm">Exercise science, anatomy, physiology, program design, client assessment, business fundamentals</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://propta.com/india-propta/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-gradient-to-r from-[#008fc7] to-[#00c8ff] text-white hover:from-[#00c8ff] hover:to-[#008fc7] px-6 py-3 rounded-lg transition-all duration-300 text-center block flex items-center justify-center group hover:scale-105"
                >
                  <span>Enquire Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
