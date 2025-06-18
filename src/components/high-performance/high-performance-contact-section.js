import React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const HighPerformanceContactSection = () => {
  const { fadeInUp, slideInLeft, slideInRight, staggerContainer, cardVariant } = pageAnimations.standard;

  return (
    <motion.section 
      id="contact" 
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-80 h-80 bg-[#00c8ff]/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#00c8ff]/5 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <motion.div 
        className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-10 relative overflow-hidden shadow-xl"
        variants={cardVariant}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-[#00c8ff]/50 opacity-70"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
        
        {/* Section Header */}
        <div className="relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10"
            variants={fadeInUp}
          >
            <motion.div
              className="bg-gradient-to-r from-[#00c8ff]/80 to-[#00c8ff] p-0.5 rounded-full shadow-lg shadow-[#00c8ff]/10"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#0A0A0A] p-3 rounded-full">
                <motion.svg 
                  className="w-12 h-12 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </motion.svg>
              </div>
            </motion.div>
            
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white relative">
                Book Your <span className="text-[#00c8ff]">Assessment</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-[#00c8ff]/50 mt-4 mx-auto md:mx-0"></div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mb-12 text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Ready to elevate your performance? Contact our High Performance Clinic to schedule a comprehensive assessment and start your journey to peak athletic performance.
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
          >
            {/* Contact Form */}
            <motion.div
              className="bg-[#0A0A0A] p-8 md:p-10 rounded-xl border border-[#2A2A2A] shadow-xl relative overflow-hidden"
              variants={slideInLeft}
            >
              {/* Form Container Background Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c8ff]/5 rounded-full -mt-10 -mr-10 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00c8ff]/5 rounded-full -mb-10 -ml-10 blur-2xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c8ff] to-[#00c8ff]/70">Schedule Consultation</span>
                <div className="h-1 w-full bg-gradient-to-r from-[#00c8ff] to-[#00c8ff]/50 absolute bottom-0 left-0"></div>
              </h3>
              
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full pl-10 pr-4 py-3 bg-[#141414] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                        placeholder="Your Full Name"
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="w-full pl-10 pr-4 py-3 bg-[#141414] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                        placeholder="+91 XXXXX XXXXX"
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full pl-10 pr-4 py-3 bg-[#141414] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                      placeholder="you@example.com"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <select 
                      id="service" 
                      name="service" 
                      className="w-full pl-10 pr-4 py-3 bg-[#141414] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200 appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="rehabilitation">Injury Rehabilitation</option>
                      <option value="posture">Posture Analysis & GAIT</option>
                      <option value="biomechanics">Biomechanical Analysis</option>
                      <option value="cardiovascular">Cardiovascular Assessment</option>
                      <option value="performance">Performance Testing</option>
                      <option value="general">General Consultation</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                    placeholder="Tell us about your goals, current condition, or any specific concerns..."
                  ></textarea>
                </div>
                
                <div className="pt-3">
                  <motion.button 
                    type="submit" 
                    className="w-full relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00c8ff]/90 to-[#00c8ff] opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <span className="relative inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 text-base font-semibold text-black">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Assessment
                    </span>
                  </motion.button>
                  
                  <p className="mt-3 text-xs text-gray-400 text-center">
                    We'll respond within 24 hours to confirm your appointment.
                  </p>
                </div>
              </form>
            </motion.div>
            
            {/* Contact Information & Features */}
            <motion.div 
              variants={slideInRight}
              className="flex flex-col gap-6"
            >
              {/* Contact Information Card */}
              <div className="bg-[#0A0A0A] p-6 rounded-xl border border-[#2A2A2A] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c8ff]/5 rounded-full -mt-10 -mr-10 blur-2xl"></div>
                
                <h3 className="text-xl font-bold mb-5 text-white">
                  Direct <span className="text-[#00c8ff]">Contact</span>
                </h3>
                
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="bg-[#141414] p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <a href="tel:+919864047046" className="text-[#00c8ff] hover:underline text-lg font-semibold">+91-9864047046</a>
                      <p className="text-sm text-gray-400 mt-1">Monday-Saturday, 9AM-5PM IST</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#141414] p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <a href="mailto:bibhuuniversal@gmail.com" className="text-[#00c8ff] hover:underline text-lg font-semibold">bibhuuniversal@gmail.com</a>
                      <p className="text-sm text-gray-400 mt-1">For inquiries and appointments</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#141414] p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Location</h4>
                      <p className="text-gray-300">UFTA High Performance Clinic</p>
                      <p className="text-sm text-gray-400 mt-1">Guwahati Campus, Assam, India</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Why Choose Us Card */}
              <div className="bg-[#0A0A0A] p-6 rounded-xl border border-[#2A2A2A] shadow-xl relative overflow-hidden flex-grow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c8ff]/5 rounded-full -mt-10 -mr-10 blur-2xl"></div>
                
                <h3 className="text-xl font-bold mb-5 text-white">
                  Why Choose <span className="text-[#00c8ff]">Our Clinic</span>
                </h3>
                
                <ul className="space-y-4">
                  {[
                    { title: "Expert Team", desc: "Specialists with advanced degrees in Sports Science & Medicine", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                    { title: "State-of-the-Art Equipment", desc: "Advanced diagnostic and training technology", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
                    { title: "Personalized Approach", desc: "Custom programs tailored to your specific needs", icon: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" },
                    { title: "Evidence-Based Practices", desc: "Methods supported by scientific research", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#141414] flex items-center justify-center flex-shrink-0 mr-3">
                        <svg className="w-5 h-5 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-[#141414] rounded-lg border border-[#2A2A2A]">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Urgent Support</h4>
                      <p className="text-sm text-gray-400">For immediate assistance call us directly</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Testimonial */}
          <motion.div 
            className="mt-10 bg-[#141414] p-6 rounded-xl border border-[#2A2A2A] relative overflow-hidden max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <div className="absolute top-0 left-0 w-20 h-20 text-[#00c8ff]/10 opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="text-center relative z-10">
              <p className="text-gray-300 italic text-lg mb-4">
                "The High Performance Clinic at UFTA transformed my approach to training. The biomechanical analysis helped identify inefficiencies in my technique that were limiting my performance. Six months later, I'm setting new personal records and competing at a higher level."
              </p>
              <div className="inline-flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#00c8ff]/20 flex items-center justify-center mr-3">
                  <span className="text-[#00c8ff] font-bold">RS</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">Rahul Singh</h4>
                  <p className="text-xs text-gray-400">Professional Athlete</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-20 h-20 text-[#00c8ff]/10 opacity-50 transform rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default HighPerformanceContactSection
