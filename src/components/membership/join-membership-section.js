import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const JoinMembershipSection = () => {
  const {
    fadeInUp,
    slideInLeft,
    slideInRight,
    staggerContainer,
    scaleIn
  } = pageAnimations.standard;

  return (
    <motion.section 
      id="join" 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Section Header with Background */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-transparent h-40 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[url('/circuit-pattern.svg')] bg-repeat bg-center"></div>
          <div className="absolute left-10 top-5 w-20 h-20 rounded-full bg-[#00c8ff]/5"></div>
          <div className="absolute right-1/4 bottom-0 w-16 h-16 rounded-full bg-[#00c8ff]/5"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] p-3 rounded-full mb-5 shadow-lg"
            variants={scaleIn}
          >
            <motion.svg 
              className="w-10 h-10 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative"
            variants={fadeInUp}
          >
            Become a UFTA Member <span className="text-[#00c8ff]">Today!</span>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-[#00c8ff]/50 mx-auto mt-4"></div>
          </motion.h2>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mt-6 text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Take the next step in your fitness journey. Join the UFTA community and gain access to unparalleled resources, expertise, and networking opportunities. We are excited to welcome you!
          </motion.p>
        </div>
      </div>
      
      {/* Membership Application Container */}
      <div className="relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#00c8ff]/5 rounded-full blur-3xl -z-10 opacity-30"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-[#00c8ff]/5 rounded-full blur-3xl -z-10 opacity-30"></div>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Benefits Summary */}
          <motion.div 
            className="lg:col-span-2 bg-[#141414] border border-[#2A2A2A] rounded-xl p-8 h-fit sticky top-24"
            variants={slideInLeft}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff]/50 to-transparent"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00c8ff] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Why Join UFTA?
            </h3>
            
            <ul className="space-y-6 mb-8">
              {[
                {
                  title: "Industry Recognition",
                  description: "Enhance your credentials with membership from India's leading fitness education institution."
                },
                {
                  title: "Career Advancement",
                  description: "Gain access to exclusive job opportunities and career development resources."
                },
                {
                  title: "Continuous Learning",
                  description: "Stay updated with the latest research, trends, and best practices in fitness."
                },
                {
                  title: "Supportive Community",
                  description: "Connect with fellow professionals who share your passion for fitness excellence."
                }
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-[#1A1A1A] p-2 rounded-full border border-[#2A2A2A] flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00c8ff]">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="bg-[#0A0A0A] rounded-lg border border-[#2A2A2A] p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#00c8ff]/10 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white text-lg">Need Help?</h4>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">
                For detailed membership plans, pricing, and application procedures, please contact our membership services team.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00c8ff] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919864047046" className="text-[#00c8ff] hover:underline font-semibold">+91-9864047046</a>
                  <span className="text-gray-400 mx-2">/</span>
                  <a href="tel:+919864026682" className="text-[#00c8ff] hover:underline font-semibold">+91-9864026682</a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00c8ff] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:bibhuuniversal@gmail.com" className="text-[#00c8ff] hover:underline font-semibold">bibhuuniversal@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Inquiry Form */}
          <motion.div 
            className="lg:col-span-3 bg-[#141414] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-xl"
            variants={slideInRight}
          >
            <div className="bg-[#0A0A0A] py-6 px-8 border-b border-[#2A2A2A] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('/circuit-pattern.svg')] bg-repeat bg-center"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white">
                  Membership <span className="text-[#00c8ff]">Inquiry</span>
                </h3>
                <p className="text-gray-400 mt-1">
                  Fill out this form to get started with your UFTA membership application
                </p>
              </div>
            </div>
            
            <div className="p-8">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#00c8ff] text-black flex items-center justify-center mr-2 text-sm font-bold">1</div>
                    Personal Information
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="member_name" className="block mb-2 text-sm font-medium text-gray-300">
                        Full Name <span className="text-[#00c8ff]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input 
                          type="text" 
                          id="member_name" 
                          className="bg-[#1A1A1A] border border-[#2A2A2A] text-white text-sm rounded-lg focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full pl-10 p-3" 
                          placeholder="Your Full Name" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="member_email" className="block mb-2 text-sm font-medium text-gray-300">
                        Email Address <span className="text-[#00c8ff]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                        </div>
                        <input 
                          type="email" 
                          id="member_email" 
                          className="bg-[#1A1A1A] border border-[#2A2A2A] text-white text-sm rounded-lg focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full pl-10 p-3" 
                          placeholder="you@example.com" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="member_phone" className="block mb-2 text-sm font-medium text-gray-300">
                        Phone Number <span className="text-[#00c8ff]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <input 
                          type="tel" 
                          id="member_phone" 
                          className="bg-[#1A1A1A] border border-[#2A2A2A] text-white text-sm rounded-lg focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full pl-10 p-3" 
                          placeholder="+91 XXXXX XXXXX" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="member_location" className="block mb-2 text-sm font-medium text-gray-300">
                        City/State
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <input 
                          type="text" 
                          id="member_location" 
                          className="bg-[#1A1A1A] border border-[#2A2A2A] text-white text-sm rounded-lg focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full pl-10 p-3" 
                          placeholder="Your City/State" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Membership Details */}
                <div className="space-y-6 pt-4">
                  <h4 className="text-lg font-semibold text-white flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#00c8ff] text-black flex items-center justify-center mr-2 text-sm font-bold">2</div>
                    Membership Details
                  </h4>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="membership_type" className="block mb-2 text-sm font-medium text-gray-300">
                        Membership Category <span className="text-[#00c8ff]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                          </svg>
                        </div>
                        <select 
                          id="membership_type" 
                          className="bg-[#1A1A1A] border border-[#2A2A2A] text-white text-sm rounded-lg focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full pl-10 p-3 appearance-none"
                          required
                        >
                          <option selected disabled value="">Select a category...</option>
                          <option value="student">Student Member (₹1,499/year)</option>
                          <option value="professional">Professional Member (₹3,999/year)</option>
                          <option value="business">Business Member (₹9,999/year)</option>
                          <option value="other_inquiry">Other Inquiry</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="member_profession" className="block mb-2 text-sm font-medium text-gray-300">
                        Current Profession/Role
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input 
                          type="text" 
                          id="member_profession" 
                          className="bg-[#1A1A1A] border border-[#2A2A2A] text-white text-sm rounded-lg focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full pl-10 p-3" 
                          placeholder="e.g., Personal Trainer, Fitness Instructor, Student" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="member_message" className="block mb-2 text-sm font-medium text-gray-300">
                        Additional Information
                      </label>
                      <div className="relative">
                        <textarea 
                          id="member_message" 
                          rows="4" 
                          className="block p-3 w-full text-sm text-white bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] focus:ring-[#00c8ff] focus:border-[#00c8ff]" 
                          placeholder="Any specific questions, comments, or additional information about your membership inquiry?"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Terms and Submit */}
                <div className="pt-4 space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input 
                        id="terms" 
                        type="checkbox" 
                        className="w-4 h-4 bg-[#1A1A1A] rounded border border-[#2A2A2A] focus:ring-[#00c8ff] focus:ring-3"
                        required
                      />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                      I agree to UFTA's <a href="/terms" className="text-[#00c8ff] hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-[#00c8ff] hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <div className="flex justify-end">
                    <motion.button 
                      type="submit" 
                      className="bg-[#00c8ff] hover:bg-[#00c8ff]/90 text-black font-semibold py-3 px-8 rounded-lg shadow-lg shadow-[#00c8ff]/20 flex items-center gap-2 transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Submit Application
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <motion.div 
        className="mt-16"
        variants={fadeInUp}
      >
        <div className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff]/50 to-transparent"></div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">
              Frequently Asked <span className="text-[#00c8ff]">Questions</span>
            </h3>
            <p className="text-gray-400 mt-2">
              Got questions about UFTA membership? We've got answers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I renew my membership?",
                answer: "Renewals can be processed online through your member account or by contacting our membership services team directly. We'll send you a reminder 30 days before your membership expires."
              },
              {
                question: "Is there a student discount available?",
                answer: "Yes! We offer a dedicated Student Membership category at a reduced rate specifically designed for those currently enrolled in educational programs related to fitness, sports science, or related fields."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit/debit cards, net banking, UPI payments, and bank transfers. For institutional memberships, we can also arrange for invoicing."
              },
              {
                question: "How quickly will my application be processed?",
                answer: "Standard applications are typically processed within 3-5 business days. Once approved, you'll receive a welcome email with your membership details and login credentials for the member portal."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg p-5 hover:border-[#00c8ff]/50 transition-colors duration-300">
                <h4 className="font-semibold text-white mb-3 flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00c8ff] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {faq.question}
                </h4>
                <p className="text-gray-300 text-sm pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="/faq" className="text-[#00c8ff] hover:underline font-medium inline-flex items-center">
              View all FAQs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default JoinMembershipSection
