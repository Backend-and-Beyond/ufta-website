import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const HighPerformanceTrainingSection = () => {
  const { fadeIn, slideInLeft, slideInRight } = pageAnimations.standard;

  return (
    <motion.section
      className="py-20 bg-[#0c0c0e]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            variants={slideInLeft}
          >
            <StaticImage
              src="../../images/placeholder1.jpg"
              alt="High Performance Training"
              className="w-full h-auto rounded-sm border border-[#2A2A2A] shadow-lg"
              width={600}
              height={400}
            />
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            variants={slideInRight}
          >
            <h2 className="text-3xl font-bold section-heading mb-8 font-poppins">
              High Performance <span className="highlight-text">Training Clinic</span>
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed font-poppins">
              Our specialized High Performance Clinic offers cutting-edge training methodologies for athletes seeking to maximize their performance potential.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed font-poppins">
              From biomechanical analysis and sports rehabilitation to advanced strength conditioning and metabolic optimization, our services are tailored to your specific goals and athletic demands.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed font-poppins">
              Our team of experts includes sports scientists, rehabilitation specialists, and elite coaches who provide evidence-based training solutions.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/high-performance" className="btn-primary inline-block px-6 py-3 font-medium font-poppins transition-all duration-200 no-underline">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default HighPerformanceTrainingSection
