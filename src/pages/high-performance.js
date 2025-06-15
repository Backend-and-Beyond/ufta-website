import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import { pageAnimations, hoverAnimations, viewportSettings } from "../utils/animations"

const HighPerformancePage = ({ location }) => {
  // Get animation variants from centralized configuration
  const { fadeInUp, slideInLeft, slideInRight, staggerContainer, cardVariant, scaleIn } = pageAnimations.standard;

  // Services data
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15M21.75 9A13.401 13.401 0 0 0 12 3.75m0 16.5A13.401 13.401 0 0 0 2.25 9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75a13.401 13.401 0 0 1 9.75 5.25m-19.5 0A13.401 13.401 0 0 1 12 3.75m0 16.5a13.401 13.401 0 0 1-9.75-5.25" />
        </svg>
      ),
      title: "Injury Rehabilitation & Reconditioning",
      description: "UFTA's in-house Sports Medicine facilities are dedicated to the comprehensive management of injuries for both athletes and the general public. Led by specialists like Dr. Dipankar Bhattacharryya (Dean of Sports & Exercise Medicine) and Dr. Bibhu Moni Singha (PhD Scholar, Sports & Exercise Scientist with expertise in Rehabilitation & Reconditioning), we focus on a holistic approach to recovery.",
      features: [
        "Expert Assessment: Thorough evaluation to understand the nature and extent of the injury",
        "Non-Invasive Techniques: Prioritizing conservative and effective treatment methods",
        "Personalized Programs: Tailored rehabilitation and reconditioning plans to meet individual needs",
        "Performance Focused: Aiming not just for recovery, but for a safe return to peak performance",
        "Injury Prevention: Educating on strategies to avoid future injuries and manage physical overload",
        "Active & Healthy Lifestyle: Promoting long-term well-being beyond immediate recovery"
      ],
      color: "emerald"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
      title: "Posture Analysis & GAIT Lab",
      description: "Understanding your body's alignment and movement patterns is key to preventing injuries and improving efficiency. Our GAIT lab provides in-depth analysis.",
      features: [
        "Comprehensive assessment of static and dynamic posture",
        "Detailed analysis of walking and running mechanics (GAIT)",
        "Identification of imbalances and movement dysfunctions",
        "Recommendations for corrective exercises and ergonomic adjustments",
        "Advanced technology for precise movement analysis",
        "Personalized improvement strategies"
      ],
      color: "blue"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
        </svg>
      ),
      title: "Advanced Biomechanical Analysis",
      description: "Our Sports & Exercise Biomechanics lab is equipped with state-of-the-art technology to dissect and understand the mechanics of human movement in sports and daily activities.",
      features: [
        "High-speed camera systems to capture and analyze complex movements",
        "Advanced software for detailed motion analysis",
        "Force plate assessments for ground reaction forces",
        "3D motion capture technology",
        "Sport-specific movement analysis",
        "Performance optimization recommendations"
      ],
      color: "purple"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
      title: "Cardiovascular Assessment & Monitoring",
      description: "Comprehensive cardiac health evaluation and monitoring to ensure safe and effective training programs.",
      features: [
        "Resting and exercise ECG monitoring",
        "Heart rate variability analysis",
        "VO2 max testing and assessment",
        "Blood pressure monitoring during exercise",
        "Cardiac risk stratification",
        "Personalized training zone recommendations"
      ],
      color: "red"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      ),
      title: "Performance Testing & Optimization",
      description: "Comprehensive fitness assessments and performance optimization protocols for athletes and fitness enthusiasts.",
      features: [
        "Strength and power testing protocols",
        "Agility and speed assessments",
        "Flexibility and mobility evaluations",
        "Body composition analysis",
        "Sport-specific performance metrics",
        "Periodized training program development"
      ],
      color: "yellow"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.052-.75.085a2.25 2.25 0 0 0-2.25 2.25v.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.5a2.25 2.25 0 0 0-2.25-2.25 24.394 24.394 0 0 0-.75-.085ZM12.75 3.104v5.714a2.25 2.25 0 0 0 .659 1.591L17.5 14.5M19.5 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 9.107 9.107Z" />
        </svg>
      ),
      title: "Research & Development",
      description: "Contributing to the advancement of sports science through ongoing research and evidence-based practice implementation.",
      features: [
        "Clinical research studies",
        "Evidence-based practice development",
        "Technology integration in rehabilitation",
        "Collaboration with academic institutions",
        "Publication of research findings",
        "Continuous improvement of protocols"
      ],
      color: "indigo"
    }
  ];

  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="High"
        titleHighlight={{ text: "Performance", color: "text-[#00c8ff]" }}
        subtitle="Advanced training for elite athletes"
        tagline={<>"<span className="text-[#00c8ff]">Elevate</span> Your Athletic Performance"</>}
        imageAlt="UFTA High Performance Clinic"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={cardVariant}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Welcome to UFTA's <span className="text-[#00c8ff]">High Performance Clinic</span>
            </h2>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
              At UFTA, we extend our expertise beyond education to offer specialized services at our High Performance Clinic. 
              Utilizing cutting-edge technology and evidence-based practices, our clinic is dedicated to helping athletes and individuals 
              achieve optimal physical health, recover from injuries, and enhance their performance. Our team of experts, including 
              Sports & Exercise Scientists and Sports Medicine Specialists, provides personalized care and scientifically-backed interventions.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Services Grid */}
        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center mb-12"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.52-.635 1.421-.825 2.246-.397l.713.572c.796.641.796 1.793 0 2.434l-.713.572c-.825.428-1.726.238-2.246-.397L11.42 15.17zm0 0L5.828 9.97a6 6 0 00-2.12-.523L3.04 9.324a.75.75 0 10-.422 1.406l.56.169A6 6 0 005.828 11.5l5.592 5.592z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Our <span className="text-[#00c8ff]">Services</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300 h-full flex flex-col"
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
                
                <div className="flex justify-center mb-6">
                  <div className={`text-${service.color}-500`}>
                    {service.icon}
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-white text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  <div className="flex-grow">
                    <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-3 h-3 text-[#00c8ff] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button 
                    className={`mt-6 w-full bg-${service.color}-600 hover:bg-${service.color}-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 text-sm`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </motion.svg>
              <h2 className="text-4xl font-bold text-white text-center relative">
                Book Your <span className="text-[#00c8ff]">Assessment</span>
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-center text-xl leading-relaxed mb-10 text-gray-300"
              variants={fadeInUp}
            >
              Ready to elevate your performance? Contact our High Performance Clinic to schedule a comprehensive assessment and start your journey to peak athletic performance.
            </motion.p>
            
            <motion.div 
              className="max-w-xl mx-auto bg-[#0A0A0A] p-8 rounded-lg border border-[#2A2A2A] relative overflow-hidden"
              variants={cardVariant}
            >
              <h3 className="text-2xl font-semibold text-white text-center mb-6">
                Schedule <span className="text-[#00c8ff]">Consultation</span>
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                      placeholder="+91 XXXXX XXXXX"
                      required 
                    />
                  </div>
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
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Service Interest
                  </label>
                  <select 
                    id="service" 
                    name="service" 
                    className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="rehabilitation">Injury Rehabilitation</option>
                    <option value="posture">Posture Analysis & GAIT</option>
                    <option value="biomechanics">Biomechanical Analysis</option>
                    <option value="cardiovascular">Cardiovascular Assessment</option>
                    <option value="performance">Performance Testing</option>
                    <option value="general">General Consultation</option>
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
                    placeholder="Tell us about your goals, current condition, or any specific concerns..."
                  ></textarea>
                </div>
                <div>
                  <motion.button 
                    type="submit" 
                    className="border border-[#00c8ff] text-white hover:text-[#00c8ff] hover:bg-[#00c8ff]/10 px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Assessment
                  </motion.button>
                </div>
              </form>
            </motion.div>
            
            <motion.div 
              className="text-center mt-8 space-y-2"
              variants={fadeInUp}
            >
              <p className="text-gray-300 leading-relaxed">
                For immediate assistance or urgent consultations:
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

export const Head = () => <Seo title="High Performance Clinic - Universal Fitness Training Academy" />

export default HighPerformancePage
