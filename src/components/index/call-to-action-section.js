import * as React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const CallToActionSection = () => {
  const { fadeIn, fadeInUp, staggerContainer, cardVariant } = pageAnimations.standard;

  return (
    <motion.section
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          variants={fadeInUp}
        >
          Ready to Start Your Fitness Journey?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-10"
          variants={fadeInUp}
        >
          Join UFTA today and transform your passion for fitness into a thriving career.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6"
          variants={staggerContainer}
        >
          <motion.div
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/courses" className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-medium transition-colors duration-200 no-underline">
              Explore Courses
            </Link>
          </motion.div>
          <motion.div
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="#contact" className="border border-white text-white hover:bg-white/10 px-8 py-3 font-medium transition-colors duration-200 no-underline">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CallToActionSection
