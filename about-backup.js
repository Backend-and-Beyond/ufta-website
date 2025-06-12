import * as React from "react"
import { motion } from "framer-motion"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import UniversityDetailModal from "../components/university-detail-modal"
import {
  JourneySection,
  AffiliationsSection,
  UniversityApprovalsSection,
  FacultySection,
  InternationalPartnersSection,
  InternationalCollaborationsSection,
  InfrastructureSection,
  FoundersSection,
  AimsObjectivesSection,
  InteractiveAchievementsSection
} from "../components/about"
import { pageAnimations } from "../utils/animations"
import "../styles/interactive-approvals.css"

const AboutPage = ({ location }) => {
  // Modal state management
  const [selectedUniversity, setSelectedUniversity] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // University data
  const universityData = {
    ugc: {
      name: "Mahapurusha Srimanta Sankaradeva Viswavidyalaya",
      status: "UGC Approved Institution",
      description: "UFTA's partnership with MSSV represents a groundbreaking achievement in Indian fitness education. Together, we launched India's first UGC-approved B.Sc. in Fitness and Athletic Conditioning program, setting new standards for academic excellence in the fitness industry.",
      programs: [
        {
          title: "B.Sc. Fitness & Athletic Conditioning",
          description: "4-year undergraduate program with NEP 2020 compliance",
          duration: "4 Years (8 Semesters)"
        },
        {
          title: "Honours with Research",
          description: "Advanced research projects in sports science",
          duration: "Additional 1 Year"
        },
        {
          title: "Major & Minor Combinations",
          description: "Flexible curriculum with specialization options",
          duration: "Integrated within program"
        }
      ],
      achievements: [
        "First UGC-approved fitness degree in India",
        "NEP 2020 compliant curriculum structure",
        "Multiple exit pathways for students",
        "Industry-aligned practical training modules",
        "Research-based capstone projects"
      ],
      contact: {
        address: "Kalongpar, Nagaon, Assam 782441",
        website: "https://mssv.ac.in"
      }
    },
    rgu: {
      name: "Rajiv Gandhi University",
      status: "Central University Partnership",
      description: "Our strategic alliance with Rajiv Gandhi University as 'Sports Science Education Promoter' has enabled us to conduct specialized workshops and awareness programs, bridging the gap between academic theory and practical application in sports science education.",
      programs: [
        {
          title: "Career Awareness Programs",
          description: "Comprehensive guidance on sports science careers",
          duration: "1-2 Days"
        },
        {
          title: "CPR & AED Certification",
          description: "Life-saving skills training for fitness professionals",
          duration: "8 Hours"
        },
        {
          title: "Strength & Conditioning Workshops",
          description: "Advanced training methodologies and techniques",
          duration: "2-3 Days"
        },
        {
          title: "Sports Science Research",
          description: "Collaborative research projects and publications",
          duration: "Ongoing"
        }
      ],
      achievements: [
        "Official Sports Science Education Promoter status",
        "Regular workshop collaborations since 2018",
        "Faculty exchange programs",
        "Joint research initiatives",
        "Student internship opportunities"
      ],
      contact: {
        address: "Rono Hills, Doimukh, Arunachal Pradesh 791112",
        website: "https://rgu.ac.in"
      }
    }
  };

  // Modal handlers
  const openModal = (universityKey) => {
    setSelectedUniversity(universityData[universityKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUniversity(null);
  };



  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="About"
        titleHighlight={{ text: "UFTA", color: "text-[#00c8ff]" }}
        subtitle="Learn about our journey, mission, and commitment to fitness excellence"
        tagline={
          <>
            "<span className="text-[#00c8ff]">Transforming</span> Fitness Education Since 2006"
          </>
        }
        imageAlt="About UFTA Hero Image"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Journey Section */}
        <JourneySection />
          
          <motion.div 
            className="flex items-center justify-center mb-16"
            variants={fadeInUp}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.svg 
                className="w-12 h-12 mr-4 text-[#00c8ff]" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </motion.svg>
            </motion.div>
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white relative">
                Our <span className="text-[#00c8ff]">Journey</span>
              </h2>
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mx-auto mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
              <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                From humble beginnings to industry leadership - discover our path to excellence
              </p>
            </div>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00c8ff] via-[#00c8ff]/50 to-[#00c8ff] h-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Timeline Items */}
            <motion.div 
              className="space-y-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={timelineContainer}
            >
              
              {/* 2006 - Foundation */}
              <motion.div 
                className="relative flex items-center"
                variants={timelineItemLeft}
              >
                <div className="flex-1 pr-8 text-right">
                  <motion.div 
                    className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden group hover:border-[#00c8ff]/50 transition-all duration-200"
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#00c8ff] to-transparent opacity-50"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00c8ff]/20 rounded-full"></div>
                    
                    <motion.div 
                      className="text-3xl font-bold text-[#00c8ff] mb-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      2006
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Foundation & Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Universal Fitness Training Academy (UFTA) was established in Guwahati, Assam, with a vision to revolutionize fitness education in India. Starting as a pioneering institution dedicated to comprehensive health and fitness education.
                    </p>
                    <div className="flex items-center justify-end mt-4 space-x-2">
                      <span className="w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                      <span className="text-sm text-[#00c8ff] font-medium">Inception</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Timeline Node */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00c8ff] rounded-full z-10 border-4 border-[#0A0A0A]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
                
                <div className="flex-1 pl-8"></div>
              </motion.div>

              {/* 2010s - Growth & Expansion */}
              <motion.div 
                className="relative flex items-center"
                variants={timelineItemRight}
              >
                <div className="flex-1 pr-8"></div>
                
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00c8ff] rounded-full z-10 border-4 border-[#0A0A0A]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
                
                <div className="flex-1 pl-8">
                  <motion.div 
                    className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden group hover:border-[#00c8ff]/50 transition-all duration-200"
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] to-transparent opacity-50"></div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#00c8ff]/20 rounded-full"></div>
                    
                    <motion.div 
                      className="text-3xl font-bold text-[#00c8ff] mb-3"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      2010s
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Growth & Recognition</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      UFTA gained recognition as a leading fitness education provider, establishing partnerships with international organizations and expanding our curriculum to meet growing industry demands.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-[#00c8ff]/10 p-3 rounded-lg border border-[#00c8ff]/20">
                        <div className="text-lg font-bold text-[#00c8ff]">500+</div>
                        <div className="text-sm text-gray-400">Professionals Certified</div>
                      </div>
                      <div className="bg-[#00c8ff]/10 p-3 rounded-lg border border-[#00c8ff]/20">
                        <div className="text-lg font-bold text-[#00c8ff]">Multi</div>
                        <div className="text-sm text-gray-400">Program Launch</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                      <span className="text-sm text-[#00c8ff] font-medium">Expansion Phase</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* 2020s - Innovation & Leadership */}
              <motion.div 
                className="relative flex items-center"
                variants={timelineItemLeft}
              >
                <div className="flex-1 pr-8 text-right">
                  <motion.div 
                    className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden group hover:border-[#00c8ff]/50 transition-all duration-200"
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#00c8ff] to-transparent opacity-50"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00c8ff]/20 rounded-full"></div>
                    
                    <motion.div 
                      className="text-3xl font-bold text-[#00c8ff] mb-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      2020s
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Innovation & UGC Approval</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      UFTA becomes the first institute in India to launch UGC-approved undergraduate courses, establishing multiple branches and reaching new heights in fitness education excellence.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-[#00c8ff]/10 p-3 rounded-lg border border-[#00c8ff]/20">
                        <div className="text-lg font-bold text-[#00c8ff]">4</div>
                        <div className="text-sm text-gray-400">Branches Nationwide</div>
                      </div>
                      <div className="bg-[#00c8ff]/10 p-3 rounded-lg border border-[#00c8ff]/20">
                        <div className="text-lg font-bold text-[#00c8ff]">UGC</div>
                        <div className="text-sm text-gray-400">Approved Programs</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end space-x-2">
                      <span className="w-2 h-2 bg-[#00c8ff] rounded-full"></span>
                      <span className="text-sm text-[#00c8ff] font-medium">Industry Leadership</span>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00c8ff] rounded-full z-10 border-4 border-[#0A0A0A]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
                
                <div className="flex-1 pl-8"></div>
              </motion.div>

              {/* Today - Current Impact */}
              <motion.div 
                className="relative flex items-center"
                variants={timelineItemRight}
              >
                <div className="flex-1 pr-8"></div>
                
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#00c8ff] to-[#0099cc] rounded-full z-10 border-4 border-[#0A0A0A] shadow-lg shadow-[#00c8ff]/30"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#00c8ff] opacity-50"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
                
                <div className="flex-1 pl-8">
                  <motion.div 
                    className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-[#00c8ff]/30 rounded-xl p-8 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-200 shadow-xl"
                    whileHover={{ scale: 1.01, y: -2, boxShadow: "0 15px 30px rgba(0, 200, 255, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00c8ff] via-[#00a6cc] to-[#00c8ff] opacity-70"></div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#00c8ff]/30 rounded-full blur-sm"></div>
                    
                    <motion.div 
                      className="text-4xl font-bold bg-gradient-to-r from-[#00c8ff] to-[#00a6cc] bg-clip-text text-transparent mb-3"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      Today
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Leading the Industry</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      With over 2,500 certified professionals, UFTA continues to be India's premier fitness education academy, fostering the next generation of fitness leaders through evidence-based training and innovative programs.
                    </p>
                    
                    {/* Achievement Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <motion.div 
                        className="bg-[#00c8ff]/10 p-4 rounded-lg border border-[#00c8ff]/20 text-center"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 255, 0.15)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-bold text-[#00c8ff]">2500+</div>
                        <div className="text-xs text-gray-400">Professionals Certified</div>
                      </motion.div>
                      <motion.div 
                        className="bg-[#00c8ff]/10 p-4 rounded-lg border border-[#00c8ff]/20 text-center"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 255, 0.15)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-bold text-[#00c8ff]">19+</div>
                        <div className="text-xs text-gray-400">Years of Excellence</div>
                      </motion.div>
                      <motion.div 
                        className="bg-[#00c8ff]/10 p-4 rounded-lg border border-[#00c8ff]/20 text-center"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 255, 0.15)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-bold text-[#00c8ff]">4</div>
                        <div className="text-xs text-gray-400">Branches Pan-India</div>
                      </motion.div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <motion.span 
                        className="w-3 h-3 bg-[#00c8ff] rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.span>
                      <span className="text-sm text-[#00c8ff] font-medium">Continuing Excellence</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div 
            className="mt-20 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2A2A2A] rounded-2xl p-10 relative overflow-hidden"
              whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0, 200, 255, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent"></div>
              
              <motion.h3 
                className="text-3xl font-bold text-white mb-6 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                Our <span className="text-[#00c8ff]">Mission</span>
              </motion.h3>
              <motion.p 
                className="text-xl leading-relaxed text-gray-300 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
              >
                UFTA is dedicated to fostering a new generation of fitness leaders through rigorous academic programs, practical training, and a passion for advancing sport and exercise sciences. We ensure our graduates are equipped with evidence-based knowledge to excel in the dynamic fitness industry.
              </motion.p>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-[#00c8ff]/20 rounded-full opacity-30"></div>
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-[#00c8ff]/20 rounded-full opacity-20"></div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Affiliations Section */}
        <motion.section 
          id="affiliations" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-10"
            variants={gentleFadeUp}
          >
            <motion.svg 
              className="w-10 h-10 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.2 }}
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
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-200"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              <motion.div 
                className="h-24 w-24 mx-auto mb-5 bg-[#00c8ff]/10 rounded-full flex items-center justify-center text-[#00c8ff] font-bold text-sm border border-[#00c8ff]/30"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                SPEFL-SC
              </motion.div>
              <h3 className="text-lg font-semibold text-center mb-2">SPEFL-<span className="text-[#00c8ff]">SC</span></h3>
              <p className="text-center text-sm text-gray-400">Affiliated with Sports, Physical Education, Fitness and Leisure Skills Council.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-200"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              <motion.div 
                className="h-24 w-24 mx-auto mb-5 bg-[#00c8ff]/10 rounded-full flex items-center justify-center text-[#00c8ff] font-bold text-xs border border-[#00c8ff]/30"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                NCSPE
              </motion.div>
              <h3 className="text-lg font-semibold text-center mb-2">NCSPE & <span className="text-[#00c8ff]">ICSSPE</span></h3>
              <p className="text-center text-sm text-gray-400">Supported by National Council of Sports Science & Physical Education (NCSPE).</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-200"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              <motion.div 
                className="h-24 w-24 mx-auto mb-5 bg-[#00c8ff]/10 rounded-full flex items-center justify-center text-[#00c8ff] font-bold text-xs border border-[#00c8ff]/30"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                NYSHSI
              </motion.div>
              <h3 className="text-lg font-semibold text-center mb-2">NYSHSI <span className="text-[#00c8ff]">U.S.A.</span></h3>
              <p className="text-center text-sm text-gray-400">"Best Practices Partner" by National Youth Sports Health & Safety Institute U.S.A.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-200"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
              <motion.div 
                className="h-24 w-24 mx-auto mb-5 bg-[#00c8ff]/10 rounded-full flex items-center justify-center text-[#00c8ff] font-bold text-xs border border-[#00c8ff]/30"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
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
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={gentleFadeUp}
          >
            <motion.div 
              className="inline-flex items-center justify-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-[#00c8ff] to-[#0099cc] rounded-full flex items-center justify-center mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg 
                  className="w-6 h-6 text-white" 
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
                <h2 className="text-5xl font-bold text-white mb-2">
                  University <span className="text-[#00c8ff]">Approvals</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00c8ff] to-transparent mx-auto"></div>
              </div>
            </motion.div>
            <motion.p 
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              variants={gentleFadeUp}
            >
              Recognized and approved by leading educational institutions, UFTA maintains the highest standards of academic excellence and professional credibility.
            </motion.p>
          </motion.div>

          {/* Statistics Bar */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={staggerContainer}
          >
            {[
              { number: "19", label: "Years of Excellence", icon: "🏆" },
              { number: "2", label: "University Partnerships", icon: "🤝" },
              { number: "1st", label: "UGC Approved Course in India", icon: "🎯" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-6 text-center relative overflow-hidden group"
                variants={cardVariant}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#00c8ff] mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* University Approval Cards */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {/* UGC Approved Course Card */}
            <motion.div 
              className="bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2A2A2A] rounded-2xl p-8 relative overflow-hidden group cursor-pointer interactive-card"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.01, borderColor: "#00c8ff" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
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
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-[#00c8ff] rounded-full mr-2 pulse-glow"></div>
                <span className="text-[#00c8ff] font-semibold text-sm">UGC APPROVED</span>
              </motion.div>

              {/* University Logo Placeholder */}
              <motion.div 
                className="relative mb-6 float-animation"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#00c8ff]/20 to-[#0099cc]/20 rounded-2xl flex items-center justify-center border border-[#00c8ff]/30 group-hover:border-[#00c8ff]/50 transition-colors duration-300">
                  <svg className="w-10 h-10 text-[#00c8ff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
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
                    transition={{ duration: 0.2 }}
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
              className="bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2A2A2A] rounded-2xl p-8 relative overflow-hidden group cursor-pointer interactive-card"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.01, borderColor: "#10b981" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
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
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 pulse-glow"></div>
                <span className="text-green-400 font-semibold text-sm">CENTRAL UNIVERSITY</span>
              </motion.div>

              {/* University Logo Placeholder */}
              <motion.div 
                className="relative mb-6 float-animation"
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-2xl flex items-center justify-center border border-green-500/30 group-hover:border-green-500/50 transition-colors duration-300">
                  <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
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
                    transition={{ duration: 0.2 }}
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
          </motion.div>

          {/* Additional Info Section */}
          <motion.div 
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
          </motion.div>
        </motion.section>

        {/* Faculty Section */}
        <motion.section 
          id="faculty" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-10"
            variants={gentleFadeUp}
          >
            <motion.svg 
              className="w-10 h-10 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.2 }}
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
            variants={gentleFadeUp}
          >
            UFTA's courses are led by a distinguished team of award-winning experts.
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* Bibhu Moni Singha */}
            <motion.div 
              className="group relative overflow-hidden rounded-xl shadow-xl"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-96 overflow-hidden rounded-xl">
                {/* Background layer that will be visible through the cut */}
                <div className="absolute inset-0 bg-[#d4ff8b] z-5"></div>
                
                {/* Main image container with triangle cut */}
                <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}>
                  <StaticImage
                    src="../images/bhibhu.png"
                    alt="Bibhu Moni Singha"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blurred"
                  />
                  
                  {/* Enhanced gradient overlay from top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300 z-15"></div>
                  
                  {/* Enhanced gradient overlay from bottom - stronger black */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90 z-15"></div>
                  
                  {/* Subtle vignette effect */}
                  <div className="absolute inset-0 bg-radial-gradient shadow-inner z-15"></div>
                </div>
                
                {/* Content Box with enhanced styling */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  {/* Line accent */}
                  <div className="w-20 h-1 bg-[#d4ff8b] mb-3 rounded-full"></div>
                  <h3 className="text-[#d4ff8b] text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    Bibhu Moni Singha
                  </h3>
                  <p className="text-white text-sm mb-1 group-hover:text-[#00c8ff] transition-colors duration-300">
                    Founder & Director, Sr. Director PROPTA U.S.A.
                  </p>
                  <p className="text-gray-300 text-xs">
                    PhD (Pursuing), M.Sc. S&C. 23+ yrs exp.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Dr. Dipankar Bhattacharryya */}
            <motion.div 
              className="group relative overflow-hidden rounded-xl shadow-xl"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-96 overflow-hidden rounded-xl">
                {/* Background layer that will be visible through the cut */}
                <div className="absolute inset-0 bg-[#d4ff8b] z-5"></div>
                
                {/* Main image container with triangle cut */}
                <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}>
                  <StaticImage
                    src="../images/faculty1.png"
                    alt="Dr. Dipankar Bhattacharryya"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blurred"
                  />
                  
                  {/* Enhanced gradient overlay from top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300 z-15"></div>
                  
                  {/* Enhanced gradient overlay from bottom - stronger black */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90 z-15"></div>
                  
                  {/* Subtle vignette effect */}
                  <div className="absolute inset-0 bg-radial-gradient shadow-inner z-15"></div>
                </div>
                
                {/* Content Box with enhanced styling */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  {/* Line accent */}
                  <div className="w-20 h-1 bg-[#d4ff8b] mb-3 rounded-full"></div>
                  <h3 className="text-[#d4ff8b] text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    Dr. Dipankar Bhattacharryya
                  </h3>
                  <p className="text-white text-sm mb-1 group-hover:text-[#00c8ff] transition-colors duration-300">
                    Dean Sports & Ex. Medicine
                  </p>
                  <p className="text-gray-300 text-xs">
                    MBBS, PGDSM. 34+ yrs exp. Lifetime Award.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Sangeeta Bora */}
            <motion.div 
              className="group relative overflow-hidden rounded-xl shadow-xl"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-96 overflow-hidden rounded-xl">
                {/* Background layer that will be visible through the cut */}
                <div className="absolute inset-0 bg-[#d4ff8b] z-5"></div>
                
                {/* Main image container with triangle cut */}
                <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}>
                  <StaticImage
                    src="../images/faculty2.png"
                    alt="Sangeeta Bora"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blurred"
                  />
                  
                  {/* Enhanced gradient overlay from top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300 z-15"></div>
                  
                  {/* Enhanced gradient overlay from bottom - stronger black */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90 z-15"></div>
                  
                  {/* Subtle vignette effect */}
                  <div className="absolute inset-0 bg-radial-gradient shadow-inner z-15"></div>
                </div>
                
                {/* Content Box with enhanced styling */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  {/* Line accent */}
                  <div className="w-20 h-1 bg-[#d4ff8b] mb-3 rounded-full"></div>
                  <h3 className="text-[#d4ff8b] text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    Sangeeta Bora
                  </h3>
                  <p className="text-white text-sm mb-1 group-hover:text-[#00c8ff] transition-colors duration-300">
                    Co-Founder & Director Admin
                  </p>
                  <p className="text-gray-300 text-xs">
                    PGDM, Fitness Entrepreneur.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Alvi Yusuf */}
            <motion.div 
              className="group relative overflow-hidden rounded-xl shadow-xl"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-96 overflow-hidden rounded-xl">
                {/* Background layer that will be visible through the cut */}
                <div className="absolute inset-0 bg-[#d4ff8b] z-5"></div>
                
                {/* Main image container with triangle cut */}
                <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}>
                  <StaticImage
                    src="../images/faculty3.jpg"
                    alt="Alvi Yusuf"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blurred"
                  />
                  
                  {/* Enhanced gradient overlay from top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300 z-15"></div>
                  
                  {/* Enhanced gradient overlay from bottom - stronger black */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90 z-15"></div>
                  
                  {/* Subtle vignette effect */}
                  <div className="absolute inset-0 bg-radial-gradient shadow-inner z-15"></div>
                </div>
                
                {/* Content Box with enhanced styling */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  {/* Line accent */}
                  <div className="w-20 h-1 bg-[#d4ff8b] mb-3 rounded-full"></div>
                  <h3 className="text-[#d4ff8b] text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    Alvi Yusuf
                  </h3>
                  <p className="text-white text-sm mb-1 group-hover:text-[#00c8ff] transition-colors duration-300">
                    Faculty, Nutrition & S&C
                  </p>
                  <p className="text-gray-300 text-xs">
                    B.Sc. Zoology, Cert. ST&C. 3+ yrs exp.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Archana Thakuria */}
            <motion.div 
              className="group relative overflow-hidden rounded-xl shadow-xl"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-96 overflow-hidden rounded-xl">
                {/* Background layer that will be visible through the cut */}
                <div className="absolute inset-0 bg-[#d4ff8b] z-5"></div>
                
                {/* Main image container with triangle cut */}
                <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}>
                  <StaticImage
                    src="../images/faculty1.png"
                    alt="Archana Thakuria"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blurred"
                  />
                  
                  {/* Enhanced gradient overlay from top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300 z-15"></div>
                  
                  {/* Enhanced gradient overlay from bottom - stronger black */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90 z-15"></div>
                  
                  {/* Subtle vignette effect */}
                  <div className="absolute inset-0 bg-radial-gradient shadow-inner z-15"></div>
                </div>
                
                {/* Content Box with enhanced styling */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  {/* Line accent */}
                  <div className="w-20 h-1 bg-[#d4ff8b] mb-3 rounded-full"></div>
                  <h3 className="text-[#d4ff8b] text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    Archana Thakuria
                  </h3>
                  <p className="text-white text-sm mb-1 group-hover:text-[#00c8ff] transition-colors duration-300">
                    Faculty, S&C & Fitness
                  </p>
                  <p className="text-gray-300 text-xs">
                    B.E., Cert. ST&C. 7+ yrs exp.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* More Expert Faculty */}
            <motion.div 
              className="group relative overflow-hidden rounded-xl shadow-xl"
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-96 overflow-hidden rounded-xl">
                {/* Background layer that will be visible through the cut */}
                <div className="absolute inset-0 bg-[#d4ff8b] z-5"></div>
                
                {/* Main image container with triangle cut */}
                <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}>
                  <StaticImage
                    src="../images/faculty2.png"
                    alt="More Expert Faculty"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blurred"
                  />
                  
                  {/* Enhanced gradient overlay from top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300 z-15"></div>
                  
                  {/* Enhanced gradient overlay from bottom - stronger black */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90 z-15"></div>
                  
                  {/* Subtle vignette effect */}
                  <div className="absolute inset-0 bg-radial-gradient shadow-inner z-15"></div>
                </div>
                
                {/* Content Box with enhanced styling */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  {/* Line accent */}
                  <div className="w-20 h-1 bg-[#d4ff8b] mb-3 rounded-full"></div>
                  <h3 className="text-[#d4ff8b] text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    More Expert Faculty
                  </h3>
                  <p className="text-white text-sm mb-1 group-hover:text-[#00c8ff] transition-colors duration-300">
                    Diverse specialists & guest lecturers
                  </p>
                  <p className="text-gray-300 text-xs">
                    Dedicated sports science professionals
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* View All Courses Button */}
          <motion.div 
            className="text-center mt-12"
            variants={fadeInUp}
          >
            <motion.button
              className="px-10 py-3 bg-[#00c8ff]/10 text-[#00c8ff] border border-[#00c8ff]/30 rounded-lg hover:bg-[#00c8ff]/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Training Programs
            </motion.button>
          </motion.div>
        </motion.section>

        {/* International Education Partners Section */}
        <motion.section 
          id="partners" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-10"
            variants={gentleFadeUp}
          >
            <motion.svg 
              className="w-10 h-10 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.2 }}
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
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="w-full md:w-2/5 h-48 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl"
              variants={slideInLeft}
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              transition={{ duration: 0.2 }}
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
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-10"
            variants={gentleFadeUp}
          >
            <motion.svg 
              className="w-10 h-10 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.2 }}
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
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
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
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-10"
            variants={gentleFadeUp}
          >
            <motion.svg 
              className="w-10 h-10 mr-3 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.2 }}
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
            variants={gentleFadeUp}
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
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-10"
            variants={gentleFadeUp}
          >
            <motion.svg 
              className="w-10 h-10 mr-3 text-[#00c8ff]" 
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
            <h2 className="text-4xl font-bold text-white text-center relative">
              Our Aims & <span className="text-[#00c8ff]">Objectives</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 relative overflow-hidden"
            variants={cardVariant}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
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
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
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

        {/* Interactive Achievements Timeline */}
        <motion.section 
          className="py-20 bg-gradient-to-b from-transparent to-[#0a0a0a]/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-16"
            variants={gentleFadeUp}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Recognition <span className="text-[#00c8ff]">Timeline</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key milestones in UFTA's journey toward academic excellence and university partnerships
            </p>
          </motion.div>

          {/* Interactive Achievement Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
          >
            <InteractiveApprovalBadge
              title="First UGC Approved Course"
              subtitle="2020 - Breakthrough Achievement"
              details="UFTA becomes the first institute in India to launch a UGC-approved B.Sc. in Fitness and Athletic Conditioning program."
              badgeColor="#00c8ff"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              }
              features={[
                "NEP 2020 Compliant Curriculum",
                "Multiple Exit Options Available",
                "Industry-Aligned Practical Training",
                "Research-Based Academic Projects",
                "Honours with Specialization Tracks"
              ]}
            />

            <InteractiveApprovalBadge
              title="Central University Partnership"
              subtitle="2018 - Strategic Collaboration"
              details="Established partnership with Rajiv Gandhi University as Sports Science Education Promoter, conducting workshops and awareness programs."
              badgeColor="#10b981"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h2v-2.5c0-1.17.95-2.12 2.12-2.12h.76c1.05 0 2.01.53 2.58 1.42L12 12l.54-1.7c.57-.89 1.53-1.42 2.58-1.42h.76c1.17 0 2.12.95 2.12 2.12V14h2v4H4z"/>
                </svg>
              }
              features={[
                "Career Awareness Programs",
                "CPR & AED Certification Workshops",
                "Strength & Conditioning Training",
                "Sports Science Research Collaboration",
                "Faculty Exchange Programs"
              ]}
            />

            <InteractiveApprovalBadge
              title="International Affiliations"
              subtitle="2010-2015 - Global Recognition"
              details="Established partnerships with PROPTA USA and CASES UK, bringing international standards to Indian fitness education."
              badgeColor="#8b5cf6"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              }
              features={[
                "PROPTA USA Certification Programs",
                "CASES UK Affiliation",
                "International Faculty Exchange",
                "Global Curriculum Standards",
                "Cross-Cultural Learning Opportunities"
              ]}
            />

            <InteractiveApprovalBadge
              title="Foundation & Recognition"
              subtitle="2006 - UFTA Established"
              details="Founded with the vision to elevate fitness education standards in India, gaining recognition from various educational bodies."
              badgeColor="#f59e0b"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              }
              features={[
                "Pioneering Fitness Education Approach",
                "Industry-First Practical Training",
                "Evidence-Based Curriculum Development",
                "Professional Development Focus",
                "Continuous Innovation in Teaching"
              ]}
            />
          </motion.div>

          {/* Impact Statistics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {[
              { number: "2", label: "University Partnerships", color: "#00c8ff" },
              { number: "3", label: "International Affiliations", color: "#10b981" },
              { number: "19+", label: "Years of Excellence", color: "#8b5cf6" },
              { number: "1000+", label: "Graduates Trained", color: "#f59e0b" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-b from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl"
                variants={cardVariant}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                <motion.div
                  className="w-full h-1 rounded-full mt-3"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: stat.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <Footer />

      {/* University Detail Modal */}
      <UniversityDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        university={selectedUniversity}
      />
    </UftaLayout>
  )
}

export const Head = () => <Seo title="About UFTA - Universal Fitness Training Academy" />

export default AboutPage
