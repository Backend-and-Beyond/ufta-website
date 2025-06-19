import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const AimsObjectivesSection = () => {
  const { staggerContainer, gentleFadeUp, cardVariant, slideInLeft, slideInRight, fadeInUp, scaleIn } = pageAnimations.standard;

  const objectives = [
    {
      title: "Raise Awareness",
      description: "To raise awareness, especially among youth, about careers in Sports Science and Fitness.",
      icon: "🎯",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Educate & Train", 
      description: "To emphasize education in Exercise Science, Sports Nutrition, and life-saving skills like CPR & AED.",
      icon: "🧠",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Global Standards",
      description: "To align training with global standards and internationalize the Fitness Industry.",
      icon: "🌎",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const commitments = [
    {
      title: "Evidence-Based Services",
      description: "To evaluate, certify, and facilitate employment, offering evidence-based services for national preventive healthcare.",
      icon: "📊",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Promote Healthy Lifestyles",
      description: "To promote healthy lifestyles through scientific meetings, seminars, and workshops in educational institutions.",
      icon: "💪",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Strengthen Health Services",
      description: "To assist organizations in strengthening health & fitness services across various sectors.",
      icon: "🏥",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <motion.section 
      id="aims" 
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Section Header */}
      <motion.div 
        className="flex items-center justify-center mb-16"
        variants={gentleFadeUp}
      >
        <motion.svg 
          className="w-12 h-12 mr-4 text-[#00c8ff]" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
        </motion.svg>
        <div>
          <h2 className="text-4xl font-bold text-white text-center relative">
            Our Aims & <span className="text-[#00c8ff]">Objectives</span>
            <motion.span 
              className="absolute -top-4 -right-7 text-xs bg-gradient-to-r from-[#00c8ff] to-blue-600 px-2 py-0.5 rounded-full text-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Vision-Driven
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00c8ff] to-transparent mt-2"></div>
        </div>
      </motion.div>
      
      {/* Intro Text */}
      <motion.p 
        className="text-center text-gray-300 max-w-3xl mx-auto mb-16"
        variants={fadeInUp}
      >
        At UFTA, we're driven by a vision to transform fitness education in India and create a healthier society through excellence, innovation, and global standards.
      </motion.p>
      
      {/* Mission Vision Card */}
      <motion.div 
        className="bg-[#141414] border border-[#2A2A2A] hover:border-[#00c8ff]/30 rounded-xl p-10 relative overflow-hidden shadow-xl mb-16"
        variants={cardVariant}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#00c8ff] to-blue-600 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#00c8ff] to-blue-600 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-20"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          {/* Mission Block */}
          <motion.div 
            className="relative"
            variants={slideInLeft}
          >
            <div className="absolute -top-2 -left-2 bg-[#00c8ff] text-black text-xs font-bold px-2 py-1 rounded-md">
              Our Mission
            </div>
            <div className="bg-[#1a1a1a] border border-[#2A2A2A] p-6 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="inline-block w-8 h-8 bg-gradient-to-br from-[#00c8ff] to-blue-600 rounded-full flex items-center justify-center mr-3 text-black">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                Mission <span className="text-[#00c8ff]">Excellence</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                UFTA is dedicated to training and certifying <span className="text-[#00c8ff] font-semibold">2.1 million individuals</span> under Skill India Mission, addressing the growing demand for qualified fitness professionals globally.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our commitment extends to standardizing, certifying, monitoring, and facilitating skilling in fitness and sports nationwide through evidence-based education and practice.
              </p>
            </div>
          </motion.div>
          
          {/* Vision Block */}
          <motion.div 
            className="relative"
            variants={slideInRight}
          >
            <div className="absolute -top-2 -left-2 bg-[#00c8ff] text-black text-xs font-bold px-2 py-1 rounded-md">
              Our Vision
            </div>
            <div className="bg-[#1a1a1a] border border-[#2A2A2A] p-6 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="inline-block w-8 h-8 bg-gradient-to-br from-[#00c8ff] to-blue-600 rounded-full flex items-center justify-center mr-3 text-black">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Future <span className="text-[#00c8ff]">Focus</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                To become India's premier institution for fitness education, delivering world-class training that meets international standards and creates a new generation of health and fitness professionals.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a healthier India where evidence-based fitness practices are accessible to all and where our graduates lead the transformation of the fitness industry.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Core Objectives Cards */}
      <motion.div className="mb-8">
        <motion.h3 
          className="text-2xl font-bold mb-10 text-white relative inline-flex items-center"
          variants={fadeInUp}
        >
          <span className="w-8 h-8 bg-[#00c8ff] rounded-full flex items-center justify-center mr-3 text-black">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </span>
          Our Core <span className="text-[#00c8ff] ml-1">Objectives</span>
          <div className="ml-4 h-0.5 w-24 bg-gradient-to-r from-[#00c8ff] to-transparent"></div>
        </motion.h3>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="bg-[#141414] border border-[#2A2A2A] hover:border-[#00c8ff]/30 rounded-lg overflow-hidden shadow-lg"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`h-2 bg-gradient-to-r ${objective.color}`}></div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-2xl mr-4 border border-[#2A2A2A]">
                    {objective.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mt-1">{objective.title}</h4>
                </div>
                <p className="text-gray-300">{objective.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Commitments Cards */}
      <motion.div className="mt-16">
        <motion.h3 
          className="text-2xl font-bold mb-10 text-white relative inline-flex items-center"
          variants={fadeInUp}
        >
          <span className="w-8 h-8 bg-[#00c8ff] rounded-full flex items-center justify-center mr-3 text-black">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </span>
          Our <span className="text-[#00c8ff] ml-1">Commitments</span>
          <div className="ml-4 h-0.5 w-24 bg-gradient-to-r from-[#00c8ff] to-transparent"></div>
        </motion.h3>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              className="bg-[#141414] border border-[#2A2A2A] hover:border-[#00c8ff]/30 rounded-lg overflow-hidden shadow-lg"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`h-2 bg-gradient-to-r ${commitment.color}`}></div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-2xl mr-4 border border-[#2A2A2A]">
                    {commitment.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mt-1">{commitment.title}</h4>
                </div>
                <p className="text-gray-300">{commitment.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AimsObjectivesSection;
