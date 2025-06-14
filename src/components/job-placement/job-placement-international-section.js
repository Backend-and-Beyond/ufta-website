import React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const JobPlacementInternationalSection = () => {
  const { fadeInUp, staggerContainer, cardVariant, scaleIn } = pageAnimations.standard;

  // International opportunities
  const internationalOpportunities = [
    {
      country: "United States of America (USA)",
      flag: "🇺🇸",
      description: "Opportunities in diverse fitness markets, from boutique studios to large gym chains, leveraging our PROPTA USA partnership.",
      color: "blue"
    },
    {
      country: "United Kingdom (UK)",
      flag: "🇬🇧",
      description: "Access to a mature fitness industry with roles in personal training, S&C, and specialized coaching, supported by our CASES UK affiliation.",
      color: "indigo"
    },
    {
      country: "United Arab Emirates (UAE)",
      flag: "🇦🇪",
      description: "A rapidly growing health and wellness sector with high demand for qualified fitness professionals in luxury gyms and resorts.",
      color: "green"
    },
    {
      country: "Spain",
      flag: "🇪🇸",
      description: "Explore opportunities in a vibrant European fitness scene, particularly in tourist destinations and sports performance centers.",
      color: "red"
    },
    {
      country: "Global Network",
      flag: "🌍",
      description: "Our certifications are recognized in 199 countries, opening up a world of possibilities.",
      color: "purple"
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
      {/* Decorative elements with purple theme */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-indigo-500/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-gradient-to-tr from-purple-600/20 to-[#00c8ff]/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <motion.div 
        className="flex flex-col items-center justify-center mb-12"
        variants={fadeInUp}
      >
        <div className="relative mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-indigo-500/50 rounded-lg blur-sm"></div>
          <motion.div 
            className="relative bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-2 flex items-center"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <motion.svg 
              className="w-8 h-8 mr-2 text-purple-500" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center">
              <span className="text-purple-500">International</span> Placement Support
            </h2>
          </motion.div>
        </div>
        
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        
        <motion.p 
          className="text-center text-xl leading-relaxed mb-10 text-gray-300 max-w-3xl"
          variants={fadeInUp}
        >
          UFTA's global network and internationally recognized certifications open doors to exciting career prospects abroad. We provide guidance and support for placements in top gyms and fitness centers in countries including:
        </motion.p>
        
        {/* Stats banner */}
        <motion.div
          className="w-full max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-purple-500/30 mb-12"
          variants={scaleIn}
        >
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-4xl font-bold text-purple-400 mb-2">199+</h4>
              <p className="text-gray-300 text-sm">Countries Recognize<br />Our Certifications</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-purple-400 mb-2">50+</h4>
              <p className="text-gray-300 text-sm">International<br />Partner Gyms</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-purple-400 mb-2">95%</h4>
              <p className="text-gray-300 text-sm">Successful<br />Placements Abroad</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="relative">
        {/* Decorative connecting line */}
        <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-[#00c8ff] hidden lg:block"></div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {internationalOpportunities.map((opportunity, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-[#121212] to-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden group hover:border-purple-500 transition-all duration-300"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-70"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full filter blur-xl"></div>
              
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{opportunity.flag}</span>
                <h4 className="font-bold text-xl text-white group-hover:text-purple-400 transition-all duration-300">
                  {opportunity.country}
                </h4>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {opportunity.description}
              </p>
              
              {/* Key opportunities */}
              <div className="bg-[#0F0F0F] rounded-lg p-4 mb-6 border border-[#2A2A2A]">
                <h5 className="text-sm font-semibold text-purple-400 mb-3">Key Opportunities:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span className="text-gray-300 text-sm">Premium Fitness Centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span className="text-gray-300 text-sm">Sports Performance Centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span className="text-gray-300 text-sm">Luxury Resorts & Wellness</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <motion.button 
                  className={`bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm flex-1 mr-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore
                </motion.button>
                
                <motion.button 
                  className="bg-transparent border border-purple-500 text-purple-400 hover:text-white hover:bg-purple-600 font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.div
        className="mt-16 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 border border-purple-500/30"
        variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Interested in International Opportunities?</h3>
            <p className="text-gray-300">Our team provides visa guidance, interview preparation, and relocation support.</p>
          </div>
          
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Schedule Consultation</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default JobPlacementInternationalSection
