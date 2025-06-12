import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

import UftaLayout from "../components/ufta-layout"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageHero from "../components/page-hero"
import { pageAnimations, hoverAnimations, viewportSettings } from "../utils/animations"

const EventsPage = ({ location }) => {
  // Get animations for this page
  const {
    fadeInUp,
    slideInLeft,
    slideInRight,
    staggerContainer,
    cardVariant,
    scaleIn
  } = pageAnimations.standard;

  // Workshop data
  const workshops = [
    {
      title: "Advanced S&C Techniques",
      date: "Upcoming: July 15-16, 2025 (Guwahati Campus & Online)",
      description: "Dive deep into cutting-edge strength and conditioning methodologies, including VBT, plyometrics, and periodization strategies for elite athletes. Ideal for experienced coaches and trainers.",
      color: "cyan",
      bgColor: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      title: "Sports Nutrition Masterclass",
      date: "Upcoming: August 5, 2025 (Online)",
      description: "Learn to design effective, evidence-based nutrition plans for athletes across various sports. Topics include nutrient timing, supplementation, and hydration strategies.",
      color: "green",
      bgColor: "from-green-500/20 to-green-600/20"
    },
    {
      title: "CPR & AED Certification",
      date: "Next Batch: June 20, 2025 (Zirakpur Branch)",
      description: "Gain life-saving skills with our certified CPR and AED workshop. Essential for all fitness professionals. UFTA regularly conducts these in collaboration with partners like Rajiv Gandhi University.",
      color: "purple",
      bgColor: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Comprehensive Fitness Assessment",
      date: "Upcoming: September 10-11, 2025 (Online & Guwahati)",
      description: "Master a variety of fitness assessment techniques, from body composition analysis to functional movement screening, to create highly personalized training programs.",
      color: "yellow",
      bgColor: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      title: "Sports Injury Prevention & First Aid",
      date: "Upcoming: October 7, 2025 (Online)",
      description: "Learn key principles of injury prevention in sports and fitness settings, along with essential first aid for common sports-related injuries.",
      color: "red",
      bgColor: "from-red-500/20 to-red-600/20"
    },
    {
      title: "Velocity-Based Training (VBT) Practicals",
      date: "Upcoming: November 12, 2025 (Guwahati Campus)",
      description: "A hands-on workshop focusing on the practical application of VBT, led by experts including UFTA's founder, a pioneer in VBT research in India.",
      color: "gray",
      bgColor: "from-gray-500/20 to-gray-600/20"
    }
  ];

  // Conference data
  const conferences = [
    {
      title: "UFTA Annual International Conference on Sports & Exercise Science (UFTA-ICSES)",
      date: "Next Edition: February 20-22, 2026 (Guwahati, Assam)",
      description: "Our flagship conference, attracting researchers, academicians, coaches, and students from around the globe. Features keynote presentations, scientific paper sessions, poster presentations, and industry exhibitions.",
      details: [
        "Call for Abstracts: Opens August 2025",
        "Early Bird Registration: October 2025"
      ],
      color: "purple"
    },
    {
      title: "National Symposium on Fitness, Health & High Performance",
      date: "Planned for: November 2025 (In collaboration with Partner University)",
      description: "A national-level gathering focused on bridging the gap between research and practice in the Indian fitness ecosystem. This symposium will feature panel discussions on policy, skill development, and the role of technology in fitness.",
      details: [
        "Focus on NEP 2020 alignment for fitness education",
        "Industry-Academia collaboration sessions"
      ],
      color: "slate"
    }
  ];

  return (
    <UftaLayout>
      <Navigation location={location} />
      
      <PageHero
        title="Events &"
        titleHighlight={{ text: "Workshops", color: "text-[#00c8ff]" }}
        subtitle="Learn. Connect. Grow."
        tagline={<>"<span className="text-[#00c8ff]">Transformative</span> Learning Experiences"</>}
        imageAlt="UFTA Events Hero Image"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Events Overview Section */}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-3.75h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              Events <span className="text-[#00c8ff]">Overview</span>
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
              Universal Fitness Training Academy (UFTA) is committed to advancing the field of sports and exercise science through continuous learning and knowledge exchange. Our events program, featuring workshops, conferences, seminars, and webinars, serves as a vital platform for fitness professionals, students, researchers, and enthusiasts to engage with the latest advancements, practical skills, and industry best practices.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed mb-5 text-gray-300"
              variants={fadeInUp}
            >
              Since our inception in 2006, UFTA has aimed to elevate the standards of fitness education in India. Our events are an extension of this mission, designed to disseminate evidence-based knowledge, foster professional development, and create invaluable networking opportunities. We often collaborate with our esteemed partners, including universities like Mahapurusha Srimanta Sankaradeva Viswavidyalaya and Rajiv Gandhi University, and international bodies such as PROPTA USA and CASES UK, to bring world-class expertise to our audience.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-gray-300"
              variants={fadeInUp}
            >
              Whether you're looking to acquire new practical skills, present your research, or connect with leaders in the fitness industry, UFTA's events offer a dynamic and enriching experience. Join us to stay at the cutting edge of fitness science and practice.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Workshops Section */}
        <motion.section 
          id="workshops" 
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
              <span className="text-[#00c8ff]">Workshops</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-center text-xl leading-relaxed mb-10 text-gray-300"
            variants={fadeInUp}
          >
            UFTA's workshops are designed to provide intensive, hands-on training in specialized areas of fitness, strength and conditioning, and sports nutrition. Led by our expert faculty and guest specialists, these sessions focus on practical application and skill development.
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {workshops.map((workshop, index) => (
              <motion.div 
                key={index} 
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300 h-full flex flex-col"
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
                <div className={`mb-5 relative group overflow-hidden rounded-lg bg-gradient-to-br ${workshop.bgColor} border border-[#00c8ff]/30`}>
                  <div className="h-48 flex items-center justify-center">
                    <span className="text-[#00c8ff] font-bold text-lg">{workshop.title.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {workshop.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {workshop.date}
                  </p>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                    {workshop.description}
                  </p>
                  <motion.a 
                    href="#contact" 
                    className={`mt-auto inline-block bg-${workshop.color}-600 hover:bg-${workshop.color}-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm text-center`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Interest
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Conferences Section */}
        <motion.section 
          id="conferences" 
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3M3.75 14.25H2.25m1.5 0h3m-3 0H2.25m15.75 0h3m-3 0h1.5m-15.75 0H6.75m11.25 0h2.25m0 0h1.5m-18 0h2.25M12 7.5h.008v.008H12V7.5Z" />
            </motion.svg>
            <h2 className="text-4xl font-bold text-white text-center relative">
              <span className="text-[#00c8ff]">Conferences</span>
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-center text-xl leading-relaxed mb-10 text-gray-300"
            variants={fadeInUp}
          >
            UFTA hosts and participates in national and international conferences, bringing together leading minds in sports science, fitness, and health to share research, discuss innovations, and shape the future of the industry.
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-1 lg:grid-cols-2 gap-10"
            variants={staggerContainer}
          >
            {conferences.map((conference, index) => (
              <motion.div 
                key={index} 
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden group hover:border-[#00c8ff] transition-all duration-300 h-full flex flex-col"
                variants={cardVariant}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
                <div className={`mb-5 relative group overflow-hidden rounded-lg bg-gradient-to-br from-${conference.color}-500/20 to-${conference.color}-600/20 border border-[#00c8ff]/30`}>
                  <div className="h-48 flex items-center justify-center">
                    <span className="text-[#00c8ff] font-bold text-lg text-center px-4">
                      {conference.title.includes('Annual') ? 'Annual Conference' : 'National Symposium'}
                    </span>
                  </div>
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {conference.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {conference.date}
                  </p>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {conference.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-gray-400 mb-4 space-y-1">
                    {conference.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                  <motion.a 
                    href="#contact" 
                    className={`mt-auto inline-block bg-${conference.color}-700 hover:bg-${conference.color}-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm text-center`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {conference.title.includes('Annual') ? 'Conference Details' : 'Symposium Details'}
                  </motion.a>
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </motion.svg>
              <h2 className="text-4xl font-bold text-white text-center relative">
                Stay Updated & <span className="text-[#00c8ff]">Inquire</span>
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-center text-xl leading-relaxed mb-10 text-gray-300"
              variants={fadeInUp}
            >
              Interested in attending our events, presenting your work, or partnering with us? Contact us for more information or subscribe to our events mailing list.
            </motion.p>
            
            <motion.div 
              className="max-w-xl mx-auto bg-[#0A0A0A] p-8 rounded-lg border border-[#2A2A2A] relative overflow-hidden"
              variants={cardVariant}
            >
              <h3 className="text-2xl font-semibold text-white text-center mb-6">
                Events <span className="text-[#00c8ff]">Inquiry</span>
              </h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
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
                  <label htmlFor="events-interest" className="block text-sm font-medium text-gray-300 mb-1">
                    Events You're Interested In
                  </label>
                  <select 
                    id="events-interest" 
                    name="events-interest" 
                    className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                  >
                    <option value="">Select an event</option>
                    <option value="workshop">Upcoming Workshops</option>
                    <option value="conference">Annual Conference</option>
                    <option value="webinar">Webinar Series</option>
                    <option value="all">All Events</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    className="w-full px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md focus:border-[#00c8ff] focus:outline-none focus:ring-1 focus:ring-[#00c8ff] transition-all duration-200"
                    placeholder="Any specific questions or comments?"
                  ></textarea>
                </div>
                <div>
                  <motion.button 
                    type="submit" 
                    className="border border-[#00c8ff] text-white hover:text-[#00c8ff] hover:bg-[#00c8ff]/10 px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe & Send Inquiry
                  </motion.button>
                </div>
              </form>
            </motion.div>
            
            <motion.div 
              className="text-center mt-8 space-y-2"
              variants={fadeInUp}
            >
              <p className="text-gray-300 leading-relaxed">
                Or contact our events team directly:
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

export const Head = () => <Seo title="Events & Workshops - Universal Fitness Training Academy" />

export default EventsPage
