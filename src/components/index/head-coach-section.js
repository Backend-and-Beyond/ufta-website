import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { pageAnimations } from "../../utils/animations";

const HeadCoachSection = () => {
  const { fadeIn, fadeInUp, slideInLeft, slideInRight } =
    pageAnimations.standard;

  return (
    <motion.section
      className="py-12 md:py-20 bg-[#0F0F0F]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center md:text-left" variants={fadeInUp}>
          Director, UFTA
        </motion.h2>
        <motion.div className="card p-4 md:p-8 rounded-sm" variants={fadeInUp}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
            <motion.div className="md:col-span-1 text-center" variants={slideInLeft}>
              <StaticImage
                src="../../images/bhibhu.png"
                alt="Bibhu Moni Singha"
                className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full object-cover mx-auto border-4 border-amber-400/20"
                width={240}
                height={240}
              />
            </motion.div>
            <motion.div className="md:col-span-2 text-center md:text-left" variants={slideInRight}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 font-poppins">
                Dr. Bibhu Moni Singha
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4 font-poppins">
                Dr. Bibhu Moni Singha is one of India's leading fitness experts
                and sports nutritionists with over 20 years of experience in the
                fitness industry. Recognized with prestigious awards, including
                the "Excellent Personal Trainer of the Year 2018" and "India's
                Best Fitness Trainer of the Year."
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-poppins">
                As the Director of Certification at Universal Fitness Training
                Academy and Head Coach at Super Fight League Gym, he specializes
                in sports nutrition, strength and conditioning, injury
                rehabilitation, and performance enhancement.
              </p>
            </motion.div>
          </div>
          <motion.div className="mt-8 md:mt-12" variants={fadeInUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="card p-3 md:p-4 rounded-sm">
                <h4 className="font-semibold text-amber-400 mb-2 font-poppins text-sm md:text-base">
                  Master Trainer TECHNOGYM
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-poppins">
                  Certified Master Trainer for TECHNOGYM, specializing in
                  advanced fitness equipment and training programs.
                </p>
              </div>
              <div className="card p-3 md:p-4 rounded-sm">
                <h4 className="font-semibold text-amber-400 mb-2 font-poppins text-sm md:text-base">
                  IUSCA/USAW Level 2
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-poppins">
                  Certified Strength and Conditioning Coach with expertise in
                  Olympic weightlifting.
                </p>
              </div>
              <div className="card p-3 md:p-4 rounded-sm">
                <h4 className="font-semibold text-amber-400 mb-2 font-poppins text-sm md:text-base">
                  MPPT & CSN PROPTA USA
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-poppins">
                  Certified in Mental Performance and Sports Nutrition from
                  PROPTA USA.
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeadCoachSection;
