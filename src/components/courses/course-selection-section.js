import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations, viewportSettings } from "../../utils/animations"

const CourseSelectionSection = () => {
  const { fadeInUp, staggerContainer } = pageAnimations.standard;

  return (
    <motion.section 
      id="choosing" 
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
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.452-2.452L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.452-2.452L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.452 2.452L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.452 2.452Z" />
        </motion.svg>
        <h2 className="text-5xl font-bold text-white text-center relative group">
          High Performance <span className="text-[#00c8ff] inline-block relative">
            Training Selection
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
        className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-12 relative overflow-hidden max-w-6xl mx-auto shadow-[0_0_25px_rgba(0,200,255,0.1)]"
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
        
        {/* Enhanced Star Graphic Background */}
        <div className="absolute right-0 top-0 opacity-10 w-full h-full pointer-events-none">
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="#00c8ff" 
            strokeWidth="0.5"
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ 
              opacity: 0.8, 
              scale: 1,
              rotate: 5
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <path d="M50 10l5 15h15l-12 9 5 15-13-9-13 9 5-15-12-9h15z" strokeOpacity="0.8"/>
            <path d="M50 20l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10z" strokeOpacity="0.5"/>
            <circle cx="50" cy="50" r="40" opacity="0.2"/>
            <circle cx="50" cy="50" r="30" opacity="0.15"/>
            <circle cx="50" cy="50" r="20" opacity="0.1"/>
            <path d="M20 20l60 60M80 20l-60 60" strokeOpacity="0.1"/>
            <path d="M50 10v80M10 50h80" strokeOpacity="0.1"/>
          </motion.svg>
        </div>
        
        <div className="relative z-10">
          <motion.div 
            className="mb-8 border-l-4 border-[#00c8ff] pl-6 py-2"
            variants={fadeInUp}
            custom={1}
          >
            <p className="text-xl font-medium text-white italic">Finding the right educational path is crucial for your fitness career success.</p>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 leading-relaxed mb-8 text-lg"
            variants={fadeInUp}
            custom={2}
          >
            Choosing the right fitness education pathway is crucial for your career success. At UFTA, we offer multiple levels of qualifications to match your aspirations and goals, ensuring you find the perfect program for your unique journey.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10"
            variants={staggerContainer}
            custom={3}
          >
            <motion.div 
              className="bg-[#0D0D0D] p-8 rounded-xl border border-[#2a2a2a] shadow-lg relative overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#00c8ff">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489" />
                </svg>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00c8ff]/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00c8ff] transition-colors duration-300">Entry-Level Professionals</h3>
              </div>
              
              <div className="pl-13 mb-5">
                <p className="text-gray-400 mb-4">Perfect for those beginning their fitness career or transitioning from another field.</p>
              </div>
              
              <ul className="space-y-3 mb-5">
                {[
                  "PROPTA-USA CPT (Certified Personal Trainer)",
                  "PROPTA-USA CNS (Certified Nutrition Specialist)",
                  "Diploma in Personal Training",
                  "Diploma in Sports Nutrition"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center text-gray-300"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c8ff] mr-2 flex-shrink-0"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff]/30 to-transparent mb-5"></div>
              
              <div className="text-sm text-gray-400">
                <span className="text-[#00c8ff]">Duration:</span> 4-12 weeks
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-[#0D0D0D] p-8 rounded-xl border border-[#2a2a2a] shadow-lg relative overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#00c8ff">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00c8ff]/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00c8ff] transition-colors duration-300">Advanced Professionals</h3>
              </div>
              
              <div className="pl-13 mb-5">
                <p className="text-gray-400 mb-4">Designed for fitness professionals looking to specialize and advance their careers.</p>
              </div>
              
              <ul className="space-y-3 mb-5">
                {[
                  "PROPTA-USA CSCS (Certified Strength & Conditioning Specialist)",
                  "Diploma in Strength & Conditioning",
                  "Diploma in Sports Injury Rehabilitation",
                  "B.Sc. in Fitness and Athletic Conditioning"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center text-gray-300"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c8ff] mr-2 flex-shrink-0"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff]/30 to-transparent mb-5"></div>
              
              <div className="text-sm text-gray-400">
                <span className="text-[#00c8ff]">Duration:</span> 6 months - 3 years
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-[#0D0D0D]/70 rounded-xl p-8 border border-[#2a2a2a] mb-8"
            variants={fadeInUp}
            custom={4}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="inline-block w-8 h-0.5 bg-[#00c8ff] mr-3"></span>
              Selection Factors to Consider
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
                  title: "Current Knowledge Base",
                  description: "Your existing education and experience in fitness will determine your starting point"
                },
                {
                  icon: "M15.75 15.75V18m-7.5-10.5H14.25m-4.5 0v3m-7.5 0c0 3.75 1.5 5.25 5.25 5.25h9c3.75 0 5.25-1.5 5.25-5.25 0-3.254-1.126-5.247-4.08-5.25h-6.84c-2.126 0-3.663.712-4.5 2.25m0 3v3m-3-3h3m12 0h3",
                  title: "Career Goals",
                  description: "Whether you aim to work with general populations, athletes, or in specialized fields"
                },
                {
                  icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
                  title: "Time Commitment",
                  description: "Certifications take weeks, diplomas take months, and degrees take years to complete"
                },
                {
                  icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z",
                  title: "Budget",
                  description: "Investment varies from entry-level certifications to comprehensive degree programs"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#00c8ff]/10 to-transparent p-6 rounded-lg border border-[#00c8ff]/20"
            variants={fadeInUp}
            custom={5}
          >
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-white mb-1">Still unsure which course is right for you?</h4>
              <p className="text-gray-300">Our expert advisors are here to help guide your educational journey.</p>
            </div>
            
            <motion.a 
              href="tel:+919864047046" 
              className="px-6 py-3 bg-[#00c8ff] text-black font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Contact an Advisor
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default CourseSelectionSection
