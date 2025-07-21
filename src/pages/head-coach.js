import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { pageAnimations } from "../utils/animations";
import UftaLayout from "../components/ufta-layout";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const HeadCoachPage = ({ location }) => {
  const { fadeIn, fadeInUp, slideInLeft, slideInRight, staggerContainer } =
    pageAnimations.standard;

  return (
    <UftaLayout>
      <Navigation location={location} />

      {/* Custom Hero Section */}
      <motion.section 
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] xl:min-h-screen flex items-center bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1a1a1a] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-30"></div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/5 via-transparent to-amber-400/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              className="space-y-4 sm:space-y-6 md:space-y-8 order-2 sm:order-1"
              variants={slideInLeft}
            >
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <motion.div
                  className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#00c8ff]/20 to-amber-400/20 rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-2 border border-[#00c8ff]/30"
                  variants={fadeInUp}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00c8ff] rounded-full animate-pulse"></span>
                  <span className="text-[#00c8ff] font-medium text-xs sm:text-sm tracking-wide">DIRECTOR</span>
                </motion.div>

                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-poppins leading-tight"
                  variants={fadeInUp}
                >
                  Dr. <span className="bg-gradient-to-r from-[#00c8ff] to-[#0099cc] bg-clip-text text-transparent">Bibhu</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Moni Singha</span>
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed"
                  variants={fadeInUp}
                >
                  Internationally Accredited Strength & Conditioning Expert
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-1 sm:gap-2 text-xs md:text-sm text-gray-400"
                  variants={fadeInUp}
                >
                  <span className="bg-[#181818] px-2 sm:px-3 py-1 rounded-full border border-gray-700 text-xs sm:text-sm">Sr. Director, PROPTA</span>
                  <span className="bg-[#181818] px-2 sm:px-3 py-1 rounded-full border border-gray-700 text-xs sm:text-sm">IUSCA Rep</span>
                  <span className="bg-[#181818] px-2 sm:px-3 py-1 rounded-full border border-gray-700 text-xs sm:text-sm">S&C Lead</span>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 lg:gap-6 pt-3 sm:pt-4 md:pt-6 lg:pt-8"
                variants={staggerContainer}
              >
                <motion.div className="text-center" variants={fadeInUp}>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#00c8ff]">26+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </motion.div>
                <motion.div className="text-center" variants={fadeInUp}>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-amber-400">36K+</div>
                  <div className="text-xs text-gray-400">Athletes</div>
                </motion.div>
                <motion.div className="text-center" variants={fadeInUp}>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#00c8ff]">2.5K+</div>
                  <div className="text-xs text-gray-400">Coaches</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="relative max-w-full order-1 sm:order-2"
              variants={slideInRight}
            >
              <div className="relative">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/20 via-transparent to-amber-400/20 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-[#00c8ff]/10 via-transparent to-amber-400/10 rounded-3xl transform -rotate-3"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] rounded-3xl p-1 shadow-2xl">
                  <StaticImage
                    src="../images/bhibhu.png"
                    alt="Dr. Bibhu Moni Singha"
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[380px] xl:h-[450px] object-cover rounded-3xl"
                    placeholder="blurred"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
                </div>

                {/* Floating Achievement Badge */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-amber-300/20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-center">
                    <div className="text-white font-bold text-sm sm:text-lg">🏆</div>
                    <div className="text-white text-xs font-medium hidden sm:block">Award Winner</div>
                    <div className="text-amber-100 text-xs">2024</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <main className="bg-[#0F0F0F]">
        {/* Bio Section */}
        <motion.section
          className="py-20"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800/50"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6">
                    About <span className="text-[#00c8ff]">Dr. Bibhu</span>
                  </h2>
                  
                  <div className="text-gray-300 text-base md:text-lg leading-relaxed font-poppins space-y-4">
                    <p>
                      <span className="font-bold text-[#00c8ff]">Dr. Bibhu Moni Singha</span> is an 
                      <span className="font-bold"> award-winning</span>, <span className="font-bold">globally recognized</span>, and 
                      <span className="font-bold text-[#00c8ff]"> internationally accredited Strength & Conditioning Expert</span>, 
                      <span className="font-bold"> Sports & Exercise Nutritionist</span>, 
                      <span className="font-bold"> High-Performance Olympic Weightlifting Coach</span>, 
                      <span className="font-bold"> Injury Rehabilitation Specialist</span>, and 
                      <span className="font-bold"> CASES UK Accredited Sport & Exercise Scientist</span>.
                    </p>
                    <p>
                      His research article titled 
                      <span className="italic font-bold text-[#00c8ff]"> "Age-Specific Considerations in Strength and Conditioning Programs: A Narrative Review"</span> 
                      was selected for the <span className="font-bold text-[#00c8ff]">Applied Science Awards at the 7th SCS Annual Conference in Spain in 2024</span>.
                    </p>
                    <p>
                      Dr. Bibhu has over <span className="font-bold">26 years</span> of comprehensive experience, with more than 
                      <span className="font-bold"> 93,000 hours</span> of work in the sports, fitness, and nutrition industry both in India and internationally.
                    </p>
                  </div>
                </div>

                {/* Achievement Highlights */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-amber-400 font-poppins">Key Achievements</h3>
                  <div className="space-y-3">
                    <div className="bg-[#0F0F0F] rounded-xl p-4 border border-gray-700/50">
                      <div className="text-2xl font-bold text-[#00c8ff]">93K+</div>
                      <div className="text-sm text-gray-400">Work Hours</div>
                    </div>
                    <div className="bg-[#0F0F0F] rounded-xl p-4 border border-gray-700/50">
                      <div className="text-2xl font-bold text-amber-400">150+</div>
                      <div className="text-sm text-gray-400">Partner Universities</div>
                    </div>
                    <div className="bg-[#0F0F0F] rounded-xl p-4 border border-gray-700/50">
                      <div className="text-lg font-bold text-[#00c8ff]">2024</div>
                      <div className="text-sm text-gray-400">Award Winner</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Current Positions */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-poppins"
              variants={fadeInUp}
            >
              Current <span className="text-amber-400">Positions</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Director of Certification",
                  organization: "Universal Fitness Training Academy",
                  period: "since 2006",
                  color: "from-[#00c8ff] to-[#0099cc]"
                },
                {
                  title: "Senior Director & Examiner",
                  organization: "PROPTA USA",
                  period: "Pan India",
                  color: "from-amber-400 to-orange-500"
                },
                {
                  title: "Sole Degree Accreditation Representative",
                  organization: "IUSCA",
                  period: "Pan India",
                  color: "from-[#00c8ff] to-[#0099cc]"
                },
                {
                  title: "Strength & Conditioning Expert",
                  organization: "KISCE, DSYW, Govt. of Assam",
                  period: "Lead Position",
                  color: "from-amber-400 to-orange-500"
                },
                {
                  title: "External Expert, S&C",
                  organization: "Somaiya Sports Academy",
                  period: "Mumbai",
                  color: "from-[#00c8ff] to-[#0099cc]"
                },
                {
                  title: "Franchise Spokesperson",
                  organization: "NITRRO Fitness",
                  period: "Pan India",
                  color: "from-amber-400 to-orange-500"
                }
              ].map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-2xl p-6 shadow-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`inline-block bg-gradient-to-r ${position.color} bg-clip-text text-transparent font-bold text-lg mb-2`}>
                    {position.title}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1">{position.organization}</h3>
                  <p className="text-gray-400 text-sm">{position.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Achievements & Accreditations */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-poppins"
              variants={fadeInUp}
            >
              Achievements & <span className="text-[#00c8ff]">Accreditations</span>
            </motion.h2>

            <div className="grid gap-6">
              {[
                {
                  title: "Internationally Accredited Level 8 Master International Strength and Conditioning Practitioner (mISCP)",
                  organization: "IUSCA, UK",
                  icon: "🎓",
                  highlight: true
                },
                {
                  title: "USA Weightlifting Certified High-Performance Olympic Weightlifting Coach",
                  organization: "USA Weightlifting",
                  icon: "🏋️"
                },
                {
                  title: "Certified Master Professional Personal Trainer & Sports Nutritionist",
                  organization: "PROPTA USA",
                  icon: "💪"
                },
                {
                  title: "Advisory Board Member",
                  organization: "International Journal of Strength & Conditioning (IJSC) & IUSCA",
                  icon: "📋"
                },
                {
                  title: "CASES UK Accredited Sport & Exercise Scientist",
                  organization: "CASES UK",
                  icon: "🔬"
                },
                {
                  title: "First Indian to introduce a four-year B.Sc. Fitness & Athletic Conditioning (Honours) degree",
                  organization: "Aligned with NEP 2020",
                  icon: "🚀",
                  highlight: true
                }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r ${achievement.highlight ? 'from-[#00c8ff]/10 to-amber-400/10 border-[#00c8ff]/30' : 'from-[#181818] to-[#1a1a1a] border-gray-800/50'} rounded-2xl p-6 shadow-xl border hover:border-gray-700/50 transition-all duration-300`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-2 ${achievement.highlight ? 'text-[#00c8ff]' : 'text-white'}`}>
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{achievement.organization}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Awards & Recognition */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-poppins"
              variants={fadeInUp}
            >
              Awards & <span className="text-amber-400">Recognition</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-3xl p-8 shadow-2xl border border-amber-400/20"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-amber-400 mb-2">Excellent Personal Trainer of the Year 2018</h3>
                  <p className="text-gray-300">Fitness Excellence Awards, Taj Diplomatic Enclave, New Delhi</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[#00c8ff]/10 to-[#0099cc]/10 rounded-3xl p-8 shadow-2xl border border-[#00c8ff]/20"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-[#00c8ff] mb-2">India's Best Fitness Trainer of the Year 2018</h3>
                  <p className="text-gray-300">India Leadership Awards, presented by Soha Ali Khan</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Research & Innovation */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800/50"
              variants={fadeInUp}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                  Research & <span className="text-[#00c8ff]">Innovation</span>
                </h2>
                <p className="text-gray-300 text-lg">Bridging the gap between academia and athletic performance</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
                      <span className="font-bold text-white">Presented at national and international conferences</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="font-bold text-white">Published multiple peer-reviewed articles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
                      <span className="font-bold text-white">Applied Science Award winner (2024)</span>
                    </div>
                  </div>

                  <div className="bg-[#0F0F0F] rounded-xl p-6 border border-gray-700/50">
                    <h3 className="text-lg font-bold text-[#00c8ff] mb-2">Featured Research</h3>
                    <p className="text-gray-300 italic">
                      "Age-Specific Considerations in Strength and Conditioning Programs: A Narrative Review"
                    </p>
                    <p className="text-sm text-amber-400 mt-2">🏆 Applied Science Award - Spain 2024</p>
                  </div>
                </div>

                <div className="relative">
                  {/* Academic Network Visual */}
                  <div className="bg-gradient-to-br from-[#00c8ff]/5 to-amber-400/5 rounded-2xl p-8 border border-gray-700/50">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🌐</div>
                      <div className="text-3xl font-bold text-[#00c8ff] mb-2">150+</div>
                      <div className="text-white font-semibold mb-2">Global Universities</div>
                      <div className="text-sm text-gray-400">Including UCLA, Stanford, Yale via IUSCA</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Speaking & Mentoring */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-poppins"
              variants={fadeInUp}
            >
              Speaker | Mentor | <span className="text-amber-400">Innovator</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-2xl p-8 shadow-xl border border-gray-800/50"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-[#00c8ff] mb-4">Global Speaking Engagements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00c8ff] mt-1">🎤</span>
                    <span>Guest lectures at top universities worldwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">🏫</span>
                    <span>Seminars at sports academies and medical institutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00c8ff] mt-1">🔬</span>
                    <span>Workshops for major sports organizations</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-2xl p-8 shadow-xl border border-gray-800/50"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-amber-400 mb-4">Areas of Expertise</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00c8ff] mt-1">💪</span>
                    <span>Evidence-based strength & conditioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">🏃</span>
                    <span>Sports performance enhancement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00c8ff] mt-1">🏋️</span>
                    <span>Olympic weightlifting & powerlifting coaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">⚕️</span>
                    <span>Injury rehabilitation & return-to-sport protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00c8ff] mt-1">🥗</span>
                    <span>Sports & exercise nutrition for peak performance</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="py-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-[#00c8ff]/10 to-amber-400/10 rounded-3xl p-12 border border-[#00c8ff]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
                Transforming the Future of <span className="text-[#00c8ff]">Fitness</span> & <span className="text-amber-400">Sports Science</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Dr. Bibhu is committed to bridging the gap between academia and athletic performance, 
                collaborating with <span className="font-bold text-[#00c8ff]">150+ global universities</span> 
                (including UCLA, Stanford, Yale via IUSCA) to elevate strength & conditioning education.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  className="bg-gradient-to-r from-[#00c8ff] to-[#0099cc] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About UFTA
                </motion.button>
                <motion.button
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certifications
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </UftaLayout>
  );
};

export default HeadCoachPage;
