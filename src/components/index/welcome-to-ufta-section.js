import * as React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const WelcomeToUftaSection = () => {
  const { fadeIn, fadeInUp, staggerContainer, cardVariant } = pageAnimations.standard;

  // Enhanced animation variants for Welcome section
  const floatVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }

  const statsCounterVariant = {
    hidden: { opacity: 0, scale: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 120
      }
    })
  }

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

  const backgroundElementVariant = {
    hidden: { opacity: 0, rotate: 0, scale: 0 },
    visible: (i) => ({
      opacity: [0, 0.1, 0.05],
      rotate: [0, 180, 360],
      scale: [0, 1.2, 1],
      transition: {
        delay: i * 0.3,
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 5,
        repeatType: "reverse"
      }
    })
  }

  return (
    <motion.section
      className="py-12 md:py-20 px-4 md:px-6 bg-[#0F0F0F] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-5 md:top-10 left-5 md:left-10 w-12 h-12 md:w-20 md:h-20 border border-[#00c8ff]"
          custom={0}
          variants={backgroundElementVariant}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div
          className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-20 h-20 md:w-32 md:h-32 border border-[#00c8ff]/30"
          custom={1}
          variants={backgroundElementVariant}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/4 w-10 h-10 md:w-16 md:h-16 border border-[#00c8ff]/20"
          custom={2}
          variants={backgroundElementVariant}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 w-8 h-8 md:w-12 md:h-12 border border-[#00c8ff]/10"
          custom={3}
          variants={backgroundElementVariant}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 font-poppins bg-gradient-to-r from-white via-[#00c8ff] to-white bg-clip-text text-transparent"
            variants={floatVariant}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Welcome to UFTA
          </motion.h2>
          <motion.div
            className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mx-auto mb-4 md:mb-6"
            variants={floatVariant}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          <motion.p
            className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-poppins px-4"
            variants={floatVariant}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transforming passionate fitness enthusiasts into industry-leading professionals since 2006
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Section with Counter Animation */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
          variants={staggerContainer}
        >
          {[
            { number: "19+", label: "Years of Excellence", delay: 0 },
            { number: "2500+", label: "Certified Professionals", delay: 0.2 },
            { number: "50+", label: "Training Programs", delay: 0.4 },
            { number: "100%", label: "Job Placement Support", delay: 0.6 }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-[#141414] border border-[#2A2A2A] p-4 md:p-6 rounded-lg hover:border-[#00c8ff]/50 transition-all duration-300 group relative overflow-hidden"
              custom={index}
              variants={statsCounterVariant}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 10px 40px rgba(0, 200, 255, 0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <motion.div
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00c8ff] mb-1 md:mb-2 font-poppins group-hover:scale-110 transition-transform duration-300 relative z-10"
                initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    delay: stat.delay + 0.3,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <motion.div
                className="text-gray-400 text-xs md:text-sm font-poppins relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: stat.delay + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-8 md:mb-12"
          variants={staggerContainer}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-4 md:space-y-6"
            variants={staggerContainer}
          >
            {[
              {
                title: "Our Legacy",
                content: "Universal Fitness Training Academy (UFTA), established in 2006, is a premier institution in India dedicated to providing comprehensive health and fitness education. With a steadfast commitment to excellence, UFTA has trained and certified over 2,500 fitness professionals."
              },
              {
                title: "Our Mission",
                content: "To foster a new generation of fitness leaders through rigorous academic programs, practical training, and a passion for advancing sport and exercise sciences. We ensure our graduates are well-equipped to excel in the dynamic fitness industry."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#141414] border border-[#2A2A2A] p-4 md:p-8 rounded-lg hover:border-[#00c8ff]/30 transition-all duration-500 relative overflow-hidden group"
                custom={index}
                variants={contentCardVariant}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.5 }}
                />
                <motion.h3
                  className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-[#00c8ff] font-poppins relative z-10"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 leading-relaxed font-poppins relative z-10 text-sm md:text-base"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.content}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-4 md:space-y-6"
            variants={staggerContainer}
          >
            {[
              {
                title: "Our Community",
                content: "UFTA fosters a vibrant community, providing expert guidance and a supportive environment to help everyone—from aspiring fitness professionals to personal fitness enthusiasts—achieve their goals."
              },
              {
                title: "Global Recognition",
                content: "Our internationally recognized courses range from degree programs like B.Sc. in Fitness & Athletic Conditioning to specialized certifications, approved by leading fitness organizations worldwide."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#141414] border border-[#2A2A2A] p-4 md:p-8 rounded-lg hover:border-[#00c8ff]/30 transition-all duration-500 relative overflow-hidden group"
                custom={index + 2}
                variants={contentCardVariant}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-bl from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.5 }}
                />
                <motion.h3
                  className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-[#00c8ff] font-poppins relative z-10"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 leading-relaxed font-poppins relative z-10 text-sm md:text-base"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.content}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default WelcomeToUftaSection
