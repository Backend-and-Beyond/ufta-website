import * as React from "react";
import { Link } from "gatsby";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { pageAnimations } from "../../utils/animations";

// Simple counter animation component
const CountUp = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState("0");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  React.useEffect(() => {
    if (!isInView) return;

    let startValue = 0;
    const endValue = parseInt(value.replace(/\D/g, ""));
    const duration = 1500;
    const startTime = Date.now();

    const animateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentValue = Math.floor(progress * endValue);
      if (currentValue !== startValue) {
        startValue = currentValue;
        setDisplayValue(`${currentValue}${value.includes("+") ? "+" : ""}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const WelcomeToUftaSection = () => {
  const { fadeIn, staggerContainer } = pageAnimations.standard;
  const [ref, setRef] = React.useState(null);
  const titleRef = React.useRef(null);
  const isInView = useInView(titleRef, { once: false, margin: "-100px 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Enhanced smoother motion values with springs
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 80,
  });
  const y = useTransform(smoothProgress, [0, 1], [150, -150]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Advanced splitting text animation for title
  const titleChars = "Welcome to UFTA".split("");

  // Letter by letter text reveal animation
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      rotateY: 60,
      filter: "blur(8px)",
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.06,
        type: "spring",
        damping: 16,
        stiffness: 70,
        duration: 0.8,
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -40,
      filter: "blur(8px)",
      transition: {
        delay: i * 0.04,
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  // Dynamic 3D floating stats counter animation with parallax depth
  const statsCounterVariant = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotateY: 60,
      perspective: 1200,
      filter: "blur(12px)",
      z: -100,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      z: 0,
      transition: {
        delay: i * 0.18,
        type: "spring",
        damping: 12,
        stiffness: 70,
        duration: 0.9,
      },
    }),
    hover: {
      scale: 1.1,
      y: -15,
      rotateY: 10,
      z: 50,
      boxShadow: "0 25px 50px -12px rgba(0, 200, 255, 0.25)",
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  // Subtle fade-in with slight upward slide
  const contentCardVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Morphing background blobs animation
  const blobVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
    },
    visible: (i) => ({
      opacity: [0, 0.08, 0.05],
      scale: 1,
      borderRadius: [
        "40% 60% 70% 30% / 40% 50% 60% 50%",
        "70% 30% 50% 50% / 30% 60% 40% 70%",
        "40% 60% 30% 70% / 60% 30% 70% 40%",
        "40% 60% 70% 30% / 40% 50% 60% 50%",
      ],
      transition: {
        duration: 20,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        delay: i * 2,
        times: [0, 0.33, 0.66, 1],
      },
    }),
  };

  return (
    <motion.section
      ref={setRef}
      className="py-16 md:py-24 px-4 md:px-6 bg-[#0F0F0F] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated Morphing Background Blobs */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: `${index * 20 + Math.random() * 10}%`,
              left: `${index * 20 + Math.random() * 10}%`,
              width: `${300 + index * 100}px`,
              height: `${300 + index * 100}px`,
              background:
                "radial-gradient(circle, rgba(0,200,255,0.15) 0%, rgba(0,0,0,0) 70%)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
            custom={index}
            variants={blobVariants}
          />
        ))}

        {/* Parallax scrolling background effect */}
        <motion.div
          className="absolute w-full h-full opacity-30"
          style={{
            backgroundImage: "url('/circuit-pattern.svg')",
            backgroundSize: "cover",
            y,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Letter by letter animated title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16 md:mb-20"
          variants={staggerContainer}
        >
          <div className="flex justify-center items-center flex-wrap h-16 md:h-24 mb-4 overflow-hidden">
            <AnimatePresence mode="wait">
              {isInView && (
                <div className="flex justify-center items-baseline">
                  {titleChars.map((char, i) => (
                    <motion.span
                      key={`${char}-${i}`}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins inline-block mx-[1px] md:mx-[2px]"
                      style={{
                        color: char !== " " ? "#00c8ff" : "transparent",
                        textShadow: "0 0 20px rgba(0, 200, 255, 0.3)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent mx-auto mb-6 md:mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isInView ? "180px" : "0px",
              opacity: isInView ? 1 : 0,
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 10,
                delay: 0.6,
              },
            }}
          />

          <motion.p
            className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-poppins px-4"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 40,
              scale: isInView ? 1 : 0.9,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 12,
                delay: 0.8,
              },
            }}
          >
            Transforming passionate fitness enthusiasts into industry-leading
            professionals since 2006
          </motion.p>
        </motion.div>

        {/* Enhanced 3D Floating Stats Grid with Counter Animation */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"
          variants={staggerContainer}
          style={{
            perspective: 1500,
            transformStyle: "preserve-3d",
          }}
        >
          {[
            { number: "19+", label: "Years of Excellence", icon: "⭐" },
            { number: "2500+", label: "Certified Professionals", icon: "🏆" },
            { number: "50+", label: "Training Programs", icon: "📊" },
            { number: "100%", label: "Job Placement Support", icon: "🚀" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              custom={index}
              variants={statsCounterVariant}
              whileHover="hover"
              whileTap={{ scale: 0.95, rotateY: -5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#00c8ff]/40 to-[#00c8ff]/5 opacity-0 group-hover:opacity-100 blur-xl"
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="relative z-10 text-center bg-[#141414]/80 backdrop-blur-sm border border-[#2A2A2A] p-5 md:p-7 rounded-xl group-hover:border-[#00c8ff] transition-all duration-300 h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Floating icon with parallax effect */}
                <motion.div
                  className="text-3xl mb-3 md:mb-4 bg-gradient-to-br from-[#00c8ff] to-[#0088aa] inline-block p-3 rounded-full"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    y: [0, -8, 0],
                    rotateZ: [0, 5, 0, -5, 0],
                    transition: {
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {stat.icon}
                </motion.div>

                <motion.div
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00c8ff] mb-2 md:mb-3 font-poppins"
                  style={{ transformStyle: "preserve-3d" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.3 + index * 0.2,
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                    },
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {/* Number counter animation */}
                  <CountUp value={stat.number} />
                </motion.div>

                <motion.p
                  className="text-sm md:text-base text-gray-400 font-poppins"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      delay: 0.4 + index * 0.2,
                      duration: 0.6,
                    },
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {stat.label}
                </motion.p>

                {/* Floating sparkle effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-[#00c8ff]"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        boxShadow: "0 0 10px 2px rgba(0, 200, 255, 0.4)",
                      }}
                      animate={{
                        y: [0, -10 - i * 5],
                        x: [0, i % 2 === 0 ? 10 : -10],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1 + i * 0.2,
                        repeat: Infinity,
                        repeatDelay: i * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple Content Grid with Unified Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {[
              {
                title: "Our Legacy",
                content:
                  "Established in 2006, the Universal Fitness Training Academy (UFTA) stands as one of India’s leading institutions dedicated to advancing education in sports performance, exercise science, health, and fitness. With an unwavering commitment to academic and professional excellence, UFTA has successfully trained and certified over 2,500 professionals in the fields of strength and conditioning (S&amp;C), fitness, and nutrition.",
              },
              {
                title: "Our Mission",
                content:
                  "To bridge the gap between evidence-based practice and the real-world application of sports performance and fitness training—backed by research, driven by science, and focused on results—and to foster a new generation of strength and conditioning practitioners and fitness leaders through rigorous academic programs, practical training, and a passion for advancing sports performance and exercise sciences. We ensure our graduates are well-equipped to excel in the dynamic sports performance and fitness industry.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#141414] border border-[#2A2A2A] p-6 md:p-8 rounded-lg relative overflow-hidden"
                variants={contentCardVariant}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#00c8ff] font-poppins relative z-10">
                  {item.title}
                </motion.h3>

                <motion.p className="text-sm md:text-base text-gray-400 relative z-10">
                  {item.content}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Right Content */}
          <div className="space-y-6 md:space-y-8">
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
                className="bg-[#141414] border border-[#2A2A2A] p-6 md:p-8 rounded-lg relative overflow-hidden"
                variants={contentCardVariant}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#00c8ff] font-poppins relative z-10">
                  {item.title}
                </motion.h3>

                <motion.p className="text-sm md:text-base text-gray-400 relative z-10">
                  {item.content}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WelcomeToUftaSection;
