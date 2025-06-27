import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-[#0A0A0A]">
      {/* Custom gradient background that smoothly transitions to the hero image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>

      {/* Hero Image with improved overlay */}
      <motion.div
        className="absolute right-0 top-0 w-full sm:w-2/3 md:w-3/5 h-full z-10"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        {/* The actual hero image - using StaticImage for optimization */}
        <StaticImage
          src="../images/hero.png"
          alt="UFTA - Universal Fitness Training Academy Hero Image"
          className="w-full h-full object-cover"
          width={800}
          height={600}
          placeholder="blurred"
        />

        {/* Radial gradient for a subtle glow effect around the edge of the image */}
        <div className="absolute -left-6 sm:-left-24 inset-y-0 w-6 sm:w-24 z-20 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>

        {/* Semi-transparent overlay on top of the hero image for better text readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 sm:via-[#0A0A0A]/30 to-[#0A0A0A]/70 sm:to-[#0A0A0A]/10"></div>

        {/* Top & bottom gradients - smaller on mobile */}
        <div className="absolute inset-x-0 top-0 h-8 sm:h-24 z-30 bg-gradient-to-b from-[#0A0A0A] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-8 sm:h-24 z-30 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>

        {/* Subtle sci-fi glow overlay */}
        <div className="absolute inset-0 z-20 opacity-30 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 mix-blend-overlay"></div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20">
        <motion.div
          className="max-w-full sm:max-w-5xl mx-auto sm:mx-0 sm:ml-4 md:ml-16 lg:ml-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white font-poppins leading-tight text-center sm:text-left"
            variants={slideInLeft}
          >
            Universal Fitness{" "}
            <span className="highlight-text">
              <br className="hidden sm:block" />
              Training Academy
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-poppins leading-relaxed text-center sm:text-left max-w-lg sm:max-w-none mx-auto sm:mx-0"
            variants={fadeInUp}
          >
            Elite training and certifications with
            <span className="highlight-text">
              <b> UFTA</b>
            </span>{" "}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                id="hero-unlock-btn"
                className="btn-primary px-6 py-3 font-medium font-poppins transition-all duration-200 no-underline"
                style={{
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>
                  Unlock Your Potential
                </span>
                <span 
                  className="mobile-slide-effect"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-25%',
                    width: '25%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.2), transparent)',
                    transition: 'all 0.5s ease',
                    zIndex: 1,
                    display: 'none'
                  }}
                />
              </Link>
            </motion.div>
            <motion.div className="relative group" whileHover={{ scale: 1.05 }}>
              {/* <button className="text-white hover:text-[#00c8ff] flex items-center space-x-2 font-poppins">
                <span>About UFTA</span>
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
