// filepath: /home/biswa/Desktop/Ufta/ufta-gatsby/src/components/index/get-in-touch-section.js
import * as React from "react";
import { motion } from "framer-motion";

const GetInTouchSection = () => {
  // Simple, non-blinking animation variants
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-[#0F0F0F] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-20 md:h-20 border border-[#00c8ff]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-12 right-12 md:bottom-20 md:right-20 w-20 h-20 md:w-32 md:h-32 border border-[#00c8ff]/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/4 w-12 h-12 md:w-16 md:h-16 border border-[#00c8ff]/20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 font-poppins bg-gradient-to-r from-white via-[#00c8ff] to-white bg-clip-text text-transparent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpVariant}
            whileHover={{ scale: 1.02 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-poppins"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            Ready to transform your fitness career? Connect with our expert team
            and take the first step towards excellence.
          </motion.p>
        </div>

        {/* Contact Cards Grid */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16 justify-center items-center md:items-stretch w-full">
          {/* Phone Contact Card */}
          <motion.div
            className="bg-gradient-to-br from-[#00c8ff]/10 to-[#0099cc]/5 border border-[#2A2A2A] p-6 md:p-8 rounded-xl hover:border-[#00c8ff]/50 group relative overflow-hidden w-full max-w-sm md:flex-1 md:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="text-4xl mb-4 relative z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                bounce: 0.3,
              }}
              viewport={{ once: true }}
            >
              📞
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-[#00c8ff] font-poppins relative z-10">
              Call Us
            </h3>
            <p className="text-gray-300 mb-3 md:mb-4 font-poppins relative z-10 text-sm md:text-base">
              Speak directly with our admissions counselors
            </p>
            <motion.a
              href="tel:+919864047046"
              className="text-[#00c8ff] hover:text-white font-semibold font-poppins transition-colors duration-300 relative z-10 inline-flex items-center group"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              +91 98640 47046
              <motion.svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.a>
            <motion.a
              href="tel:+919864026682"
              className="text-[#00c8ff] hover:text-white font-semibold font-poppins transition-colors duration-300 relative z-10 inline-flex items-center group"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              +91 98640 26682
              <motion.svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
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
            className="bg-gradient-to-br from-[#0099cc]/10 to-[#00c8ff]/5 border border-[#2A2A2A] p-6 md:p-8 rounded-xl hover:border-[#00c8ff]/50 group relative overflow-hidden w-full max-w-sm md:flex-1 md:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="text-4xl mb-4 relative z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                type: "spring",
                bounce: 0.3,
              }}
              viewport={{ once: true }}
            >
              ✉️
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-[#00c8ff] font-poppins relative z-10">
              Email Us
            </h3>
            <p className="text-gray-300 mb-3 md:mb-4 font-poppins relative z-10 text-sm md:text-base">
              Get detailed information about our programs
            </p>
            <motion.a
              href="mailto:bibhuuniversal@gmail.com"
              className="text-[#00c8ff] hover:text-white font-semibold font-poppins transition-colors duration-300 relative z-10 inline-flex items-center group"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              bibhuuniversal@gmail.com
              <motion.svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
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

          <motion.div
            className="bg-gradient-to-br from-[#0066ff]/10 to-[#00c8ff]/5 border border-[#2A2A2A] p-6 md:p-8 rounded-xl hover:border-[#00c8ff]/50 group relative overflow-hidden w-full max-w-sm md:flex-1 md:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00c8ff]/5 via-transparent to-[#00c8ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="text-4xl mb-4 relative z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                type: "spring",
                bounce: 0.3,
              }}
              viewport={{ once: true }}
            >
              📍
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-[#00c8ff] font-poppins relative z-10">
              Visit Our Campus
            </h3>
            <p className="text-gray-300 mb-4 font-poppins relative z-10">
              Experience our world-class facilities firsthand
            </p>
            <a
              href="https://maps.app.goo.gl/z3AywPkioEZJAW3o8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00c8ff] font-semibold font-poppins relative z-10 hover:underline inline-flex items-center group"
            >
              Get Directions
              <motion.svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </a>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <div className="py-20 bg-[#0F0F0F] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/5 via-[#00c8ff]/10 to-[#00c8ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 font-poppins text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideUpVariant}
              >
                Ready to Begin Your Journey?
              </motion.h3>
              <motion.p
                className="text-gray-300 text-lg leading-relaxed font-poppins mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariant}
              >
                Whether you're looking to start a new career in fitness or
                enhance your existing skills, our team is here to guide you
                every step of the way.
              </motion.p>

              {/* Additional Contact Methods */}
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
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
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
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
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
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
              </div>
            </div>

            {/* Right Column - CTA */}
            <motion.div
              className="bg-gradient-to-br from-[#00c8ff]/10 via-[#00c8ff]/5 to-[#00c8ff]/10 border border-[#00c8ff]/30 p-8 rounded-xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
            >
              <h4 className="text-xl font-bold mb-4 font-poppins text-white">
                Start Your Fitness Career Today
              </h4>
              <p className="text-gray-300 mb-6 font-poppins">
                Join thousands of successful fitness professionals who chose
                UFTA as their launchpad to success
              </p>

              <div className="space-y-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariant}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 10px 30px rgba(0, 200, 255, 0.2)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
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
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariant}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    borderColor: "#00c8ff",
                    boxShadow: "0 8px 20px rgba(0, 200, 255, 0.15)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="/contact"
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
