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
      className="py-20 bg-[#0F0F0F] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border border-[#00c8ff]"
          custom={0}
          variants={backgroundElementVariant}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 border border-[#00c8ff]/30"
          custom={1}
          variants={backgroundElementVariant}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#00c8ff]/20"
          custom={2}
          variants={backgroundElementVariant}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 w-12 h-12 border border-[#00c8ff]/10"
          custom={3}
          variants={backgroundElementVariant}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 font-poppins bg-gradient-to-r from-white via-[#00c8ff] to-white bg-clip-text text-transparent"
            variants={floatVariant}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Welcome to UFTA
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mx-auto mb-6"
            variants={floatVariant}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto font-poppins"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
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
              className="text-center bg-[#141414] border border-[#2A2A2A] p-6 rounded-lg hover:border-[#00c8ff]/50 transition-all duration-300 group relative overflow-hidden"
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
                className="text-3xl md:text-4xl font-bold text-[#00c8ff] mb-2 font-poppins group-hover:scale-110 transition-transform duration-300 relative z-10"
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
                className="text-gray-400 text-sm font-poppins relative z-10"
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
          className="grid lg:grid-cols-2 gap-12 items-start mb-12"
          variants={staggerContainer}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-6"
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
                className="bg-[#141414] border border-[#2A2A2A] p-8 rounded-lg hover:border-[#00c8ff]/30 transition-all duration-500 relative overflow-hidden group"
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
                  className="text-2xl font-bold mb-4 text-[#00c8ff] font-poppins relative z-10"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 leading-relaxed font-poppins relative z-10"
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
            className="space-y-6"
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
                className="bg-[#141414] border border-[#2A2A2A] p-8 rounded-lg hover:border-[#00c8ff]/30 transition-all duration-500 relative overflow-hidden group"
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
                  className="text-2xl font-bold mb-4 text-[#00c8ff] font-poppins relative z-10"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 leading-relaxed font-poppins relative z-10"
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

        {/* Enhanced Interactive CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2A2A2A] p-8 rounded-xl relative overflow-hidden group"
          variants={floatVariant}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 60px rgba(0, 200, 255, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Animated background pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/5 via-[#00c8ff]/10 to-[#00c8ff]/5 opacity-0 group-hover:opacity-100"
            initial={false}
            transition={{ duration: 0.5 }}
          />

          <motion.h3
            className="text-2xl font-bold mb-4 font-poppins relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Future?
          </motion.h3>
          <motion.p
            className="text-gray-400 mb-6 font-poppins relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of successful fitness professionals who started their journey with UFTA
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 10px 30px rgba(0, 200, 255, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center bg-gradient-to-r from-[#00c8ff] to-[#0099cc] hover:from-[#0099cc] hover:to-[#00c8ff] text-white px-8 py-3 font-medium font-poppins transition-all duration-300 no-underline rounded-lg shadow-lg hover:shadow-[#00c8ff]/25"
              >
                Learn More About Us
                <motion.svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>

            <motion.div
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                y: -3,
                borderColor: "#00c8ff",
                boxShadow: "0 10px 30px rgba(0, 200, 255, 0.2)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/courses"
                className="inline-flex items-center border-2 border-[#00c8ff] text-[#00c8ff] hover:bg-[#00c8ff] hover:text-black px-8 py-3 font-medium font-poppins transition-all duration-300 no-underline rounded-lg"
              >
                View Our Courses
                <motion.svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotateY: [0, 180, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default WelcomeToUftaSection
