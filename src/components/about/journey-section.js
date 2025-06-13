import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const JourneySection = () => {
  const {
    fadeInUp,
    staggerContainer,
    timelineContainer,
    timelineItemLeft,
    timelineItemRight
  } = pageAnimations.standard;

  return (
    <motion.section 
      id="history" 
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-50 pointer-events-none"></div>
      
      <motion.div 
        className="flex items-center justify-center mb-16"
        variants={fadeInUp}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.svg 
            className="w-12 h-12 mr-4 text-[#00c8ff]" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </motion.svg>
        </motion.div>
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative">
            Our <span className="text-[#00c8ff]">Journey</span>
          </h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            From humble beginnings to industry leadership - discover our path to excellence
          </p>
        </div>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central Timeline Line */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00c8ff] via-[#00c8ff]/50 to-[#00c8ff] h-full"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Timeline Items */}
        <motion.div 
          className="space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={timelineContainer}
        >
          
          {/* 2006 - Foundation */}
          <motion.div 
            className="relative flex items-center"
            variants={timelineItemLeft}
          >
            <div className="flex-1 pr-8 text-right">
              <motion.div 
                className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden group hover:border-[#00c8ff]/50 transition-all duration-200"
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#00c8ff] to-transparent opacity-50"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00c8ff]/20 rounded-full"></div>
                
                <motion.div 
                  className="text-3xl font-bold text-[#00c8ff] mb-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  2006
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Foundation & Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  Universal Fitness Training Academy (UFTA) was established in Guwahati, Assam, with a vision to revolutionize fitness education in India. Starting as a pioneering institution dedicated to comprehensive health and fitness education.
                </p>
                <div className="flex items-center justify-end mt-4 space-x-2">
                  <span className="w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                  <span className="text-sm text-[#00c8ff] font-medium">Inception</span>
                </div>
              </motion.div>
            </div>
            
            {/* Timeline Node */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00c8ff] rounded-full z-10 border-4 border-[#0A0A0A]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
            ></motion.div>
            
            <div className="flex-1 pl-8"></div>
          </motion.div>

          {/* 2010s - Growth & Expansion */}
          <motion.div 
            className="relative flex items-center"
            variants={timelineItemRight}
          >
            <div className="flex-1 pr-8"></div>
            
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00c8ff] rounded-full z-10 border-4 border-[#0A0A0A]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
            ></motion.div>
            
            <div className="flex-1 pl-8">
              <motion.div 
                className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden group hover:border-[#00c8ff]/50 transition-all duration-200"
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] to-transparent opacity-50"></div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#00c8ff]/20 rounded-full"></div>
                
                <motion.div 
                  className="text-3xl font-bold text-[#00c8ff] mb-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  2010s
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Growth & Recognition</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  UFTA gained recognition as a leading fitness education provider, establishing partnerships with international organizations and expanding our curriculum to meet growing industry demands.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#00c8ff]/10 p-3 rounded-lg border border-[#00c8ff]/20">
                    <div className="text-lg font-bold text-[#00c8ff]">500+</div>
                    <div className="text-sm text-gray-400">Professionals Certified</div>
                  </div>
                  <div className="bg-[#00c8ff]/10 p-3 rounded-lg border border-[#00c8ff]/20">
                    <div className="text-lg font-bold text-[#00c8ff]">Multi</div>
                    <div className="text-sm text-gray-400">Program Launch</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                  <span className="text-sm text-[#00c8ff] font-medium">Expansion Phase</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 2020s - Innovation & Leadership */}
          <motion.div 
            className="relative flex items-center"
            variants={timelineItemLeft}
          >
            <div className="flex-1 pr-8 text-right">
              <motion.div 
                className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden group hover:border-[#00c8ff]/50 transition-all duration-200"
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#00c8ff] to-transparent opacity-50"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00c8ff]/20 rounded-full"></div>
                
                <motion.div 
                  className="text-3xl font-bold text-[#00c8ff] mb-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  2020s
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation & UGC Approval</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  UFTA becomes the first institute in India to launch UGC-approved undergraduate courses, establishing multiple branches and reaching new heights in fitness education excellence.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#00c8ff]/10 p-3 rounded-lg border border-[#00c8ff]/20">
                    <div className="text-lg font-bold text-[#00c8ff]">4</div>
                    <div className="text-sm text-gray-400">Branches Nationwide</div>
                  </div>
                  <div className="bg-[#00c8ff]/10 p-3 rounded-lg border border-[#00c8ff]/20">
                    <div className="text-lg font-bold text-[#00c8ff]">UGC</div>
                    <div className="text-sm text-gray-400">Approved Programs</div>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <span className="w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                  <span className="text-sm text-[#00c8ff] font-medium">Industry Leadership</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00c8ff] rounded-full z-10 border-4 border-[#0A0A0A]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
            ></motion.div>
            
            <div className="flex-1 pl-8"></div>
          </motion.div>

          {/* Today - Current Impact */}
          <motion.div 
            className="relative flex items-center"
            variants={timelineItemRight}
          >
            <div className="flex-1 pr-8"></div>
            
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#00c8ff] to-[#0099cc] rounded-full z-10 border-4 border-[#0A0A0A] shadow-lg shadow-[#00c8ff]/30"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-[#00c8ff] opacity-50"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
            </motion.div>
            
            <div className="flex-1 pl-8">
              <motion.div 
                className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#00c8ff]/30 rounded-xl p-8 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-200 shadow-xl"
                whileHover={{ scale: 1.01, y: -2, boxShadow: "0 15px 30px rgba(0, 200, 255, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00c8ff] via-[#00a6cc] to-[#00c8ff] opacity-70"></div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#00c8ff]/30 rounded-full blur-sm"></div>
                
                <motion.div 
                  className="text-4xl font-bold bg-gradient-to-r from-[#00c8ff] to-[#00a6cc] bg-clip-text text-transparent mb-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  Today
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Leading the Industry</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 2,500 certified professionals, UFTA continues to be India's premier fitness education academy, fostering the next generation of fitness leaders through evidence-based training and innovative programs.
                </p>
                
                {/* Achievement Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <motion.div 
                    className="bg-[#00c8ff]/10 p-4 rounded-lg border border-[#00c8ff]/20 text-center"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 255, 0.15)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-[#00c8ff]">2500+</div>
                    <div className="text-xs text-gray-400">Professionals Certified</div>
                  </motion.div>
                  <motion.div 
                    className="bg-[#00c8ff]/10 p-4 rounded-lg border border-[#00c8ff]/20 text-center"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 255, 0.15)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-[#00c8ff]">19+</div>
                    <div className="text-xs text-gray-400">Years of Excellence</div>
                  </motion.div>
                  <motion.div 
                    className="bg-[#00c8ff]/10 p-4 rounded-lg border border-[#00c8ff]/20 text-center"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 255, 0.15)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-[#00c8ff]">4</div>
                    <div className="text-xs text-gray-400">Branches Pan-India</div>
                  </motion.div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <motion.span 
                    className="w-3 h-3 bg-[#00c8ff] rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.span>
                  <span className="text-sm text-[#00c8ff] font-medium">Continuing Excellence</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mission Statement */}
      <motion.div 
        className="mt-20 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2A2A2A] rounded-2xl p-10 relative overflow-hidden"
          whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0, 200, 255, 0.1)" }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent"></div>
          
          <motion.h3 
            className="text-3xl font-bold text-white mb-6 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Our <span className="text-[#00c8ff]">Mission</span>
          </motion.h3>
          <motion.p 
            className="text-xl leading-relaxed text-gray-300 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
          >
            UFTA is dedicated to fostering a new generation of fitness leaders through rigorous academic programs, practical training, and a passion for advancing sport and exercise sciences. We ensure our graduates are equipped with evidence-based knowledge to excel in the dynamic fitness industry.
          </motion.p>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-[#00c8ff]/20 rounded-full opacity-30"></div>
          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-[#00c8ff]/20 rounded-full opacity-20"></div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default JourneySection;
