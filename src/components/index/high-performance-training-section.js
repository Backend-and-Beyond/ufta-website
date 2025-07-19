import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { pageAnimations } from "../../utils/animations";

// Import actual gym images from gallery
const HighPerformanceImage = "../../../static/gallery-images/IMG-20250617-WA0032.jpg";

const HighPerformanceTrainingSection = () => {
  const { fadeIn, slideInLeft, slideInRight } = pageAnimations.standard;

  return (
    <motion.section
      className="py-12 md:py-20 bg-[#0c0c0e]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div className="order-2 md:order-1 text-center relative" variants={slideInLeft}>
            <div className="relative rounded-lg overflow-hidden">
              <StaticImage
                src={HighPerformanceImage}
                alt="High Performance Clinic Training"
                className="w-full h-auto"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 rounded-lg"></div>
            </div>
          </motion.div>
          <motion.div className="order-1 md:order-2 text-center md:text-left" variants={slideInRight}>
            <h2 className="text-2xl md:text-3xl font-bold section-heading mb-6 md:mb-8 font-poppins">
              High Performance{" "}
              <span className="highlight-text">Sports Training </span>&<span className="highlight-text"> Rehabilitation Centre</span>
            </h2>

            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed font-poppins text-sm md:text-base">
              Our specialized High Performance Sports Training & Rehabilitation Centre offers cutting-edge
              training methodologies for athletes seeking to maximize their
              performance potential.
            </p>

            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed font-poppins text-sm md:text-base">
              From biomechanical analysis and sports rehabilitation to advanced
              strength conditioning and metabolic optimization, our services are
              tailored to your specific goals and athletic demands.
            </p>

            <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed font-poppins text-sm md:text-base">
              Our team of experts includes sports scientists, rehabilitation
              specialists, and elite coaches who provide evidence-based training
              solutions.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/high-performance"
                className="btn-primary inline-block px-4 md:px-6 py-2 md:py-3 font-medium font-poppins transition-all duration-200 no-underline text-sm md:text-base"
              >
                Explore High Performance Clinic
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HighPerformanceTrainingSection;
