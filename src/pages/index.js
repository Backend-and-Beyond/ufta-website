import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import UftaLayout from "../components/ufta-layout";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import Footer from "../components/footer";
import Seo from "../components/seo";
import {
  pageAnimations,
  hoverAnimations,
  viewportSettings,
} from "../utils/animations";

const IndexPage = ({ location }) => {
  // Get animations for this page
  const {
    fadeInUp,
    fadeIn,
    slideInLeft,
    slideInRight,
    staggerContainer,
    cardVariant,
  } = pageAnimations.standard;

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
        stiffness: 100,
      },
    },
  };

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
        stiffness: 120,
      },
    }),
  };

  const contentCardVariant = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

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
        repeatType: "reverse",
      },
    }),
  };

  return (
    <UftaLayout>
      <Navigation location={location} />

      <HeroSection />

      {/* Tagline Section */}
      <motion.section
        className="py-10 border-t border-b border-[#2A2A2A]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold font-poppins"
            variants={fadeInUp}
          >
            Advanced Training,{" "}
            <span className="highlight-text">Extraordinary Results</span>
          </motion.h2>
        </div>
      </motion.section>

      {/* About Us Section */}
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
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 font-poppins bg-gradient-to-r from-white via-[#00c8ff] to-white bg-clip-text text-transparent"
              variants={floatVariant}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
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
              Transforming passionate fitness enthusiasts into industry-leading
              professionals since 2006
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
              { number: "100%", label: "Job Placement Support", delay: 0.6 },
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
                  transition: { duration: 0.3 },
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
                      stiffness: 100,
                    },
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

          {/* Head Coach Section */}
          <motion.section
            className="py-20 bg-[#0F0F0F]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-3xl font-bold mb-12"
                variants={fadeInUp}
              >
                Led by <span className="highlight-text">Head Coach</span>
              </motion.h2>
              <motion.div className="card p-8 rounded-sm" variants={fadeInUp}>
                <div className="grid md:grid-cols-3 gap-10 items-center">
                  <motion.div className="md:col-span-1" variants={slideInLeft}>
                    <StaticImage
                      src="../images/bhibhu.png"
                      alt="Dr. Bibhu Moni Singha"
                      className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover mx-auto border-4 border-amber-400/20"
                      width={240}
                      height={240}
                    />
                  </motion.div>
                  <motion.div className="md:col-span-2" variants={slideInRight}>
                    <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
                      Dr. Dr. Bibhu Moni Singha
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 font-poppins">
                      Dr. Bibhu Moni Singha is one of India's leading fitness
                      experts and sports nutritionists with over 20 years of
                      experience in the fitness industry. Recognized with
                      prestigious awards, including the "Excellent Personal
                      Trainer of the Year 2018" and "India's Best Fitness
                      Trainer of the Year."
                    </p>
                    <p className="text-gray-300 leading-relaxed font-poppins">
                      As the Director of Certification at Universal Fitness
                      Training Academy and Head Coach at Super Fight League Gym,
                      he specializes in sports nutrition, strength and
                      conditioning, injury rehabilitation, and performance
                      enhancement.
                    </p>
                  </motion.div>
                </div>
                <motion.div className="mt-12" variants={fadeInUp}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card p-4 rounded-sm">
                      <h4 className="font-semibold text-amber-400 mb-2 font-poppins">
                        Master Trainer TECHNOGYM
                      </h4>
                      <p className="text-gray-400 text-sm font-poppins">
                        Certified Master Trainer for TECHNOGYM, specializing in
                        advanced fitness equipment and training programs.
                      </p>
                    </div>
                    <div className="card p-4 rounded-sm">
                      <h4 className="font-semibold text-amber-400 mb-2 font-poppins">
                        IUSCA/USAW Level 2
                      </h4>
                      <p className="text-gray-400 text-sm font-poppins">
                        Certified Strength and Conditioning Coach with expertise
                        in Olympic weightlifting.
                      </p>
                    </div>
                    <div className="card p-4 rounded-sm">
                      <h4 className="font-semibold text-amber-400 mb-2 font-poppins">
                        MPPT & CSN PROPTA USA
                      </h4>
                      <p className="text-gray-400 text-sm font-poppins">
                        Certified in Mental Performance and Sports Nutrition
                        from PROPTA USA.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Enhanced Content Grid */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-start mb-12"
            variants={staggerContainer}
          >
            {/* Left Content */}
            <motion.div className="space-y-6" variants={staggerContainer}>
              {[
                {
                  title: "Our Legacy",
                  content:
                    "Universal Fitness Training Academy (UFTA), established in 2006, is a premier institution in India dedicated to providing comprehensive health and fitness education. With a steadfast commitment to excellence, UFTA has trained and certified over 2,500 fitness professionals.",
                },
                {
                  title: "Our Mission",
                  content:
                    "To foster a new generation of fitness leaders through rigorous academic programs, practical training, and a passion for advancing sport and exercise sciences. We ensure our graduates are well-equipped to excel in the dynamic fitness industry.",
                },
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
            <motion.div className="space-y-6" variants={staggerContainer}>
              {[
                {
                  title: "Our Community",
                  content:
                    "UFTA fosters a vibrant community, providing expert guidance and a supportive environment to help everyone—from aspiring fitness professionals to personal fitness enthusiasts—achieve their goals.",
                },
                {
                  title: "Global Recognition",
                  content:
                    "Our internationally recognized courses range from degree programs like B.Sc. in Fitness & Athletic Conditioning to specialized certifications, approved by leading fitness organizations worldwide.",
                },
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
              transition: { duration: 0.3 },
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
              Join thousands of successful fitness professionals who started
              their journey with UFTA
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
                  transition: { duration: 0.3 },
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
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
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
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/*                 <Link
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
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </motion.svg>
                </Link> */}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold mb-12 font-poppins"
            variants={fadeInUp}
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4 font-poppins">
                Professional Certifications
              </h3>
              <p className="text-gray-400 font-poppins">
                Internationally recognized courses to become a certified fitness
                professional.
              </p>
            </div>
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4 font-poppins">
                S&C Training
              </h3>
              <p className="text-gray-400 font-poppins">
                Elite Strength & Conditioning training for peak athletic
                performance.
              </p>
            </div>
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4 font-poppins">
                Nutritional Counselling
              </h3>
              <p className="text-gray-400 font-poppins">
                Personalized, evidence-based nutrition plans for health and
                fitness goals.
              </p>
            </div>
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4 font-poppins">
                High Performance Clinic
              </h3>
              <p className="text-gray-400 font-poppins">
                Specialized services including sports rehabilitation and
                biomechanics analysis.
              </p>
            </div>
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4 font-poppins">
                Gym Setup Support
              </h3>
              <p className="text-gray-400 font-poppins">
                Guidance on gym equipment, sourcing, and franchise
                opportunities.
              </p>
            </div>
            <div className="card p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-4 font-poppins">
                Job Placement Assistance
              </h3>
              <p className="text-gray-400 font-poppins">
                Dedicated support to help our graduates find rewarding careers
                in fitness.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Elite Training Programs Section */}
      {/*       <motion.section
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
              At UFTA, we take pride in offering exceptional fitness education
              and training programs that set the industry standard. Our courses
              blend cutting-edge science with practical application, creating
              fitness professionals who excel in their field.
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
                    src="../images/placeholder1.jpg"
                    alt="Personal Training Certification"
                    className="w-full h-full object-cover"
                    width={400}
                    height={250}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-poppins">
                    Personal{" "}
                    <span className="highlight-text">
                      Training Certification
                    </span>
                  </h3>
                  <p className="text-gray-400 mb-4 font-poppins">
                    Comprehensive certification program that transforms
                    passionate fitness enthusiasts into professional personal
                    trainers ready for industry success.
                  </p>
                  <Link
                    to="/courses"
                    className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline"
                  >
                    View Details →
                  </Link>
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
                    src="../images/placeholder2.png"
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
                  <Link
                    to="/courses"
                    className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline"
                  >
                    View Details →
                  </Link>
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
                    src="../images/placeholder3.jpg"
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
                  <Link
                    to="/courses"
                    className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline"
                  >
                    View Details →
                  </Link>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-xs px-3 py-1 rounded-sm border border-[#00c8ff]/30">
                  <span className="text-[#00c8ff]">Specialized</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="text-right mt-6" variants={fadeInUp}>
            <Link
              to="/courses"
              className="text-[#00c8ff] hover:text-[#00c8ff] opacity-80 hover:opacity-100 transition-opacity no-underline"
            >
              View All Programs →
            </Link>
          </motion.div>
        </div>
      </motion.section> */}

      {/* High Performance Training Section */}
      <motion.section
        className="py-20 bg-[#0c0c0e]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="order-2 md:order-1" variants={slideInLeft}>
              <StaticImage
                src="../images/placeholder1.jpg"
                alt="High Performance Training"
                className="w-full h-auto rounded-sm border border-[#2A2A2A] shadow-lg"
                width={600}
                height={400}
              />
            </motion.div>
            <motion.div className="order-1 md:order-2" variants={slideInRight}>
              <h2 className="text-3xl font-bold section-heading mb-8 font-poppins">
                High Performance Training{" "}
                <span className="highlight-text"> Clinic</span>
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed font-poppins">
                Our specialized High Performance Clinic offers cutting-edge
                training methodologies for athletes seeking to maximize their
                performance potential.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed font-poppins">
                From biomechanical analysis and sports rehabilitation to
                advanced strength conditioning and metabolic optimization, our
                services are tailored to your specific goals and athletic
                demands.
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed font-poppins">
                Our team of experts includes sports scientists, rehabilitation
                specialists, and elite coaches who provide evidence-based
                training solutions.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/high-performance"
                  className="btn-primary inline-block px-6 py-3 font-medium font-poppins transition-all duration-200 no-underline"
                >
                  Explore High Performance Training Clinic
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/high-performance"
                  className="btn-primary inline-block px-6 py-3 font-medium font-poppins transition-all duration-200 no-underline"
                >
                  Discover all our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Approved Providers Section */}
      <motion.section
        className="py-16 bg-gradient-to-b from-black to-[#0A0A0A]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-3 font-poppins"
              variants={fadeInUp}
            >
              Approved <span className="text-[#00c8ff]">Providers</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 font-poppins"
              variants={fadeInUp}
            >
              Recognized by leading institutions worldwide
            </motion.p>
          </motion.div>

          {/* Provider Logos Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-center min-h-[120px] group hover:border-[#00c8ff]/30 transition-all duration-300 relative overflow-hidden"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
              custom={0}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../images/provider1.webp"
                alt="PROPTA USA"
                className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={120}
                height={48}
              />
            </motion.div>

            <motion.div
              className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-center min-h-[120px] group hover:border-[#00c8ff]/30 transition-all duration-300 relative overflow-hidden"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
              custom={1}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../images/provider2.png"
                alt="UGC Approved"
                className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={120}
                height={48}
              />
            </motion.div>

            <motion.div
              className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-center min-h-[120px] group hover:border-[#00c8ff]/30 transition-all duration-300 relative overflow-hidden"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
              custom={2}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../images/provider3.png"
                alt="CASES UK"
                className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={120}
                height={48}
              />
            </motion.div>

            <motion.div
              className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-center min-h-[120px] group hover:border-[#00c8ff]/30 transition-all duration-300 relative overflow-hidden"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
              custom={3}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../images/provider4.png"
                alt="University Partner"
                className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={120}
                height={48}
              />
            </motion.div>

            <motion.div
              className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-center min-h-[120px] group hover:border-[#00c8ff]/30 transition-all duration-300 relative overflow-hidden"
              variants={cardVariant}
              whileHover={{ y: -5, scale: 1.02 }}
              custom={4}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <StaticImage
                src="../images/provider5.png"
                alt="International Body"
                className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                width={120}
                height={48}
              />
            </motion.div>
          </motion.div>

          {/* Compact Stats */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-6"
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
              <span className="text-sm text-gray-400">
                199 Countries Recognition
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
              <span className="text-sm text-gray-400">
                International Standards
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#00c8ff] rounded-full"></div>
              <span className="text-sm text-gray-400">
                Global Accreditation
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section - New Layout */}
      <motion.section
        className="py-20 bg-[#0F0F0F] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 font-poppins text-white"
              variants={fadeInUp}
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto font-poppins"
              variants={fadeInUp}
            >
              Discover what makes UFTA the premier choice for fitness education
              and professional development
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Content - Features Grid */}
            <motion.div className="lg:col-span-2" variants={staggerContainer}>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: (
                      <div className="w-12 h-12 bg-[#00c8ff]/10 rounded-full flex items-center justify-center border border-[#00c8ff]/20">
                        <div className="w-6 h-6 bg-[#00c8ff] rounded-full"></div>
                      </div>
                    ),
                    title: "Expert Training Programs",
                    description:
                      "Comprehensive certification programs designed by industry experts with decades of experience.",
                  },
                  {
                    icon: (
                      <div className="w-12 h-12 bg-[#00c8ff]/10 rounded-full flex items-center justify-center border border-[#00c8ff]/20">
                        <div className="w-6 h-6 bg-[#00c8ff] rounded-full"></div>
                      </div>
                    ),
                    title: "Global Recognition",
                    description:
                      "Internationally recognized certifications that open doors to worldwide opportunities.",
                  },
                  {
                    icon: (
                      <div className="w-12 h-12 bg-[#00c8ff]/10 rounded-full flex items-center justify-center border border-[#00c8ff]/20">
                        <div className="w-6 h-6 bg-[#00c8ff] rounded-full"></div>
                      </div>
                    ),
                    title: "Career Support",
                    description:
                      "100% job placement assistance and ongoing career guidance for all our graduates.",
                  },
                  {
                    icon: (
                      <div className="w-12 h-12 bg-[#00c8ff]/10 rounded-full flex items-center justify-center border border-[#00c8ff]/20">
                        <div className="w-6 h-6 bg-[#00c8ff] rounded-full"></div>
                      </div>
                    ),
                    title: "Industry Partnerships",
                    description:
                      "Partnered with leading organizations like BASES UK, USAW, NSCA, and ACSM.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#141414] border border-[#2A2A2A] p-6 rounded-lg hover:border-[#00c8ff]/30 transition-all duration-300 group"
                    custom={index}
                    variants={contentCardVariant}
                    whileHover="hover"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div
                      className="mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      {feature.icon}
                    </motion.div>
                    <motion.h3
                      className="text-xl font-semibold mb-3 text-white font-poppins group-hover:text-[#00c8ff] transition-colors"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 leading-relaxed font-poppins"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {feature.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Images */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              variants={staggerContainer}
            >
              <motion.div
                className="relative rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#00c8ff]/30 transition-all duration-300"
                variants={slideInRight}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <StaticImage
                  src="../images/placeholder1.jpg"
                  alt="UFTA Training Facilities"
                  className="w-full h-64 object-cover"
                  width={400}
                  height={250}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg font-poppins mb-1">
                    State-of-the-Art Facilities
                  </h4>
                  <p className="text-gray-300 text-sm font-poppins">
                    Modern training equipment and learning environments
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#00c8ff]/30 transition-all duration-300"
                variants={slideInRight}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <StaticImage
                  src="../images/placeholder2.png"
                  alt="UFTA Expert Instructors"
                  className="w-full h-64 object-cover"
                  width={400}
                  height={250}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg font-poppins mb-1">
                    Expert Instructors
                  </h4>
                  <p className="text-gray-300 text-sm font-poppins">
                    Learn from industry professionals and certified experts
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      {/*       <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-4xl font-bold mb-6" variants={fadeInUp}>
            Ready to Start Your Fitness Journey?
          </motion.h2>
          <motion.p className="text-xl text-gray-300 mb-10" variants={fadeInUp}>
            Join UFTA today and transform your passion for fitness into a
            thriving career.
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
              <Link
                to="/courses"
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-medium transition-colors duration-200 no-underline"
              >
                Explore Courses
              </Link>
            </motion.div>
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="#contact"
                className="border border-white text-white hover:bg-white/10 px-8 py-3 font-medium transition-colors duration-200 no-underline"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section> */}

      {/* Enhanced Get In Touch Section */}
      <motion.section
        id="contact"
        className="py-20 bg-[#0F0F0F] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 border border-[#00c8ff]"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <motion.div
            className="absolute bottom-20 right-20 w-32 h-32 border border-[#00c8ff]/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#00c8ff]/20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={staggerContainer}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 font-poppins bg-gradient-to-r from-white via-[#00c8ff] to-white bg-clip-text text-transparent"
              variants={floatVariant}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              Get In Touch
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
            >
              Ready to transform your fitness career? Connect with our expert
              team and take the first step towards excellence
            </motion.p>
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div
            className="flex flex-col md:flex-row gap-8 mb-16 justify-center items-center md:items-stretch w-full"
            variants={staggerContainer}
          >
            {/* Phone Contact Card */}
            <motion.div
              className="bg-gradient-to-br from-[#00c8ff]/10 to-[#0099cc]/5 border border-[#2A2A2A] p-8 rounded-xl hover:border-[#00c8ff]/50 transition-all duration-500 group relative overflow-hidden w-full max-w-sm md:flex-1 md:max-w-none"
              variants={contentCardVariant}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="text-4xl mb-4 relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                📞
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-3 text-[#00c8ff] font-poppins relative z-10"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Call Us
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-4 font-poppins relative z-10"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Speak directly with our admissions counselors
              </motion.p>
              <motion.a
                href="tel:+919864047046"
                className="text-[#00c8ff] hover:text-white font-semibold font-poppins transition-colors duration-300 relative z-10 inline-flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                +91 98640 47046
                <motion.svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* Email Contact Card */}
            <motion.div
              className="bg-gradient-to-br from-[#0099cc]/10 to-[#00c8ff]/5 border border-[#2A2A2A] p-8 rounded-xl hover:border-[#00c8ff]/50 transition-all duration-500 group relative overflow-hidden w-full max-w-sm md:flex-1 md:max-w-none"
              variants={contentCardVariant}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="text-4xl mb-4 relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                ✉️
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-3 text-[#00c8ff] font-poppins relative z-10"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Email Us
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-4 font-poppins relative z-10"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Get detailed information about our programs
              </motion.p>
              <motion.a
                href="mailto:info@ufta.in"
                className="text-[#00c8ff] hover:text-white font-semibold font-poppins transition-colors duration-300 relative z-10 inline-flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                info@ufta.in
                <motion.svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* Location Contact Card */}
            <motion.div
              className="bg-gradient-to-br from-[#0066ff]/10 to-[#00c8ff]/5 border border-[#2A2A2A] p-8 rounded-xl hover:border-[#00c8ff]/50 transition-all duration-500 group relative overflow-hidden w-full max-w-sm md:flex-1 md:max-w-none"
              variants={contentCardVariant}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="text-4xl mb-4 relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                📍
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-3 text-[#00c8ff] font-poppins relative z-10"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Visit Our Campus
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-4 font-poppins relative z-10"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Experience our world-class facilities firsthand
              </motion.p>
              <motion.p
                className="text-[#00c8ff] font-semibold font-poppins relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Guwahati, Assam, India
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2A2A2A] p-8 md:p-12 rounded-xl relative overflow-hidden group"
            variants={floatVariant}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 20px 60px rgba(0, 200, 255, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/5 via-[#00c8ff]/10 to-[#00c8ff]/5 opacity-0 group-hover:opacity-100"
              initial={false}
              transition={{ duration: 0.5 }}
            />

            <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
              {/* Left Column - Contact Info */}
              <motion.div className="space-y-6" variants={staggerContainer}>
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-6 font-poppins text-white"
                  variants={floatVariant}
                >
                  Ready to Begin Your Journey?
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed font-poppins mb-8"
                  variants={floatVariant}
                >
                  Whether you're looking to start a new career in fitness or
                  enhance your existing skills, our team is here to guide you
                  every step of the way.
                </motion.p>

                {/* Additional Contact Methods */}
                <motion.div className="space-y-4" variants={staggerContainer}>
                  <motion.div
                    className="flex items-center space-x-4"
                    variants={cardVariant}
                  >
                    <div className="w-12 h-12 bg-[#00c8ff]/20 border border-[#00c8ff]/30 rounded-lg flex items-center justify-center">
                      <span className="text-[#00c8ff] text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white font-poppins">
                        Office Hours
                      </h4>
                      <p className="text-gray-400 font-poppins">
                        Mon - Sat: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4"
                    variants={cardVariant}
                  >
                    <div className="w-12 h-12 bg-[#00c8ff]/20 border border-[#00c8ff]/30 rounded-lg flex items-center justify-center">
                      <span className="text-[#00c8ff] text-xl">💬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white font-poppins">
                        Quick Response
                      </h4>
                      <p className="text-gray-400 font-poppins">
                        We respond within 2-4 hours
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4"
                    variants={cardVariant}
                  >
                    <div className="w-12 h-12 bg-[#00c8ff]/20 border border-[#00c8ff]/30 rounded-lg flex items-center justify-center">
                      <span className="text-[#00c8ff] text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white font-poppins">
                        Personal Consultation
                      </h4>
                      <p className="text-gray-400 font-poppins">
                        Free career guidance sessions
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Column - CTA */}
              <motion.div
                className="bg-gradient-to-br from-[#00c8ff]/10 via-[#00c8ff]/5 to-[#00c8ff]/10 border border-[#00c8ff]/30 p-8 rounded-xl text-center"
                variants={floatVariant}
              >
                <motion.h4
                  className="text-xl font-bold mb-4 font-poppins text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Start Your Fitness Career Today
                </motion.h4>
                <motion.p
                  className="text-gray-300 mb-6 font-poppins"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Join thousands of successful fitness professionals who chose
                  UFTA as their launchpad to success
                </motion.p>

                <motion.div
                  className="space-y-4"
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
                      boxShadow: "0 15px 40px rgba(0, 200, 255, 0.3)",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="tel:+919864047046"
                      className="inline-flex items-center bg-gradient-to-r from-[#00c8ff] to-[#0099cc] hover:from-[#0099cc] hover:to-[#00c8ff] text-white px-8 py-4 font-semibold font-poppins transition-all duration-300 no-underline rounded-lg shadow-lg hover:shadow-[#00c8ff]/25 w-full justify-center"
                    >
                      Call Now for Free Consultation
                      <motion.svg
                        className="ml-3 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </motion.svg>
                    </a>
                  </motion.div>

                  <motion.div
                    variants={cardVariant}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      borderColor: "#00c8ff",
                      boxShadow: "0 10px 30px rgba(0, 200, 255, 0.2)",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="mailto:info@ufta.in"
                      className="inline-flex items-center border-2 border-[#00c8ff] text-[#00c8ff] hover:bg-[#00c8ff] hover:text-black px-8 py-4 font-semibold font-poppins transition-all duration-300 no-underline rounded-lg w-full justify-center"
                    >
                      Send Us an Email
                      <motion.svg
                        className="ml-3 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotateY: [0, 180, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 4,
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </motion.svg>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </UftaLayout>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="UFTA - Universal Fitness Training Academy" />
);

export default IndexPage;
