import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const EventsContactSection = () => {
  const {
    fadeInUp,
    slideInLeft,
    slideInRight,
    staggerContainer,
    cardVariant
  } = pageAnimations.standard;

  return (
    <motion.section 
      id="contact" 
      className="py-12 md:py-20 px-4 md:px-6 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#00c8ff]/10 to-purple-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-[#00c8ff]/10 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <motion.div 
        className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-4 md:p-6 lg:p-10 relative overflow-hidden shadow-xl"
        variants={cardVariant}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c8ff] via-purple-500 to-[#00c8ff] opacity-60"></div>
        
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
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-10"
            variants={fadeInUp}
          >
            <motion.div
              className="bg-gradient-to-r from-[#00c8ff] to-purple-500 p-0.5 rounded-full shadow-lg shadow-[#00c8ff]/10"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#0A0A0A] p-2 md:p-3 rounded-full">
                <motion.svg 
                  className="w-8 h-8 md:w-12 md:h-12 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </motion.svg>
              </div>
            </motion.div>
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white relative">
                Stay <span className="text-[#00c8ff]">Updated</span> & <span className="text-purple-400">Enquire</span>
              </h2>
              <div className="h-1 w-20 md:w-32 bg-gradient-to-r from-[#00c8ff] to-purple-500 mt-2 md:mt-4 mx-auto md:mx-0"></div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-center text-lg md:text-xl leading-relaxed mb-8 md:mb-12 text-gray-300 max-w-3xl mx-auto px-4"
            variants={fadeInUp}
          >
            Interested in attending our events, presenting your work, or partnering with us? Contact us for more information or subscribe to our events mailing list.
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
          >
            {/* Contact Form */}
            <motion.div
              className="bg-[#0A0A0A] p-4 md:p-6 lg:p-8 xl:p-10 rounded-xl border border-[#2A2A2A] shadow-xl relative overflow-hidden"
              variants={slideInLeft}
            >
              {/* Form Container Background Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c8ff]/5 rounded-full -mt-10 -mr-10 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full -mb-10 -ml-10 blur-2xl"></div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c8ff] to-purple-400">Events Inquiry</span>
                <div className="h-1 w-full bg-gradient-to-r from-[#00c8ff] to-purple-400 absolute bottom-0 left-0"></div>
              </h3>
              
              <form className="space-y-4 md:space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
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
                        className="w-full pl-8 md:pl-10 pr-4 py-2 md:py-3 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200 text-sm md:text-base"
                        placeholder="Your Full Name"
                        required 
                      />
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
                        className="w-full pl-8 md:pl-10 pr-4 py-2 md:py-3 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200 text-sm md:text-base"
                        placeholder="you@example.com"
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="events-interest" className="block text-sm font-medium text-gray-300 mb-2">
                    Events You're Interested In
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <select 
                      id="events-interest" 
                      name="events-interest" 
                      className="w-full pl-8 md:pl-10 pr-4 py-2 md:py-3 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200 appearance-none text-sm md:text-base"
                    >
                      <option value="">Select an event type</option>
                      <option value="workshop">Upcoming Workshops</option>
                      <option value="conference">Annual Conference</option>
                      <option value="webinar">Webinar Series</option>
                      <option value="all">All Events</option>
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
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-lg focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200 resize-none text-sm md:text-base"
                    placeholder="Tell us more about your interests or questions..."
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00c8ff] to-purple-500 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 hover:from-[#00c8ff]/90 hover:to-purple-500/90 text-sm md:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Inquiry
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Information & Next Event */}
            <motion.div
              className="space-y-6 md:space-y-8"
              variants={slideInRight}
            >
              {/* Contact Information */}
              <div className="bg-[#0A0A0A] p-4 md:p-6 lg:p-8 xl:p-10 rounded-xl border border-[#2A2A2A] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full -mt-10 -ml-10 blur-2xl"></div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c8ff] to-purple-400">Get in Touch</span>
                  <div className="h-1 w-full bg-gradient-to-r from-[#00c8ff] to-purple-400 absolute bottom-0 left-0"></div>
                </h3>
                
                <div className="space-y-4 md:space-y-6 relative z-10">
                  <ul className="space-y-4 md:space-y-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mr-3 md:mr-4">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm md:text-base">Email</h4>
                        <p className="text-gray-300 text-sm md:text-base">events@ufta.in</p>
                        <p className="text-xs md:text-sm text-gray-400 mt-1">We'll respond within 24-48 hours</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Phone</h4>
                        <p className="text-gray-300">+91 8486 372 732</p>
                        <p className="text-sm text-gray-400 mt-1">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Address</h4>
                        <p className="text-gray-300">UFTA Campus, Guwahati, Assam</p>
                        <p className="text-sm text-gray-400 mt-1">We'll respond within 24-48 hours</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Upcoming Events Highlight */}
              <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-xl border border-[#2A2A2A] shadow-xl relative overflow-hidden flex-grow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c8ff]/5 rounded-full -mt-10 -mr-10 blur-2xl"></div>
                
                <h3 className="text-2xl font-bold mb-6 relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c8ff] to-purple-400">Next Event</span>
                  <div className="h-1 w-full bg-gradient-to-r from-[#00c8ff] to-purple-400 absolute bottom-0 left-0"></div>
                </h3>
                
                <div className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] p-5 rounded-lg border border-[#2A2A2A] mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#00c8ff]/10 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">CPR & AED Certification</h4>
                      <p className="text-sm text-[#00c8ff]">June 20, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Gain life-saving skills with our certified CPR and AED workshop at our Zirakpur Branch.
                  </p>
                  <motion.a 
                    href="#workshops" 
                    className="inline-block w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm text-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.a>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-4">
                    Join our mailing list for early access to event registrations and exclusive content
                  </p>
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-grow">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-l-lg focus:border-[#00c8ff] focus:outline-none"
                      />
                    </div>
                    <button className="bg-gradient-to-r from-[#00c8ff] to-purple-500 text-white px-4 py-2.5 rounded-r-lg font-medium">
                      Subscribe
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Social Media Links */}
          <motion.div 
            className="flex justify-center mt-12 space-x-6"
            variants={fadeInUp}
          >
            {[
              { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              { name: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 4h9a3.5 3.5 0 013.5 3.5v9a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 014 16.5v-9A3.5 3.5 0 017.5 4zm9 14h.01M9 9.5a3 3 0 100 6 3 3 0 000-6z" },
              { name: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 20V9 M4 6a2 2 0 100-4 2 2 0 000 4z" },
              { name: "YouTube", icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="bg-[#141414] hover:bg-[#1A1A1A] p-3 rounded-full border border-[#2A2A2A] hover:border-[#00c8ff]/30 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-gray-400 group-hover:text-[#00c8ff] transition-colors duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={social.icon} />
                </svg>
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default EventsContactSection
