import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const MembershipCategoriesSection = () => {
  const {
    fadeInUp,
    slideInLeft,
    slideInRight,
    staggerContainer,
    cardVariant,
    scaleIn
  } = pageAnimations.standard;

  return (
    <motion.section 
      id="categories" 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Section Header with Background */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-[#0A0A0A] h-40 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/10 to-transparent opacity-30"></div>
          <div className="absolute right-10 top-5 w-20 h-20 rounded-full bg-[#00c8ff]/5"></div>
          <div className="absolute left-1/4 bottom-0 w-16 h-16 rounded-full bg-[#00c8ff]/5"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] p-3 rounded-full mb-5 shadow-lg"
            variants={scaleIn}
          >
            <motion.svg 
              className="w-10 h-10 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative"
            variants={fadeInUp}
          >
            Membership <span className="text-[#00c8ff]">Categories</span>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-[#00c8ff]/50 mx-auto mt-4"></div>
          </motion.h2>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mt-6 text-gray-300 max-w-2xl"
            variants={fadeInUp}
          >
            Choose the membership category that best suits your professional needs and career goals.
          </motion.p>
        </div>
      </div>
      
      {/* Comparison Guide */}
      <motion.div 
        className="max-w-md mx-auto mb-12 bg-[#141414] border border-[#2A2A2A] rounded-lg py-4 px-6 flex items-center justify-between shadow-lg"
        variants={slideInLeft}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00c8ff] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-white">Not sure which plan is right for you?</span>
        </div>
        <motion.a 
          href="#join" 
          className="text-[#00c8ff] text-sm font-semibold flex items-center hover:underline"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          Contact Us
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </motion.div>
      
      {/* Membership Cards Container */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        variants={staggerContainer}
      >
        {/* Decorative Elements */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-[#00c8ff]/5 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-[#00c8ff]/5 rounded-full blur-3xl -z-10 opacity-50"></div>
        
        {/* Membership Cards */}
        {[
          {
            title: "Student Membership",
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            ),
            description: "For current students pursuing degrees or certifications in fitness, sports science, or related fields.",
            features: [
              "Discounted access to UFTA resources",
              "Student-focused networking events",
              "Career guidance and mentorship",
              "Internship opportunities"
            ],
            price: "₹1,499",
            period: "/year",
            isPopular: false,
            color: "from-[#00c8ff]/20 to-transparent",
            bgPattern: "radial-gradient(circle at 10% 90%, #00c8ff08 0%, transparent 20%)",
            animation: slideInLeft
          },
          {
            title: "Professional Membership",
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            ),
            description: "For working fitness professionals, personal trainers, coaches, and practitioners in the field.",
            features: [
              "Full access to all UFTA resources",
              "Professional certification maintenance",
              "Job placement assistance",
              "Professional liability insurance discounts",
              "Continuing education opportunities"
            ],
            price: "₹3,999",
            period: "/year",
            isPopular: true,
            color: "from-[#00c8ff]/30 to-transparent",
            bgPattern: "radial-gradient(circle at 50% 50%, #00c8ff10 0%, transparent 25%)",
            animation: fadeInUp
          },
          {
            title: "Business Membership",
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            ),
            description: "For gyms, fitness studios, sports teams, and organizations in the fitness industry.",
            features: [
              "Multiple user accounts (5-10 staff members)",
              "Branded certification for staff",
              "Access to candidate database for recruitment",
              "Business development resources",
              "Consultation on facility design & equipment"
            ],
            price: "₹9,999",
            period: "/year",
            isPopular: false,
            color: "from-[#00c8ff]/20 to-transparent",
            bgPattern: "radial-gradient(circle at 90% 10%, #00c8ff08 0%, transparent 20%)",
            animation: slideInRight
          }
        ].map((membership, index) => (
          <motion.div 
            key={index} 
            className={`bg-[#141414] border border-[#2A2A2A] rounded-xl overflow-hidden group hover:border-[#00c8ff] transition-all duration-500 shadow-xl flex flex-col ${membership.isPopular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            variants={membership.animation || cardVariant}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Popular Tag */}
            {membership.isPopular && (
              <div className="absolute top-0 right-0 bg-[#00c8ff] text-black px-6 py-1 text-xs font-bold z-10 shadow-lg rounded-bl-lg -mr-6 mt-6 rotate-45">
                POPULAR
              </div>
            )}
            
            {/* Card Header */}
            <div 
              className="pt-8 pb-4 px-6 relative overflow-hidden"
              style={{ background: membership.bgPattern }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${membership.color} opacity-50`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-[#0A0A0A]/70 rounded-lg border border-[#2A2A2A] mr-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-[#00c8ff]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={1.5}
                      >
                        {membership.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {membership.title.split(' ')[0]} 
                      </h3>
                      <span className="text-[#00c8ff] font-semibold">
                        {membership.title.split(' ')[1]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-[#0A0A0A]/50 rounded-lg border border-[#2A2A2A] px-3 py-1 text-center">
                    <span className="block text-xl font-bold text-white">
                      {membership.price}
                    </span>
                    <span className="text-xs text-gray-400">{membership.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-3 min-h-[40px]">
                  {membership.description}
                </p>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="px-6 py-4 bg-[#0A0A0A]/50 flex-grow flex flex-col">
              <h4 className="text-sm uppercase text-gray-400 font-semibold mb-3 tracking-wider">
                What's Included
              </h4>
              
              <ul className="space-y-3 mb-6 text-gray-300 text-sm flex-grow">
                {membership.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.a 
                href="#join" 
                className={`w-full py-3 text-center font-medium rounded-md transition-all duration-300 ${membership.isPopular 
                  ? 'bg-[#00c8ff] text-black hover:bg-[#00c8ff]/90 shadow-lg shadow-[#00c8ff]/20' 
                  : 'bg-[#1A1A1A] text-white border border-[#2A2A2A] hover:border-[#00c8ff] hover:text-[#00c8ff]'}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {membership.isPopular ? 'Join Now' : 'Select Plan'}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Compare Features Button */}
      <motion.div 
        className="text-center mt-12"
        variants={fadeInUp}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-[#141414] border border-[#2A2A2A] hover:border-[#00c8ff] rounded-full px-6 py-3 text-white cursor-pointer group transition-all duration-300"
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
          <span className="text-sm font-medium">See Full Comparison Table</span>
          <span className="w-5 h-5 rounded-full bg-[#00c8ff]/20 flex items-center justify-center group-hover:bg-[#00c8ff]/30 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default MembershipCategoriesSection
