import * as React from "react"
import { motion } from "framer-motion"

const MembershipOverviewSection = () => {
  // Simple, unified animation variants
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="overview" 
      className="py-16"
    >
      <motion.div 
        className="flex items-center justify-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideUpVariant}
      >
        <motion.svg 
          className="w-10 h-10 mr-3 text-[#00c8ff]" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.75-5.72M18 18.72V21m-3.75-2.28A9.094 9.094 0 0 1 12 21v-2.28m5.25-10.5A9.094 9.094 0 0 0 12 3V.72A9.094 9.094 0 0 1 17.25 6H12m0 0V3.75m0 2.25A9.094 9.094 0 0 0 6.75 6H12m0 0V8.25m0-2.25A9.094 9.094 0 0 0 3 6h3.75m0 0V8.25m9 9.75A9.094 9.094 0 0 0 12 15v2.25A9.094 9.094 0 0 0 14.25 21H12m0 0V18.75m0 2.25A9.094 9.094 0 0 0 9.75 21H12m0 0V18.75m-3.75 0A9.094 9.094 0 0 0 3 15.75V18m3-2.25V15m0 0A9.094 9.094 0 0 0 3 9.75V12m3-2.25V9.75m0 0A9.094 9.094 0 0 0 3 3.75V6m3-2.25V3.75m0 0A9.094 9.094 0 0 0 3 .75H6m6 15A9.094 9.094 0 0 0 12 3v2.25A9.094 9.094 0 0 0 12 15.75Z" />
        </motion.svg>
        <h2 className="text-4xl font-bold text-white text-center relative">
          Membership <span className="text-[#00c8ff]">Overview</span>
          <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
        </h2>
      </motion.div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Overview Info Card */}
        <motion.div 
          className="lg:col-span-2 bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00c8ff]/5 rounded-full -mt-10 -mr-10 z-0"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00c8ff]/5 rounded-full -mb-16 -ml-16 z-0"></div>
          
          <div className="relative z-10">
            <motion.div
              className="flex items-center mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              <span className="text-[#00c8ff] text-xl font-semibold mr-2">Since 2006</span>
              <div className="h-0.5 bg-gradient-to-r from-[#00c8ff] to-transparent flex-grow"></div>
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              Welcome to the <span className="text-[#00c8ff]">Universal Fitness Training Academy</span> Membership Program
            </motion.h3>
            
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideUpVariant}
            >
              <div className="relative pl-6 border-l-2 border-[#00c8ff]/30">
                <p className="text-lg leading-relaxed text-gray-300">
                  UFTA has been at the forefront of fitness education in India, dedicated to fostering excellence and advancing the careers of fitness professionals. Our membership program is designed to extend this commitment, offering a platform for continuous learning, professional development, and networking within a vibrant community of experts and enthusiasts.
                </p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-[#00c8ff]/30">
                <p className="text-lg leading-relaxed text-gray-300">
                  Becoming a UFTA member means joining an elite group dedicated to evidence-based practices in sports and exercise science, strength and conditioning, and nutrition.
                </p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-[#00c8ff]/30">
                <p className="text-lg leading-relaxed text-gray-300">
                  Our program aims to support your journey by providing access to exclusive content, educational resources, networking events, and much more, all underpinned by UFTA's reputation for quality and innovation in fitness education.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              <motion.a 
                href="#categories" 
                className="inline-flex items-center gap-2 text-[#00c8ff] hover:text-white group transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="font-semibold">View Membership Categories</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Key Points Card */}
        <motion.div 
          className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00c8ff]/5 rounded-full z-0"></div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-xl font-bold text-white mb-6 flex items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              <span className="w-8 h-8 bg-[#00c8ff] rounded-full flex items-center justify-center text-black mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Who Should Join?</span>
            </motion.h3>
            
            <div className="space-y-5">
              {[
                {
                  title: "Students",
                  description: "Aspiring to enter the fitness industry",
                  icon: "M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                },
                {
                  title: "Professionals",
                  description: "Seeking to enhance skills and knowledge",
                  icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                },
                {
                  title: "Institutions",
                  description: "Committed to high standards in fitness",
                  icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInVariant}
                >
                  <div className="p-2 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-[#00c8ff] transition-colors duration-300">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-[#00c8ff]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-[#00c8ff] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 p-4 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00c8ff]/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Ready to Get Started?</h4>
                  <p className="text-sm text-gray-400">Scroll down to explore our membership categories and benefits</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Stats and Numbers */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideUpVariant}
      >
        {[
          { value: "2006", label: "Established" },
          { value: "1000+", label: "Active Members" },
          { value: "15+", label: "Years of Excellence" },
          { value: "100%", label: "Commitment to Quality" }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-5 text-center group hover:border-[#00c8ff] transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="block text-3xl font-bold text-[#00c8ff] mb-2">
              {stat.value}
            </span>
            <span className="text-sm text-gray-400">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default MembershipOverviewSection
