import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const ApprovedProvidersSection = () => {
  // Simple, non-blinking animation variants
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const providerCardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 font-poppins"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpVariant}
          >
            Approved <span className="text-[#00c8ff]">Providers</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 font-poppins text-sm md:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            Recognized by leading institutions worldwide
          </motion.p>
        </div>

        {/* Provider Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-6 mb-6 md:mb-8 max-w-2xl sm:max-w-3xl md:max-w-none mx-auto">

          <a href="https://www.iusca.org/" target="_blank" className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-3 md:p-4 flex items-center justify-center min-h-[140px] md:min-h-[120px] group hover:border-[#00c8ff]/30 relative overflow-hidden"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={providerCardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../../images/iusca-endorses.png"
                alt="IUSCA"
                className="max-h-12 max-w-[155px] object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={155}
                height={48}
              />
            </motion.div>
          </a>

          <a href="https://www.propta.com/" target="_blank" className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-3 md:p-4 flex items-center justify-center min-h-[140px] md:min-h-[120px] group hover:border-[#00c8ff]/30 relative overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={providerCardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../../images/proptapng.webp"
                alt="PROPTA"
                className="max-h-20 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={85}
                height={85}
              />
            </motion.div>
          </a>

          <a href="https://www.usaweightlifting.org/" target="_blank" className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-3 md:p-4 flex items-center justify-center min-h-[140px] md:min-h-[120px] group hover:border-[#00c8ff]/30 relative overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={providerCardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../../images/provider1.webp"
                alt="PROPTA USA"
                className="max-h-20 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={120}
                height={80}
              />
            </motion.div>
          </a>

          <a href="https://www.nsca.com/" target="_blank" className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-3 md:p-4 flex items-center justify-center min-h-[140px] md:min-h-[120px] group hover:border-[#00c8ff]/30 relative overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={providerCardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../../images/provider2.png"
                alt="UGC Approved"
                className=" md:max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={120}
                height={48}
              />
            </motion.div>
          </a>

          <a href="https://www.nasm.org/" target="_blank" className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-3 md:p-4 flex items-center justify-center min-h-[140px] md:min-h-[120px] group hover:border-[#00c8ff]/30 relative overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={providerCardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../../images/provider3.png"
                alt="CASES UK"
                className="md:max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={120}
                height={48}
              />
            </motion.div>
          </a>

          <a href="https://www.afaa.com/" target="_blank" className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-3 md:p-4 flex items-center justify-center min-h-[140px] md:min-h-[120px] group hover:border-[#00c8ff]/30 relative overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={providerCardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../../images/provider4.png"
                alt="University Partner"
                className="md:max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={120}
                height={48}
              />
            </motion.div>
          </a>

          <a href="https://acsm.org/" target="_blank" className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-3 md:p-4 flex items-center justify-center min-h-[140px] md:min-h-[120px] group hover:border-[#00c8ff]/30 relative overflow-hidden">
            <motion.div
              className="col-span-2 md:col-span-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={providerCardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../../images/provider5.png"
                alt="International Body"
                className="md:max-h-12 max-w-[155px] object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={160}
                height={48}
              />
            </motion.div>
          </a>
        </div>

        {/* Compact Stats */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariant}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
            <span className="text-xs md:text-sm text-gray-400">199 Countries Recognition</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
            <span className="text-xs md:text-sm text-gray-400">International Standards</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
            <span className="text-xs md:text-sm text-gray-400">Global Accreditation</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ApprovedProvidersSection
