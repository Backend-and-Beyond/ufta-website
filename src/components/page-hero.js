import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { pageAnimations, viewportSettings } from "../utils/animations"

const PageHero = ({ 
  title, 
  subtitle, 
  tagline, 
  imageAlt = "UFTA Hero Image",
  titleHighlight // This should be an object with text and color, e.g., { text: "UFTA", color: "text-[#00c8ff]" }
}) => {
  // Get animation variants from centralized configuration
  const { fadeInUp, slideInLeft, staggerContainer, scaleIn } = pageAnimations.standard;

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        className="min-h-[60vh] flex items-center relative overflow-hidden bg-[#0A0A0A] pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeInUp}
      >
        {/* Custom gradient background that smoothly transitions to the hero image */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]/30"></div>
        
        {/* Hero Image */}
        <motion.div 
          className="absolute right-0 top-0 w-1/2 md:w-3/5 h-full z-10"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={viewportSettings}
        >
          <StaticImage
            src="../images/hero.png"
            alt={imageAlt}
            className="w-full h-full object-cover"
            placeholder="blurred"
            layout="constrained"
          />
          
          {/* Main gradient overlay for black-to-image transition */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 via-[#0A0A0A]/30 to-transparent"></div>
          
          {/* Left edge gradient for smoother transition */}
          <div className="absolute -left-24 inset-y-0 w-24 z-15 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>
          
          {/* Top & bottom gradients */}
          <div className="absolute inset-x-0 top-0 h-24 z-20 bg-gradient-to-b from-[#0A0A0A] to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 z-20 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
        </motion.div>
        
        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 text-center md:text-left">
          <motion.div 
            className="max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              variants={slideInLeft}
            >
              {title} {titleHighlight && <span className={titleHighlight.color}>{titleHighlight.text}</span>}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={slideInLeft}
            >
              {subtitle}
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mx-auto md:mx-0"
              variants={scaleIn}
            ></motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Tagline Section */}
      {tagline && (
        <motion.section 
          className="py-8 border-t border-b border-[#2A2A2A]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-xl md:text-2xl font-medium"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {tagline}
            </motion.h2>
          </div>
        </motion.section>
      )}
    </>
  )
}

export default PageHero
