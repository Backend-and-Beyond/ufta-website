import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import { pageAnimations, hoverAnimations, viewportSettings } from "../utils/animations"

const MembershipPage = ({ location }) => {
  // Get animations for this page
  const {
    fadeInUp,
    slideInLeft,
    slideInRight,
    staggerContainer,
    cardVariant,
    scaleIn
  } = pageAnimations.standard;

  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="UFTA"
        titleHighlight={{ text: "Membership", color: "text-[#00c8ff]" }}
        subtitle="Join our elite community of fitness professionals and enthusiasts. Gain access to exclusive resources, events, and networking opportunities."
        tagline={<>"<span className="text-[#00c8ff]">Premium</span> Benefits for Dedicated Athletes"</>}
        imageAlt="UFTA Membership Hero Image"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Membership Overview Section */}
        <motion.section 
          id="overview" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.75-5.72M18 18.72V21m-3.75-2.28A9.094 9.094 0 0 1 12 21v-2.28m5.25-10.5A9.094 9.094 0 0 0 12 3V.72A9.094 9.094 0 0 1 17.25 6H12m0 0V3.75m0 2.25A9.094 9.094 0 0 0 6.75 6H12m0 0V8.25m0-2.25A9.094 9.094 0 0 0 3 6h3.75m0 0V8.25m9 9.75A9.094 9.094 0 0 0 12 15v2.25A9.094 9.094 0 0 0 14.25 21H12m0 0V18.75m0 2.25A9.094 9.094 0 0 0 9.75 21H12m0 0V18.75m0 2.25A9.094 9.094 0 0 0 6 21h3.75m0 0V18.75m-3.75 0A9.094 9.094 0 0 0 3 15.75V18m3-2.25V15m0 0A9.094 9.094 0 0 0 3 9.75V12m3-2.25V9.75m0 0A9.094 9.094 0 0 0 3 3.75V6m3-2.25V3.75m0 0A9.094 9.094 0 0 0 3 .75H6m6 15A9.094 9.094 0 0 0 12 3v2.25A9.094 9.094 0 0 0 12 15.75Z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Membership <span className="text-[#00c8ff]">Overview</span>
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
              Welcome to the Universal Fitness Training Academy (UFTA) Membership Program! Since 2006, UFTA has been at the forefront of fitness education in India, dedicated to fostering excellence and advancing the careers of fitness professionals. Our membership program is designed to extend this commitment, offering a platform for continuous learning, professional development, and networking within a vibrant community of experts and enthusiasts.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed mb-5 text-gray-300"
              variants={fadeInUp}
            >
              Becoming a UFTA member means joining an elite group dedicated to evidence-based practices in sports and exercise science, strength and conditioning, and nutrition. Whether you are a student aspiring to enter the fitness industry, a seasoned professional seeking to enhance your skills, or an institution committed to high standards in fitness, UFTA membership provides valuable resources and opportunities to help you achieve your goals.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-gray-300"
              variants={fadeInUp}
            >
              Our program aims to support your journey by providing access to exclusive content, educational resources, networking events, and much more, all underpinned by UFTA's reputation for quality and innovation in fitness education.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Membership Categories Section */}
        <motion.section 
          id="categories" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Membership <span className="text-[#00c8ff]">Categories</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-center text-xl leading-relaxed mb-10 text-gray-300"
            variants={fadeInUp}
          >
            Choose the membership category that best suits your professional needs and career goals.
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                title: "Student Membership",
                image: "placeholder1.jpg",
                description: "For current students pursuing degrees or certifications in fitness, sports science, or related fields.",
                features: [
                  "Discounted access to UFTA resources",
                  "Student-focused networking events",
                  "Career guidance and mentorship",
                  "Internship opportunities"
                ],
                price: "₹1,499",
                period: "/year",
                isPopular: false
              },
              {
                title: "Professional Membership",
                image: "placeholder2.png",
                description: "For working fitness professionals, personal trainers, coaches, and practitioners in the field.",
                features: [
                  "Full access to all UFTA resources",
                  "Professional certification maintenance",
                  "Job placement assistance",
                  "Professional liability insurance discounts",
                  "Continuing education opportunities"
                ],
                price: "₹3,999",
                period: "/year",
                isPopular: true
              },
              {
                title: "Business Membership",
                image: "placeholder3.jpg",
                description: "For gyms, fitness studios, sports teams, and organizations in the fitness industry.",
                features: [
                  "Multiple user accounts (5-10 staff members)",
                  "Branded certification for staff",
                  "Access to candidate database for recruitment",
                  "Business development resources",
                  "Consultation on facility design & equipment"
                ],
                price: "₹9,999",
                period: "/year",
                isPopular: false
              }
            ].map((membership, index) => (
              <motion.div 
                key={index} 
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300"
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
                {membership.isPopular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#00c8ff] to-[#00c8ff]/80 text-black px-4 py-1 text-xs font-bold z-10">
                    POPULAR
                  </div>
                )}
                <div className="mb-5 relative group overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="h-48 bg-[#00c8ff]/10 rounded-lg flex items-center justify-center border border-[#00c8ff]/30">
                    <span className="text-[#00c8ff] font-bold text-lg">{membership.title.split(' ')[0]}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {membership.title.split(' ')[0]} <span className="text-[#00c8ff]">{membership.title.split(' ')[1]}</span>
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{membership.description}</p>
                <ul className="space-y-2 mb-4 text-gray-300 text-sm">
                  {membership.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-[#00c8ff] rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="block text-xl font-bold text-white mb-2">
                    {membership.price}<span className="text-sm font-normal text-gray-400">{membership.period}</span>
                  </span>
                  <motion.a 
                    href="#join" 
                    className="border border-[#00c8ff] text-white hover:text-[#00c8ff] hover:bg-[#00c8ff]/10 px-6 py-2 text-sm font-medium transition-all duration-300 rounded-sm inline-block text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Membership Benefits Section */}
        <motion.section 
          id="benefits" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-1.863 1.332A3.745 3.745 0 0 1 16.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 12 21a3.745 3.745 0 0 1-1.637-.332A3.745 3.745 0 0 1 7.5 21a3.745 3.745 0 0 1-2.863-1.332A3.745 3.745 0 0 1 3 18.368a3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 .407 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296A3.745 3.745 0 0 1 7.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 12 3a3.745 3.745 0 0 1 1.637.332A3.745 3.745 0 0 1 16.5 3a3.745 3.745 0 0 1 2.863 1.332A3.745 3.745 0 0 1 21 5.632A3.745 3.745 0 0 1 22.407 12Z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Membership <span className="text-[#00c8ff]">Benefits</span>
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
            <motion.p 
              className="text-center text-xl text-gray-300 leading-relaxed mb-12"
              variants={fadeInUp}
            >
              Unlock a world of opportunities and resources by becoming a UFTA member. We are committed to supporting your professional growth and success in the dynamic field of fitness.
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-2 gap-x-10 gap-y-8"
              variants={staggerContainer}
            >
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  ),
                  title: "Access to Exclusive Resources",
                  description: "Gain access to UFTA's comprehensive library of research papers, training methodologies, and educational materials not available to the general public."
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  ),
                  title: "Community & Networking",
                  description: "Connect with a global network of fitness professionals, exchange ideas, and build valuable relationships through UFTA's online forums and in-person events."
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  ),
                  title: "Continuing Education",
                  description: "Stay at the forefront of your field with access to workshops, webinars, and courses that count toward continuing education credits for certification maintenance."
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                  ),
                  title: "Professional Discounts",
                  description: "Enjoy member-exclusive discounts on UFTA courses, certifications, events, and select fitness equipment and software from our partners."
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  ),
                  title: "Career Development",
                  description: "Access job placement services, career counseling, and UFTA's job board featuring opportunities from top fitness facilities and organizations worldwide."
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3m9 0v.75a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 3 21v-.75m12-3v-1.5A2.25 2.25 0 0 0 12.75 15h-1.5a2.25 2.25 0 0 0-2.25 2.25v1.5m6 0V15a2.25 2.25 0 0 0-2.25-2.25H9A2.25 2.25 0 0 0 6.75 15v3.75m6-7.5V9a2.25 2.25 0 0 0-2.25-2.25H9A2.25 2.25 0 0 0 6.75 9v1.5" />
                  ),
                  title: "Recognition and Credibility",
                  description: "Enhance your professional standing by affiliating with UFTA, a nationally and internationally recognized leader in fitness education and research."
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  variants={cardVariant}
                >
                  <motion.svg 
                    className="w-8 h-8 text-[#00c8ff] flex-shrink-0 mt-1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.icon}
                  </motion.svg>
                  <div>
                    <h4 className="font-semibold text-lg text-[#00c8ff] mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Join Membership Section */}
        <motion.section 
          id="join" 
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </motion.svg>
              <h2 className="text-4xl font-bold text-white text-center relative">
                Become a UFTA Member <span className="text-[#00c8ff]">Today!</span>
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-center text-xl leading-relaxed mb-10 text-gray-300"
              variants={fadeInUp}
            >
              Take the next step in your fitness journey. Join the UFTA community and gain access to unparalleled resources, expertise, and networking opportunities. We are excited to welcome you!
            </motion.p>
            
            <motion.div 
              className="max-w-xl mx-auto bg-[#0A0A0A] p-8 rounded-lg border border-[#2A2A2A] relative overflow-hidden"
              variants={cardVariant}
            >
              <h3 className="text-2xl font-semibold text-white text-center mb-6">
                Membership <span className="text-[#00c8ff]">Inquiry</span>
              </h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="member_name" className="block mb-2 text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="member_name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Your Full Name" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="member_email" className="block mb-2 text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="member_email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="you@example.com" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="membership_type" className="block mb-2 text-sm font-medium text-gray-300">
                    Membership Category of Interest
                  </label>
                  <select 
                    id="membership_type" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected disabled>Select a category...</option>
                    <option value="student">Student Member</option>
                    <option value="professional">Professional Member</option>
                    <option value="business">Business Member</option>
                    <option value="other_inquiry">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="member_message" className="block mb-2 text-sm font-medium text-gray-300">
                    Your Message (Optional)
                  </label>
                  <textarea 
                    id="member_message" 
                    rows="3" 
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Any specific questions or comments?"
                  ></textarea>
                </div>
                <div className="text-center">
                  <motion.button 
                    type="submit" 
                    className="border border-[#00c8ff] text-white hover:text-[#00c8ff] hover:bg-[#00c8ff]/10 px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm w-full md:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Inquiry
                  </motion.button>
                </div>
              </form>
            </motion.div>
            
            <motion.div 
              className="text-center mt-8 space-y-2"
              variants={fadeInUp}
            >
              <p className="text-gray-300 leading-relaxed">
                For detailed membership plans, pricing, and application procedures, please contact our membership services team.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Call: <a href="tel:+919864047046" className="text-[#00c8ff] hover:underline font-semibold">+91-9864047046</a> / <a href="tel:+919864026682" className="text-[#00c8ff] hover:underline font-semibold">+91-9864026682</a>
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

export const Head = () => <Seo title="Membership - Universal Fitness Training Academy" />

export default MembershipPage
