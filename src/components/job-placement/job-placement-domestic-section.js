import React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const JobPlacementDomesticSection = () => {
  const { fadeInUp, staggerContainer, cardVariant } = pageAnimations.standard;

  // Domestic placement opportunities
  const domesticPlacements = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      title: "Sports Authority of India (SAI)",
      description: "Government sports body focused on athletic excellence"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.822.672l-4.684-2.796a.563.563 0 00-.652 0l-4.684 2.796a.562.562 0 01-.822-.672l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      title: "Top Gym Chains",
      description: "Nitrro, UFC Gym, Gold's Gym, Fitness First, SFL Gyms etc."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 0112 20.904a14.98 14.98 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      title: "Khelo India Centers of Excellence",
      description: "National sports development centers"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.52-.635 1.421-.825 2.246-.397l.713.572c.796.641.796 1.793 0 2.434l-.713.572c-.825.428-1.726.238-2.246-.397L11.42 15.17zm0 0L5.828 9.97a6 6 0 00-2.12-.523L3.04 9.324a.75.75 0 10-.422 1.406l.56.169A6 6 0 005.828 11.5l5.592 5.592z" />
        </svg>
      ),
      title: "Professional Sports Leagues",
      description: "IPL, ISL Teams - subject to team requirements"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
      title: "Sports Medicine & High-Performance Centers",
      description: "Specialized athletic performance facilities"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0112 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      title: "Educational Institutions",
      description: "Universities, Colleges & Schools"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12.75h6.75M9 18.75h6.75" />
        </svg>
      ),
      title: "Healthcare & Corporate",
      description: "Hospitals & Corporate Wellness Programs"
    }
  ];

  return (
    <motion.section 
      className="py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-[#00c8ff]/20 to-indigo-500/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tr from-[#00c8ff]/20 to-purple-500/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <motion.div 
        className="flex flex-col items-center justify-center mb-12"
        variants={fadeInUp}
      >
        <div className="relative mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00c8ff]/50 to-blue-500/50 rounded-lg blur-sm"></div>
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center">
              <span className="text-[#00c8ff]">Domestic</span> Placements
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#00c8ff] via-blue-500 to-[#00c8ff] mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        
        <motion.p 
          className="text-center text-xl leading-relaxed mb-10 text-gray-300 max-w-3xl"
          variants={fadeInUp}
        >
          UFTA provides placements for Personal Trainers, S&C Coaches, and Sports Nutritionists in a wide array of esteemed organizations across India:
        </motion.p>
        
        {/* Placement Category Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeInUp}
        >
          {["All", "Gyms & Fitness", "Sports", "Education", "Corporate", "Healthcare"].map((category, idx) => (
            <motion.button
              key={idx}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${idx === 0 ? 'bg-[#00c8ff] text-white' : 'bg-[#1A1A1A] text-gray-300 border border-[#2A2A2A] hover:border-[#00c8ff] hover:text-[#00c8ff]'}`}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        {domesticPlacements.map((placement, index) => (
          <motion.div 
            key={index}
            className="bg-gradient-to-br from-[#121212] to-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 transition-all duration-300 hover:border-[#00c8ff] group relative overflow-hidden"
            variants={cardVariant}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-[#00c8ff]/10 to-blue-500/5 rounded-bl-3xl"></div>
            <div className="absolute -bottom-2 -left-2 h-20 w-20 bg-gradient-to-tr from-[#00c8ff]/10 to-blue-500/5 rounded-tr-3xl"></div>
            
            <div className="bg-[#1F1F1F] text-[#00c8ff] p-3 rounded-lg inline-flex items-center justify-center mb-6 group-hover:bg-[#00c8ff]/20 transition-all duration-300">
              {placement.icon}
            </div>
            
            <h3 className="font-bold text-xl text-white mb-3 group-hover:text-[#00c8ff] transition-all duration-300">
              {placement.title}
            </h3>
            
            <p className="text-gray-400 mb-6">
              {placement.description}
            </p>
            
            <div className="flex justify-between items-center mt-6">
              <motion.button
                className="text-sm text-[#00c8ff] hover:text-white hover:bg-[#00c8ff] border border-[#00c8ff] px-4 py-1.5 rounded-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Details
              </motion.button>
              
              <motion.button
                className="text-sm text-gray-300 hover:text-white hover:bg-[#2A2A2A] border border-[#2A2A2A] px-4 py-1.5 rounded-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-12">
        <motion.button
          className="flex items-center gap-2 bg-gradient-to-r from-[#00c8ff] to-blue-500 text-white px-8 py-3 rounded-md font-medium shadow-lg shadow-[#00c8ff]/20 hover:shadow-[#00c8ff]/40 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View All Domestic Opportunities</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </motion.button>
      </div>
    </motion.section>
  )
}

export default JobPlacementDomesticSection
