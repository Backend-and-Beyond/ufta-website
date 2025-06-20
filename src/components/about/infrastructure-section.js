import * as React from "react";
import { motion } from "framer-motion";
import { pageAnimations } from "../../utils/animations";
import Placeholder1 from "../../images/placeholder1.jpg";
import Placeholder2 from "../../images/placeholder2.png";
import Placeholder3 from "../../images/placeholder3.jpg";

const InfrastructureSection = () => {
  const {
    staggerContainer,
    gentleFadeUp,
    cardVariant,
    fadeInUp,
    slideInLeft,
    slideInRight,
  } = pageAnimations.standard;

  // Mobile-optimized viewport settings for better mobile performance
  const optimizedViewport = {
    once: true,
    amount: 0.05, // Much smaller threshold for earlier trigger
    margin: "0px 0px -30px 0px" // Start animation 30px before element comes into view
  };

  // Fast animation variants for immediate visibility
  const mobileOptimizedStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Very fast stagger
        delayChildren: 0.05,   // Minimal delay
        duration: 0.2
      }
    }
  };

  const facilities = [
    {
      title: "Spacious Gym Floor",
      description:
        "A 2500 sq ft air-conditioned gym with latest strength training equipment for diverse fitness disciplines.",
      color: "from-green-500 to-green-600",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      image: Placeholder1,
    },
    {
      title: "Smart Lab & Classroom",
      description:
        "1000 sq ft smart lab with Interactive Digital Board and 3D software for immersive learning.",
      color: "from-blue-500 to-blue-600",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      image: Placeholder2,
    },
    {
      title: "Biomechanics Lab",
      description:
        "Advanced lab with high-speed cameras, GAIT analysis, and force transducers for performance assessment.",
      color: "from-purple-500 to-purple-600",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      image: Placeholder3,
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Utilizing tools like force transducers for Velocity-Based Training (VBT) to enhance athletic performance.",
      color: "from-pink-500 to-pink-600",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      image: Placeholder1,
    },
    {
      title: "Online Digital Library",
      description:
        "Access to extensive online resources, journals, and publications in sports science and medicine.",
      color: "from-orange-500 to-orange-600",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      image: Placeholder2,
    },
    {
      title: "Sports Medicine & Rehab",
      description:
        "In-house facilities for Sports Injury Rehabilitation & Reconditioning for athletes and individuals.",
      color: "from-lime-500 to-lime-600",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      image: Placeholder3,
    },
  ];

  return (
    <motion.section
      id="infrastructure"
      className="py-12 md:py-24 px-4 md:px-6"
      style={{ minHeight: '10vh' }} // Prevent complete collapse
      initial={{ opacity: 0.8 }} // Start with higher opacity for immediate visibility
      whileInView={{ opacity: 1 }}
      viewport={optimizedViewport}
      transition={{ duration: 0.2 }} // Fast transition
    >
      {/* Section Header */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-16"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.2 }}
      >
        <motion.svg
          className="w-8 h-8 md:w-12 md:h-12 md:mr-4 mb-2 md:mb-0 text-[#00c8ff]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M2.25 12a8.963 8.963 0 0 1 11.484 0l2.016 2.016"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.475 21.075a2.25 2.25 0 0 0 1.05 1.675H18a2.25 2.25 0 0 0 2.25-2.25v-2.625a2.25 2.25 0 0 0-1.05-1.675L12 12.75M2.25 12l6.225-6.225a2.25 2.25 0 0 1 3.182 0l6.225 6.225m0 0a2.25 2.25 0 0 1-3.182 3.182L12 17.25l-2.018-2.018m4.743-4.743-3.182-3.182a2.25 2.25 0 0 0-3.182 0L2.25 12"
          />
        </motion.svg>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center relative">
            Infrastructure & <span className="text-[#00c8ff]">Facilities</span>
            <motion.span
              className="absolute -top-3 md:-top-4 -right-5 md:-right-7 text-xs bg-gradient-to-r from-[#00c8ff] to-blue-600 px-2 py-0.5 rounded-full text-white hidden sm:block"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              State-of-the-Art
            </motion.span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#00c8ff] to-transparent mt-2 mx-auto"></div>
        </div>
      </motion.div>

      {/* Intro Text */}
      <motion.p
        className="text-center text-gray-300 max-w-3xl mx-auto mb-8 md:mb-16 px-4 text-sm md:text-base"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        UFTA boasts state-of-the-art facilities designed to provide an optimal
        learning and training environment. Our infrastructure combines
        cutting-edge technology with thoughtfully designed spaces to nurture the
        next generation of fitness professionals.
      </motion.p>

      {/* Featured Facility */}
      <motion.div
        className="bg-[#141414] border border-[#2A2A2A] hover:border-[#00c8ff]/30 rounded-xl p-4 md:p-8 relative overflow-hidden shadow-xl mb-8 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        whileHover={{ y: -3 }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#00c8ff] to-blue-600 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#00c8ff] to-blue-600 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative z-10">
          {/* Image Column */}
          <motion.div className="relative" variants={slideInLeft}>
            <div className="absolute -top-2 -left-2 bg-[#00c8ff] text-black text-xs font-bold px-2 py-1 rounded-md">
              Featured Facility
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl border-2 border-[#2A2A2A]">
              <img
                src={Placeholder1}
                alt="UFTA Gym Facility"
                className="w-full h-72 object-cover object-center"
              />
            </div>
            <div className="flex justify-center mt-4">
              <motion.div
                className="w-2 h-2 bg-[#00c8ff] rounded-full mx-1"
                whileHover={{ scale: 1.5 }}
              ></motion.div>
              <motion.div
                className="w-2 h-2 bg-gray-500 rounded-full mx-1"
                whileHover={{ scale: 1.5 }}
              ></motion.div>
              <motion.div
                className="w-2 h-2 bg-gray-500 rounded-full mx-1"
                whileHover={{ scale: 1.5 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="flex flex-col justify-center"
            variants={slideInRight}
          >
            <div className="bg-[#1a1a1a]/50 p-4 md:p-6 rounded-lg border border-[#2A2A2A]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center">
                <span className="inline-block w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-2 md:mr-3">                    <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </span>
                Premium Fitness Center
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Our 2500 sq ft air-conditioned gym features the latest strength
                training equipment for diverse fitness disciplines. The facility
                is designed to provide both practical training for students and
                a premium workout environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#00c8ff] rounded-full mr-2"></div>
                  <span className="text-xs md:text-sm text-gray-300">
                    Olympic Weightlifting Area
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#00c8ff] rounded-full mr-2"></div>
                  <span className="text-xs md:text-sm text-gray-300">Cardio Section</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#00c8ff] rounded-full mr-2"></div>
                  <span className="text-xs md:text-sm text-gray-300">
                    Functional Training Zone
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#00c8ff] rounded-full mr-2"></div>
                  <span className="text-xs md:text-sm text-gray-300">Recovery Area</span>
                </div>
              </div>
              <div className="inline-flex items-center px-3 md:px-4 py-2 bg-[#00c8ff]/10 border border-[#00c8ff]/30 rounded-lg text-[#00c8ff]">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs md:text-sm font-medium">
                  Industry-Standard Equipment
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Facility Cards */}
      <motion.div>
        <motion.h3
          className="text-xl md:text-2xl font-bold mb-6 md:mb-10 text-white relative inline-flex items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <span className="w-6 h-6 md:w-8 md:h-8 bg-[#00c8ff] rounded-full flex items-center justify-center mr-2 md:mr-3 text-black">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Our Training <span className="text-[#00c8ff] ml-1">Facilities</span>
          <div className="ml-2 md:ml-4 h-0.5 w-16 md:w-24 bg-gradient-to-r from-[#00c8ff] to-transparent"></div>
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={mobileOptimizedStagger}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-[#141414] border border-[#2A2A2A] hover:border-[#00c8ff]/30 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Image Header */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${facility.color} opacity-40`}
                ></div>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                {/* Icon Badge */}
                <div className="absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  {facility.icon}
                </div>
                {/* Colored Top Strip */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${facility.color}`}
                ></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 flex items-center">
                  <span
                    className={`inline-block w-3 h-3 rounded-full bg-gradient-to-r ${facility.color} mr-2`}
                  ></span>
                  {facility.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {facility.description}
                </p>

                {/* Learn More Button */}
                {/* <motion.button
                  className="mt-4 flex items-center text-[#00c8ff] text-sm font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* Virtual Tour CTA */}
      {/*       <motion.div
        className="mt-20 p-8 bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl relative overflow-hidden"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#00c8ff] to-blue-600 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              Experience Our Campus <span className="text-[#00c8ff]">Virtually</span>
            </motion.h3>
            <p className="text-gray-300 mb-6">
              Can't visit us in person? Take a virtual tour of our state-of-the-art facilities and get a glimpse of the exceptional learning environment we've created for fitness professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="px-6 py-3 bg-[#00c8ff] text-black font-semibold rounded-lg shadow-lg hover:bg-[#00c8ff]/90 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                Take Virtual Tour
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-transparent border border-[#00c8ff] text-[#00c8ff] font-semibold rounded-lg hover:bg-[#00c8ff]/10 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Visit
              </motion.button>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 bg-[#00c8ff]/20 rounded-full flex items-center justify-center border-2 border-[#00c8ff]/40"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <svg className="w-16 h-16 md:w-20 md:h-20 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div> */}
    </motion.section>
  );
};

export default InfrastructureSection;
