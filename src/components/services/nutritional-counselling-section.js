import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { pageAnimations, viewportSettings } from "../../utils/animations";

const NutritionalCounsellingSection = () => {
  const animations = pageAnimations.standard;
  const controls = useAnimation();

  // Animation for the nutrition icon
  React.useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 3, repeat: Infinity, repeatType: "reverse" },
    });
  }, [controls]);

  return (
    <motion.section
      id="nutritional-counselling"
      className="py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={animations.fadeInUp}
    >
      {/* Sci-fi background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl"></div>

        {/* DNA-like structure (representing nutrition science) */}
        <div className="absolute right-10 top-1/4 bottom-1/4 w-1 opacity-20">
          {Array.from({ length: 15 }).map((_, i) => (
            <React.Fragment key={i}>
              <motion.div
                className="absolute w-12 h-px bg-amber-400"
                style={{
                  top: `${i * 30}px`,
                  transform: "rotate(30deg)",
                  transformOrigin: "left center",
                }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
              <motion.div
                className="absolute w-12 h-px bg-[#00c8ff]"
                style={{
                  top: `${i * 30 + 15}px`,
                  transform: "rotate(-30deg)",
                  transformOrigin: "left center",
                }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2 + 0.5,
                }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Section header with animated icon */}
      <div className="relative z-10 mb-12">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="flex items-center justify-center mb-6"
            animate={controls}
          >
            <motion.svg
              className="w-12 h-12 mr-3 text-[#00c8ff]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.75c2.463 0 4.725-.924 6.407-2.552M12 21.75c-2.463 0-4.725-.924-6.407-2.552M12 21.75V14.25M12 14.25A6.375 6.375 0 0 0 12 1.75a6.375 6.375 0 0 0-6.375 6.375c0 2.758 1.68 5.132 4.068 6.016M12 1.75a6.375 6.375 0 0 1 6.375 6.375c0 2.758-1.68 5.132-4.068 6.016m0 0H7.932m8.136 0H12m0 0V6.375m0 7.875A2.625 2.625 0 1 0 12 1.75a2.625 2.625 0 0 0 0 5.25m0 7.5a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center relative tracking-wider"
            variants={animations.slideInLeft}
          >
            Online/Offline Nutritional{" "}
            <span className="text-[#00c8ff] relative">
              Counselling & Education
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00c8ff]"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 0.8 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mt-6 opacity-60"
            animate={{
              width: ["0%", "100%", "0%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Main content with sci-fi grid cards */}
      <motion.div
        className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10"
        variants={animations.staggerContainer}
      >
        <motion.div
          className="bg-black/40 backdrop-blur-sm rounded-lg p-8 relative overflow-hidden border border-[#2A2A2A] group hover:border-amber-500/70 transition-all duration-300"
          variants={animations.scaleUp}
          whileHover={{ y: -5 }}
          style={{
            boxShadow:
              "0 0 20px rgba(0, 200, 255, 0.05), inset 0 0 15px rgba(0, 200, 255, 0.02)",
          }}
        >
          {/* Animated border effects */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-500 via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-transparent to-amber-500 opacity-30"></div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl border-amber-500/70"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr border-amber-500/70"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl border-amber-500/70"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br border-amber-500/70"></div>

          {/* Nutritional banner with holographic effect */}
          <motion.div
            className="w-full h-48 rounded-lg mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500"
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-700/90 backdrop-blur"></div>
            <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-20"></div>

            {/* Animated glow effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                translateX: ["-100%", "100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </motion.div>

            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-white font-bold text-xl tracking-wide flex flex-col items-center">
                <motion.span
                  className="uppercase text-2xl tracking-widest"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(245,158,11,0.5)",
                      "0 0 15px rgba(245,158,11,0.8)",
                      "0 0 5px rgba(245,158,11,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Nutrition Guidance
                </motion.span>
                <span className="text-sm mt-2 opacity-80 tracking-wider">
                  PERSONALIZED PLANS
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h3
            className="text-2xl font-semibold mb-4 text-white tracking-wide"
            variants={animations.fadeInUp}
          >
            Personalized Nutritional Counselling
          </motion.h3>

          <motion.p
            className="text-gray-300 leading-relaxed mb-4 font-light"
            variants={animations.fadeInUp}
            custom={1}
          >
            UFTA's certified sports nutritionists and exercise scientists offer
            personalized online and offline nutritional counselling. We develop{" "}
            <span className="text-amber-400 font-normal">
              evidence-based dietary plans
            </span>{" "}
            tailored to your specific fitness goals, whether for athletic
            performance enhancement, weight management, improving body
            composition, or overall health and wellness.
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed mb-6 font-light"
            variants={animations.fadeInUp}
            custom={2}
          >
            Our approach is{" "}
            <span className="text-amber-400 font-normal">
              scientific, practical, and sustainable
            </span>
            .
          </motion.p>

          <motion.a
            href="#contact-form"
            className="inline-flex items-center justify-center bg-transparent border border-amber-500 text-white hover:bg-amber-500/10 px-6 py-2 rounded transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Book a Consultation</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 transform translate-x-[-100%]"
              animate={{ translateX: ["100%", "-100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </motion.a>
        </motion.div>

        <motion.div
          className="bg-black/40 backdrop-blur-sm rounded-lg p-8 relative overflow-hidden border border-[#2A2A2A] group hover:border-amber-500/70 transition-all duration-300"
          variants={animations.scaleUp}
          whileHover={{ y: -5 }}
          style={{
            boxShadow:
              "0 0 20px rgba(0, 200, 255, 0.05), inset 0 0 15px rgba(0, 200, 255, 0.02)",
          }}
        >
          {/* Animated border effects */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-500 via-transparent to-transparent opacity-30"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-transparent to-amber-500 opacity-30"></div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl border-amber-500/70"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr border-amber-500/70"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl border-amber-500/70"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br border-amber-500/70"></div>

          {/* Background circuit pattern */}
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5 pointer-events-none"></div>

          <motion.h3
            className="text-2xl font-semibold mb-4 text-white tracking-wide"
            variants={animations.fadeInUp}
          >
            Sports Nutrition Certification Courses
          </motion.h3>

          <motion.p
            className="text-gray-300 leading-relaxed mb-4 font-light"
            variants={animations.fadeInUp}
            custom={1}
          >
            Gain expertise in the science of sports nutrition and learn to
            advise athletes and active individuals effectively.
          </motion.p>

          <motion.div
            className="space-y-6 mb-6"
            variants={animations.staggerContainer}
            custom={2}
          >
            <motion.div
              className="p-5 bg-black/30 border border-[#2A2A2A] rounded-lg relative"
              variants={animations.fadeInUp}
              whileHover={{ y: -3, borderColor: "rgba(245,158,11,0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit-pattern.svg')] opacity-5 pointer-events-none"></div>

              <h4 className="font-semibold text-amber-400 mb-3 flex items-center">
                <motion.span
                  className="inline-block w-2 h-2 bg-amber-400 mr-2 rounded-full"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      "0 0 0px #F59E0B",
                      "0 0 10px #F59E0B",
                      "0 0 0px #F59E0B",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Accredited Advanced Diploma in Sports & Exercise Nutrition
                (Level-6):
              </h4>

              <ul className="list-none pl-4 text-gray-300 space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 bg-amber-400 mr-2 rounded-full opacity-70"></span>
                  <span className="text-white font-medium">Price:</span>
                  <span className="ml-2">₹1,27,700</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 bg-amber-400 mr-2 rounded-full opacity-70"></span>
                  <span className="text-white font-medium">Mode:</span>
                  <span className="ml-2">Offline & Online</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 bg-amber-400 mr-2 rounded-full opacity-70"></span>
                  <span className="text-white font-medium">Details:</span>
                  <span className="ml-2">
                    Details on duration and eligibility will be provided upon
                    inquiry
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-5 bg-black/30 border border-[#2A2A2A] rounded-lg relative"
              variants={animations.fadeInUp}
              whileHover={{ y: -3, borderColor: "rgba(245,158,11,0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit-pattern.svg')] opacity-5 pointer-events-none"></div>

              <h4 className="font-semibold text-amber-400 mb-3 flex items-center">
                <motion.span
                  className="inline-block w-2 h-2 bg-amber-400 mr-2 rounded-full"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      "0 0 0px #F59E0B",
                      "0 0 10px #F59E0B",
                      "0 0 0px #F59E0B",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                PROPTA International Sports Nutrition Certification:
              </h4>

              <ul className="list-none pl-4 text-gray-300 space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 bg-amber-400 mr-2 rounded-full opacity-70"></span>
                  <span className="text-white font-medium">Price:</span>
                  <span className="ml-2">$1800 USD</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 bg-amber-400 mr-2 rounded-full opacity-70"></span>
                  <span className="text-white font-medium">Mode:</span>
                  <span className="ml-2">Online/Offline Blend Mode</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1 h-1 bg-amber-400 mr-2 rounded-full opacity-70"></span>
                  <span className="text-white font-medium">Includes:</span>
                  <span className="ml-2">
                    Courses like Nutrition Tech (CNT) and Nutrition Consultant
                    (CNC)
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.a
            href="#contact-form"
            className="inline-flex items-center justify-center bg-transparent border border-amber-500 text-white hover:bg-amber-500/10 px-6 py-2 rounded transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Enquire Now</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 transform translate-x-[-100%]"
              animate={{ translateX: ["100%", "-100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default NutritionalCounsellingSection;
