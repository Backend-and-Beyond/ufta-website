import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"

const AboutPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <UftaLayout>
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="min-h-[60vh] flex items-center relative overflow-hidden bg-[#0A0A0A] pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Custom gradient background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        
        {/* Hero Image */}
        <motion.div 
          className="absolute right-0 top-0 w-1/2 md:w-3/5 h-full z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute -left-24 inset-y-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/30 to-[#0A0A0A]/10"></div>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 mix-blend-overlay"></div>
          
          <StaticImage
            src="../images/hero.png"
            alt="About UFTA Hero Image"
            className="w-full h-full object-cover"
            placeholder="blurred"
            layout="constrained"
          />
        </motion.div>
        
        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center md:text-left">
          <motion.div 
            className="max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              variants={slideInLeft}
            >
              About <span className="text-[#00c8ff]">UFTA</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={slideInLeft}
            >
              Learn about our journey, mission, and commitment to fitness excellence
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mx-auto md:mx-0"
              variants={scaleIn}
            ></motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Tagline Section */}
      <motion.section 
        className="py-8 border-t border-b border-[#2A2A2A]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-xl md:text-2xl font-medium"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            "<span className="text-[#00c8ff]">Transforming</span> Fitness Education Since 2006"
          </motion.h2>
        </div>
      </motion.section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Journey Section */}
        <motion.section 
          id="history" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Our <span className="text-[#00c8ff]">Journey</span>
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
              className="text-lg leading-relaxed mb-5 text-gray-300"
              variants={fadeInUp}
            >
              Universal Fitness Training Academy (UFTA), situated in the city of Guwahati, Assam, has been a pioneer in providing comprehensive health and fitness education across India since its establishment in 2006. With a steadfast commitment to excellence, UFTA has expanded its reach with four branches in different parts of India, including its latest branch in Zirakpur, Punjab.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed mb-5 text-gray-300"
              variants={fadeInUp}
            >
              Over the years, the academy has successfully trained and certified more than 2,500 fitness industry professionals. This esteemed group includes Personal Trainers, Strength & Conditioning Coaches, Gym Trainers, Nutritionists, Bodybuilders, and Gym Owners. Our alumni are equipped with the knowledge and skills to provide proper, evidence-based training to clients, athletes, and the general public, contributing significantly to the health and wellness landscape.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-gray-300"
              variants={fadeInUp}
            >
              UFTA is dedicated to fostering a new generation of fitness leaders through rigorous academic programs, practical training, and a passion for advancing sport and exercise sciences.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Affiliations Section */}
        <motion.section 
          id="affiliations" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Our <span className="text-[#00c8ff]">Affiliations</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              <motion.div 
                className="h-24 w-24 mx-auto mb-5 bg-[#00c8ff]/10 rounded-full flex items-center justify-center text-[#00c8ff] font-bold text-sm border border-[#00c8ff]/30"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                SPEFL-SC
              </motion.div>
              <h3 className="text-lg font-semibold text-center mb-2">SPEFL-<span className="text-[#00c8ff]">SC</span></h3>
              <p className="text-center text-sm text-gray-400">Affiliated with Sports, Physical Education, Fitness and Leisure Skills Council.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              <motion.div 
                className="h-24 w-24 mx-auto mb-5 bg-[#00c8ff]/10 rounded-full flex items-center justify-center text-[#00c8ff] font-bold text-xs border border-[#00c8ff]/30"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                NCSPE
              </motion.div>
              <h3 className="text-lg font-semibold text-center mb-2">NCSPE & <span className="text-[#00c8ff]">ICSSPE</span></h3>
              <p className="text-center text-sm text-gray-400">Supported by National Council of Sports Science & Physical Education (NCSPE).</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              <motion.div 
                className="h-24 w-24 mx-auto mb-5 bg-[#00c8ff]/10 rounded-full flex items-center justify-center text-[#00c8ff] font-bold text-xs border border-[#00c8ff]/30"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                NYSHSI
              </motion.div>
              <h3 className="text-lg font-semibold text-center mb-2">NYSHSI <span className="text-[#00c8ff]">U.S.A.</span></h3>
              <p className="text-center text-sm text-gray-400">"Best Practices Partner" by National Youth Sports Health & Safety Institute U.S.A.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              <motion.div 
                className="h-24 w-24 mx-auto mb-5 bg-[#00c8ff]/10 rounded-full flex items-center justify-center text-[#00c8ff] font-bold text-xs border border-[#00c8ff]/30"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                CASES UK
              </motion.div>
              <h3 className="text-lg font-semibold text-center mb-2">CASES <span className="text-[#00c8ff]">UK</span></h3>
              <p className="text-center text-sm text-gray-400">Affiliated with Chartered Association of Sport and Exercise Sciences UK.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* University Approvals Section */}
        <motion.section 
          id="approvals" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              University <span className="text-[#00c8ff]">Approvals</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 relative overflow-hidden"
            variants={cardVariant}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center mb-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="md:w-1/3"
                variants={slideInLeft}
              >
                <motion.div 
                  className="relative group overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="h-48 bg-[#00c8ff]/10 rounded-lg flex items-center justify-center border border-[#00c8ff]/30">
                    <span className="text-[#00c8ff] font-bold text-lg">UGC Approved</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-2/3"
                variants={slideInRight}
              >
                <h3 className="text-xl font-bold mb-4 relative inline-block">
                  UGC Approved <span className="text-[#00c8ff]">Undergraduate Course</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent"></span>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-5">UFTA is proud to be the first institute in India to launch a UGC approved undergraduate course:</p>
                <div className="border-l-2 border-[#00c8ff]/50 pl-4 mb-4">
                  <p className="text-gray-300 font-medium"><span className="text-[#00c8ff]">B.Sc. in Fitness and Athletic Conditioning:</span> A four-year undergraduate program with multiple exit options as per NEP 2020 (Honours with Research/Academic Projects/With Major & Minor).</p>
                  <p className="text-gray-400 text-sm mt-2">Offered in association with <span className="text-white">Mahapurusha Srimanta Sankaradeva Viswavidyalaya</span> (Recognised Under Section 2(f) of UGC Act. 1956), Kalongpar, Nagaon, Assam.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center"
              variants={staggerContainer}
            >
              <motion.div 
                className="md:w-1/3 order-1 md:order-2"
                variants={slideInRight}
              >
                <motion.div 
                  className="relative group overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="h-48 bg-[#00c8ff]/10 rounded-lg flex items-center justify-center border border-[#00c8ff]/30">
                    <span className="text-[#00c8ff] font-bold text-lg">Rajiv Gandhi University</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-2/3 order-2 md:order-1"
                variants={slideInLeft}
              >
                <h3 className="text-xl font-bold mb-4 relative inline-block">
                  Rajiv Gandhi <span className="text-[#00c8ff]">University</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent"></span>
                </h3>
                <p className="text-gray-300 leading-relaxed">UFTA is associated with <span className="text-white">Rajiv Gandhi University</span> (A Central University) in Arunachal Pradesh as a "Sports Science Education Promoter." We have conducted various workshops on Career Awareness Programs in Sports & Exercise Sciences, Strength & Conditioning, and CPR & AED in collaboration with the university.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Faculty Section */}
        <motion.section 
          id="faculty" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Our Esteemed <span className="text-[#00c8ff]">Faculty</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-center text-xl leading-relaxed mb-10 text-gray-300"
            variants={fadeInUp}
          >
            UFTA's courses are led by a distinguished team of award-winning experts.
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
          >
            {[
              {
                name: "Bibhu Moni Singha",
                title: "Founder & Director, Sr. Director PROPTA U.S.A.",
                credentials: "PhD (Pursuing), M.Sc. S&C. 23+ yrs exp.",
                initials: "BMS"
              },
              {
                name: "Dr. Dipankar Bhattacharryya",
                title: "Dean Sports & Ex. Medicine",
                credentials: "MBBS, PGDSM. 34+ yrs exp. Lifetime Award.",
                initials: "DB"
              },
              {
                name: "Sangeeta Bora",
                title: "Co-Founder & Director Admin",
                credentials: "PGDM, Fitness Entrepreneur.",
                initials: "SB"
              },
              {
                name: "Alvi Yusuf",
                title: "Faculty, Nutrition & S&C",
                credentials: "B.Sc. Zoology, Cert. ST&C. 3+ yrs exp.",
                initials: "AY"
              },
              {
                name: "Archana Thakuria",
                title: "Faculty, S&C & Fitness",
                credentials: "B.E., Cert. ST&C. 7+ yrs exp.",
                initials: "AT"
              },
              {
                name: "More Expert Faculty",
                title: "Diverse specialists & guest lecturers",
                credentials: "Dedicated sports science professionals",
                initials: "EF"
              }
            ].map((faculty, index) => (
              <motion.div 
                key={index} 
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300"
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="relative group mb-5">
                    <motion.div 
                      className="w-32 h-32 rounded-full bg-[#00c8ff]/10 border-2 border-[#00c8ff]/30 flex items-center justify-center text-[#00c8ff] font-bold text-xl transition-transform duration-300 group-hover:scale-105"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faculty.initials}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{faculty.name}</h3>
                  <p className="text-[#00c8ff] font-medium mb-1">{faculty.title}</p>
                  <p className="text-sm text-gray-400">{faculty.credentials}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* International Education Partners Section */}
        <motion.section 
          id="partners" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              International Education Partners
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 flex flex-col md:flex-row items-center gap-10"
            variants={cardVariant}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-full md:w-2/5 h-48 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl"
              variants={slideInLeft}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              PROPTA USA
            </motion.div>
            <motion.div 
              className="md:w-3/5"
              variants={slideInRight}
            >
              <h3 className="text-2xl font-bold mb-4">PROPTA USA</h3>
              <p className="text-lg leading-relaxed mb-3 text-gray-300">UFTA is an official education partner and the only authorized center of PROPTA USA for providing training and certifications in India. PROPTA (Professional Personal Trainers Association) USA is one of the leading education bodies in the United States and worldwide, dedicated to educating professional fitness and nutrition professionals since 1980.</p>
              <p className="text-lg leading-relaxed text-gray-300">PROPTA's certification programs are recognized in 199 countries and are officially endorsed by the National Fitness League, the International Federation of Bodybuilders (IFBB PRO League), and accredited by bodies like the Bureau of Private Post Secondary Education (BPPE) in California, USA.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* International Collaborations Section */}
        <motion.section 
          id="collaborations" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296A3.745 3.745 0 0 1 16.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 12 21a3.745 3.745 0 0 1-1.637-.332A3.745 3.745 0 0 1 7.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 3 18.368a3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 1.593 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296A3.745 3.745 0 0 1 7.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 12 3a3.745 3.745 0 0 1 1.637.332A3.745 3.745 0 0 1 16.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 21 5.632A3.745 3.745 0 0 1 22.407 12Z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              International Collaborations
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                title: "CASES UK",
                description: "Our affiliation with CASES UK underscores our commitment to promoting excellence through evidence-based practice on an international level."
              },
              {
                title: "NYSHSI U.S.A.",
                description: "Recognition as a 'Best Practices Partner' by NYSHSI U.S.A. reflects our dedication to upholding the highest standards in youth sports health and safety."
              },
              {
                title: "PROPTA USA Network",
                description: "Our partnership with PROPTA USA connects UFTA to a global network of fitness professionals, with certifications recognized in 199 countries."
              },
              {
                title: "IUSCA UK",
                description: "Our Founder's IUSCA UK certification brings global S&C expertise from an association partnered with 150+ top universities worldwide."
              }
            ].map((collab, index) => (
              <motion.div 
                key={index} 
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6"
                variants={cardVariant}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-3">{collab.title.includes('UK') ? <><span className="text-white">{collab.title.split(' ')[0]}</span> <span className="text-[#00c8ff]">{collab.title.split(' ')[1]}</span></> : <><span className="text-white">{collab.title.split(' ')[0]}</span> <span className="text-[#00c8ff]">{collab.title.split(' ').slice(1).join(' ')}</span></>}</h3>
                <p className="leading-relaxed text-gray-300">{collab.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Infrastructure Section */}
        <motion.section 
          id="infrastructure" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M2.25 12a8.963 8.963 0 0 1 11.484 0l2.016 2.016" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.475 21.075a2.25 2.25 0 0 0 1.05 1.675H18a2.25 2.25 0 0 0 2.25-2.25v-2.625a2.25 2.25 0 0 0-1.05-1.675L12 12.75M2.25 12l6.225-6.225a2.25 2.25 0 0 1 3.182 0l6.225 6.225m0 0a2.25 2.25 0 0 1-3.182 3.182L12 17.25l-2.018-2.018m4.743-4.743-3.182-3.182a2.25 2.25 0 0 0-3.182 0L2.25 12" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Infrastructure & Facilities
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-center text-xl leading-relaxed mb-10 text-gray-300"
            variants={fadeInUp}
          >
            UFTA boasts state-of-the-art facilities designed for an optimal learning and training environment.
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
          >
            {[
              {
                title: "Spacious Gym Floor",
                description: "A 2500 sq ft air-conditioned gym with latest strength training equipment for diverse fitness disciplines.",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Smart Lab & Classroom",
                description: "1000 sq ft smart lab with Interactive Digital Board and 3D software for immersive learning.",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Biomechanics Lab",
                description: "Advanced lab with high-speed cameras, GAIT analysis, and force transducers for performance assessment.",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Cutting-Edge Technology",
                description: "Utilizing tools like force transducers for Velocity-Based Training (VBT) to enhance athletic performance.",
                color: "from-pink-500 to-pink-600"
              },
              {
                title: "Online Digital Library",
                description: "Access to extensive online resources, journals, and publications in sports science and medicine.",
                color: "from-orange-500 to-orange-600"
              },
              {
                title: "Sports Medicine & Rehab",
                description: "In-house facilities for Sports Injury Rehabilitation & Reconditioning for athletes and individuals.",
                color: "from-lime-500 to-lime-600"
              }
            ].map((facility, index) => (
              <motion.div 
                key={index} 
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6"
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={`h-48 bg-gradient-to-r ${facility.color} rounded-lg mb-5 flex items-center justify-center text-white font-bold text-lg shadow-md`}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {facility.title}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                <p className="leading-relaxed text-gray-300">{facility.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Founders Section */}
        <motion.section 
          id="founders" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Meet Our <span className="text-[#00c8ff]">Founders</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden"
              variants={cardVariant}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              <motion.div 
                className="flex flex-col items-center text-center"
                variants={staggerContainer}
              >
                <motion.div 
                  className="w-36 h-36 rounded-full bg-[#00c8ff]/10 border-2 border-[#00c8ff]/50 flex items-center justify-center text-[#00c8ff] font-bold text-2xl mb-5"
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  BMS
                </motion.div>
                <motion.h3 
                  className="text-2xl font-semibold text-white"
                  variants={fadeInUp}
                >
                  Bibhu Moni Singha, <span className="text-[#00c8ff]">PhD Scholar</span>
                </motion.h3>
                <motion.p 
                  className="text-[#00c8ff] font-medium mt-1"
                  variants={fadeInUp}
                >
                  Founder & Director, UFTA
                </motion.p>
                <motion.p 
                  className="text-sm text-gray-400 mt-1"
                  variants={fadeInUp}
                >
                  Sports & Exercise Scientist
                </motion.p>
              </motion.div>
              <motion.div 
                className="mt-8 text-left"
                variants={staggerContainer}
              >
                <motion.h4 
                  className="text-xl font-bold mb-4 relative inline-block"
                  variants={fadeInUp}
                >
                  Message from our <span className="text-[#00c8ff]">Founder</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent"></span>
                </motion.h4>
                <motion.p 
                  className="mb-4 leading-relaxed text-gray-300"
                  variants={fadeInUp}
                >
                  "On behalf of team UFTA, I gladly welcome you. Since 2006, UFTA has pioneered education in nutrition, fitness, and health in India. We're excited to introduce degree programs like B.Sc. in Fitness & Athletic Conditioning to meet industry demands."
                </motion.p>
                <motion.p 
                  className="mb-4 leading-relaxed text-gray-300"
                  variants={fadeInUp}
                >
                  "With over 23 years in this field, my commitment is to help individuals turn their passion into a profession. We've certified over 2,500 professionals, empowering their careers. Join UFTA for a fulfilling journey as an evidence-based health and Fitness Professional."
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 relative overflow-hidden"
              variants={cardVariant}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              <motion.div 
                className="flex flex-col items-center text-center"
                variants={staggerContainer}
              >
                <motion.div 
                  className="w-36 h-36 rounded-full bg-[#00c8ff]/10 border-2 border-[#00c8ff]/50 flex items-center justify-center text-[#00c8ff] font-bold text-2xl mb-5"
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  SB
                </motion.div>
                <motion.h3 
                  className="text-2xl font-semibold text-white"
                  variants={fadeInUp}
                >
                  Sangeeta Bora, <span className="text-[#00c8ff]">PGDM</span>
                </motion.h3>
                <motion.p 
                  className="text-[#00c8ff] font-medium mt-1"
                  variants={fadeInUp}
                >
                  Co-Founder & Director of Administration, UFTA
                </motion.p>
                <motion.p 
                  className="text-sm text-gray-400 mt-1"
                  variants={fadeInUp}
                >
                  Fitness Entrepreneur
                </motion.p>
              </motion.div>
              <motion.div 
                className="mt-8 text-left"
                variants={staggerContainer}
              >
                <motion.h4 
                  className="text-xl font-bold mb-4 relative inline-block"
                  variants={fadeInUp}
                >
                  Message from our <span className="text-[#00c8ff]">Co-Founder</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent"></span>
                </motion.h4>
                <motion.p 
                  className="mb-4 leading-relaxed text-gray-300"
                  variants={fadeInUp}
                >
                  "UFTA has always been at the forefront of premier fitness education. We pride ourselves on our qualified instructors and exceptional facilities, including our fully equipped gym, Biomechanics lab, and modern smart classroom."
                </motion.p>
                <motion.p 
                  className="mb-4 leading-relaxed text-gray-300"
                  variants={fadeInUp}
                >
                  "Our commitment extends to cutting-edge technology for sports-specific training and access to the latest research via our digital library. UFTA offers 100% placement assistance, leveraging strong connections to launch successful careers."
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
        
        {/* Aims & Objectives Section */}
        <motion.section 
          id="aims" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Our Aims & <span className="text-[#00c8ff]">Objectives</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 relative overflow-hidden"
            variants={cardVariant}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-10 mb-8 items-center"
              variants={staggerContainer}
            >
              <motion.div 
                className="md:w-1/3"
                variants={slideInLeft}
              >
                <motion.div 
                  className="h-48 bg-[#00c8ff]/10 rounded-lg flex items-center justify-center border border-[#00c8ff]/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[#00c8ff] font-bold text-lg">Excellence in Fitness Education</span>
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-2/3"
                variants={slideInRight}
              >
                <h3 className="text-xl font-bold mb-4 relative inline-block">
                  Mission <span className="text-[#00c8ff]">Excellence</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent"></span>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-5">UFTA is dedicated to training and certifying 2.1 million individuals under Skill India Mission, addressing the growing demand for qualified fitness professionals globally. Our commitment extends to standardizing, certifying, monitoring, and facilitating skilling in fitness and sports nationwide.</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8 mt-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="relative"
                variants={cardVariant}
              >
                <div className="absolute top-0 left-0 w-1 h-12 bg-[#00c8ff] opacity-70"></div>
                <h3 className="text-xl font-bold mb-4 pl-4">Our <span className="text-[#00c8ff]">Core Objectives</span></h3>
                <motion.ul 
                  className="space-y-3 pl-4"
                  variants={staggerContainer}
                >
                  <motion.li 
                    className="flex items-center gap-2 text-gray-300 mb-3"
                    variants={fadeInUp}
                  >
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                    <span>To raise awareness, especially among youth, about careers in Sports Science and Fitness.</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 text-gray-300 mb-3"
                    variants={fadeInUp}
                  >
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                    <span>To emphasize education in Exercise Science, Sports Nutrition, and life-saving skills like CPR & AED.</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 text-gray-300 mb-3"
                    variants={fadeInUp}
                  >
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                    <span>To align training with global standards and internationalize the Fitness Industry.</span>
                  </motion.li>
                </motion.ul>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={cardVariant}
              >
                <div className="absolute top-0 left-0 w-1 h-12 bg-[#00c8ff] opacity-70"></div>
                <h3 className="text-xl font-bold mb-4 pl-4">Our <span className="text-[#00c8ff]">Commitments</span></h3>
                <motion.ul 
                  className="space-y-3 pl-4"
                  variants={staggerContainer}
                >
                  <motion.li 
                    className="flex items-center gap-2 text-gray-300 mb-3"
                    variants={fadeInUp}
                  >
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                    <span>To evaluate, certify, and facilitate employment, offering evidence-based services for national preventive healthcare.</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 text-gray-300 mb-3"
                    variants={fadeInUp}
                  >
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                    <span>To promote healthy lifestyles through scientific meetings, seminars, and workshops in educational institutions.</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 text-gray-300 mb-3"
                    variants={fadeInUp}
                  >
                    <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                    <span>To assist organizations in strengthening health & fitness services across various sectors.</span>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="About UFTA - Universal Fitness Training Academy" />

export default AboutPage
