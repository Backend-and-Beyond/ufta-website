import * as React from "react";
import { motion } from "framer-motion";
import { pageAnimations } from "../../utils/animations";

const HighPerformanceGallerySection = () => {
  const { fadeInUp, staggerContainer, scaleIn } = pageAnimations.standard;
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Selected gallery images
  const galleryImages = [
    {
      src: "/gallery-images/IMG-20250617-WA0003.jpg",
      alt: "High Performance Training Session 1",
      title: "Elite Athlete Training"
    },
    {
      src: "/gallery-images/IMG-20250617-WA0016.jpg", 
      alt: "High Performance Training Session 2",
      title: "Advanced Conditioning"
    },
    {
      src: "/gallery-images/IMG-20250617-WA0026.jpg",
      alt: "High Performance Training Session 3", 
      title: "Performance Assessment"
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-[#0a0a0a]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-4 font-poppins"
            variants={fadeInUp}
          >
            Training <span className="text-[#00c8ff]">Gallery</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins"
            variants={fadeInUp}
          >
            Get a glimpse of our high-performance training sessions and state-of-the-art facilities
          </motion.p>
        </motion.div>

        {/* Photo Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-[#00c8ff]/30 bg-[#141414] shadow-lg cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }
                }
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                borderColor: "rgba(0, 200, 255, 0.6)",
                boxShadow: "0 20px 40px rgba(0, 200, 255, 0.2)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-white transform opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <motion.svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </motion.svg>
                    <h3 className="text-lg font-semibold font-poppins">{image.title}</h3>
                    <p className="text-sm text-gray-300">Click to view larger</p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Sci-fi corner accents */}
              <motion.div 
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00c8ff] opacity-60"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              ></motion.div>
              <motion.div 
                className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00c8ff] opacity-60"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00c8ff] opacity-60"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00c8ff] opacity-60"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          variants={fadeInUp}
        >
          <motion.a
            href="/gallery"
            className="inline-flex items-center px-6 py-3 border border-[#00c8ff]/30 text-base font-medium rounded-md text-white bg-[#00c8ff] hover:bg-[#0099cc] hover:border-[#00c8ff]/60 transition-all duration-300 font-poppins"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Full Gallery
            <motion.svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="relative max-w-7xl max-h-full"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Close Button */}
            <motion.button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#00c8ff] transition-colors duration-300 z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Modal Content */}
            <motion.div
              className="bg-[#141414] border border-[#00c8ff]/50 rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative">
                <motion.img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[70vh] object-contain"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                />
                
                {/* Sci-fi corner accents */}
                <motion.div 
                  className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#00c8ff] opacity-80"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                ></motion.div>
                <motion.div 
                  className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#00c8ff] opacity-80"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#00c8ff] opacity-80"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#00c8ff] opacity-80"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                ></motion.div>
              </div>

              {/* Image Info */}
              <motion.div 
                className="p-6 bg-[#0a0a0a]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 font-poppins">
                  {selectedImage.alt}
                </p>
              </motion.div>
            </motion.div>

            {/* Instructions */}
            <motion.div 
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <p className="text-gray-400 text-sm font-poppins">
                Press ESC or click outside to close
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default HighPerformanceGallerySection;
