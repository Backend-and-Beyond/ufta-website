import * as React from "react"
import { motion } from "framer-motion"
import rgUniversityLogo from "../../images/logos/University/Rajiv_Gandhi_University_Logo.png"
import mssvUniversityLogo from "../../images/logos/University/Mahapurusha_Srimanta_Sankaradeva_Viswavidyalaya_logo.png"

const UniversityApprovalsSection = ({ openModal }) => {
  // Simple, non-blinking animation variants
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

  const stats = [
    { number: "19", label: "Years of Excellence", icon: "🏆" },
    { number: "2", label: "University Partnerships", icon: "🤝" },
    { number: "1st", label: "UGC Approved Course in India", icon: "🎯" }
  ];

  return (
    <section 
      id="approvals" 
      className="py-10 md:py-20 px-4 md:px-6"
    >
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-16">
        <motion.div 
          className="inline-flex flex-col md:flex-row items-center justify-center mb-4 md:mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUpVariant}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#00c8ff] to-[#0099cc] rounded-full flex items-center justify-center md:mr-4 mb-3 md:mb-0"
            whileHover={{ rotate: 360 }}
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              University <span className="text-[#00c8ff]">Approvals</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#00c8ff] to-transparent mx-auto"></div>
          </div>
        </motion.div>
        <motion.p 
          className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariant}
        >
          Recognized and approved by leading educational institutions, UFTA maintains the highest standards of academic excellence and professional credibility.
        </motion.p>
      </div>

      {/* Statistics Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-4 md:p-6 text-center relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl md:text-3xl font-bold text-[#00c8ff] mb-1">{stat.number}</div>
            <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </motion.div>
        ))}
      </div>

      {/* University Approval Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* UGC Approved Course Card */}
        <motion.div 
          className="bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2A2A2A] rounded-2xl p-6 md:p-8 relative overflow-hidden group cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          whileHover={{ y: -5, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openModal('ugc')}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 particle-bg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00c8ff] to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#00c8ff] to-transparent rounded-full blur-2xl"></div>
          </div>
          
          {/* Status Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00c8ff]/20 to-[#0099cc]/20 border border-[#00c8ff]/30 rounded-full mb-6 pulse-glow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-[#00c8ff] rounded-full mr-2 pulse-glow"></div>
            <span className="text-[#00c8ff] font-semibold text-sm">UGC APPROVED</span>
          </motion.div>

          {/* University Logo */}
          <motion.div 
            className="relative mb-6 float-animation"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#00c8ff]/10 to-[#0099cc]/10 rounded-2xl flex items-center justify-center border border-[#00c8ff]/20 group-hover:border-[#00c8ff]/40 transition-colors duration-300 p-2">
              <img 
                src={mssvUniversityLogo} 
                alt="Mahapurusha Srimanta Sankaradeva Viswavidyalaya Logo"
                className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-4">
            B.Sc. in Fitness and <span className="text-[#00c8ff]">Athletic Conditioning</span>
          </h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            India's first UGC-approved undergraduate program in fitness and athletic conditioning, designed as per NEP 2020 guidelines with multiple exit options.
          </p>

          {/* Program Features */}
          <div className="space-y-3 mb-6">
            {[
              { icon: "⏱️", text: "4-Year Undergraduate Program" },
              { icon: "🎓", text: "Honours with Research Options" },
              { icon: "📚", text: "Major & Minor Combinations" },
              { icon: "🚪", text: "Multiple Exit Pathways" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center text-gray-400"
                whileHover={{ x: 5, color: "#ffffff" }}
              >
                <span className="mr-3 text-lg">{feature.icon}</span>
                <span className="text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* University Partnership */}
          <div className="border-t border-[#2A2A2A] pt-4 mb-4">
            <p className="text-xs text-gray-500 mb-1">In Partnership With</p>
            <p className="text-[#00c8ff] font-semibold text-sm">
              Mahapurusha Srimanta Sankaradeva Viswavidyalaya
            </p>
            <p className="text-xs text-gray-400">Kalongpar, Nagaon, Assam • UGC Recognised</p>
          </div>

          {/* Click to Learn More */}
          <motion.div 
            className="flex items-center text-xs text-gray-500 group-hover:text-[#00c8ff] transition-colors duration-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Click to learn more about this program
          </motion.div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        </motion.div>

        {/* Rajiv Gandhi University Card */}
        <motion.div 
          className="bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2A2A2A] rounded-2xl p-8 relative overflow-hidden group cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          whileHover={{ y: -5, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openModal('rgu')}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 particle-bg">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#10b981] to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#10b981] to-transparent rounded-full blur-2xl"></div>
          </div>

          {/* Status Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-500/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 pulse-glow"></div>
            <span className="text-green-400 font-semibold text-sm">CENTRAL UNIVERSITY</span>
          </motion.div>

          {/* University Logo */}
          <motion.div 
            className="relative mb-6 float-animation"
            whileHover={{ scale: 1.05, rotate: -5 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-500/10 to-green-400/10 rounded-2xl flex items-center justify-center border border-green-500/20 group-hover:border-green-500/40 transition-colors duration-300 p-2">
              <img 
                src={rgUniversityLogo} 
                alt="Rajiv Gandhi University Logo"
                className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-4">
            Rajiv Gandhi <span className="text-[#10b981]">University</span>
          </h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Strategic partnership as "Sports Science Education Promoter" with this prestigious Central University in Arunachal Pradesh.
          </p>

          {/* Collaboration Activities */}
          <div className="space-y-3 mb-6">
            {[
              { icon: "🎯", text: "Career Awareness Programs" },
              { icon: "💪", text: "Strength & Conditioning Workshops" },
              { icon: "🚑", text: "CPR & AED Certification" },
              { icon: "🔬", text: "Sports & Exercise Sciences" }
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-center text-gray-400"
                whileHover={{ x: 5, color: "#ffffff" }}
              >
                <span className="mr-3 text-lg">{activity.icon}</span>
                <span className="text-sm">{activity.text}</span>
              </motion.div>
            ))}
          </div>

          {/* University Details */}
          <div className="border-t border-[#2A2A2A] pt-4 mb-4">
            <p className="text-xs text-gray-500 mb-1">Institution Type</p>
            <p className="text-green-400 font-semibold text-sm">Central University</p>
            <p className="text-xs text-gray-400">Arunachal Pradesh • Established by Central Government</p>
          </div>

          {/* Click to Learn More */}
          <motion.div 
            className="flex items-center text-xs text-gray-500 group-hover:text-green-400 transition-colors duration-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Click to explore partnership details
          </motion.div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        </motion.div>
      </div>

      {/* Additional Info Section */}
      {/* <motion.div 
        className="mt-16 text-center"
        variants={gentleFadeUp}
      >
        <motion.div 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-full"
          whileHover={{ scale: 1.05, borderColor: "#00c8ff" }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-5 h-5 text-[#00c8ff] mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span className="text-gray-300 font-medium">Maintaining Excellence Since 2006</span>
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default UniversityApprovalsSection;
