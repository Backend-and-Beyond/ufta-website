import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const ApprovedProvidersSection = () => {
  const { fadeIn, fadeInUp, staggerContainer, cardVariant } = pageAnimations.standard;

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-black to-[#0A0A0A]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-3 font-poppins"
            variants={fadeInUp}
          >
            Approved <span className="text-[#00c8ff]">Providers</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 font-poppins"
            variants={fadeInUp}
          >
            Recognized by leading institutions worldwide
          </motion.p>
        </motion.div>

        {/* Provider Logos Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-center min-h-[120px] group hover:border-[#00c8ff]/30 transition-all duration-300 relative overflow-hidden"
            variants={cardVariant}
            whileHover={{ y: -5, scale: 1.02 }}
            custom={0}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <StaticImage
              src="../../images/provider1.webp"
              alt="PROPTA USA"
              className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              width={120}
              height={48}
            />
          </motion.div>

          <motion.div
            className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-center min-h-[120px] group hover:border-[#00c8ff]/30 transition-all duration-300 relative overflow-hidden"
            variants={cardVariant}
            whileHover={{ y: -5, scale: 1.02 }}
            custom={1}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <StaticImage
              src="../../images/provider2.png"
              alt="UGC Approved"
              className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              width={120}
              height={48}
            />
          </motion.div>

          <motion.div
            className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-center min-h-[120px] group hover:border-[#00c8ff]/30 transition-all duration-300 relative overflow-hidden"
            variants={cardVariant}
            whileHover={{ y: -5, scale: 1.02 }}
            custom={2}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <StaticImage
              src="../../images/provider3.png"
              alt="CASES UK"
              className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              width={120}
              height={48}
            />
          </motion.div>

          <motion.div
            className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-center min-h-[120px] group hover:border-[#00c8ff]/30 transition-all duration-300 relative overflow-hidden"
            variants={cardVariant}
            whileHover={{ y: -5, scale: 1.02 }}
            custom={3}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <StaticImage
              src="../../images/provider4.png"
              alt="University Partner"
              className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              width={120}
              height={48}
            />
          </motion.div>

          <motion.div
            className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-center min-h-[120px] group hover:border-[#00c8ff]/30 transition-all duration-300 relative overflow-hidden"
            variants={cardVariant}
            whileHover={{ y: -5, scale: 1.02 }}
            custom={4}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <StaticImage
              src="../../images/provider5.png"
              alt="International Body"
              className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              width={120}
              height={48}
            />
          </motion.div>
        </motion.div>

        {/* Compact Stats */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6"
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
            <span className="text-sm text-gray-400">199 Countries Recognition</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
            <span className="text-sm text-gray-400">International Standards</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
            <span className="text-sm text-gray-400">Global Accreditation</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ApprovedProvidersSection
