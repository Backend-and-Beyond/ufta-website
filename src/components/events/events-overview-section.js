import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const EventsOverviewSection = () => {
  const {
    fadeInUp,
    staggerContainer,
    cardVariant,
    scaleIn
  } = pageAnimations.standard;

  return (
    <motion.section 
      id="overview" 
      className="py-12 md:py-16 px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Section Header with Background */}
      <div className="relative mb-8 md:mb-16">
        <div className="absolute inset-0 bg-[#0A0A0A] h-32 md:h-40 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/10 to-transparent opacity-30"></div>
          <div className="absolute right-10 top-5 w-20 h-20 rounded-full bg-[#00c8ff]/5"></div>
          <div className="absolute left-1/4 bottom-0 w-16 h-16 rounded-full bg-[#00c8ff]/5"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] p-2 md:p-3 rounded-full mb-3 md:mb-5 shadow-lg"
            variants={scaleIn}
          >
            <motion.svg 
              className="w-8 h-8 md:w-10 md:h-10 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-3.75h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center relative"
            variants={fadeInUp}
          >
            Events <span className="text-[#00c8ff]">Overview</span>
            <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-[#00c8ff]/50 mx-auto mt-2 md:mt-4"></div>
          </motion.h2>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6 md:gap-8 relative">
        {/* Decorative Elements */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-[#00c8ff]/5 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-[#00c8ff]/5 rounded-full blur-3xl -z-10 opacity-50"></div>
        
        {/* Main Content Card */}
        <motion.div 
          className="lg:col-span-2 bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 md:p-6 lg:p-8 relative overflow-hidden shadow-xl"
          variants={cardVariant}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00c8ff]/5 rounded-full -mt-10 -mr-10 z-0"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00c8ff]/5 rounded-full -mb-16 -ml-16 z-0"></div>
          
          <div className="relative z-10">
            <motion.div
              className="flex items-center mb-4 md:mb-6"
              variants={fadeInUp}
            >
              <span className="text-[#00c8ff] text-lg md:text-xl font-semibold mr-2">Since 2006</span>
              <div className="h-0.5 bg-gradient-to-r from-[#00c8ff] to-transparent flex-grow"></div>
            </motion.div>
            
            <motion.h3 
              className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6"
              variants={fadeInUp}
            >
              Knowledge Exchange & <span className="text-[#00c8ff]">Professional Development</span>
            </motion.h3>
            
            <motion.div className="space-y-4 md:space-y-6" variants={staggerContainer}>
              <motion.div 
                className="relative pl-4 md:pl-6 border-l-2 border-[#00c8ff]/30" 
                variants={fadeInUp}
              >
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  Universal Fitness Training Academy (UFTA) is committed to advancing the field of sports and exercise science through continuous learning and knowledge exchange. Our events program, featuring workshops, conferences, seminars, and webinars, serves as a vital platform for fitness professionals, students, researchers, and enthusiasts to engage with the latest advancements, practical skills, and industry best practices.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative pl-4 md:pl-6 border-l-2 border-[#00c8ff]/30" 
                variants={fadeInUp}
              >
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  Since our inception, UFTA has aimed to elevate the standards of fitness education in India. Our events are an extension of this mission, designed to disseminate evidence-based knowledge, foster professional development, and create invaluable networking opportunities.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative pl-4 md:pl-6 border-l-2 border-[#00c8ff]/30" 
                variants={fadeInUp}
              >
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  Whether you're looking to acquire new practical skills, present your research, or connect with leaders in the fitness industry, UFTA's events offer a dynamic and enriching experience. Join us to stay at the cutting edge of fitness science and practice.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex"
              variants={fadeInUp}
            >
              <motion.a 
                href="#workshops" 
                className="inline-flex items-center gap-2 text-[#00c8ff] hover:text-white group transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="font-semibold">View Upcoming Events</span>
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
        
        {/* Partners & Collaboration Card */}
        <motion.div 
          className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 md:p-6 lg:p-8 relative overflow-hidden shadow-xl"
          variants={cardVariant}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00c8ff]/5 rounded-full z-0"></div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center"
              variants={fadeInUp}
            >
              <span className="w-6 h-6 md:w-8 md:h-8 bg-[#00c8ff] rounded-full flex items-center justify-center text-black mr-2 md:mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Our Collaborations</span>
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 text-sm mb-4 md:mb-6"
              variants={fadeInUp}
            >
              We partner with leading institutions to bring world-class expertise to our events:
            </motion.p>
            
            <motion.ul className="space-y-3 md:space-y-5" variants={staggerContainer}>
              {[
                {
                  name: "Academic Partners",
                  details: "Mahapurusha Srimanta Sankaradeva Viswavidyalaya, Rajiv Gandhi University",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  )
                },
                {
                  name: "International Bodies",
                  details: "PROPTA USA, CASES UK",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
                  )
                },
                {
                  name: "Industry Partners",
                  details: "Leading fitness brands and organizations",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  )
                }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 group"
                  variants={fadeInUp}
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
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-[#00c8ff] transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-400">{item.details}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="mt-6 md:mt-8 p-3 md:p-4 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A]"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00c8ff]/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm md:text-base">Explore Our Events</h4>
                  <p className="text-xs md:text-sm text-gray-400">Workshops, conferences, and more</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Event Types Cards */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8"
        variants={staggerContainer}
      >
        {[
          { label: "Workshops", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" },
          { label: "Conferences", icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3M3.75 14.25H2.25m1.5 0h3m-3 0H2.25m15.75 0h3m-3 0h1.5m-15.75 0H6.75m11.25 0h2.25m0 0h1.5m-18 0h2.25M12 7.5h.008v.008H12V7.5Z" },
          { label: "Webinars", icon: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" },
          { label: "Seminars", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" }
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-3 md:p-5 text-center group hover:border-[#00c8ff] transition-colors duration-300 flex flex-col items-center"
            variants={cardVariant}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-2 md:mb-3 group-hover:bg-[#00c8ff]/10 transition-colors duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 md:h-6 md:w-6 text-[#00c8ff]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
            </div>
            <span className="text-xs md:text-sm font-medium text-white group-hover:text-[#00c8ff] transition-colors duration-300">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default EventsOverviewSection
