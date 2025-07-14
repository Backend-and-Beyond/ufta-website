import * as React from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { pageAnimations, viewportSettings } from "../../utils/animations";

const ContactFormSection = () => {
  const animations = pageAnimations.standard;
  const controls = useAnimation();
  const formControls = useAnimation();
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = React.useState(null);

  // Animation for scanning effect
  React.useEffect(() => {
    controls.start({
      top: ["0%", "100%", "0%"],
      transition: { duration: 4, repeat: Infinity, ease: "linear" },
    });

    // Subtle form field animations
    const interval = setInterval(() => {
      formControls.start({
        boxShadow: [
          "0 0 0 rgba(0, 200, 255, 0)",
          "0 0 5px rgba(0, 200, 255, 0.3)",
          "0 0 0 rgba(0, 200, 255, 0)",
        ],
        transition: { duration: 2 },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [controls, formControls]);

  // Form input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <motion.section
      id="contact-form"
      className="py-12 md:py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={animations.fadeInUp}
    >
      {/* Sci-fi background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Futuristic grid for communication theme */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="h-full w-px bg-[#00c8ff]/40"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 opacity-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="w-full h-px bg-[#00c8ff]/40"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>

        {/* Digital communication waves */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient
              id="contactGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(0, 200, 255, 0.1)" />
              <stop offset="50%" stopColor="rgba(0, 200, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(0, 200, 255, 0.1)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,80 Q25,70 50,80 Q75,90 100,80"
            stroke="url(#contactGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.path
            d="M0,50 Q25,60 50,50 Q75,40 100,50"
            stroke="url(#contactGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <motion.path
            d="M0,20 Q25,10 50,20 Q75,30 100,20"
            stroke="url(#contactGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </svg>
      </div>

      <motion.div
        className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-4 md:p-6 lg:p-10 relative overflow-hidden z-10 max-w-6xl mx-auto shadow-xl"
        variants={animations.fadeInUp}
        custom={1}
      >
        {/* Section header with animated icon */}
        <div className="flex items-center justify-center mb-8 md:mb-10 relative px-4 md:px-0">
          <motion.div
            animate={{
              filter: [
                "drop-shadow(0 0 8px rgba(0, 200, 255, 0.3))",
                "drop-shadow(0 0 16px rgba(0, 200, 255, 0.6))",
                "drop-shadow(0 0 8px rgba(0, 200, 255, 0.3))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-8 h-8 md:w-12 md:h-12 mr-3 text-[#00c8ff]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </motion.div>

          <motion.div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              Get in <span className="text-[#00c8ff]">Touch</span>
            </h2>

            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-[#00c8ff]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Holographic indicators */}
            <motion.div
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#00c8ff]"
              animate={{
                opacity: [0.2, 1, 0.2],
                boxShadow: [
                  "0 0 2px rgba(0, 200, 255, 0.3)",
                  "0 0 10px rgba(0, 200, 255, 0.7)",
                  "0 0 2px rgba(0, 200, 255, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Sci-fi UI elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-70"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00c8ff]/30 opacity-70"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00c8ff]/30 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#00c8ff]/30 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00c8ff]/30 opacity-70"></div>

        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-40"
          animate={controls}
        />

        <motion.p
          className="text-center text-lg md:text-xl leading-relaxed mb-8 md:mb-10 text-gray-300 max-w-2xl mx-auto px-4 md:px-0"
          variants={animations.fadeInUp}
          custom={2}
        >
          Interested in our services?{" "}
          <span className="text-[#00c8ff] font-medium">Contact us</span> today
          to start your fitness journey with UFTA.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 px-4 md:px-0">
          {/* Contact Form */}
          <motion.form
            className="mt-6 md:mt-8 space-y-6 relative flex-1"
            variants={animations.staggerContainer}
            custom={3}
            onSubmit={handleSubmit}
          >
            <h3 className="text-lg md:text-xl font-semibold text-white mb-6 flex items-center">
              <motion.span
                className="inline-block w-2 h-2 rounded-full bg-[#00c8ff] mr-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Send us a message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <motion.div
                variants={animations.fadeInUp}
                custom={1}
                className="md:col-span-1"
              >
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300 flex items-center"
                >
                  <motion.span
                    className="inline-block w-1.5 h-1.5 rounded-full bg-[#00c8ff] mr-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Name
                </label>
                <div className="relative">
                  <motion.input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="bg-[#1A1A1A] border border-[#2A2A2A] text-gray-100 text-sm rounded-md focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full p-3 pl-4"
                    placeholder="Your name"
                    animate={formControls}
                    required
                    aria-required="true"
                    whileFocus={{
                      borderColor: "#00c8ff",
                      boxShadow: "0 0 0 1px rgba(0, 200, 255, 0.3)",
                    }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 h-full w-1 bg-[#00c8ff]/20 rounded-l-md"
                    whileHover={{ width: 4, opacity: 1 }}
                    whileFocus={{ width: 4, opacity: 1 }}
                    initial={{ opacity: 0.3 }}
                  />
                </div>
              </motion.div>

              <motion.div
                variants={animations.fadeInUp}
                custom={2}
                className="md:col-span-1"
              >
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300 flex items-center"
                >
                  <motion.span
                    className="inline-block w-1.5 h-1.5 rounded-full bg-[#00c8ff] mr-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  />
                  Email
                </label>
                <div className="relative">
                  <motion.input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="bg-[#1A1A1A] border border-[#2A2A2A] text-gray-100 text-sm rounded-md focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full p-3 pl-4"
                    placeholder="your.email@example.com"
                    animate={formControls}
                    required
                    aria-required="true"
                    whileFocus={{
                      borderColor: "#00c8ff",
                      boxShadow: "0 0 0 1px rgba(0, 200, 255, 0.3)",
                    }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 h-full w-1 bg-[#00c8ff]/20 rounded-l-md"
                    whileHover={{ width: 4, opacity: 1 }}
                    whileFocus={{ width: 4, opacity: 1 }}
                    initial={{ opacity: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>

            <motion.div variants={animations.fadeInUp} custom={3}>
              <label
                htmlFor="service"
                className="block mb-2 text-sm font-medium text-gray-300 flex items-center"
              >
                <motion.span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-[#00c8ff] mr-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                />
                Service of Interest
              </label>
              <div className="relative">
                <motion.select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleInputChange}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] text-gray-100 text-sm rounded-md focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full p-3"
                  animate={formControls}
                  required
                  aria-required="true"
                  whileFocus={{
                    borderColor: "#00c8ff",
                    boxShadow: "0 0 0 1px rgba(0, 200, 255, 0.3)",
                  }}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Strength & Conditioning">
                    Strength & Conditioning
                  </option>
                  <option value="Professional Training">
                    Professional Training
                  </option>
                  <option value="Nutritional Counselling">
                    Nutritional Counselling
                  </option>
                  <option value="Gym Equipment">Gym Equipment</option>
                  <option value="Gym Franchise">Gym Franchise</option>
                  <option value="Merchandise">Merchandise</option>
                </motion.select>
                <motion.div
                  className="absolute top-0 left-0 h-full w-1 bg-[#00c8ff]/20 rounded-l-md"
                  whileHover={{ width: 4, opacity: 1 }}
                  whileFocus={{ width: 4, opacity: 1 }}
                  initial={{ opacity: 0.3 }}
                />
                <motion.div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#00c8ff"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={animations.fadeInUp} custom={4}>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-300 flex items-center"
              >
                <motion.span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-[#00c8ff] mr-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
                />
                Message
              </label>
              <div className="relative">
                <motion.textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] text-gray-100 text-sm rounded-md focus:ring-[#00c8ff] focus:border-[#00c8ff] block w-full p-3 pl-4"
                  placeholder="How can we help you?"
                  animate={formControls}
                  required
                  aria-required="true"
                  whileFocus={{
                    borderColor: "#00c8ff",
                    boxShadow: "0 0 0 1px rgba(0, 200, 255, 0.3)",
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-full w-1 bg-[#00c8ff]/20 rounded-l-md"
                  whileHover={{ width: 4, opacity: 1 }}
                  whileFocus={{ width: 4, opacity: 1 }}
                  initial={{ opacity: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Submit button with sci-fi styling */}
            <motion.div
              className="mt-6 md:mt-8"
              variants={animations.fadeInUp}
              custom={5}
            >
              <motion.button
                type="submit"
                disabled={formStatus === "submitting"}
                className="relative bg-transparent border border-[#00c8ff] text-white hover:bg-[#00c8ff]/10 px-6 md:px-8 py-2 md:py-3 rounded-md overflow-hidden transition-all duration-300 w-full text-sm md:text-base"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(0, 200, 255, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 font-medium">
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </span>

                {/* Button animation effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/0 via-[#00c8ff]/30 to-[#00c8ff]/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />

                {/* Processing animation */}
                {formStatus === "submitting" && (
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[#00c8ff]/20"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5 }}
                  />
                )}
              </motion.button>
            </motion.div>
          </motion.form>

          {/* Direct Contact Information */}
          <motion.div
            className="mt-6 md:mt-8 relative flex-1 lg:max-w-sm bg-[#1A1A1A] rounded-lg p-4 md:p-6 border border-[#2A2A2A]"
            variants={animations.fadeInUp}
            custom={6}
          >
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center">
              <motion.span
                className="inline-block w-2 h-2 rounded-full bg-[#00c8ff] mr-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              Contact Information
            </h3>

            <div className="space-y-4 md:space-y-6">
              <motion.div
                className="flex items-start"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="mr-4 p-3 rounded-full bg-[#141414] border border-[#2A2A2A] mt-1"
                  animate={{
                    borderColor: ["#2A2A2A", "#00c8ff", "#2A2A2A"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#00c8ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-white font-medium mb-1 text-sm md:text-base">
                    Phone
                  </h4>
                  <motion.a
                    href="tel:+919864047046"
                    className="text-[#00c8ff] hover:underline block text-xs md:text-sm mb-1"
                    whileHover={{ x: 2 }}
                  >
                    +91 98640 47046
                  </motion.a>
                  <motion.a
                    href="tel:+919864026682"
                    className="text-[#00c8ff] hover:underline block text-xs md:text-sm"
                    whileHover={{ x: 2 }}
                  >
                    +91 98640 26682
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="mr-4 p-3 rounded-full bg-[#141414] border border-[#2A2A2A] mt-1"
                  animate={{
                    borderColor: ["#2A2A2A", "#00c8ff", "#2A2A2A"],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#00c8ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-white font-medium mb-1 text-sm md:text-base">
                    Email
                  </h4>
                  <motion.a
                    href="mailto:bibhuuniversal@gmail.com"
                    className="text-[#00c8ff] hover:underline block text-xs md:text-sm mb-1"
                    whileHover={{ x: 2 }}
                  >
                    bibhuuniversal@gmail.com
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="mr-4 p-3 rounded-full bg-[#141414] border border-[#2A2A2A] mt-1"
                  animate={{
                    borderColor: ["#2A2A2A", "#00c8ff", "#2A2A2A"],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#00c8ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-white font-medium mb-1 text-sm md:text-base">
                    Address
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm mb-2">
                    Opposite Karbi Juba Sangha, Near L.P. School, Hengrabari
                    <br />
                    Guwahati, Assam 781036
                  </p>
                  <div className="mb-2 rounded-lg overflow-hidden border border-[#00c8ff]/30 shadow-lg">
                    <a
                      href="https://maps.app.goo.gl/z3AywPkioEZJAW3o8"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open UFTA location in Google Maps"
                      className="block hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#00c8ff]"
                    >
                      <iframe
                        title="UFTA Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.234073964839!2d91.736!3d26.144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjbCsDA4JzM4LjAiTiA5McKwNDQnMDkuNiJF!5e0!3m2!1sen!2sin!4v1720950000000!5m2!1sen!2sin"
                        width="100%"
                        height="100"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-24 md:h-28 rounded-lg"
                      ></iframe>
                    </a>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/z3AywPkioEZJAW3o8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00c8ff] font-semibold font-poppins underline hover:text-white transition-colors duration-200"
                  ></a>
                </div>
              </motion.div>

              {/* Social Media Links */}
              <div className="pt-4 md:pt-6 mt-4 md:mt-6 border-t border-[#2A2A2A]">
                <h4 className="text-white font-medium mb-3 md:mb-4 text-sm md:text-base">
                  Connect With Us
                </h4>
                <div className="flex space-x-2 md:space-x-3">
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-[#141414] rounded-full border border-[#2A2A2A] hover:border-[#00c8ff] transition-colors duration-300"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 4px 12px rgba(0, 200, 255, 0.3)",
                    }}
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#00c8ff]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-[#141414] rounded-full border border-[#2A2A2A] hover:border-[#00c8ff] transition-colors duration-300"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 4px 12px rgba(0, 200, 255, 0.3)",
                    }}
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#00c8ff]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-[#141414] rounded-full border border-[#2A2A2A] hover:border-[#00c8ff] transition-colors duration-300"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 4px 12px rgba(0, 200, 255, 0.3)",
                    }}
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#00c8ff]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-[#141414] rounded-full border border-[#2A2A2A] hover:border-[#00c8ff] transition-colors duration-300"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 4px 12px rgba(0, 200, 255, 0.3)",
                    }}
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#00c8ff]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success message with animation */}
        <AnimatePresence>
          {formStatus === "success" && (
            <motion.div
              className="absolute inset-0 bg-[#141414]/95 flex items-center justify-center z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full border-2 border-[#00c8ff] flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0, 200, 255, 0.3)",
                      "0 0 20px rgba(0, 200, 255, 0.7)",
                      "0 0 0 rgba(0, 200, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-8 md:w-8 text-[#00c8ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl md:text-2xl text-white font-bold mb-2">
                  Message Sent
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Thank you for contacting UFTA. We'll respond to your inquiry
                  shortly.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default ContactFormSection;
