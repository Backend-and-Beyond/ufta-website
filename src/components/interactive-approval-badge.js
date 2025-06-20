import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveApprovalBadge = ({ 
  title, 
  subtitle, 
  details, 
  badgeColor = "#00c8ff", 
  icon, 
  features = [] 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative"
      layout
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2A2A2A] rounded-2xl p-4 md:p-6 cursor-pointer relative overflow-hidden group"
        whileHover={{ y: -5, borderColor: badgeColor }}
        onClick={() => setIsExpanded(!isExpanded)}
        layout
        transition={{ duration: 0.3 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 rounded-full blur-2xl"
            style={{ background: `linear-gradient(135deg, ${badgeColor}20, transparent)` }}
          ></div>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div className="flex items-center">
            <motion.div
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mr-3 md:mr-4"
              style={{ background: `linear-gradient(135deg, ${badgeColor}20, ${badgeColor}10)` }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {icon || (
                <svg className="w-5 h-5 md:w-6 md:h-6" style={{ color: badgeColor }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              )}
            </motion.div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-white">{title}</h3>
              <p className="text-xs md:text-sm text-gray-400">{subtitle}</p>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>

        {/* Main Content */}
        <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">{details}</p>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-[#2A2A2A] pt-3 md:pt-4 mt-3 md:mt-4">
                {features.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-300 mb-2 md:mb-3">Key Features:</h4>
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-xs text-gray-400"
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full mr-3"
                          style={{ backgroundColor: badgeColor }}
                        ></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{ background: `linear-gradient(135deg, ${badgeColor}05, transparent)` }}
        ></div>

        {/* Click Indicator */}
        <motion.div
          className="absolute bottom-2 right-2 text-xs text-gray-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click to {isExpanded ? 'collapse' : 'expand'}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveApprovalBadge;
