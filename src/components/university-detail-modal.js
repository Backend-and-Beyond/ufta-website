import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UniversityDetailModal = ({ isOpen, onClose, university }) => {
  if (!university) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              className="bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2A2A2A] rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{university.name}</h2>
                  <p className="text-[#00c8ff] font-semibold">{university.status}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Partnership Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{university.description}</p>
                </div>

                {university.programs && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Programs & Collaborations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {university.programs.map((program, index) => (
                        <div key={index} className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-lg p-4">
                          <h4 className="text-[#00c8ff] font-semibold mb-2">{program.title}</h4>
                          <p className="text-gray-400 text-sm">{program.description}</p>
                          {program.duration && (
                            <p className="text-xs text-gray-500 mt-2">Duration: {program.duration}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {university.achievements && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {university.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <svg className="w-5 h-5 text-[#00c8ff] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {university.contact && (
                  <div className="border-t border-[#2A2A2A] pt-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
                    <div className="space-y-2 text-sm text-gray-400">
                      {university.contact.address && <p>📍 {university.contact.address}</p>}
                      {university.contact.website && (
                        <p>
                          🌐 <a href={university.contact.website} target="_blank" rel="noopener noreferrer" className="text-[#00c8ff] hover:underline">
                            {university.contact.website}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UniversityDetailModal;
