import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"
import InteractiveApprovalBadge from "../interactive-approval-badge"

const InteractiveAchievementsSection = () => {
  const { staggerContainer, gentleFadeUp, cardVariant } = pageAnimations.standard;

  const achievementBadges = [
    {
      title: "First UGC Approved Course",
      subtitle: "2020 - Breakthrough Achievement",
      details: "UFTA becomes the first institute in India to launch a UGC-approved B.Sc. in Fitness and Athletic Conditioning program.",
      badgeColor: "#00c8ff",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      features: [
        "NEP 2020 Compliant Curriculum",
        "Multiple Exit Options Available",
        "Industry-Aligned Practical Training",
        "Research-Based Academic Projects",
        "Honours with Specialization Tracks"
      ]
    },
    {
      title: "Central University Partnership",
      subtitle: "2018 - Strategic Collaboration",
      details: "Established partnership with Rajiv Gandhi University as Sports Science Education Promoter, conducting workshops and awareness programs.",
      badgeColor: "#10b981",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h2v-2.5c0-1.17.95-2.12 2.12-2.12h.76c1.05 0 2.01.53 2.58 1.42L12 12l.54-1.7c.57-.89 1.53-1.42 2.58-1.42h.76c1.17 0 2.12.95 2.12 2.12V14h2v4H4z"/>
        </svg>
      ),
      features: [
        "Career Awareness Programs",
        "CPR & AED Certification Workshops",
        "Strength & Conditioning Training",
        "Sports Science Research Collaboration",
        "Faculty Exchange Programs"
      ]
    },
    {
      title: "International Affiliations",
      subtitle: "2010-2015 - Global Recognition",
      details: "Established partnerships with PROPTA USA and CASES UK, bringing international standards to Indian fitness education.",
      badgeColor: "#8b5cf6",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      features: [
        "PROPTA USA Certification Programs",
        "CASES UK Affiliation",
        "International Faculty Exchange",
        "Global Curriculum Standards",
        "Cross-Cultural Learning Opportunities"
      ]
    },
    {
      title: "Foundation & Recognition",
      subtitle: "2006 - UFTA Established",
      details: "Founded with the vision to elevate fitness education standards in India, gaining recognition from various educational bodies.",
      badgeColor: "#f59e0b",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      features: [
        "Pioneering Fitness Education Approach",
        "Industry-First Practical Training",
        "Evidence-Based Curriculum Development",
        "Professional Development Focus",
        "Continuous Innovation in Teaching"
      ]
    }
  ];

  const impactStats = [
    { number: "2", label: "University Partnerships", color: "#00c8ff" },
    { number: "3", label: "International Affiliations", color: "#10b981" },
    { number: "19+", label: "Years of Excellence", color: "#8b5cf6" },
    { number: "1000+", label: "Graduates Trained", color: "#f59e0b" }
  ];

  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-transparent to-[#0a0a0a]/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <motion.div 
        className="text-center mb-16"
        variants={gentleFadeUp}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Recognition <span className="text-[#00c8ff]">Timeline</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Key milestones in UFTA's journey toward academic excellence and university partnerships
        </p>
      </motion.div>

      {/* Interactive Achievement Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        variants={staggerContainer}
      >
        {achievementBadges.map((badge, index) => (
          <InteractiveApprovalBadge
            key={index}
            title={badge.title}
            subtitle={badge.subtitle}
            details={badge.details}
            badgeColor={badge.badgeColor}
            icon={badge.icon}
            features={badge.features}
          />
        ))}
      </motion.div>

      {/* Impact Statistics */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
        variants={staggerContainer}
      >
        {impactStats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 bg-gradient-to-b from-[#141414] to-[#1a1a1a] border border-[#2A2A2A] rounded-xl"
            variants={cardVariant}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-4xl font-bold mb-2"
              style={{ color: stat.color }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            <motion.div
              className="w-full h-1 rounded-full mt-3"
              style={{ backgroundColor: `${stat.color}20` }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: stat.color }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default InteractiveAchievementsSection;
