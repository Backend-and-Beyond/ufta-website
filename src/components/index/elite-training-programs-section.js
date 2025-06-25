import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { pageAnimations } from "../../utils/animations";

// Import actual gym images from gallery
const PersonalTrainingImage = "../../../static/gallery-images/IMG-20250617-WA0032.jpg";
const StrengthConditioningImage = "../../../static/gallery-images/IMG-20250617-WA0037.jpg";
const SportsNutritionImage = "../../../static/gallery-images/IMG-20250617-WA0039.jpg";

const EliteTrainingProgramsSection = () => {
  const { fadeIn, fadeInUp, staggerContainer, cardVariant } =
    pageAnimations.standard;

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
          Elite Training Programs
        </motion.h2>
        <motion.div className="mb-6 md:mb-8" variants={fadeInUp}>
          <p className="text-gray-300 font-poppins text-sm md:text-base text-center md:text-left leading-relaxed">
            At UFTA, we take pride in offering exceptional fitness education and
            training programs that set the industry standard. Our courses blend
            cutting-edge science with practical application, creating fitness
            professionals who excel in their field.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
        >
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-[#141414] border border-[#00c8ff]/30 hover:border-[#00c8ff]/60 overflow-hidden relative rounded-lg shadow-lg hover:shadow-[#00c8ff]/20 transition-all duration-300">
              <div className="card-image relative">
                <StaticImage
                  src={PersonalTrainingImage}
                  alt="Personal Training Certification"
                  className="w-full h-full object-cover"
                  width={400}
                  height={250}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
                {/* Sci-fi corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00c8ff] opacity-60"></div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-poppins">
                  Personal{" "}
                  <span className="highlight-text">Training Certification</span>
                </h3>
                <p className="text-gray-400 mb-3 md:mb-4 font-poppins text-sm md:text-base">
                  Comprehensive certification program that transforms passionate
                  fitness enthusiasts into professional personal trainers ready
                  for industry success.
                </p>
                {/* <Link to="/courses" className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline">
                  View Details →
                </Link> */}
              </div>
              <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/70 backdrop-blur-sm text-xs px-2 md:px-3 py-1 rounded-sm border border-[#00c8ff]/30">
                <span className="text-[#00c8ff]">Level 5</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-[#141414] border border-[#00c8ff]/30 hover:border-[#00c8ff]/60 overflow-hidden relative rounded-lg shadow-lg hover:shadow-[#00c8ff]/20 transition-all duration-300">
              <div className="card-image relative">
                <StaticImage
                  src={StrengthConditioningImage}
                  alt="Strength and Conditioning"
                  className="w-full h-full object-cover"
                  width={400}
                  height={250}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
                {/* Sci-fi corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00c8ff] opacity-60"></div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-poppins">
                  Strength &{" "}
                  <span className="highlight-text">Conditioning</span>
                </h3>
                <p className="text-gray-400 mb-3 md:mb-4 font-poppins text-sm md:text-base">
                  Advanced training in scientific principles and techniques to
                  maximize athletic performance through proper strength and
                  conditioning methodologies.
                </p>
                {/* <Link to="/courses" className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline">
                  View Details →
                </Link> */}
              </div>
              <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/70 backdrop-blur-sm text-xs px-2 md:px-3 py-1 rounded-sm border border-[#00c8ff]/30">
                <span className="text-[#00c8ff]">Advanced</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-[#141414] border border-[#00c8ff]/30 hover:border-[#00c8ff]/60 overflow-hidden relative rounded-lg shadow-lg hover:shadow-[#00c8ff]/20 transition-all duration-300">
              <div className="card-image relative">
                <StaticImage
                  src={SportsNutritionImage}
                  alt="Sports Nutrition"
                  className="w-full h-full object-cover"
                  width={400}
                  height={250}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
                {/* Sci-fi corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00c8ff] opacity-60"></div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-poppins">
                  Sports <span className="highlight-text">Nutrition</span>
                </h3>
                <p className="text-gray-400 mb-3 md:mb-4 font-poppins text-sm md:text-base">
                  Evidence-based nutritional strategies to enhance athletic
                  performance, optimize recovery, and promote long-term health
                  and wellness.
                </p>
                {/* <Link to="/courses" className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline">
                  View Details →
                </Link> */}
              </div>
              <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/70 backdrop-blur-sm text-xs px-2 md:px-3 py-1 rounded-sm border border-[#00c8ff]/30">
                <span className="text-[#00c8ff]">Specialized</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="text-center md:text-right mt-4 md:mt-6" variants={fadeInUp}>
          {/*  <Link to="/courses" className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline">
            View All Programs →
          </Link> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EliteTrainingProgramsSection;
