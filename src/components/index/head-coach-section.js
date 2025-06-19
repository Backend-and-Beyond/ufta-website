import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { pageAnimations } from "../../utils/animations";

const HeadCoachSection = () => {
  const { fadeIn, fadeInUp, slideInLeft, slideInRight } =
    pageAnimations.standard;

  return (
    <motion.section
      className="py-20 bg-[#0F0F0F]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold mb-12" variants={fadeInUp}>
          Head Coach, UFTA
        </motion.h2>
        <motion.div className="card p-8 rounded-sm" variants={fadeInUp}>
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <motion.div className="md:col-span-1" variants={slideInLeft}>
              <StaticImage
                src="../../images/bhibhu.png"
                alt="Bibhu Moni Singha"
                className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover mx-auto border-4 border-amber-400/20"
                width={240}
                height={240}
              />
            </motion.div>
            <motion.div className="md:col-span-2" variants={slideInRight}>
              <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
                Dr. Bibhu Moni Singha
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 font-poppins">
                Dr. Bibhu Moni Singha is one of India's leading fitness experts
                and sports nutritionists with over 20 years of experience in the
                fitness industry. Recognized with prestigious awards, including
                the "Excellent Personal Trainer of the Year 2018" and "India's
                Best Fitness Trainer of the Year."
              </p>
              <p className="text-gray-300 leading-relaxed font-poppins">
                As the Director of Certification at Universal Fitness Training
                Academy and Head Coach at Super Fight League Gym, he specializes
                in sports nutrition, strength and conditioning, injury
                rehabilitation, and performance enhancement.
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
                  Certified Strength and Conditioning Coach with expertise in
                  Olympic weightlifting.
                </p>
              </div>
              <div className="card p-4 rounded-sm">
                <h4 className="font-semibold text-amber-400 mb-2 font-poppins">
                  MPPT & CSN PROPTA USA
                </h4>
                <p className="text-gray-400 text-sm font-poppins">
                  Certified in Mental Performance and Sports Nutrition from
                  PROPTA USA.
                </p>
              </div>
            </div>
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
                  Certified Strength and Conditioning Coach with expertise in
                  Olympic weightlifting.
                </p>
              </div>
              <div className="card p-4 rounded-sm">
                <h4 className="font-semibold text-amber-400 mb-2 font-poppins">
                  MPPT & CSN PROPTA USA
                </h4>
                <p className="text-gray-400 text-sm font-poppins">
                  Certified in Mental Performance and Sports Nutrition from
                  PROPTA USA.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeadCoachSection;
