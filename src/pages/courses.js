import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import { pageAnimations, hoverAnimations, viewportSettings } from "../utils/animations"

const CoursesPage = ({ location }) => {
  // Get animation variants from centralized configuration
  const { fadeInUp, slideInLeft, slideInRight, staggerContainer, cardVariant, scaleIn } = pageAnimations.standard;

  React.useEffect(() => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="Our"
        titleHighlight={{ text: "Courses", color: "text-[#00c8ff]" }}
        subtitle="Discover our comprehensive fitness education programs designed to transform your passion into profession"
        tagline={
          <>
            "<span className="text-[#00c8ff]">Transforming</span> Fitness Education Since 2006"
          </>
        }
        imageAlt="Courses at UFTA"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <motion.section 
          id="overview" 
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
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </motion.svg>
            <h2 className="text-5xl font-bold text-white text-center relative group">
              Elite Training <span className="text-[#00c8ff] inline-block relative">
                Overview
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
            className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-12 relative overflow-hidden max-w-5xl mx-auto shadow-[0_0_25px_rgba(0,200,255,0.1)]"
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
            
            {/* Enhanced SVG Background Pattern */}
            <div className="absolute -right-20 -bottom-20 opacity-10 w-[40rem] h-[40rem] pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                <path d="M10 10h80v80h-80z" strokeOpacity="0.2"/>
                <path d="M30 10v80M50 10v80M70 10v80M10 30h80M10 50h80M10 70h80" strokeOpacity="0.2"/>
                <circle cx="30" cy="30" r="3" strokeOpacity="0.8"/>
                <circle cx="50" cy="50" r="3" strokeOpacity="0.8"/>
                <circle cx="70" cy="70" r="3" strokeOpacity="0.8"/>
                <path d="M30 30h20v20h-20zM50 50h20v20h-20z" strokeOpacity="0.6"/>
                <path d="M10 10l80 80M90 10l-80 80" strokeOpacity="0.1"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="mb-8 border-l-4 border-[#00c8ff] pl-6 py-2"
                variants={fadeInUp}
                custom={1}
              >
                <p className="text-xl font-medium text-white italic">At UFTA, we transform fitness enthusiasts into industry professionals through world-class education.</p>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 leading-relaxed mb-6 text-lg"
                variants={fadeInUp}
                custom={2}
              >
                We offer a comprehensive range of fitness education programs designed to equip individuals with the knowledge, skills, and credentials needed to excel in the fitness industry. Our courses range from internationally recognized certifications to specialized diplomas and degree programs.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 leading-relaxed mb-6 text-lg"
                variants={fadeInUp}
                custom={3}
              >
                Our curriculum is meticulously crafted to blend theoretical knowledge with practical applications, ensuring our graduates are not just academically qualified but also industry-ready. Whether you're a newcomer to the fitness field or an experienced professional looking to expand your expertise, we have programs tailored to meet your specific needs and career aspirations.
              </motion.p>
              
              <motion.h3 
                className="text-2xl font-bold text-white mb-4 flex items-center"
                variants={fadeInUp}
                custom={4}
              >
                <span className="inline-block w-8 h-0.5 bg-[#00c8ff] mr-3"></span>
                What sets UFTA apart
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                variants={staggerContainer}
                custom={5}
              >
                {[
                  { icon: "M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Industry-relevant curriculum updated regularly" },
                  { icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z", text: "Hands-on practical training in state-of-the-art facilities" },
                  { icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z", text: "Faculty comprised of leading experts and practitioners" },
                  { icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z", text: "Internationally recognized certifications" },
                  { icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z", text: "Comprehensive career support and placement assistance" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-4 rounded-lg bg-[#1c1c1c] border border-[#2a2a2a] hover:border-[#00c8ff30] transition-colors duration-300"
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <svg className="w-6 h-6 text-[#00c8ff] mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="ml-3 text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-8 text-center"
                variants={fadeInUp}
                custom={6}
              >
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-[#008fc7] to-[#00c8ff] text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Our Programs
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Course Selection Guidance Section */}
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

        {/* Degree Programs Section */}
        <motion.section 
          id="degree" 
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
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </motion.svg>
            <h2 className="text-5xl font-bold text-white text-center relative group">
              University <span className="text-[#00c8ff] inline-block relative">
                Degree Programs
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#00c8ff]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.span>
              </span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Introduction & Badge Section */}
            <motion.div 
              className="relative mb-16 flex flex-col md:flex-row items-center"
              variants={staggerContainer}
            >
              {/* University Badge */}
              <motion.div 
                className="relative w-full max-w-xs mx-auto md:mx-0 mb-10 md:mb-0 md:mr-12"
                variants={fadeInUp}
                custom={1}
              >
                <div className="absolute inset-0 w-full h-full bg-[rgba(0,200,255,0.03)] rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                <div className="absolute inset-0 w-full h-full border-4 border-[#00c8ff]/10 rounded-full animate-ping" style={{animationDuration: '3s', animationIterationCount: 'infinite'}}></div>
                <motion.div 
                  className="relative z-10 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-36 h-36 text-[#00c8ff] opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M12 1L2 6v2h20V6L12 1z" strokeWidth="0.8"/>
                    <path d="M2 9v10h20V9" strokeWidth="0.8" strokeDasharray="1 1"/>
                    <path d="M5 9v10M9 9v10M13 9v10M17 9v10M21 9v10" strokeWidth="0.8" strokeDasharray="1 1"/>
                    <rect x="2" y="19" width="20" height="2" strokeWidth="0.8"/>
                    <rect x="5" y="11" width="2" height="6" rx="0.5" strokeWidth="0.8"/>
                    <rect x="9" y="11" width="2" height="6" rx="0.5" strokeWidth="0.8"/>
                    <rect x="13" y="11" width="2" height="6" rx="0.5" strokeWidth="0.8"/>
                    <rect x="17" y="11" width="2" height="6" rx="0.5" strokeWidth="0.8"/>
                  </svg>
                </motion.div>
                <div className="text-center mt-4">
                  <motion.p 
                    className="text-2xl font-medium text-[#00c8ff] text-shadow-sm"
                    variants={fadeInUp}
                    custom={2}
                  >
                    UGC Approved
                  </motion.p>
                  <motion.div 
                    className="flex items-center justify-center mt-1"
                    variants={fadeInUp}
                    custom={3}
                  >
                    <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30 flex items-center">
                      <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                      First in India
                    </span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Introduction Text */}
              <motion.div 
                className="md:flex-1"
                variants={fadeInUp}
                custom={4}
              >
                <div className="bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden shadow-[0_0_25px_rgba(0,200,255,0.07)]">
                  {/* Animated Top Border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-70">
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-[#00c8ff]"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                  </div>
                  
                  <motion.div 
                    className="mb-6 border-l-4 border-[#00c8ff] pl-4 py-1"
                    variants={fadeInUp}
                    custom={5}
                  >
                    <p className="text-xl font-medium text-white italic">UFTA is the first institute in India to launch a UGC-approved undergraduate program in fitness and athletic sciences.</p>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    variants={fadeInUp}
                    custom={6}
                  >
                    Our flagship B.Sc. in Fitness and Athletic Conditioning provides students with comprehensive knowledge in sports science, exercise physiology, biomechanics, and athletic training methodologies. This program is designed to meet the growing demand for qualified fitness professionals with academic credentials.
                  </motion.p>
                  
                  <motion.div 
                    className="bg-[#111111] border border-[#222222] rounded-lg p-5 mb-6"
                    variants={fadeInUp}
                    custom={7}
                    whileHover={{ boxShadow: "0 0 20px rgba(0,200,255,0.1)" }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                      </svg>
                      Program Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div 
                        className="flex items-start"
                        variants={fadeInUp}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <svg className="w-5 h-5 text-[#00c8ff] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        </svg>
                        <span className="ml-2 text-gray-300 text-sm">Multiple exit pathways</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-start"
                        variants={fadeInUp}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <svg className="w-5 h-5 text-[#00c8ff] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>
                        <span className="ml-2 text-gray-300 text-sm">Industry-aligned curriculum</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-start"
                        variants={fadeInUp}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <svg className="w-5 h-5 text-[#00c8ff] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <span className="ml-2 text-gray-300 text-sm">Nationally recognized degree</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-start"
                        variants={fadeInUp}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <svg className="w-5 h-5 text-[#00c8ff] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                        <span className="ml-2 text-gray-300 text-sm">Practical training focus</span>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-end"
                    variants={fadeInUp}
                    custom={8}
                  >
                    <div className="bg-[#00c8ff]/5 border border-[#00c8ff]/20 px-4 py-2 rounded-lg inline-flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-400">Annual Tuition</p>
                        <p className="text-xl font-bold text-[#00c8ff]">₹50,000</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* BSc Degree Details Card */}
            <motion.div 
              className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-10 relative overflow-hidden shadow-[0_0_25px_rgba(0,200,255,0.07)] mb-10"
              variants={fadeInUp}
              custom={1}
              whileHover={{ 
                boxShadow: "0 0 30px rgba(0,200,255,0.15)", 
                transition: { duration: 0.3 } 
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-70"></div>
              
              {/* Enhanced SVG Background Pattern */}
              <div className="absolute -right-20 -bottom-20 opacity-10 w-[40rem] h-[40rem] pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                  <path d="M10 10h80v80h-80z" strokeOpacity="0.2"/>
                  <path d="M30 10v80M50 10v80M70 10v80M10 30h80M10 50h80M10 70h80" strokeOpacity="0.2"/>
                  <circle cx="30" cy="30" r="3" strokeOpacity="0.8"/>
                  <circle cx="50" cy="50" r="3" strokeOpacity="0.8"/>
                  <circle cx="70" cy="70" r="3" strokeOpacity="0.8"/>
                </svg>
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="bg-[#00c8ff]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">B.Sc. in Fitness and Athletic Conditioning</h3>
                    <div className="flex items-center mt-2">
                      <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30 mr-3">UGC Approved</span>
                      <span className="bg-[#333]/50 text-gray-300 px-3 py-1 rounded-full text-sm">4-Year Program</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h4 className="flex items-center text-xl font-semibold text-white mb-5">
                    <svg className="w-5 h-5 mr-2 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                    </svg>
                    Program Structure
                  </h4>
                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                  >
                    {[
                      { year: "Year 1", outcome: "Certificate in Athletic Sciences", color: "from-[#1a1a1a] to-[#1a1a1a]" },
                      { year: "Year 2", outcome: "Diploma in Athletic Sciences", color: "from-[#1a1a1a] to-[#1a1a1a]" },
                      { year: "Year 3", outcome: "Bachelor's Degree", color: "from-[#1a1a1a] to-[#1a1a1a]" },
                      { year: "Year 4", outcome: "Bachelor's Degree with Research (Honours)", color: "from-[#00c8ff]/5 to-[#111]" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className={`flex items-center p-3 rounded-lg bg-gradient-to-r ${item.color} border border-[#2A2A2A] group hover:border-[#00c8ff]/50 transition-all duration-300`}
                        variants={fadeInUp}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <div className="bg-[#222] rounded-full w-10 h-10 flex items-center justify-center mr-4 group-hover:bg-[#00c8ff]/10 transition-all duration-300">
                          <span className="text-[#00c8ff] font-bold">{index+1}</span>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{item.year}</p>
                          <p className="text-white font-medium">{item.outcome}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                <div>
                  <h4 className="flex items-center text-xl font-semibold text-white mb-5">
                    <svg className="w-5 h-5 mr-2 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                    Career Opportunities
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "High-performance centers", icon: "M6.115 5.19.401 9.019a.5.5 0 0 0 0 .964l5.714 3.83a.5.5 0 0 0 .548 0l5.714-3.83a.5.5 0 0 0 0-.964L6.663 5.19a.5.5 0 0 0-.548 0z M6.115 5.19.401 9.019a.5.5 0 0 0 0 .964l5.714 3.83a.5.5 0 0 0 .548 0l5.714-3.83a.5.5 0 0 0 0-.964L6.663 5.19a.5.5 0 0 0-.548 0z" },
                      { name: "Sports academies", icon: "M8 0a.5.5 0 0 1 .5.5v.514C12.625 1.238 16 4.22 16 8c0 0 0 .5-.5.5-.149 0-.352-.145-.352-.145l-.004-.004-.025-.023a3.484 3.484 0 0 0-.555-.394A3.166 3.166 0 0 0 13 7.5c-.638 0-1.178.213-1.564.434a3.484 3.484 0 0 0-.555.394l-.025.023-.003.003s-.204.146-.353.146-.352-.145-.352-.145l-.004-.004-.025-.023a3.484 3.484 0 0 0-.555-.394 3.3 3.3 0 0 0-1.064-.39V13.5H8h.5v.039l-.5.461-.5-.461V13.5H7v-5.1a3.3 3.3 0 0 0-1.064.39 3.482 3.482 0 0 0-.555.394l-.025.023-.003.003s-.204.146-.353.146-.352-.145-.352-.145l-.004-.004-.025-.023a3.484 3.484 0 0 0-.555-.394 3.3 3.3 0 0 0-1.064-.39V13.5H3a.5.5 0 0 1-.5-.5v-5.1a3.3 3.3 0 0 0-1.064.39 3.482 3.482 0 0 0-.555.394l-.025.023-.003.003s-.204.146-.353.146C.5 8.5.5 8 .5 8c0-3.78 3.375-6.762 7.5-6.986V.5A.5.5 0 0 1 8 0M6.5 14a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 1 0zm3 0a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 1 0z" },
                      { name: "Fitness industry leadership", icon: "M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z M8.354 10.354l7-7a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708-.708z" },
                      { name: "Research and development", icon: "M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5v7A1.5 1.5 0 0 0 2.5 12h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" },
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-lg p-4 flex items-center hover:border-[#00c8ff]/30 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="bg-[#00c8ff]/10 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-5 h-5 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-[#1a1a1a] border border-[#2A2A2A] rounded-lg p-4">
                    <h5 className="flex items-center text-lg font-semibold text-white mb-2">
                      <svg className="w-5 h-5 mr-2 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                      </svg>
                      Eligibility
                    </h5>
                    <p className="text-gray-300">At least 45% marks or equivalent in 10+2 (any discipline)</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href="tel:+919864047046" 
                  className="bg-gradient-to-r from-[#00c8ff]/80 to-[#00c8ff] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00c8ff]/25 flex items-center font-medium"
                >
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Contact for Admission
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Diploma Programs Section */}
        <motion.section 
          id="diploma" 
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
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </motion.svg>
            <h2 className="text-5xl font-bold text-white text-center relative group">
              Professional <span className="text-[#00c8ff] inline-block relative">
                Diploma Programs
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#00c8ff]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.span>
              </span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto px-4">
            {/* Introduction Section */}
            <motion.div
              className="mb-16 bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden shadow-[0_0_25px_rgba(0,200,255,0.07)]"
              variants={fadeInUp}
              custom={1}
              whileHover={{ 
                boxShadow: "0 0 30px rgba(0,200,255,0.12)", 
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
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 w-full h-full bg-[rgba(0,200,255,0.03)] rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                    <svg className="w-32 h-32 text-[#00c8ff] relative z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" strokeWidth="0.8"/>
                      <path d="M12 9l-3 3h2v4h2v-4h2l-3-3z" strokeWidth="0.8"/>
                      <path d="M3 3l18 18M21 3L3 21" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.5"/>
                      <circle cx="12" cy="12" r="8" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.5"/>
                    </svg>
                  </motion.div>
                </div>
                
                <div className="md:w-3/4 md:pl-8">
                  <motion.div 
                    className="mb-6 border-l-4 border-[#00c8ff] pl-4 py-1"
                    variants={fadeInUp}
                    custom={2}
                  >
                    <p className="text-xl font-medium text-white italic">Our diploma programs are designed to provide industry-ready skills for those looking to excel in specific fitness disciplines.</p>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    variants={fadeInUp}
                    custom={3}
                  >
                    UFTA's professional diploma programs combine theoretical knowledge with extensive practical training to ensure graduates are fully prepared for the demands of the modern fitness industry. Each program includes a mandatory internship period to provide real-world experience.
                  </motion.p>
                  
                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
                    variants={staggerContainer}
                    custom={4}
                  >
                    {[
                      { text: "Internationally recognized credentials", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
                      { text: "Taught by industry professionals", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
                      { text: "Extensive practical training", icon: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3ZM6.75 13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Zm.75-6.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" },
                      { text: "Guaranteed internship placement", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" },
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex flex-col items-center text-center bg-[#1a1a1a] border border-[#2A2A2A] rounded-lg p-4 hover:border-[#00c8ff]/30 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="bg-[#00c8ff]/10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                          <svg className="w-6 h-6 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Diplomas Card Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={staggerContainer}
            >
              {/* Personal Training Diploma */}
              <motion.div 
                className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] transition-all duration-500"
                variants={fadeInUp}
                custom={1}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-20 bg-gradient-to-r from-[#003145] to-[#005573] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="grid1" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid1)" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center w-full">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00c8ff]">Personal Training</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Level 5</span>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#00c8ff]">₹85,000</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-sm">Comprehensive program to become a certified professional personal trainer. Master the art and science of creating effective exercise programs.</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Duration</p>
                        <p className="text-gray-400 text-sm">6 months (incl. 1-month internship)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Eligibility</p>
                        <p className="text-gray-400 text-sm">Age 18+, 10+2 qualification</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Career Path</p>
                        <p className="text-gray-400 text-sm">Fitness centers, gyms, studios, hotels</p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="tel:+919864047046" className="w-full bg-gradient-to-r from-[#00c8ff]/80 to-[#00c8ff] text-white py-3 rounded-lg transition-all duration-300 text-center block font-medium hover:shadow-lg hover:shadow-[#00c8ff]/25">
                      Enquire Now
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Sports Rehabilitation & Reconditioning */}
              <motion.div 
                className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] transition-all duration-500"
                variants={fadeInUp}
                custom={2}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-20 bg-gradient-to-r from-[#003145] to-[#005573] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="grid2" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid2)" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center w-full">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00c8ff]">Sports Rehabilitation</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Level 7</span>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#00c8ff]">₹125,250</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-sm">Specialized program focusing on functional muscle testing, movement assessment, and injury rehabilitation for athletes.</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Duration</p>
                        <p className="text-gray-400 text-sm">8 months (incl. 1-month internship)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Eligibility</p>
                        <p className="text-gray-400 text-sm">Age 21+, prior diplomas/degree, 3 yrs experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Career Path</p>
                        <p className="text-gray-400 text-sm">Sports teams, rehab centers, private practice</p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="tel:+919864047046" className="w-full bg-gradient-to-r from-[#00c8ff]/80 to-[#00c8ff] text-white py-3 rounded-lg transition-all duration-300 text-center block font-medium hover:shadow-lg hover:shadow-[#00c8ff]/25">
                      Enquire Now
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Strength & Conditioning */}
              <motion.div 
                className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] transition-all duration-500"
                variants={fadeInUp}
                custom={3}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-20 bg-gradient-to-r from-[#003145] to-[#005573] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="grid3" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid3)" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center w-full">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00c8ff]">Strength & Conditioning</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Level 6</span>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#00c8ff]">₹127,700</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-sm">Develop expertise in designing and implementing strength and conditioning programs for athletes and sports performance.</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Duration</p>
                        <p className="text-gray-400 text-sm">7 months (incl. 1-month internship)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Eligibility</p>
                        <p className="text-gray-400 text-sm">Age 18+, relevant fitness/sports background</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#00c8ff]/10 rounded-full p-1.5 mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Career Path</p>
                        <p className="text-gray-400 text-sm">Sports teams, athletic departments, academies</p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="tel:+919864047046" className="w-full bg-gradient-to-r from-[#00c8ff]/80 to-[#00c8ff] text-white py-3 rounded-lg transition-all duration-300 text-center block font-medium hover:shadow-lg hover:shadow-[#00c8ff]/25">
                      Enquire Now
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Advantages Banner */}
            <motion.div 
              className="mt-16 bg-gradient-to-r from-[#00344d] to-[#00496e] rounded-xl p-8 relative overflow-hidden"
              variants={fadeInUp}
              custom={1}
              whileHover={{ 
                boxShadow: "0 0 30px rgba(0,200,255,0.2)", 
                transition: { duration: 0.3 } 
              }}
            >
              <div className="absolute inset-0 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: 'white', strokeWidth: 1 }} />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <svg className="w-8 h-8 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white">Why Choose UFTA Diploma Programs?</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Job-Ready Skills", text: "Our curriculum is designed with industry input to ensure you graduate with the exact skills employers are seeking." },
                    { title: "Placement Assistance", text: "We have partnerships with leading fitness centers, sports academies and corporate wellness programs across India." },
                    { title: "Flexible Learning", text: "Choose from weekday, weekend, and part-time schedules to balance your education with other commitments." }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20"
                      variants={fadeInUp}
                      custom={index+2}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-200 text-sm">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <motion.a 
                    href="/about" 
                    className="inline-flex items-center bg-white text-[#003145] px-6 py-3 rounded-lg font-medium hover:bg-[#00c8ff] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More About Our Teaching Approach
                    <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* PROPTA USA Programs Section */}
        <motion.section 
          id="propta" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
            </motion.svg>
            <h2 className="text-5xl font-bold text-white text-center relative group">
              PROPTA USA <span className="text-[#00c8ff] inline-block relative">
                Certifications
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#00c8ff]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.span>
              </span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto px-4">
            {/* Introduction & Badge Section */}
            <motion.div 
              className="relative mb-16 flex flex-col md:flex-row items-center"
              variants={staggerContainer}
            >
              {/* Globe Badge */}
              <motion.div 
                className="relative w-full max-w-xs mx-auto md:mx-0 mb-10 md:mb-0 md:mr-12"
                variants={fadeInUp}
                custom={1}
              >
                <div className="absolute inset-0 w-full h-full bg-[rgba(0,200,255,0.03)] rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                <div className="absolute inset-0 w-full h-full border-4 border-[#00c8ff]/10 rounded-full animate-ping" style={{animationDuration: '3s', animationIterationCount: 'infinite'}}></div>
                <motion.div 
                  className="relative z-10 flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-36 h-36 text-[#00c8ff] opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <circle cx="12" cy="12" r="10" opacity="0.5"/>
                    <circle cx="12" cy="12" r="6" opacity="0.7"/>
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" opacity="0.8"/>
                    <path d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" opacity="0.6"/>
                    <path d="M12 7l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5L12 7z" opacity="0.9"/>
                  </svg>
                </motion.div>
                <div className="text-center mt-4">
                  <motion.p 
                    className="text-2xl font-medium text-[#00c8ff] text-shadow-sm"
                    variants={fadeInUp}
                    custom={2}
                  >
                    Global Recognition
                  </motion.p>
                  <motion.div 
                    className="flex items-center justify-center mt-1"
                    variants={fadeInUp}
                    custom={3}
                  >
                    <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30 flex items-center">
                      <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
                      </svg>
                      Valid in 199 countries
                    </span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Introduction Text */}
              <motion.div 
                className="md:flex-1"
                variants={fadeInUp}
                custom={4}
              >
                <div className="bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden">
                  {/* Animated Top Border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-70">
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-[#00c8ff]"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                  </div>
                  
                  <motion.div 
                    className="mb-6 border-l-4 border-[#00c8ff] pl-4 py-1"
                    variants={fadeInUp}
                    custom={5}
                  >
                    <p className="text-xl font-medium text-white italic">UFTA is the exclusive authorized center for PROPTA USA certifications in India.</p>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-6"
                    variants={fadeInUp}
                    custom={6}
                  >
                    PROPTA (Professional Personal Trainers Association) USA is one of the leading global education bodies dedicated to training fitness professionals since 1980. Our partnership enables us to offer internationally recognized certifications that open doors to global career opportunities.
                  </motion.p>
                  
                  <motion.div 
                    className="grid grid-cols-2 gap-4 mb-6"
                    variants={staggerContainer}
                    custom={7}
                  >
                    {[
                      { icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z", text: "IFBB Pro League Endorsed" },
                      { icon: "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3", text: "BSE, Govt. of California Endorsed" },
                      { icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75", text: "Industry-Recognized Curriculum" },
                      { icon: "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525", text: "Globally Accepted Standards" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start"
                        variants={fadeInUp}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <svg className="w-5 h-5 text-[#00c8ff] mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                        <span className="ml-2 text-gray-300 text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.a 
                    href="https://propta.com/india-propta/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00c8ff] hover:text-white transition-colors duration-300"
                    variants={fadeInUp}
                    custom={8}
                    whileHover={{ x: 5 }}
                  >
                    <span>Visit PROPTA USA Official Site</span>
                    <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
            
            {/* PROPTA USA Certifications Cards */}
            <motion.div 
              className="mb-16"
              variants={staggerContainer}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-8 flex items-center justify-center"
                variants={fadeInUp}
                custom={1}
              >
                <span className="inline-block w-8 h-0.5 bg-[#00c8ff] mr-3"></span>
                Available PROPTA USA Certifications
                <span className="inline-block w-8 h-0.5 bg-[#00c8ff] ml-3"></span>
              </motion.h3>
            
              <div className="grid md:grid-cols-2 gap-10">
                {/* Sports Nutrition Certification */}
                <motion.div 
                  className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] transition-all duration-500"
                  variants={fadeInUp}
                  custom={2}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="h-32 bg-gradient-to-r from-[#003145] to-[#005573] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center w-full">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00c8ff]">Sports Nutrition</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <motion.div 
                        className="flex items-center bg-[#00c8ff]/10 backdrop-blur-sm px-3 py-1 rounded-full border border-[#00c8ff]/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        <svg className="w-4 h-4 text-[#00c8ff] mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#00c8ff] text-xs font-medium">8 Weeks</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="mb-3">
                          <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">International Certification</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#00c8ff] transition-colors duration-300">Sports Nutrition Specialist</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#00c8ff]">$1600</p>
                        <p className="text-sm text-gray-400">USD (approx.)</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">Comprehensive certification program focused on performance nutrition strategies for athletes. Learn to create customized nutrition plans for optimal performance, recovery, and health.</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Prerequisites</h4>
                          <p className="text-gray-400 text-sm">Age 18+, Level 1 PT cert, Nutrition Tech cert, 1 year PT experience</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Key Modules</h4>
                          <p className="text-gray-400 text-sm">Macronutrient manipulation, supplement protocols, hydration strategies, athletic performance nutrition</p>
                        </div>
                      </div>
                    </div>
                    
                    <motion.a 
                      href="https://propta.com/india-propta/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full bg-gradient-to-r from-[#008fc7] to-[#00c8ff] text-white hover:from-[#00c8ff] hover:to-[#008fc7] px-6 py-3 rounded-lg transition-all duration-300 text-center block flex items-center justify-center group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Enroll Now</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Personal Training Certification */}
                <motion.div 
                  className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(0,200,255,0.15)] transition-all duration-500"
                  variants={fadeInUp}
                  custom={3}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="h-32 bg-gradient-to-r from-[#003145] to-[#005573] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center w-full">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00c8ff]">Personal Training</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <motion.div 
                        className="flex items-center bg-[#00c8ff]/10 backdrop-blur-sm px-3 py-1 rounded-full border border-[#00c8ff]/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        <svg className="w-4 h-4 text-[#00c8ff] mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#00c8ff] text-xs font-medium">6 Weeks</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="mb-3">
                          <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">International Certification</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#00c8ff] transition-colors duration-300">Certified Personal Trainer</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#00c8ff]">$1800</p>
                        <p className="text-sm text-gray-400">USD (approx.)</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">Foundation certification for aspiring international personal trainers. Master the science of exercise prescription, client assessment, and program design for diverse populations.</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Prerequisites</h4>
                          <p className="text-gray-400 text-sm">Age 18+, CPR & AED certification required for graduation</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Key Modules</h4>
                          <p className="text-gray-400 text-sm">Exercise science, anatomy, physiology, program design, client assessment, business fundamentals</p>
                        </div>
                      </div>
                    </div>
                    
                    <motion.a 
                      href="https://propta.com/india-propta/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full bg-gradient-to-r from-[#008fc7] to-[#00c8ff] text-white hover:from-[#00c8ff] hover:to-[#008fc7] px-6 py-3 rounded-lg transition-all duration-300 text-center block flex items-center justify-center group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Enroll Now</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Advanced Opportunities Banner */}
            <motion.div 
              className="bg-gradient-to-r from-[#003145] to-[#005573] rounded-xl p-8 relative overflow-hidden border border-[#00c8ff]/20"
              variants={fadeInUp}
              custom={4}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <defs>
                    <pattern id="circuit" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 0 10 L 10 10 L 10 0" stroke="#00c8ff" strokeWidth="0.5" fill="none"/>
                      <path d="M 20 10 L 10 10 L 10 20" stroke="#00c8ff" strokeWidth="0.5" fill="none"/>
                      <circle cx="10" cy="10" r="2" stroke="#00c8ff" strokeWidth="0.5" fill="none"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)"/>
                </svg>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Advanced PROPTA USA Certifications</h3>
                  <p className="text-gray-100 mb-3">Looking for specialized certifications? UFTA provides pathways to advanced PROPTA USA credentials tailored to your career goals.</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {["Strength & Conditioning Specialist", "Corrective Exercise Specialist", "Performance Enhancement Specialist", "Weight Management Specialist"].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-100 text-sm">
                        <svg className="w-4 h-4 text-[#00c8ff] mr-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <motion.a 
                    href="tel:+919864047046" 
                    className="inline-flex items-center bg-white text-[#003145] font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-[#00c8ff] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                    Inquire Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Additional Certifications Section */}
        <motion.section 
          id="workshops" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Additional <span className="text-[#00c8ff]">Certifications</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Advanced Personal Training Certification */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="absolute -right-5 -top-5 w-32 h-32 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                  <path d="M6 3h12v18H6z" />
                  <path d="M3 4v2h18V4zM3 10v2h18v-2zM3 16v2h18v-2z" />
                  <circle cx="7" cy="5" r="1" />
                  <circle cx="7" cy="11" r="1" />
                  <circle cx="7" cy="17" r="1" />
                </svg>
              </div>
              
              <div className="mb-4">
                <span className="bg-[#00c8ff]/10 text-[#00c8ff] px-3 py-1 rounded-full text-sm font-medium border border-[#00c8ff]/30">Specialized Certification</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">Advanced Personal Training Certification (USA Focus)</h3>
              <p className="text-gray-400 mb-6 text-sm">UFTA provides guidance and pathways for various advanced US-based certifications, with PROPTA USA as a key partner. Specifics tailored to your career goals.</p>
              
              <div className="mb-6">
                <p className="text-xl font-bold text-[#00c8ff]">Contact for Details</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300 text-sm">Focus: Advanced methodologies and specialization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM6 8a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  <span className="text-gray-300 text-sm">Ideal for: Experienced trainers seeking top-tier US credentials</span>
                </li>
              </ul>
              
              <a href="tel:+919864047046" className="w-full bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded transition-all duration-300 text-center block">
                Discuss Options
              </a>
            </div>

            {/* CPR and AED Certification */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              
              <div className="absolute -right-5 -top-5 w-32 h-32 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="0.5">
                  <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path d="M12 6v7l5 3" />
                  <path d="M9 10h6M9 14h6" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              
              <div className="mb-4">
                <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-400/30">Essential Certification</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">CPR and AED Certification</h3>
              <p className="text-gray-400 mb-6 text-sm">Crucial life-saving skills for every fitness professional. UFTA emphasizes its importance and provides comprehensive training in cardiopulmonary resuscitation and automated external defibrillator use.</p>
              
              <div className="mb-6">
                <p className="text-xl font-bold text-[#00c8ff]">Contact for Details</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300 text-sm">Duration: 1-2 days intensive training</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#00c8ff] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="text-gray-300 text-sm">Essential for all fitness professionals and gym staff</span>
                </li>
              </ul>
              
              <a href="tel:+919864047046" className="w-full bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-4 py-2 rounded transition-all duration-300 text-center block">
                Learn More
              </a>
            </div>
          </div>
        </motion.section>

        {/* Why Choose UFTA Section */}
        <motion.section 
          id="why-choose" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center mb-10">
            <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5Z" />
            </svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Why Choose <span className="text-[#00c8ff]">UFTA?</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </div>
          
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 text-center">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">At UFTA, we offer world-class education with prestigious affiliations like BASES UK, USAW, NSCA, NASM, and ACSM. Our accredited programs are recognised by major sports organisations, and our expert faculty provides evidence-based training in sports sciences.</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00c8ff]/30">
                  <svg className="w-8 h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Faculty</h3>
                <p className="text-gray-400 text-sm">Learn from industry-leading professionals with decades of experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00c8ff]/30">
                  <svg className="w-8 h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Global Recognition</h3>
                <p className="text-gray-400 text-sm">Internationally recognized certifications valid in 199 countries</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00c8ff]/30">
                  <svg className="w-8 h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Career Support</h3>
                <p className="text-gray-400 text-sm">100% placement assistance and ongoing career guidance</p>
              </div>
            </div>
            
            <p className="text-[#00c8ff] font-semibold text-lg">Approved providers of leading fitness and sports science bodies.</p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="Courses - Universal Fitness Training Academy" />

export default CoursesPage
