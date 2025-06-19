import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const EventsWorkshopsSection = () => {
  const {
    fadeInUp,
    staggerContainer,
    cardVariant,
    scaleIn
  } = pageAnimations.standard;

  // Workshop data
  const workshops = [
    {
      title: "Advanced S&C Techniques",
      date: "Upcoming: July 15-16, 2025 (Guwahati Campus & Online)",
      description: "Dive deep into cutting-edge strength and conditioning methodologies, including VBT, plyometrics, and periodization strategies for elite athletes. Ideal for experienced coaches and trainers.",
      color: "cyan",
      bgColor: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      title: "Sports Nutrition Masterclass",
      date: "Upcoming: August 5, 2025 (Online)",
      description: "Learn to design effective, evidence-based nutrition plans for athletes across various sports. Topics include nutrient timing, supplementation, and hydration strategies.",
      color: "green",
      bgColor: "from-green-500/20 to-green-600/20"
    },
    {
      title: "CPR & AED Certification",
      date: "Next Batch: June 20, 2025 (Zirakpur Branch)",
      description: "Gain life-saving skills with our certified CPR and AED workshop. Essential for all fitness professionals. UFTA regularly conducts these in collaboration with partners like Rajiv Gandhi University.",
      color: "purple",
      bgColor: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Comprehensive Fitness Assessment",
      date: "Upcoming: September 10-11, 2025 (Online & Guwahati)",
      description: "Master a variety of fitness assessment techniques, from body composition analysis to functional movement screening, to create highly personalized training programs.",
      color: "yellow",
      bgColor: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      title: "Sports Injury Prevention & First Aid",
      date: "Upcoming: October 7, 2025 (Online)",
      description: "Learn key principles of injury prevention in sports and fitness settings, along with essential first aid for common sports-related injuries.",
      color: "red",
      bgColor: "from-red-500/20 to-red-600/20"
    },
    {
      title: "Velocity-Based Training (VBT) Practicals",
      date: "Upcoming: November 12, 2025 (Guwahati Campus)",
      description: "A hands-on workshop focusing on the practical application of VBT, led by experts including UFTA's founder, a pioneer in VBT research in India.",
      color: "gray",
      bgColor: "from-gray-500/20 to-gray-600/20"
    }
  ];

  return (
    <motion.section 
      id="workshops" 
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00c8ff]/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-[#00c8ff]/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 left-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      {/* Section Header with Enhanced Background */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-[#0A0A0A] h-48 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/20 to-purple-500/10 opacity-40"></div>
          <div className="absolute right-1/4 top-10 w-16 h-16 rounded-full bg-[#00c8ff]/10"></div>
          <div className="absolute left-1/2 bottom-5 w-20 h-20 rounded-full bg-purple-500/10"></div>
          <div className="absolute left-10 top-1/2 w-10 h-10 border border-[#00c8ff]/20 rounded-md transform rotate-45"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center pt-6">
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] p-4 rounded-full mb-5 shadow-lg shadow-[#00c8ff]/5"
            variants={scaleIn}
          >
            <motion.svg 
              className="w-12 h-12 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative"
            variants={fadeInUp}
          >
            <span>Professional </span>
            <span className="text-[#00c8ff]">Workshops</span>
            <div className="h-1 w-32 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-purple-500/50 mx-auto mt-4"></div>
          </motion.h2>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mt-6 text-gray-300 max-w-3xl"
            variants={fadeInUp}
          >
            Hands-on learning experiences designed to enhance your practical skills and knowledge in fitness and sports science
          </motion.p>
        </div>
      </div>
      
      {/* Filter Categories */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        variants={staggerContainer}
      >
        {['All Workshops', 'Strength & Conditioning', 'Nutrition', 'Certification', 'Assessment', 'Safety'].map((category, index) => (
          <motion.button 
            key={index}
            className="px-6 py-2 bg-[#141414] hover:bg-[#00c8ff] border border-[#2A2A2A] hover:border-[#00c8ff] text-gray-300 hover:text-black rounded-full transition-all duration-300 text-sm font-medium"
            variants={scaleIn}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Workshop Cards Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        variants={staggerContainer}
      >
        {workshops.map((workshop, index) => (
          <motion.div 
            key={index} 
            className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-[#2A2A2A] rounded-xl shadow-xl relative overflow-hidden group hover:border-[#00c8ff]/60 transition-all duration-500 h-full flex flex-col"
            variants={cardVariant}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            {/* Card Top Gradient Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-60"></div>
            
            {/* Workshop Color Badge */}
            <div className="absolute top-6 right-6 z-10">
              <div className={`w-3 h-3 rounded-full bg-${workshop.color}-500 ring-2 ring-${workshop.color}-500/30`}></div>
            </div>
            
            {/* Workshop Image/Banner */}
            <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br ${workshop.bgColor} border-b border-[#2A2A2A] group-hover:border-[#00c8ff]/30 transition-colors duration-500`}>
              <div className="p-8 h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {workshop.title.includes('S&C') && <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />}
                      {workshop.title.includes('Nutrition') && <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />}
                      {workshop.title.includes('CPR') && <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />}
                      {workshop.title.includes('Assessment') && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />}
                      {workshop.title.includes('Injury') && <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />}
                      {workshop.title.includes('VBT') && <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-grow flex flex-col p-6">
              {/* Date Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-[#00c8ff]/10 text-[#00c8ff] rounded-full border border-[#00c8ff]/20">
                  {workshop.date.includes("2025") ? workshop.date.split(":")[0].trim() : "Coming Soon"}
                </span>
              </div>
              
              {/* Workshop Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00c8ff] transition-colors duration-300">
                {workshop.title}
              </h3>
              
              {/* Workshop Date */}
              <p className="text-sm text-gray-400 mb-4 font-medium flex items-center">
                <svg className="w-4 h-4 mr-1 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {workshop.date.includes(":") ? workshop.date.split(":")[1].trim() : workshop.date}
              </p>
              
              {/* Workshop Description */}
              <p className="text-gray-300 mb-5 text-sm leading-relaxed flex-grow">
                {workshop.description}
              </p>
              
              {/* Bottom Action Buttons */}
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
{/*                 <motion.a 
                  href="#contact" 
                  className="flex-1 inline-block bg-[#00c8ff] hover:bg-[#00c8ff]/90 text-black font-semibold py-2.5 px-4 rounded-lg transition duration-300 text-sm text-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Register Interest
                </motion.a> */}
                <motion.a 
                  href="/workshops" 
                  className="flex-1 inline-block bg-transparent border border-[#2A2A2A] hover:border-[#00c8ff]/30 text-gray-300 hover:text-[#00c8ff] font-medium py-2.5 px-4 rounded-lg transition duration-300 text-sm text-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* View All Workshops Button */}
      <motion.div 
        className="flex justify-center mt-12"
        variants={fadeInUp}
      >
        {/* <motion.a 
          href="/workshops" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#141414] border border-[#2A2A2A] hover:border-[#00c8ff] rounded-lg text-white hover:text-[#00c8ff] transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-semibold">View All Workshops</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a> */}
      </motion.div>
    </motion.section>
  )
}

export default EventsWorkshopsSection
