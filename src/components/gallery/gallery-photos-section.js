import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimations } from "../../utils/animations";

const GalleryPhotosSection = () => {
  const { fadeInUp, scaleIn, staggerContainer } = pageAnimations.standard;
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images data - using static folder for images
  const galleryImages = [
    {
      id: 1,
      src: "/gallery-images/IMG-20250617-WA0016.jpg",
      alt: "UFTA Training Session 1",
      caption: "Professional training session in progress"
    },
    {
      id: 2,
      src: "/gallery-images/IMG-20250617-WA0045.jpg",
      alt: "UFTA Training Session 2",
      caption: "Advanced fitness training techniques"
    },
    {
      id: 3,
      src: "/gallery-images/IMG-20250617-WA0010.jpg",
      alt: "UFTA Training Session 3",
      caption: "Group training and motivation"
    },
    {
      id: 4,
      src: "/gallery-images/IMG-20250617-WA0043.jpg",
      alt: "UFTA Training Session 4",
      caption: "Equipment and facility showcase"
    },
    {
      id: 5,
      src: "/gallery-images/IMG-20250617-WA0047.jpg",
      alt: "UFTA Training Session 5",
      caption: "Professional coaching in action"
    },
    {
      id: 6,
      src: "/gallery-images/IMG-20250617-WA0046.jpg",
      alt: "UFTA Training Session 6",
      caption: "State-of-the-art training environment"
    },
    {
      id: 7,
      src: "/gallery-images/IMG-20250617-WA0039.jpg",
      alt: "UFTA Training Session 7",
      caption: "Specialized training programs"
    },
    {
      id: 8,
      src: "/gallery-images/IMG-20250617-WA0003.jpg",
      alt: "UFTA Training Session 8",
      caption: "Athletic development sessions"
    },
    {
      id: 9,
      src: "/gallery-images/IMG-20250617-WA0019.jpg",
      alt: "UFTA Training Session 9",
      caption: "Performance optimization training"
    },
    {
      id: 10,
      src: "/gallery-images/IMG-20250617-WA0030.jpg",
      alt: "UFTA Training Session 10",
      caption: "Modern fitness methodologies"
    },
    {
      id: 11,
      src: "/gallery-images/IMG-20250617-WA0020.jpg",
      alt: "UFTA Training Session 11",
      caption: "Comprehensive fitness programs"
    },
    {
      id: 12,
      src: "/gallery-images/IMG-20250617-WA0033.jpg",
      alt: "UFTA Training Session 12",
      caption: "Excellence in sports training"
    }
  ];

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <motion.section 
      id="photos"
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-[#00c8ff]/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      {/* Section Header */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-[#0A0A0A] h-48 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-[#00c8ff]/10 opacity-40"></div>
          <div className="absolute right-1/4 top-10 w-16 h-16 rounded-full bg-purple-500/10"></div>
          <div className="absolute left-1/3 bottom-5 w-20 h-20 rounded-full bg-[#00c8ff]/10"></div>
          <div className="absolute left-10 top-1/2 w-10 h-10 border border-purple-500/20 rounded-md transform rotate-45"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center pt-6">
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] p-4 rounded-full mb-5 shadow-lg shadow-purple-500/5"
            variants={scaleIn}
          >
            <motion.svg 
              className="w-12 h-12 text-purple-400" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative mb-2"
            variants={fadeInUp}
          >
            Photo <span className="text-purple-400">Gallery</span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-purple-400/50 via-purple-400 to-purple-400/50 mx-auto mb-6"
            variants={fadeInUp}
          ></motion.div>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mb-3 text-gray-300 max-w-3xl"
            variants={fadeInUp}
          >
            Explore our training sessions, facilities, and memorable moments captured through the lens. 
            Witness the dedication, expertise, and excellence that defines UFTA.
          </motion.p>
        </div>
      </div>
      
      {/* Photos Grid - Smooth entrance animations without blinking */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {displayedImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-purple-400/60 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.05, // Much smaller delay to reduce blinking effect
              ease: "easeOut" 
            }}
            whileHover={{ y: -5, scale: 1.01 }}
            onClick={() => openLightbox(image)}
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Expand Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-purple-400/20 backdrop-blur-sm border border-purple-400/30 rounded-full p-3">
                  <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Caption */}
            <div className="p-4">
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-purple-400 transition-colors duration-300">
                {image.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Show More/Less Button */}
      <motion.div 
        className="flex justify-center mt-12"
        variants={fadeInUp}
      >
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{showAll ? 'Show Less' : `View All ${galleryImages.length} Photos`}</span>
          <motion.svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 bg-[#141414]/80 backdrop-blur-sm border border-[#2A2A2A] rounded-full p-3 text-white hover:text-purple-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 bg-[#141414]/80 backdrop-blur-sm border border-[#2A2A2A] rounded-full p-3 text-white hover:text-purple-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 bg-[#141414]/80 backdrop-blur-sm border border-[#2A2A2A] rounded-full p-3 text-white hover:text-purple-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Container */}
            <motion.div
              className="max-w-4xl max-h-[80vh] mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
              />
              
              {/* Caption */}
              <div className="bg-[#141414]/90 backdrop-blur-sm border border-[#2A2A2A] rounded-lg mt-4 p-4">
                <p className="text-center text-gray-300">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default GalleryPhotosSection;
