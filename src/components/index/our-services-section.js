import * as React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { pageAnimations } from "../../utils/animations";

const OurServicesSection = () => {
  const { fadeIn, fadeInUp } = pageAnimations.standard;

  return (
    <motion.section
      className="py-12 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl md:text-3xl font-bold section-heading mb-8 md:mb-12 font-poppins text-center md:text-left"
          variants={fadeInUp}
        >
          Pro Development Tracks
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="card p-4 md:p-6 rounded-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-poppins">
              Professional Certifications
            </h3>
            <p className="text-gray-400 font-poppins text-sm md:text-base">
              Internationally recognized courses to become a certified fitness
              professional.
            </p>
          </div>
          <div className="card p-4 md:p-6 rounded-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-poppins">
              S&C Training
            </h3>
            <p className="text-gray-400 font-poppins text-sm md:text-base">
              Elite Strength & Conditioning training for peak athletic
              performance.
            </p>
          </div>
          <div className="card p-4 md:p-6 rounded-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-poppins">
              Nutritional Counselling
            </h3>
            <p className="text-gray-400 font-poppins text-sm md:text-base">
              Personalized, evidence-based nutrition plans for health and
              fitness goals.
            </p>
          </div>
          <div className="card p-4 md:p-6 rounded-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-poppins">
              High Performance Clinic Clinic
            </h3>
            <p className="text-gray-400 font-poppins text-sm md:text-base">
              Specialized services including sports rehabilitation and
              biomechanics analysis.
            </p>
          </div>
          <div className="card p-4 md:p-6 rounded-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-poppins">
              Gym Setup Support
            </h3>
            <p className="text-gray-400 font-poppins text-sm md:text-base">
              Guidance on gym equipment, sourcing, and franchise opportunities.
            </p>
          </div>
          <div className="card p-4 md:p-6 rounded-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-poppins">
              Job Placement Assistance
            </h3>
            <p className="text-gray-400 font-poppins text-sm md:text-base">
              Dedicated support to help our graduates find rewarding careers in
              fitness.
            </p>
          </div>
        </div>
        {/* <motion.div className="text-center mt-12" variants={fadeInUp}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="inline-block bg-white text-black hover:bg-gray-200 px-8 py-3 font-medium font-poppins transition-colors duration-200"
            >
              Discover All Services
            </Link>
          </motion.div>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default OurServicesSection;
