import * as React from "react";
import { motion } from "framer-motion";
import { pageAnimations } from "../../utils/animations";

const TaglineSection = () => {
  const { fadeIn, fadeInUp } = pageAnimations.standard;

  return (
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
  );
};

export default TaglineSection;
