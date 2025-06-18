import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations, viewportSettings } from "../../utils/animations"

const OverviewSection = () => {
  const { fadeInUp, staggerContainer } = pageAnimations.standard;

  return (
    <motion.section 
      id="overview" 
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
    >
      <div className="flex items-center justify-center mb-12">
        <motion.svg 
          className="w-12 h-12 mr-4 text-[#00c8ff]" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </motion.svg>
        <h2 className="text-5xl font-bold text-white text-center relative group">
          Elite Training <span className="text-[#00c8ff] inline-block relative">
            Overview
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#00c8ff]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.span>
          </span>
        </h2>
      </div>
      
      <motion.div 
        className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-12 relative overflow-hidden max-w-5xl mx-auto shadow-[0_0_25px_rgba(0,200,255,0.1)]"
        variants={fadeInUp}
        whileHover={{ 
          boxShadow: "0 0 30px rgba(0,200,255,0.15)", 
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
        
        {/* Enhanced SVG Background Pattern */}
        <div className="absolute -right-20 -bottom-20 opacity-10 w-[40rem] h-[40rem] pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#00c8ff" strokeWidth="0.5">
            <path d="M10 10h80v80h-80z" strokeOpacity="0.2"/>
            <path d="M30 10v80M50 10v80M70 10v80M10 30h80M10 50h80M10 70h80" strokeOpacity="0.2"/>
            <circle cx="30" cy="30" r="3" strokeOpacity="0.8"/>
            <circle cx="50" cy="50" r="3" strokeOpacity="0.8"/>
            <circle cx="70" cy="70" r="3" strokeOpacity="0.8"/>
            <path d="M30 30h20v20h-20zM50 50h20v20h-20z" strokeOpacity="0.6"/>
            <path d="M10 10l80 80M90 10l-80 80" strokeOpacity="0.1"/>
          </svg>
        </div>
        
        <div className="relative z-10">
          <motion.div 
            className="mb-8 border-l-4 border-[#00c8ff] pl-6 py-2"
            variants={fadeInUp}
            custom={1}
          >
            <p className="text-xl font-medium text-white italic">At UFTA, we transform fitness enthusiasts into industry professionals through world-class education.</p>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 leading-relaxed mb-6 text-lg"
            variants={fadeInUp}
            custom={2}
          >
            We offer a comprehensive range of fitness education programs designed to equip individuals with the knowledge, skills, and credentials needed to excel in the fitness industry. Our courses range from internationally recognized certifications to specialized diplomas and degree programs.
          </motion.p>
          
          <motion.p 
            className="text-gray-300 leading-relaxed mb-6 text-lg"
            variants={fadeInUp}
            custom={3}
          >
            Our curriculum is meticulously crafted to blend theoretical knowledge with practical applications, ensuring our graduates are not just academically qualified but also industry-ready. Whether you're a newcomer to the fitness field or an experienced professional looking to expand your expertise, we have programs tailored to meet your specific needs and career aspirations.
          </motion.p>
          
          <motion.h3 
            className="text-2xl font-bold text-white mb-4 flex items-center"
            variants={fadeInUp}
            custom={4}
          >
            <span className="inline-block w-8 h-0.5 bg-[#00c8ff] mr-3"></span>
            What sets UFTA apart
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            variants={staggerContainer}
            custom={5}
          >
            {[
              { icon: "M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Industry-relevant curriculum updated regularly" },
              { icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z", text: "Hands-on practical training in state-of-the-art facilities" },
              { icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z", text: "Faculty comprised of leading experts and practitioners" },
              { icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z", text: "Internationally recognized certifications" },
              { icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z", text: "Comprehensive career support and placement assistance" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start p-4 rounded-lg bg-[#1c1c1c] border border-[#2a2a2a] hover:border-[#00c8ff30] transition-colors duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <svg className="w-6 h-6 text-[#00c8ff] mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="ml-3 text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center"
            variants={fadeInUp}
            custom={6}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-[#008fc7] to-[#00c8ff] text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Programs
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default OverviewSection
