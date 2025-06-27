import * as React from "react"
import { motion } from "framer-motion"

const MembershipBenefitsSection = () => {
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

  const benefits = [
    {
      title: "Educational Resources",
      description: "Access to comprehensive training materials, research papers, and industry best practices",
      icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
      color: "blue"
    },
    {
      title: "Professional Networking",
      description: "Connect with fitness professionals, mentors, and industry leaders worldwide",
      icon: "M18 18.72a9.094 9.094 0 0 0 3.75-5.72M18 18.72V21m-3.75-2.28A9.094 9.094 0 0 1 12 21v-2.28m5.25-10.5A9.094 9.094 0 0 0 12 3V.72A9.094 9.094 0 0 1 17.25 6H12m0 0V3.75m0 2.25A9.094 9.094 0 0 0 6.75 6H12m0 0V8.25m0-2.25A9.094 9.094 0 0 0 3 6h3.75m0 0V8.25m9 9.75A9.094 9.094 0 0 0 12 15v2.25A9.094 9.094 0 0 0 14.25 21H12m0 0V18.75m0 2.25A9.094 9.094 0 0 0 9.75 21H12m0 0V18.75m-3.75 0A9.094 9.094 0 0 0 3 15.75V18m3-2.25V15m0 0A9.094 9.094 0 0 0 3 9.75V12m3-2.25V9.75m0 0A9.094 9.094 0 0 0 3 3.75V6m3-2.25V3.75m0 0A9.094 9.094 0 0 0 3 .75H6m6 15A9.094 9.094 0 0 0 12 3v2.25A9.094 9.094 0 0 0 12 15.75Z",
      color: "green"
    },
    {
      title: "Continuing Education",
      description: "Exclusive workshops, webinars, and certification programs to advance your career",
      icon: "M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
      color: "purple"
    },
    {
      title: "Industry Recognition",
      description: "Professional credentials and certifications recognized across the fitness industry",
      icon: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-1.863 1.332A3.745 3.745 0 0 1 16.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 12 21a3.745 3.745 0 0 1-1.637-.332A3.745 3.745 0 0 1 7.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 3 18.368a3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 .407 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296A3.745 3.745 0 0 1 7.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 12 3a3.745 3.745 0 0 1 1.637.332A3.745 3.745 0 0 1 16.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 21 5.632A3.745 3.745 0 0 1 22.407 12Z",
      color: "orange"
    },
    {
      title: "Career Support",
      description: "Job placement assistance, career guidance, and mentorship programs",
      icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
      color: "teal"
    },
    {
      title: "Exclusive Events",
      description: "Member-only conferences, workshops, and networking events throughout the year",
      icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
      color: "red"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return { accent: '#00c8ff', bg: 'bg-blue-500/10', text: 'text-blue-400' };
      case 'green':
        return { accent: '#10b981', bg: 'bg-green-500/10', text: 'text-green-400' };
      case 'purple':
        return { accent: '#8b5cf6', bg: 'bg-purple-500/10', text: 'text-purple-400' };
      case 'orange':
        return { accent: '#f59e0b', bg: 'bg-orange-500/10', text: 'text-orange-400' };
      case 'teal':
        return { accent: '#14b8a6', bg: 'bg-teal-500/10', text: 'text-teal-400' };
      case 'red':
        return { accent: '#ef4444', bg: 'bg-red-500/10', text: 'text-red-400' };
      default:
        return { accent: '#00c8ff', bg: 'bg-blue-500/10', text: 'text-blue-400' };
    }
  };

  return (
    <section 
      id="benefits" 
      className="py-16"
    >
      {/* Section Title */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-[#0A0A0A] h-40 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-[#00c8ff]/10 to-transparent opacity-30"></div>
          <div className="absolute left-10 top-5 w-20 h-20 rounded-full bg-[#00c8ff]/5"></div>
          <div className="absolute right-1/4 bottom-0 w-16 h-16 rounded-full bg-[#00c8ff]/5"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] p-3 rounded-full mb-5 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
          >
            <motion.svg 
              className="w-10 h-10 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-1.863 1.332A3.745 3.745 0 0 1 16.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 12 21a3.745 3.745 0 0 1-1.637-.332A3.745 3.745 0 0 1 7.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 3 18.368a3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 .407 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296A3.745 3.745 0 0 1 7.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 12 3a3.745 3.745 0 0 1 1.637.332A3.745 3.745 0 0 1 16.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 21 5.632A3.745 3.745 0 0 1 22.407 12Z" />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpVariant}
          >
            Membership <span className="text-[#00c8ff]">Benefits</span>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-[#00c8ff]/50 mx-auto mt-4"></div>
          </motion.h2>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mt-6 text-gray-300 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            Discover the comprehensive advantages that come with your UFTA membership
          </motion.p>
        </div>
      </div>
      
      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => {
          const colors = getColorClasses(benefit.color);
          
          return (
            <motion.div
              key={index}
              className="group relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
            >
              <motion.div 
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden shadow-xl hover:border-[#00c8ff]/50 transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Static decorative elements */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-30"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00c8ff]/5 rounded-full z-0"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className={`w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariant}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-7 w-7 ${colors.text}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                    </svg>
                  </motion.div>
                  
                  {/* Content */}
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-[#00c8ff] transition-colors duration-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariant}
                  >
                    {benefit.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariant}
                  >
                    {benefit.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Call to Action */}
      <motion.div 
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideUpVariant}
      >
        <motion.div 
          className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 max-w-2xl mx-auto relative overflow-hidden"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00c8ff]/5 rounded-full z-0"></div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              Ready to unlock these benefits?
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              Join thousands of fitness professionals who have advanced their careers with UFTA membership
            </motion.p>
            
            <motion.a 
              href="#join"
              className="inline-flex items-center justify-center bg-[#00c8ff] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#00c8ff]/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join UFTA Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default MembershipBenefitsSection
