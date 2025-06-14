import React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const HighPerformanceIntroSection = () => {
  const { fadeInUp, slideInRight, staggerContainer, cardVariant } = pageAnimations.standard;

  return (
    <motion.section 
      className="py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 w-80 h-80 bg-[#00c8ff]/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-[#00c8ff]/5 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <motion.div 
        className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-10 relative shadow-xl max-w-5xl mx-auto overflow-hidden"
        variants={cardVariant}
      >
        {/* Card Background Effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-70"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c8ff]/5 rounded-full -mt-10 -mr-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00c8ff]/5 rounded-full -mb-16 -ml-16"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          {/* Left Content */}
          <div className="md:w-2/3">
            <motion.div 
              className="flex items-center gap-4 mb-6"
              variants={fadeInUp}
            >
              <div className="w-14 h-14 bg-[#141414] border border-[#2A2A2A] rounded-full flex items-center justify-center shadow-lg">
                <svg 
                  className="w-8 h-8 text-[#00c8ff]" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white">
                High <span className="text-[#00c8ff]">Performance</span> Clinic
              </h2>
            </motion.div>
            
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
            >
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed border-l-2 border-[#00c8ff]/30 pl-4"
                variants={fadeInUp}
              >
                At UFTA, we extend our expertise beyond education to offer specialized services at our High Performance Clinic. 
                Utilizing cutting-edge technology and evidence-based practices, our clinic is dedicated to helping athletes and individuals 
                achieve optimal physical health, recover from injuries, and enhance their performance.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed border-l-2 border-[#00c8ff]/30 pl-4"
                variants={fadeInUp}
              >
                Our team of experts, including Sports & Exercise Scientists and Sports Medicine Specialists, provides personalized 
                care and scientifically-backed interventions tailored to your unique needs and goals.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              variants={fadeInUp}
            >
              <motion.a 
                href="#services" 
                className="inline-flex items-center gap-2 bg-[#00c8ff] text-black hover:bg-[#00c8ff]/90 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Services
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="inline-flex items-center gap-2 border border-[#2A2A2A] hover:border-[#00c8ff] text-white hover:text-[#00c8ff] px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Assessment
              </motion.a>
            </motion.div>
          </div>
          
          {/* Right Content - Stat Cards */}
          <motion.div 
            className="md:w-1/3 space-y-4"
            variants={slideInRight}
          >
            {[
              { number: "10+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { number: "1000+", label: "Athletes Trained", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
              { number: "95%", label: "Success Rate", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-4 flex items-center gap-4 group hover:border-[#00c8ff] transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-[#0A0A0A] rounded-full flex items-center justify-center text-[#00c8ff] group-hover:bg-[#00c8ff]/10 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Badges */}
      <motion.div 
        className="flex flex-wrap justify-center gap-6 mt-10"
        variants={fadeInUp}
      >
        {[
          { text: "Advanced Testing Equipment", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
          { text: "Sports Science & Medicine", color: "bg-[#00c8ff]/10 text-[#00c8ff] border-[#00c8ff]/20" },
          { text: "Personalized Approach", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
          { text: "Experienced Specialists", color: "bg-green-500/10 text-green-400 border-green-500/20" }
        ].map((badge, idx) => (
          <motion.span 
            key={idx}
            className={`px-4 py-2 rounded-full text-sm font-medium ${badge.color} border`}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            {badge.text}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default HighPerformanceIntroSection
