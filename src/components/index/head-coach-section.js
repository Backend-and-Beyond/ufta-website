import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const HeadCoachSection = () => {
  // Simple, non-blinking animations with original left-right style
  const slideInLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideInRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 md:py-20 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl md:text-3xl font-bold section-heading mb-8 md:mb-12 font-poppins text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariant}
        >
          Meet the Director of UFTA
        </motion.h2>
        <div className="card p-4 md:p-8 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
            <motion.div
              className="md:col-span-1 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeftVariant}
            >
              <StaticImage
                src="../../images/bhibhu.png"
                alt="Bibhu Moni Singha"
                className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full object-cover mx-auto border-4 border-amber-400/20"
                width={240}
                height={240}
              />
            </motion.div>
            <motion.div
              className="md:col-span-2 text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariant}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 font-poppins">
                Dr. Bibhu Moni Singha
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4 font-poppins ">
                Dr. Bibhu Moni Singha is an Internationally Accredited Strength
                & Conditioning Expert, High Performance Olympic Weightlifting
                Coach, Sports Nutritionist, and Injury Rehabilitation
                Specialist. With over <b>26 years</b> of experience and{" "}
                <b>93,000+ hours</b> dedicated to the sports, fitness, and
                nutrition industry, Dr. Bibhu Moni Singha is a globally
                recognized expert in <b> strength & conditioning</b>,{" "}
                <b>sports nutrition</b>, <b>injury rehabilitation</b>, and{" "}
                <b>Olympic weightlifting</b>. He has personally trained{" "}
                <b>36,000+</b> athletes and clients, including Olympians,
                professional bodybuilders, corporate leaders, and senior
                bureaucrats. As a Director of Certification at Universal Fitness
                Training Academy since 2006, Dr. Bibhu has certified{" "}
                <b>2,500+</b> fitness professionals and played a pivotal role in
                introducing India’s first 4-year B.Sc. (Hons.) in{" "}
                <b>Fitness & Athletic Conditioning</b> under the NEP 2020, in
                collaboration with Mahapurusha Srimanta Sankardeva
                Viswavidyalaya.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4 font-poppins ">
                A <b>CASES UK</b> Accredited Sport & Exercise Scientist, Dr.
                Bibhu is a renowned speaker at global conferences on strength &
                conditioning, velocity-based training, and sports rehab. His
                award-winning research has shaped modern strength training
                principles and his pioneering work introduced India’s first
                4-year <b>B.Sc. in Fitness & Athletic Conditioning (Honours)</b>
                .
              </p>

              <ul className="text-gray-300 text-sm md:text-base leading-relaxed font-poppins  list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold text-amber-400">
                    Academic & Research Excellence:
                  </span>{" "}
                  Selected for the{" "}
                  <span className="font-semibold text-amber-400">
                    Applied Science Award
                  </span>{" "}
                  at the 7th SCS Annual Conference (Spain, 2024) for his
                  research:{" "}
                  <span className="italic">
                    “Age-Specific Considerations in Strength and Conditioning
                    Programs: A Narrative Review”
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-amber-400">
                    Published multiple peer-reviewed articles
                  </span>
                  , advancing evidence-based practices in strength,
                  conditioning, and rehabilitation
                </li>
                <li>
                  <span className="font-semibold text-amber-400">
                    Frequent keynote speaker and presenter
                  </span>{" "}
                  at national and international conferences on topics like
                  velocity-based training, injury reconditioning, and peak
                  sports performance
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            className="mt-8 md:mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariant}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="card p-3 md:p-4 rounded-sm">
                <h4 className="font-semibold text-amber-400 mb-2 font-poppins text-sm md:text-base">
                  mISCP (Level 8), IUSCA
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-poppins">
                  Recognized as a top-tier expert in global S&C standards
                </p>
              </div>
              <div className="card p-3 md:p-4 rounded-sm">
                <h4 className="font-semibold text-amber-400 mb-2 font-poppins text-sm md:text-base">
                  USAW Level 2
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-poppins">
                  Trained under Olympic coach Mike McKenna, credentialed by USA
                  Weightlifting
                </p>
              </div>

              <div className="card p-3 md:p-4 rounded-sm">
                <h4 className="font-semibold text-amber-400 mb-2 font-poppins text-sm md:text-base">
                  PROPTA MPPT and CSN (USA)
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-poppins">
                  Certified Master Personal Trainer and Certified Sports
                  Nutritionist by PROPTA USA
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="card p-3 md:p-4 rounded-sm">
                <h4 className="font-semibold text-amber-400 mb-2 font-poppins text-sm md:text-base">
                  NSCA CSCS
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-poppins">
                  Certified Strength and Conditioning Specialist
                </p>
              </div>
              <div className="card p-3 md:p-4 rounded-sm">
                <h4 className="font-semibold text-amber-400 mb-2 font-poppins text-sm md:text-base">
                  Technogym Master Trainer
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-poppins">
                  Certified in advanced equipment training and programming
                </p>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center mt-8">
            <a
              href="/head-coach"
              className="inline-block px-6 py-2 rounded bg-amber-400 text-black font-semibold font-poppins shadow hover:bg-amber-500 transition-colors duration-200"
            >
              Learn More About Dr. Bibhu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadCoachSection;
