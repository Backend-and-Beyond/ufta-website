import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

// Import actual gym images from gallery
const FacilitiesImage = "../../../static/gallery-images/IMG-20250617-WA0032.jpg";
const InstructorsImage = "../../../static/gallery-images/IMG-20250617-WA0034.jpg";

const WhyChooseUsSection = () => {
  const { fadeIn, fadeInUp, staggerContainer, slideInRight } = pageAnimations.standard;

  const contentCardVariant = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section
      className="py-12 md:py-20 bg-[#0F0F0F] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 font-poppins text-white"
            variants={fadeInUp}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-poppins"
            variants={fadeInUp}
          >
            Discover what makes UFTA the premier choice for fitness education and professional development
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Left Content - Features Grid */}
          <motion.div
            className="lg:col-span-2"
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  icon: (
                    <div className="w-12 h-12 bg-[#00c8ff]/10 rounded-full flex items-center justify-center border border-[#00c8ff]/20">
                      <div className="w-6 h-6 bg-[#00c8ff] rounded-full"></div>
                    </div>
                  ),
                  title: "Expert Training Programs",
                  description: "Comprehensive certification programs designed by industry experts with decades of experience."
                },
                {
                  icon: (
                    <div className="w-12 h-12 bg-[#00c8ff]/10 rounded-full flex items-center justify-center border border-[#00c8ff]/20">
                      <div className="w-6 h-6 bg-[#00c8ff] rounded-full"></div>
                    </div>
                  ),
                  title: "Global Recognition",
                  description: "Internationally recognized certifications that open doors to worldwide opportunities."
                },
                {
                  icon: (
                    <div className="w-12 h-12 bg-[#00c8ff]/10 rounded-full flex items-center justify-center border border-[#00c8ff]/20">
                      <div className="w-6 h-6 bg-[#00c8ff] rounded-full"></div>
                    </div>
                  ),
                  title: "Career Support",
                  description: "100% job placement assistance and ongoing career guidance for all our graduates."
                },
                {
                  icon: (
                    <div className="w-12 h-12 bg-[#00c8ff]/10 rounded-full flex items-center justify-center border border-[#00c8ff]/20">
                      <div className="w-6 h-6 bg-[#00c8ff] rounded-full"></div>
                    </div>
                  ),
                  title: "Industry Partnerships",
                  description: "Partnered with leading organizations like BASES UK, USAW, NSCA, and ACSM."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[#141414] border border-[#2A2A2A] p-4 md:p-6 rounded-lg hover:border-[#00c8ff]/30 transition-all duration-300 group"
                  custom={index}
                  variants={contentCardVariant}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3
                    className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white font-poppins group-hover:text-[#00c8ff] transition-colors"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 leading-relaxed font-poppins text-sm md:text-base"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            className="lg:col-span-1 space-y-4 md:space-y-6"
            variants={staggerContainer}
          >
            <motion.div
              className="relative rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#00c8ff]/30 transition-all duration-300"
              variants={slideInRight}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <StaticImage
                src={FacilitiesImage}
                alt="UFTA Training Facilities"
                className="w-full h-48 md:h-64 object-cover"
                width={400}
                height={250}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                <h4 className="text-white font-semibold text-base md:text-lg font-poppins mb-1">
                  State-of-the-Art Facilities
                </h4>
                <p className="text-gray-300 text-xs md:text-sm font-poppins">
                  Modern training equipment and learning environments
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#00c8ff]/30 transition-all duration-300"
              variants={slideInRight}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <StaticImage
                src={InstructorsImage}
                alt="UFTA Expert Instructors"
                className="w-full h-48 md:h-64 object-cover"
                width={400}
                height={250}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                <h4 className="text-white font-semibold text-base md:text-lg font-poppins mb-1">
                  Expert Instructors
                </h4>
                <p className="text-gray-300 text-xs md:text-sm font-poppins">
                  Learn from industry professionals and certified experts
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default WhyChooseUsSection
