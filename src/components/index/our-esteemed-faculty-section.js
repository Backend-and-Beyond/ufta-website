import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const OurEsteemedFacultySection = () => {
  const { fadeIn, fadeInUp, staggerContainer } = pageAnimations.standard;

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
      className="py-20 bg-[#0A0A0A] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 font-poppins text-white"
            variants={fadeInUp}
          >
            Your Fitness
          </motion.h2>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-poppins"
            variants={fadeInUp}
          >
            <span className="text-[#00c8ff]">Goals, Their Expertise</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto font-poppins leading-relaxed"
            variants={fadeInUp}
          >
            Our Team of Certified Trainers Brings Unparalleled Expertise to Help You Achieve Your Fitness Goals.
          </motion.p>
        </motion.div>

        {/* Faculty Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto"
          variants={staggerContainer}
        >
          {/* Bibhu Moni Singha */}
          <motion.div
            className="text-center group"
            custom={0}
            variants={contentCardVariant}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image Container with Hexagonal Effect */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/10 to-[#0099cc]/5 transform rotate-3 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#00c8ff]/5 to-transparent transform -rotate-3 rounded-2xl"></div>
              
              {/* Image */}
              <div className="relative bg-[#141414] p-4 rounded-2xl border border-[#2A2A2A] group-hover:border-[#00c8ff]/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <StaticImage
                  src="../../images/bhibhu.png"
                  alt="Bibhu Moni Singha - Founder & Director UFTA"
                  className="w-full h-80 object-cover rounded-xl"
                  width={300}
                  height={320}
                />
                
                {/* Overlay Effect */}
                <motion.div
                  className="absolute inset-4 rounded-xl bg-gradient-to-t from-[#00c8ff]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Faculty Name & Title */}
            <motion.h3
              className="text-2xl font-bold text-white font-poppins group-hover:text-[#00c8ff] transition-colors duration-300 mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Bibhu Moni Singha
            </motion.h3>
            
            <motion.p
              className="text-lg text-[#00c8ff] font-medium font-poppins"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Founder & Director
            </motion.p>
          </motion.div>

          {/* Archana Thakuria */}
          <motion.div
            className="text-center group"
            custom={1}
            variants={contentCardVariant}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image Container with Hexagonal Effect */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/10 to-[#0099cc]/5 transform rotate-3 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#00c8ff]/5 to-transparent transform -rotate-3 rounded-2xl"></div>
              
              {/* Image */}
              <div className="relative bg-[#141414] p-4 rounded-2xl border border-[#2A2A2A] group-hover:border-[#00c8ff]/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <StaticImage
                  src="../../images/faculty1.png"
                  alt="Archana Thakuria - Strength & Conditioning Faculty"
                  className="w-full h-80 object-cover rounded-xl"
                  width={300}
                  height={320}
                />
                
                {/* Overlay Effect */}
                <motion.div
                  className="absolute inset-4 rounded-xl bg-gradient-to-t from-[#00c8ff]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Faculty Name & Title */}
            <motion.h3
              className="text-2xl font-bold text-white font-poppins group-hover:text-[#00c8ff] transition-colors duration-300 mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Archana Thakuria
            </motion.h3>
            
            <motion.p
              className="text-lg text-[#00c8ff] font-medium font-poppins"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Faculty S&C & Fitness
            </motion.p>
          </motion.div>

          {/* Alvi Yusuf */}
          <motion.div
            className="text-center group"
            custom={2}
            variants={contentCardVariant}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image Container with Hexagonal Effect */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/10 to-[#0099cc]/5 transform rotate-3 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#00c8ff]/5 to-transparent transform -rotate-3 rounded-2xl"></div>
              
              {/* Image */}
              <div className="relative bg-[#141414] p-4 rounded-2xl border border-[#2A2A2A] group-hover:border-[#00c8ff]/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <StaticImage
                  src="../../images/faculty2.png"
                  alt="Alvi Yusuf - Nutrition & Strength & Conditioning Faculty"
                  className="w-full h-80 object-cover rounded-xl"
                  width={300}
                  height={320}
                />
                
                {/* Overlay Effect */}
                <motion.div
                  className="absolute inset-4 rounded-xl bg-gradient-to-t from-[#00c8ff]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Faculty Name & Title */}
            <motion.h3
              className="text-2xl font-bold text-white font-poppins group-hover:text-[#00c8ff] transition-colors duration-300 mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Alvi Yusuf
            </motion.h3>
            
            <motion.p
              className="text-lg text-[#00c8ff] font-medium font-poppins"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Faculty Nutrition & S&C
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
            <div className="w-2 h-2 bg-[#00c8ff]/60 rounded-full"></div>
            <div className="w-2 h-2 bg-[#00c8ff]/30 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default OurEsteemedFacultySection
