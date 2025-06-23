import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimations } from "../../utils/animations";

const GalleryVideosSection = () => {
  const { fadeInUp, staggerContainer, cardVariant, scaleIn } = pageAnimations.standard;
  const [selectedVideo, setSelectedVideo] = useState(null);

  // YouTube videos data - you can replace these with actual UFTA videos
  const videos = [
    {
      id: 1,
      videoId: "dQw4w9WgXcQ", // Replace with actual video ID
      title: "Professional Fitness Training Techniques",
      description: "Learn advanced training methodologies used by professional athletes and fitness experts.",
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      duration: "10:35",
      category: "Training"
    },
    {
      id: 2,
      videoId: "jNQXAC9IVRw", // Replace with actual video ID
      title: "Sports Medicine and Injury Prevention",
      description: "Understanding the science behind sports medicine and how to prevent common training injuries.",
      thumbnail: `https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg`,
      duration: "15:22",
      category: "Education"
    },
    {
      id: 3,
      videoId: "9bZkp7q19f0", // Replace with actual video ID
      title: "High-Performance Athletic Training",
      description: "Explore the cutting-edge techniques used to train elite athletes for peak performance.",
      thumbnail: `https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg`,
      duration: "12:18",
      category: "Performance"
    },
    {
      id: 4,
      videoId: "L_jWHffIx5E", // Replace with actual video ID
      title: "Biomechanical Analysis in Sports",
      description: "Deep dive into biomechanical analysis and its applications in sports performance optimization.",
      thumbnail: `https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg`,
      duration: "18:45",
      category: "Science"
    },
    {
      id: 5,
      videoId: "fJ9rUzIMcZQ", // Replace with actual video ID
      title: "UFTA Facility Tour and Equipment Overview",
      description: "Take a comprehensive tour of our state-of-the-art facilities and advanced training equipment.",
      thumbnail: `https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg`,
      duration: "8:30",
      category: "Facilities"
    },
    {
      id: 6,
      videoId: "oHg5SJYRHA0", // Replace with actual video ID
      title: "Rehabilitation and Recovery Techniques",
      description: "Learn about modern rehabilitation techniques and recovery protocols for athletes.",
      thumbnail: `https://img.youtube.com/vi/oHg5SJYRHA0/maxresdefault.jpg`,
      duration: "14:12",
      category: "Recovery"
    }
  ];

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Training': 'text-[#00c8ff]',
      'Education': 'text-green-400',
      'Performance': 'text-purple-400',
      'Science': 'text-blue-400',
      'Facilities': 'text-orange-400',
      'Recovery': 'text-red-400'
    };
    return colors[category] || 'text-[#00c8ff]';
  };

  const getCategoryBg = (category) => {
    const colors = {
      'Training': 'bg-[#00c8ff]/10 border-[#00c8ff]/30',
      'Education': 'bg-green-400/10 border-green-400/30',
      'Performance': 'bg-purple-400/10 border-purple-400/30',
      'Science': 'bg-blue-400/10 border-blue-400/30',
      'Facilities': 'bg-orange-400/10 border-orange-400/30',
      'Recovery': 'bg-red-400/10 border-red-400/30'
    };
    return colors[category] || 'bg-[#00c8ff]/10 border-[#00c8ff]/30';
  };

  return (
    <motion.section 
      id="videos"
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-72 h-72 bg-[#00c8ff]/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      {/* Section Header */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-[#0A0A0A] h-48 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/10 to-red-500/10 opacity-40"></div>
          <div className="absolute right-1/4 top-10 w-16 h-16 rounded-full bg-[#00c8ff]/10"></div>
          <div className="absolute left-1/3 bottom-5 w-20 h-20 rounded-full bg-red-500/10"></div>
          <div className="absolute left-10 top-1/2 w-10 h-10 border border-[#00c8ff]/20 rounded-md transform rotate-45"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center pt-6">
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] p-4 rounded-full mb-5 shadow-lg shadow-[#00c8ff]/5"
            variants={scaleIn}
          >
            <motion.svg 
              className="w-12 h-12 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative mb-2"
            variants={fadeInUp}
          >
            Video <span className="text-[#00c8ff]">Gallery</span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-[#00c8ff]/50 mx-auto mb-6"
            variants={fadeInUp}
          ></motion.div>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mb-3 text-gray-300 max-w-3xl"
            variants={fadeInUp}
          >
            Dive deep into our educational content, training demonstrations, and facility showcases. 
            Watch and learn from industry experts and cutting-edge methodologies.
          </motion.p>
        </div>
      </div>
      
      {/* Videos Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-[#2A2A2A] rounded-xl overflow-hidden relative group hover:border-[#00c8ff]/60 transition-all duration-500 cursor-pointer"
            variants={cardVariant}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            onClick={() => openVideoModal(video)}
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-[#00c8ff]/90 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
              
              {/* Category Badge */}
              <div className={`absolute top-2 left-2 border text-xs px-2 py-1 rounded ${getCategoryBg(video.category)}`}>
                <span className={getCategoryColor(video.category)}>{video.category}</span>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00c8ff] transition-colors duration-300 line-clamp-2">
                {video.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                {video.description}
              </p>
              
              {/* Watch Button */}
              <motion.div 
                className="flex items-center gap-2 text-[#00c8ff] font-medium text-sm group-hover:gap-3 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Watch Video</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-60 bg-[#141414]/80 backdrop-blur-sm border border-[#2A2A2A] rounded-full p-3 text-white hover:text-[#00c8ff] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <motion.div
              className="w-full max-w-4xl bg-[#141414] border border-[#2A2A2A] rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Player */}
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`border text-xs px-2 py-1 rounded ${getCategoryBg(selectedVideo.category)}`}>
                    <span className={getCategoryColor(selectedVideo.category)}>{selectedVideo.category}</span>
                  </div>
                  <div className="bg-[#2A2A2A] text-gray-300 text-xs px-2 py-1 rounded">
                    {selectedVideo.duration}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {selectedVideo.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* CTA Banner */}
      <motion.div 
        className="mt-16 bg-gradient-to-r from-[#0A0A0A] to-[#141414] border border-[#2A2A2A] rounded-xl p-8 lg:p-10 relative overflow-hidden shadow-xl"
        variants={fadeInUp}
      >
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[#00c8ff]/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-red-500/10 rounded-full blur-3xl opacity-70"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to see more <span className="text-[#00c8ff]">educational content</span>?
            </h3>
            <p className="text-gray-300 max-w-2xl">
              Subscribe to our YouTube channel for the latest training videos, educational content, and behind-the-scenes footage from UFTA.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-end">
            <motion.a 
              href="https://youtube.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Subscribe</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GalleryVideosSection;
