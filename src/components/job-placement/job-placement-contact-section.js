import React from 'react'
import { motion } from 'framer-motion'

const JobPlacementContactSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <motion.section 
      className="py-20 px-6 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-[#00c8ff]/20 to-indigo-500/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-tr from-[#00c8ff]/20 to-purple-500/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <motion.div 
        className="bg-gradient-to-br from-[#101318] to-[#121620] border border-[#2A2A2A] rounded-xl overflow-hidden relative"
        variants={cardVariant}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] via-indigo-500 to-[#00c8ff] opacity-80"></div>
        <div className="absolute -right-32 -top-32 w-64 h-64 bg-[#00c8ff]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
        
        <motion.div 
          className="flex items-center justify-center py-10"
          variants={fadeInUp}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00c8ff]/50 to-indigo-500/50 rounded-lg blur-sm"></div>
            <motion.div 
              className="relative bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-2 flex items-center"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <motion.svg 
                className="w-8 h-8 mr-2 text-[#00c8ff]" 
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
              <h2 className="text-4xl font-bold text-white text-center">
                Ready to Launch Your <span className="text-[#00c8ff]">Career?</span>
              </h2>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#00c8ff] via-indigo-500 to-[#00c8ff] mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        
        <motion.p 
          className="text-center text-xl leading-relaxed mb-12 text-gray-300 max-w-3xl mx-auto px-6"
          variants={fadeInUp}
        >
          Connect with our placement team to explore exciting career opportunities. Whether you're looking for domestic or international placements, we're here to guide you every step of the way.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Form Column */}
          <motion.div 
            className="bg-[#0A0A0A]/80 backdrop-blur-sm p-8 rounded-xl border border-[#2A2A2A] relative overflow-hidden"
            variants={slideInLeft}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] to-indigo-500 opacity-80"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="bg-[#00c8ff]/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#00c8ff]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </span>
              Placement <span className="text-[#00c8ff] ml-1">Inquiry</span>
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#00c8ff]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                    placeholder="Your Full Name"
                    required 
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#00c8ff]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                    placeholder="you@example.com"
                    required 
                  />
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#00c8ff]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <select 
                  id="qualification" 
                  name="qualification" 
                  className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200 appearance-none"
                >
                  <option value="">Select your qualification</option>
                  <option value="personal-trainer">Personal Trainer Certification</option>
                  <option value="strength-conditioning">Strength & Conditioning Coach</option>
                  <option value="sports-nutrition">Sports Nutrition Specialist</option>
                  <option value="group-fitness">Group Fitness Instructor</option>
                  <option value="other">Other/Prospective Student</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#00c8ff]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
                  </svg>
                </div>
                <select 
                  id="preference" 
                  name="preference" 
                  className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200 appearance-none"
                >
                  <option value="">Select placement preference</option>
                  <option value="domestic">Domestic (India)</option>
                  <option value="international">International</option>
                  <option value="both">Both Domestic & International</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#00c8ff]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                  placeholder="Tell us about your career goals, experience, or specific interests..."
                ></textarea>
              </div>
              
              <div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#00c8ff] to-indigo-500 text-white px-8 py-4 text-base font-medium rounded-lg shadow-lg shadow-[#00c8ff]/20 hover:shadow-[#00c8ff]/40 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Submit Placement Inquiry</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </motion.button>
              </div>
            </form>
          </motion.div>
          
          {/* Info Column */}
          <motion.div
            className="space-y-6"
            variants={slideInRight}
          >
            {/* Testimonial */}
            <motion.div 
              className="bg-[#0A0A0A]/80 backdrop-blur-sm p-6 rounded-xl border border-[#2A2A2A] relative overflow-hidden"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-80"></div>
              
              <div className="flex items-center mb-4">
                <span className="text-purple-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-white">Success Story</h3>
              </div>
              
              <p className="text-gray-300 italic mb-4">
                "Thanks to UFTA's placement assistance, I secured a position as a Strength & Conditioning Coach with an IPL team just weeks after certification. The interview preparation was invaluable!"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold mr-3">
                  AR
                </div>
                <div>
                  <h4 className="text-white font-medium">Ankit Rawal</h4>
                  <p className="text-gray-400 text-sm">S&C Coach, Rajasthan Royals</p>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="bg-[#0A0A0A]/80 backdrop-blur-sm p-6 rounded-xl border border-[#2A2A2A] relative overflow-hidden"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] to-indigo-500 opacity-80"></div>
              
              <div className="flex items-center mb-4">
                <span className="text-[#00c8ff] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-white">Immediate Assistance</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#00c8ff]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Call us directly:</p>
                    <a href="tel:+919864047046" className="text-[#00c8ff] hover:underline font-semibold text-lg">
                      +91-9864047046
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#00c8ff]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email our placement team:</p>
                    <a href="mailto:bibhuuniversal@gmail.com" className="text-[#00c8ff] hover:underline font-semibold">
                      bibhuuniversal@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Why Choose Us */}
            <motion.div 
              className="bg-[#0A0A0A]/80 backdrop-blur-sm p-6 rounded-xl border border-[#2A2A2A] relative overflow-hidden"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] to-indigo-500 opacity-80"></div>
              
              <div className="flex items-center mb-4">
                <span className="text-[#00c8ff] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-white">Why Choose UFTA?</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#00c8ff] mr-2 mt-0.5">✓</span>
                  <span className="text-gray-300 text-sm">100% placement assistance for all graduates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00c8ff] mr-2 mt-0.5">✓</span>
                  <span className="text-gray-300 text-sm">Exclusive partnerships with top fitness brands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00c8ff] mr-2 mt-0.5">✓</span>
                  <span className="text-gray-300 text-sm">Internationally recognized certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00c8ff] mr-2 mt-0.5">✓</span>
                  <span className="text-gray-300 text-sm">Dedicated placement cell with industry experts</span>
                </li>
              </ul>
              
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-[#00c8ff] hover:text-white text-sm flex items-center">
                  <span>Our Certifications</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a href="#" className="text-[#00c8ff] hover:text-white text-sm flex items-center">
                  <span>Our Partners</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-6"
              variants={fadeInUp}
            >
              {[
                { icon: "facebook", color: "bg-blue-600" },
                { icon: "twitter", color: "bg-[#00c8ff]" },
                { icon: "instagram", color: "bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400" },
                { icon: "linkedin", color: "bg-blue-700" },
                { icon: "youtube", color: "bg-red-600" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-xs font-bold">{social.icon.charAt(0).toUpperCase()}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Newsletter Signup */}
        <motion.div 
          className="mt-8 p-8 border-t border-[#2A2A2A]"
          variants={fadeInUp}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h4 className="text-xl font-bold text-white mb-2">Get Job Alerts</h4>
                <p className="text-gray-300 text-sm">Subscribe to receive notifications about new job opportunities</p>
              </div>
              
              <div className="flex-1 w-full md:w-auto">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full pl-4 pr-32 py-3 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                  />
                  <button className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-[#00c8ff] to-indigo-500 text-white px-6 rounded-md font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default JobPlacementContactSection
