import React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const JobPlacementOverviewSection = () => {
  const { fadeInUp, slideInLeft, slideInRight, staggerContainer, scaleIn } = pageAnimations.standard;

  return (
    <motion.section 
      className="py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00c8ff]/30 to-purple-500/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-[#00c8ff]/20 to-indigo-500/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <motion.div 
        className="flex items-center justify-center mb-12"
        variants={fadeInUp}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00c8ff]/50 to-indigo-500/50 rounded-lg blur-sm"></div>
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center">
              100% Placements in <span className="text-[#00c8ff]">India & Abroad</span>
            </h2>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Main Overview Content */}
        <motion.div 
          className="md:col-span-2 bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden shadow-lg"
          variants={slideInLeft}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] via-indigo-500 to-purple-500 opacity-80"></div>
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#00c8ff]/10 rounded-full filter blur-xl"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-2 text-[#00c8ff]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </span>
            Our Placement Commitment
          </h3>
          
          <motion.p 
            className="text-lg leading-relaxed mb-6 text-gray-300"
            variants={fadeInUp}
          >
            Universal Fitness Training Academy (UFTA) is committed to providing robust placement support to its certified professionals. We boast an exceptional track record of facilitating career opportunities for our graduates, connecting them with leading organizations in the fitness and sports industry both nationally and internationally.
          </motion.p>
          
          <motion.p 
            className="text-lg leading-relaxed mb-6 text-gray-300"
            variants={fadeInUp}
          >
            Our dedicated placement cell works tirelessly to bridge the gap between skilled fitness professionals and the industry's demand. We ensure our students are well-prepared not just with technical knowledge, but also with the soft skills required to excel in their careers.
          </motion.p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <motion.div 
              className="flex items-center bg-[#1A1A1A] px-4 py-2 rounded-full border border-[#2A2A2A]"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 255, 0.1)" }}
            >
              <span className="text-[#00c8ff] mr-2">✓</span>
              <span className="text-gray-300 text-sm">100% Placement Assistance</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center bg-[#1A1A1A] px-4 py-2 rounded-full border border-[#2A2A2A]"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 255, 0.1)" }}
            >
              <span className="text-[#00c8ff] mr-2">✓</span>
              <span className="text-gray-300 text-sm">Industry Partnerships</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center bg-[#1A1A1A] px-4 py-2 rounded-full border border-[#2A2A2A]"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 255, 0.1)" }}
            >
              <span className="text-[#00c8ff] mr-2">✓</span>
              <span className="text-gray-300 text-sm">Interview Preparation</span>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Stats/Placement Numbers */}
        <motion.div 
          className="md:col-span-1"
          variants={slideInRight}
        >
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 shadow-lg mb-6 relative overflow-hidden"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] to-[#00c8ff]/40 opacity-80"></div>
            <h3 className="text-xl font-bold text-white mb-4">Placement Stats</h3>
            
            <div className="space-y-4">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Domestic Placements</span>
                  <span className="text-[#00c8ff] font-bold">100%</span>
                </div>
                <div className="w-full bg-[#2A2A2A] rounded-full h-2">
                  <motion.div 
                    className="bg-[#00c8ff] h-2 rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">International Support</span>
                  <span className="text-[#00c8ff] font-bold">100%</span>
                </div>
                <div className="w-full bg-[#2A2A2A] rounded-full h-2">
                  <motion.div 
                    className="bg-[#00c8ff] h-2 rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Job Satisfaction</span>
                  <span className="text-[#00c8ff] font-bold">95%</span>
                </div>
                <div className="w-full bg-[#2A2A2A] rounded-full h-2">
                  <motion.div 
                    className="bg-[#00c8ff] h-2 rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1, delay: 0.9 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-[#00c8ff]/20 to-indigo-500/20 border border-[#2A2A2A] rounded-lg p-6 shadow-lg relative overflow-hidden"
            variants={scaleIn}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] to-indigo-500 opacity-80"></div>
            <h3 className="text-xl font-bold text-white mb-4">Get Placed In</h3>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300 px-3 py-1 rounded-full">Sports Clubs</span>
              <span className="text-xs bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300 px-3 py-1 rounded-full">Fitness Centers</span>
              <span className="text-xs bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300 px-3 py-1 rounded-full">Sports Teams</span>
              <span className="text-xs bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300 px-3 py-1 rounded-full">Corporate Wellness</span>
              <span className="text-xs bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300 px-3 py-1 rounded-full">Rehab Centers</span>
              <span className="text-xs bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300 px-3 py-1 rounded-full">Int'l Gyms</span>
            </div>
            
            <motion.button 
              className="w-full mt-6 bg-gradient-to-r from-[#00c8ff] to-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-lg shadow-[#00c8ff]/20 hover:shadow-[#00c8ff]/40 transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Our Process
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default JobPlacementOverviewSection
