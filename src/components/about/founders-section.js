import * as React from "react";
import { motion } from "framer-motion";
import { pageAnimations } from "../../utils/animations";
import BibhuImage from "../../images/bhibhu.png";
import SangeetaImage from "../../images/placeholder.jpg";

const FoundersSection = () => {
  const {
    staggerContainer,
    fadeInUp,
    cardVariant,
    scaleIn,
    slideInLeft,
    slideInRight,
  } = pageAnimations.standard;

  // Mobile-optimized viewport settings - use smaller threshold for better mobile performance
  const optimizedViewport = {
    once: true,
    amount: 0.05, // Further reduced for even earlier trigger on mobile
    margin: "0px 0px -30px 0px", // Start animation 30px before element comes into view
  };

  // Fast animation variants for immediate visibility
  const mobileOptimizedStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Very fast stagger
        delayChildren: 0.05, // Minimal delay
        duration: 0.2,
      },
    },
  };

  const founders = [
    {
      initials: "BMS",
      name: "Dr. Bibhu Moni Singha",
      degree: "IUSCA Certified S&C Coach",
      position: ["Founder & Director, UFTA"],
      specialty: [
        "MSc ST&C",
        "PGDip Fit & Nutrition",
        "Cert. Anti-Doping Expert, IFBB Spain",
        "CPT ACSM",
        "CPT PF, USA",
        "Body Composition Analyst, Inbody"

      ],
      image: BibhuImage,
      certifications: [
        "Fit India Influencer, Govt. of India",
        "Member of Advisory Board IUSCA & IJSC",
        "CASES UK Accredited Sport & Exercise Scientist",
        "Master Trainer S&C SPEFL-SC Govt. of India",
        "Master Trainer TECHNOGYM, Italy",
        "Master Trainer Bodybuilding & Fitness, IFBB Spain",
      ],
      message: [
        '"On behalf of team UFTA, I gladly welcome you. Since 2006, UFTA has pioneered education in nutrition, fitness, and health in India. We\'re excited to introduce degree programs like B.Sc. in Fitness & Athletic Conditioning to meet industry demands."',
        '"With over 23 years in this field, my commitment is to help individuals turn their passion into a profession. We\'ve certified over 2,500 professionals, empowering their careers. Join UFTA for a fulfilling journey as an evidence-based health and Fitness Professional."',
      ],
    },
    {
      initials: "SB",
      name: "Sangeeta Bora",
      degree: "PGDM",
      position: "Co-Founder & Director of Administration, UFTA",
      specialty: "Fitness Entrepreneur",
      image: SangeetaImage,
      certifications: [
        "Business Administration Expert",
        "Operations Management Specialist",
        "Administrative Leadership",
      ],
      message: [
        '"UFTA has always been at the forefront of premier fitness education. We pride ourselves on our qualified instructors and exceptional facilities, including our fully equipped gym, Biomechanics lab, and modern smart classroom."',
        '"Our commitment extends to cutting-edge technology for sports-specific training and access to the latest research via our digital library. UFTA offers 100% placement assistance, leveraging strong connections to launch successful careers."',
      ],
    },
  ];

  return (
    <motion.section
      id="founders"
      className="py-12 md:py-24 px-4 md:px-6"
      style={{ minHeight: "10vh" }} // Prevent complete collapse
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
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </motion.svg>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center relative">
            Meet Our <span className="text-[#00c8ff]">Founders</span>
            <motion.span
              className="absolute -top-3 md:-top-4 -right-5 md:-right-7 text-xs bg-gradient-to-r from-[#00c8ff] to-blue-600 px-2 py-0.5 rounded-full text-white hidden sm:block"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Visionary Leaders
            </motion.span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#00c8ff] to-transparent mt-2 mx-auto"></div>
        </div>
      </motion.div>

      {/* Intro Text */}
      <motion.p
        className="text-center text-gray-300 max-w-3xl mx-auto mb-8 md:mb-16 px-4 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Meet the passionate experts behind UFTA's success story. Our founders
        combine decades of industry experience with academic excellence to
        transform fitness education in India.
      </motion.p>

      {/* Founders Grid */}
      <motion.div
        className="space-y-12 md:space-y-24"
        variants={mobileOptimizedStagger}
      >
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            className="bg-[#141414] border border-[#2A2A2A] hover:border-[#00c8ff]/30 rounded-xl p-4 md:p-8 relative overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }} // Individual viewport for each card
            transition={{ duration: 0.4, delay: index * 0.1 }} // Faster animation
            whileHover={{ y: -5 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#00c8ff] to-blue-600 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#00c8ff] to-blue-600 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-20"></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative z-10">
              {/* Image Column */}
              <motion.div
                className="md:col-span-5 lg:col-span-4 flex flex-col items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {/* Founder Image */}
                <motion.div
                  className="w-48 h-48 md:w-60 md:h-60 rounded-xl overflow-hidden border-2 border-[#00c8ff]/30 p-1 bg-[#0a0a0a] mb-4 md:mb-6 relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.03, rotate: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/20 to-transparent rounded-xl"></div>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-[#00c8ff] text-black text-xs font-bold px-2 py-1 rounded-md">
                    {index === 0 ? "Founder" : "Co-Founder"}
                  </div>
                </motion.div>

                {/* Professional Badges */}
                <div className="space-y-2 w-full">
                  {founder.certifications.map((cert, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center bg-[#1a1a1a] border border-[#2A2A2A] rounded-lg px-3 py-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#00c8ff] mr-2 flex-shrink-0"></div>
                      <span className="text-xs text-gray-300 text-center md:text-left">
                        {cert}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                className="md:col-span-7 lg:col-span-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="space-y-4">
                  {/* Name and Title */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1 text-center md:text-left">
                      <span className="text-white">
                        {founder.name.split(" ")[0]}
                      </span>
                      <span className="text-[#00c8ff]">
                        {" "}
                        {founder.name.split(" ").slice(1).join(" ")}
                      </span>
                      {/* <span className="text-gray-400 text-lg ml-2">
                        ({founder.degree})
                      </span> */}
                    </h3>
                    {Array.isArray(founder.position) ? (
                      founder.position.map((pos, i) => (
                        <p
                          key={i}
                          className="text-[#00c8ff] font-medium text-center md:text-left"
                        >
                          {pos}
                        </p>
                      ))
                    ) : (
                      <p className="text-[#00c8ff] font-medium text-center md:text-left">
                        {founder.position}
                      </p>
                    )}
                    {Array.isArray(founder.specialty) ? (
                      founder.specialty.map((spec, i) => (
                        <p
                          key={i}
                          className="text-sm text-gray-400 text-center md:text-left"
                        >
                          {spec}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400 text-center md:text-left">
                        {founder.specialty}
                      </p>
                    )}
                  </div>

                  {/* Animated Divider */}
                  <motion.div
                    className="w-16 h-0.5 bg-gradient-to-r from-[#00c8ff] to-transparent mx-auto md:mx-0"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>

                  {/* Message */}
                  <div className="bg-[#1a1a1a]/50 rounded-lg p-4 md:p-5 border border-[#2A2A2A]">
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center justify-center md:justify-start">
                      <svg
                        className="w-5 h-5 mr-2 text-[#00c8ff]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                      Message from {founder.name}
                    </h4>

                    {founder.message.map((paragraph, pIndex) => (
                      <motion.div
                        key={pIndex}
                        className="mb-4 relative pl-4 md:pl-6"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + pIndex * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#00c8ff] to-transparent rounded-full"></div>
                        <p className="leading-relaxed text-gray-300 italic text-sm md:text-base">
                          {paragraph}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <div className="mt-12 md:mt-24 pt-8 md:pt-12 border-t border-[#2A2A2A] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { value: "26+", label: "Years Experience", icon: "⏱️" },
          { value: "2,500+", label: "Certified Professionals", icon: "🎓" },
          { value: "100%", label: "Placement Assistance", icon: "💼" },
          { value: "2006", label: "Founded", icon: "🏆" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            className="text-center bg-[#141414] border border-[#2A2A2A] rounded-lg p-3 md:p-4 relative overflow-hidden group hover:border-[#00c8ff]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute -bottom-2 -right-2 text-3xl md:text-5xl opacity-10 group-hover:opacity-20 transition-opacity">
              {stat.icon}
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00c8ff] mb-1 md:mb-2">
              {stat.value}
            </div>
            <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FoundersSection;
