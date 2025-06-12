import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import { pageAnimations, hoverAnimations, viewportSettings } from "../utils/animations"

const JobPlacementPage = ({ location }) => {
  // Get animations for this page
  const {
    fadeInUp,
    slideInLeft,
    slideInRight,
    staggerContainer,
    cardVariant,
    scaleIn
  } = pageAnimations.standard;

  // Domestic placement opportunities
  const domesticPlacements = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      title: "Sports Authority of India (SAI)",
      description: "Government sports body focused on athletic excellence"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.822.672l-4.684-2.796a.563.563 0 00-.652 0l-4.684 2.796a.562.562 0 01-.822-.672l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      title: "Top Gym Chains",
      description: "Nitrro, UFC Gym, Gold's Gym, Fitness First, SFL Gyms etc."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 0112 20.904a14.98 14.98 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      title: "Khelo India Centers of Excellence",
      description: "National sports development centers"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.52-.635 1.421-.825 2.246-.397l.713.572c.796.641.796 1.793 0 2.434l-.713.572c-.825.428-1.726.238-2.246-.397L11.42 15.17zm0 0L5.828 9.97a6 6 0 00-2.12-.523L3.04 9.324a.75.75 0 10-.422 1.406l.56.169A6 6 0 005.828 11.5l5.592 5.592z" />
        </svg>
      ),
      title: "Professional Sports Leagues",
      description: "IPL, ISL Teams - subject to team requirements"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
      title: "Sports Medicine & High-Performance Centers",
      description: "Specialized athletic performance facilities"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0112 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      title: "Educational Institutions",
      description: "Universities, Colleges & Schools"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12.75h6.75M9 18.75h6.75" />
        </svg>
      ),
      title: "Healthcare & Corporate",
      description: "Hospitals & Corporate Wellness Programs"
    }
  ];

  // International opportunities
  const internationalOpportunities = [
    {
      country: "United States of America (USA)",
      flag: "🇺🇸",
      description: "Opportunities in diverse fitness markets, from boutique studios to large gym chains, leveraging our PROPTA USA partnership.",
      color: "blue"
    },
    {
      country: "United Kingdom (UK)",
      flag: "🇬🇧",
      description: "Access to a mature fitness industry with roles in personal training, S&C, and specialized coaching, supported by our CASES UK affiliation.",
      color: "indigo"
    },
    {
      country: "United Arab Emirates (UAE)",
      flag: "🇦🇪",
      description: "A rapidly growing health and wellness sector with high demand for qualified fitness professionals in luxury gyms and resorts.",
      color: "green"
    },
    {
      country: "Spain",
      flag: "🇪🇸",
      description: "Explore opportunities in a vibrant European fitness scene, particularly in tourist destinations and sports performance centers.",
      color: "red"
    },
    {
      country: "Global Network",
      flag: "🌍",
      description: "Our certifications are recognized in 199 countries, opening up a world of possibilities.",
      color: "purple"
    }
  ];

  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="Job"
        titleHighlight={{ text: "Placement", color: "text-[#00c8ff]" }}
        subtitle="100% Placements in India & Abroad"
        tagline={<>"Your <span className="text-[#00c8ff]">Career Success</span> is Our Mission"</>}
        imageAlt="UFTA Job Placement"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placement Overview Section */}
        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-10"
            variants={fadeInUp}
          >
            <motion.svg 
              className="w-10 h-10 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              100% Placements in <span className="text-[#00c8ff]">India & Abroad</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 relative overflow-hidden shadow-lg"
            variants={cardVariant}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <motion.p 
              className="text-lg leading-relaxed mb-6 text-gray-300"
              variants={fadeInUp}
            >
              Universal Fitness Training Academy (UFTA) is committed to providing robust placement support to its certified professionals. We boast an exceptional track record of facilitating career opportunities for our graduates, connecting them with leading organizations in the fitness and sports industry both nationally and internationally.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed text-gray-300"
              variants={fadeInUp}
            >
              Our dedicated placement cell works tirelessly to bridge the gap between skilled fitness professionals and the industry's demand. We ensure our students are well-prepared not just with technical knowledge, but also with the soft skills required to excel in their careers.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Domestic Placements Section */}
        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-10"
            variants={fadeInUp}
          >
            <motion.svg 
              className="w-10 h-10 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              <span className="text-[#00c8ff]">Domestic</span> Placements
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mb-12 text-gray-300"
            variants={fadeInUp}
          >
            UFTA provides placements for Personal Trainers, S&C Coaches, and Sports Nutritionists in a wide array of esteemed organizations across India:
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {domesticPlacements.map((placement, index) => (
              <motion.div 
                key={index}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 transition-all duration-300 hover:bg-[#141414] hover:border-[#00c8ff] hover:shadow-lg hover:shadow-[#00c8ff]/10"
                variants={cardVariant}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-[#00c8ff] mt-1">
                    {placement.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      {placement.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {placement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* International Placements Section */}
        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-10"
            variants={fadeInUp}
          >
            <motion.svg 
              className="w-10 h-10 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              <span className="text-[#00c8ff]">International</span> Placement Support
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mb-12 text-gray-300"
            variants={fadeInUp}
          >
            UFTA's global network and internationally recognized certifications open doors to exciting career prospects abroad. We provide guidance and support for placements in top gyms and fitness centers in countries including:
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {internationalOpportunities.map((opportunity, index) => (
              <motion.div 
                key={index}
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300"
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
                
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{opportunity.flag}</span>
                  <h4 className="font-semibold text-lg text-white">
                    {opportunity.country}
                  </h4>
                </div>
                
                <p className="text-sm text-gray-300 leading-relaxed">
                  {opportunity.description}
                </p>
                
                <motion.button 
                  className={`mt-4 w-full bg-${opportunity.color}-600 hover:bg-${opportunity.color}-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Placement Process Section */}
        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-10"
            variants={fadeInUp}
          >
            <motion.svg 
              className="w-10 h-10 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Our <span className="text-[#00c8ff]">Placement Process</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                step: "01",
                title: "Skill Assessment",
                description: "Comprehensive evaluation of technical and soft skills",
                color: "blue"
              },
              {
                step: "02",
                title: "Profile Building",
                description: "Creating compelling professional profiles and portfolios",
                color: "green"
              },
              {
                step: "03",
                title: "Job Matching",
                description: "Connecting candidates with suitable opportunities",
                color: "purple"
              },
              {
                step: "04",
                title: "Interview Prep",
                description: "Training and guidance for successful interviews",
                color: "red"
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 text-center relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300"
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
                
                <div className={`text-4xl font-bold text-${process.color}-500 mb-4`}>
                  {process.step}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {process.title}
                </h3>
                
                <p className="text-gray-300 text-sm">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 relative overflow-hidden"
            variants={cardVariant}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <motion.div 
              className="flex items-center justify-center mb-10"
              variants={fadeInUp}
            >
              <motion.svg 
                className="w-10 h-10 mr-3 text-[#00c8ff]" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
              </motion.svg>
              <h2 className="text-4xl font-bold text-white text-center relative">
                Ready to Launch Your <span className="text-[#00c8ff]">Career?</span>
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-center text-xl leading-relaxed mb-10 text-gray-300"
              variants={fadeInUp}
            >
              Connect with our placement team to explore exciting career opportunities. Whether you're looking for domestic or international placements, we're here to guide you every step of the way.
            </motion.p>
            
            <motion.div 
              className="max-w-xl mx-auto bg-[#0A0A0A] p-8 rounded-lg border border-[#2A2A2A] relative overflow-hidden"
              variants={cardVariant}
            >
              <h3 className="text-2xl font-semibold text-white text-center mb-6">
                Placement <span className="text-[#00c8ff]">Inquiry</span>
              </h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                      placeholder="Your Full Name"
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                      placeholder="you@example.com"
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="qualification" className="block text-sm font-medium text-gray-300 mb-1">
                    Current Qualification/Course
                  </label>
                  <select 
                    id="qualification" 
                    name="qualification" 
                    className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                  >
                    <option value="">Select your qualification</option>
                    <option value="personal-trainer">Personal Trainer Certification</option>
                    <option value="strength-conditioning">Strength & Conditioning Coach</option>
                    <option value="sports-nutrition">Sports Nutrition Specialist</option>
                    <option value="group-fitness">Group Fitness Instructor</option>
                    <option value="other">Other/Prospective Student</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="preference" className="block text-sm font-medium text-gray-300 mb-1">
                    Placement Preference
                  </label>
                  <select 
                    id="preference" 
                    name="preference" 
                    className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                  >
                    <option value="">Select preference</option>
                    <option value="domestic">Domestic (India)</option>
                    <option value="international">International</option>
                    <option value="both">Both Domestic & International</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Additional Information
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                    placeholder="Tell us about your career goals, experience, or specific interests..."
                  ></textarea>
                </div>
                <div>
                  <motion.button 
                    type="submit" 
                    className="border border-[#00c8ff] text-white hover:text-[#00c8ff] hover:bg-[#00c8ff]/10 px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Placement Inquiry
                  </motion.button>
                </div>
              </form>
            </motion.div>
            
            <motion.div 
              className="text-center mt-8 space-y-2"
              variants={fadeInUp}
            >
              <p className="text-gray-300 leading-relaxed">
                For immediate placement assistance:
              </p>
              <p className="text-gray-300 leading-relaxed">
                Call: <a href="tel:+919864047046" className="text-[#00c8ff] hover:underline font-semibold">+91-9864047046</a>
              </p>
              <p className="text-gray-300 leading-relaxed">
                Email: <a href="mailto:bibhuuniversal@gmail.com" className="text-[#00c8ff] hover:underline font-semibold">bibhuuniversal@gmail.com</a>
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="Job Placement - Universal Fitness Training Academy" />

export default JobPlacementPage
