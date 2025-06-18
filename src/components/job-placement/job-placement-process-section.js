import React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const JobPlacementProcessSection = () => {
  const { fadeInUp, staggerContainer, cardVariant } = pageAnimations.standard;

  return (
    <motion.section 
      className="py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-[#00c8ff]/20 to-green-500/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-green-600/20 to-[#00c8ff]/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <motion.div 
        className="flex flex-col items-center justify-center mb-12"
        variants={fadeInUp}
      >
        <div className="relative mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00c8ff]/50 to-green-500/50 rounded-lg blur-sm"></div>
          <motion.div 
            className="relative bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-2 flex items-center"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <motion.svg 
              className="w-8 h-8 mr-2 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center">
              Our <span className="text-[#00c8ff]">Placement Process</span>
            </h2>
          </motion.div>
        </div>
        
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#00c8ff] via-green-500 to-[#00c8ff] mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        
        <motion.p 
          className="text-center text-xl leading-relaxed mb-10 text-gray-300 max-w-3xl"
          variants={fadeInUp}
        >
          Our proven 4-step placement process ensures you find the perfect role that matches your skills, experience, and career aspirations.
        </motion.p>
      </motion.div>
      
      <div className="relative">
        {/* Connecting timeline */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00c8ff] via-green-500 to-[#00c8ff] transform -translate-x-1/2 hidden lg:block"></div>

        {/* Process Steps */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {[
            {
              step: "01",
              title: "Skill Assessment",
              description: "Comprehensive evaluation of technical and soft skills",
              color: "blue",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>
              )
            },
            {
              step: "02",
              title: "Profile Building",
              description: "Creating compelling professional profiles and portfolios",
              color: "green",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              )
            },
            {
              step: "03",
              title: "Job Matching",
              description: "Connecting candidates with suitable opportunities",
              color: "teal",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              )
            },
            {
              step: "04",
              title: "Interview Prep",
              description: "Training and guidance for successful interviews",
              color: "emerald",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              )
            }
          ].map((process, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-[#141414] to-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 text-center relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Connect to timeline (different for odd/even) */}
              <div className="hidden lg:block absolute w-8 h-0.5 bg-gradient-to-r from-[#00c8ff] to-green-500 top-1/2 transform -translate-y-1/2 left-full"></div>
              
              {/* Circle node on timeline */}
              <div className="hidden lg:flex absolute w-6 h-6 rounded-full bg-[#1A1A1A] border-2 border-[#00c8ff] top-1/2 transform -translate-y-1/2 left-full -ml-3 z-10 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#00c8ff]"></div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] via-green-500 to-[#00c8ff] opacity-70"></div>
              
              <div className="bg-gradient-to-br from-[#00c8ff]/20 to-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl font-bold text-[#00c8ff]">
                  {process.step}
                </div>
              </div>
              
              <div className="bg-[#141414] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-[#00c8ff] border border-[#00c8ff]/30">
                {process.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00c8ff] transition-all duration-300">
                {process.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-6">
                {process.description}
              </p>
              
              <div className="bg-[#0F0F0F] rounded-lg p-3 border border-[#2A2A2A] text-left">
                <h5 className="text-xs font-semibold text-[#00c8ff] mb-2">What to expect:</h5>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00c8ff] mr-1">•</span>
                    <span>One-on-one consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00c8ff] mr-1">•</span>
                    <span>Expert guidance throughout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00c8ff] mr-1">•</span>
                    <span>Regular progress updates</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.div
        className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-[#0A1A20] to-[#0F1A15] rounded-xl p-8 border border-[#00c8ff]/20 relative overflow-hidden"
        variants={fadeInUp}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00c8ff]/10 to-green-500/5 rounded-full filter blur-3xl"></div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-6 md:mb-0 md:mr-8">
            <div className="w-20 h-20 rounded-full bg-[#141414] border-2 border-[#00c8ff] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-[#00c8ff]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">Our Placement Success Rate</h3>
            <p className="text-gray-300 mb-6">With our proven process, we've successfully placed <span className="text-[#00c8ff] font-semibold">95%</span> of our graduates in their desired fitness and sports roles within just <span className="text-[#00c8ff] font-semibold">45 days</span> of course completion.</p>
            
            <div className="flex items-center space-x-4">
              <motion.button
                className="bg-gradient-to-r from-[#00c8ff] to-green-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-[#00c8ff]/20 hover:shadow-[#00c8ff]/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
              
              <motion.button
                className="text-[#00c8ff] hover:text-white hover:bg-[#00c8ff] border border-[#00c8ff] px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Success Stories
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default JobPlacementProcessSection
