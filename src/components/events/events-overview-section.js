import * as React from "react"
import { motion } from "framer-motion"

const EventsOverviewSection = () => {
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5m-9-6h.008v.008H12V10.5Z" />
        </motion.svg>
        <h2 className="text-4xl font-bold text-white text-center relative">
          Events <span className="text-[#00c8ff]">Overview</span>
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
              <svg 
                className="w-8 h-8 mr-3 text-[#00c8ff]" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">
                Transform Your Career Through Learning
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              Join UFTA's comprehensive events and workshops designed to elevate your fitness career. 
              Our industry-leading programs combine theoretical knowledge with practical application, 
              ensuring you gain the skills needed to excel in the dynamic fitness industry.
            </motion.p>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-4 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#00c8ff]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0R1 1 8.586 1l3.293 3.293 7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Expert-Led Sessions</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#00c8ff]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Hands-On Learning</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#00c8ff]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Industry Networking</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#00c8ff]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Certification Credits</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between pt-4 border-t border-[#2A2A2A]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#00c8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm text-gray-400">Flexible Scheduling Available</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#00c8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span className="text-sm text-gray-400">Limited Seats Available</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div 
          className="bg-gradient-to-br from-[#00c8ff]/10 to-[#0066ff]/10 border border-[#00c8ff]/20 rounded-lg p-6 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00c8ff] to-[#0066ff]"></div>
          
          <motion.div 
            className="mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            <h4 className="text-xl font-bold text-white mb-2">Event Highlights</h4>
            <p className="text-gray-300 text-sm">Join our growing community of fitness professionals</p>
          </motion.div>
          
          <div className="space-y-4">
            <motion.div 
              className="flex items-center justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              <span className="text-gray-300">Monthly Workshops</span>
              <span className="text-2xl font-bold text-[#00c8ff]">8+</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              <span className="text-gray-300">Annual Conferences</span>
              <span className="text-2xl font-bold text-[#00c8ff]">4</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              <span className="text-gray-300">Expert Speakers</span>
              <span className="text-2xl font-bold text-[#00c8ff]">25+</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              <span className="text-gray-300">Participants Trained</span>
              <span className="text-2xl font-bold text-[#00c8ff]">500+</span>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-6 pt-4 border-t border-[#00c8ff]/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            <button className="w-full bg-[#00c8ff] hover:bg-[#0099cc] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              View All Events
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventsOverviewSection
