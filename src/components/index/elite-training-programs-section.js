import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { pageAnimations } from "../../utils/animations";

const EliteTrainingProgramsSection = () => {
  const { fadeIn, fadeInUp, staggerContainer, cardVariant } =
    pageAnimations.standard;

  return (
    <motion.section
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold section-heading mb-12 font-poppins"
          variants={fadeInUp}
        >
          Elite Training Programs
        </motion.h2>
        <motion.div className="mb-8" variants={fadeInUp}>
          <p className="text-gray-300 font-poppins">
            At UFTA, we take pride in offering exceptional fitness education and
            training programs that set the industry standard. Our courses blend
            cutting-edge science with practical application, creating fitness
            professionals who excel in their field.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-[#141414] border border-[#2A2A2A] overflow-hidden">
              <div className="card-image">
                <StaticImage
                  src="../../images/placeholder1.jpg"
                  alt="Personal Training Certification"
                  className="w-full h-full object-cover"
                  width={400}
                  height={250}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-poppins">
                  Personal{" "}
                  <span className="highlight-text">Training Certification</span>
                </h3>
                <p className="text-gray-400 mb-4 font-poppins">
                  Comprehensive certification program that transforms passionate
                  fitness enthusiasts into professional personal trainers ready
                  for industry success.
                </p>
                {/* <Link to="/courses" className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline">
                  View Details →
                </Link> */}
              </div>
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-xs px-3 py-1 rounded-sm border border-[#00c8ff]/30">
                <span className="text-[#00c8ff]">Level 5</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-[#141414] border border-[#2A2A2A] overflow-hidden">
              <div className="card-image">
                <StaticImage
                  src="../../images/placeholder2.png"
                  alt="Strength and Conditioning"
                  className="w-full h-full object-cover"
                  width={400}
                  height={250}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-poppins">
                  Strength &{" "}
                  <span className="highlight-text">Conditioning</span>
                </h3>
                <p className="text-gray-400 mb-4 font-poppins">
                  Advanced training in scientific principles and techniques to
                  maximize athletic performance through proper strength and
                  conditioning methodologies.
                </p>
                {/* <Link to="/courses" className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline">
                  View Details →
                </Link> */}
              </div>
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-xs px-3 py-1 rounded-sm border border-[#00c8ff]/30">
                <span className="text-[#00c8ff]">Advanced</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-[#141414] border border-[#2A2A2A] overflow-hidden">
              <div className="card-image">
                <StaticImage
                  src="../../images/placeholder3.jpg"
                  alt="Sports Nutrition"
                  className="w-full h-full object-cover"
                  width={400}
                  height={250}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-poppins">
                  Sports <span className="highlight-text">Nutrition</span>
                </h3>
                <p className="text-gray-400 mb-4 font-poppins">
                  Evidence-based nutritional strategies to enhance athletic
                  performance, optimize recovery, and promote long-term health
                  and wellness.
                </p>
                {/* <Link to="/courses" className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline">
                  View Details →
                </Link> */}
              </div>
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-xs px-3 py-1 rounded-sm border border-[#00c8ff]/30">
                <span className="text-[#00c8ff]">Specialized</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="text-right mt-6" variants={fadeInUp}>
          {/*  <Link to="/courses" className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline">
            View All Programs →
          </Link> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EliteTrainingProgramsSection;
