import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const MembershipBenefitsSection = () => {
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
      id="benefits" 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Section Title with Background Effect */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-[#0A0A0A] h-40 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-[#00c8ff]/10 to-transparent opacity-30"></div>
          <div className="absolute left-10 top-5 w-20 h-20 rounded-full bg-[#00c8ff]/5"></div>
          <div className="absolute right-1/4 bottom-0 w-16 h-16 rounded-full bg-[#00c8ff]/5"></div>
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-1.863 1.332A3.745 3.745 0 0 1 16.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 12 21a3.745 3.745 0 0 1-1.637-.332A3.745 3.745 0 0 1 7.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 3 18.368a3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 .407 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296A3.745 3.745 0 0 1 7.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 12 3a3.745 3.745 0 0 1 1.637.332A3.745 3.745 0 0 1 16.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 21 5.632A3.745 3.745 0 0 1 22.407 12Z" />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative"
            variants={fadeInUp}
          >
            Membership <span className="text-[#00c8ff]">Benefits</span>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-[#00c8ff]/50 mx-auto mt-4"></div>
          </motion.h2>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mt-6 text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Unlock a world of opportunities and resources by becoming a UFTA member. We are committed to supporting your professional growth and success in the dynamic field of fitness.
          </motion.p>
        </div>
      </div>
      
      {/* Benefits Showcase with Visual Elements */}
      <div className="relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#00c8ff]/5 rounded-full blur-3xl -z-10 opacity-30"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-[#00c8ff]/5 rounded-full blur-3xl -z-10 opacity-30"></div>
        
        {/* Main Benefits Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              ),
              title: "Access to Exclusive Resources",
              description: "Gain access to UFTA's comprehensive library of research papers, training methodologies, and educational materials not available to the general public.",
              animation: slideInLeft
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              ),
              title: "Community & Networking",
              description: "Connect with a global network of fitness professionals, exchange ideas, and build valuable relationships through UFTA's online forums and in-person events.",
              animation: fadeInUp
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              ),
              title: "Continuing Education",
              description: "Stay at the forefront of your field with access to workshops, webinars, and courses that count toward continuing education credits for certification maintenance.",
              animation: slideInRight
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              ),
              title: "Professional Discounts",
              description: "Enjoy member-exclusive discounts on UFTA courses, certifications, events, and select fitness equipment and software from our partners.",
              animation: slideInLeft
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              ),
              title: "Career Development",
              description: "Access job placement services, career counseling, and UFTA's job board featuring opportunities from top fitness facilities and organizations worldwide.",
              animation: fadeInUp
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3m9 0v.75a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 3 21v-.75m12-3v-1.5A2.25 2.25 0 0 0 12.75 15h-1.5a2.25 2.25 0 0 0-2.25 2.25v1.5m6 0V15a2.25 2.25 0 0 0-2.25-2.25H9A2.25 2.25 0 0 0 6.75 15v3.75m6-7.5V9a2.25 2.25 0 0 0-2.25-2.25H9A2.25 2.25 0 0 0 6.75 9v1.5" />
              ),
              title: "Recognition and Credibility",
              description: "Enhance your professional standing by affiliating with UFTA, a nationally and internationally recognized leader in fitness education and research.",
              animation: slideInRight
            }
          ].map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-6 group hover:border-[#00c8ff] transition-all duration-300 relative overflow-hidden"
              variants={benefit.animation || cardVariant}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Card Shape Decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff]/50 to-transparent"></div>
              <div className="absolute -right-6 -top-6 w-16 h-16 bg-[#00c8ff]/5 rounded-full group-hover:bg-[#00c8ff]/10 transition-colors duration-300"></div>
              
              {/* Benefit Content */}
              <div className="relative z-10">
                <div className="bg-[#0A0A0A] p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 border border-[#2A2A2A] group-hover:border-[#00c8ff]/50 transition-colors duration-300">
                  <motion.svg 
                    className="w-8 h-8 text-[#00c8ff]" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.icon}
                  </motion.svg>
                </div>
                
                <h4 className="font-bold text-xl text-white mb-3 group-hover:text-[#00c8ff] transition-colors duration-300">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Download Benefits Guide Button */}
      <motion.div 
        className="mt-12 text-center"
        variants={fadeInUp}
      >
        <motion.a 
          href="#join"
          className="inline-flex items-center gap-3 bg-[#141414] hover:bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#00c8ff] rounded-full px-8 py-4 text-white transition-all duration-300 group"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="font-medium">Download Complete Benefits Guide</span>
          <span className="w-6 h-6 rounded-full bg-[#00c8ff]/20 flex items-center justify-center group-hover:bg-[#00c8ff]/30 transition-colors duration-300 text-[#00c8ff]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.a>
      </motion.div>
      
      {/* Testimonial Section */}
      <motion.div 
        className="mt-16 bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden"
        variants={fadeInUp}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff]/50 to-transparent"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#00c8ff]/5 rounded-full"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00c8ff]/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <blockquote className="text-center text-xl font-medium text-white italic mb-6 max-w-3xl mx-auto">
            "Becoming a UFTA member was a turning point in my fitness career. The resources, networking opportunities, and professional development have been invaluable for my growth in this industry."
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#141414] border-2 border-[#00c8ff] flex items-center justify-center mb-3">
              <span className="text-[#00c8ff] font-bold text-xl">RS</span>
            </div>
            <div className="text-center">
              <h5 className="font-semibold text-white">Rahul Sharma</h5>
              <p className="text-gray-400 text-sm">Professional Member since 2019</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default MembershipBenefitsSection
