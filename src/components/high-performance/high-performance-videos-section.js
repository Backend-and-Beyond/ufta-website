import * as React from "react";

const HighPerformanceVideosSection = () => {
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
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

  // Sample YouTube videos (you can replace these with actual UFTA videos)
  const videos = [
    {
      id: "dQw4w9WgXcQ", // Sample video ID
      title: "High Performance Training Techniques",
      description: "Learn advanced training methods used by elite athletes"
    },
    {
      id: "9bZkp7q19f0", // Sample video ID  
      title: "Injury Prevention and Recovery",
      description: "Expert guidance on preventing injuries and speeding recovery"
    },
    {
      id: "kJQP7kiw5Fk", // Sample video ID
      title: "Sports Science and Biomechanics", 
      description: "Understanding the science behind athletic performance"
    }
  ];

  return (
    <section className="py-16 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Training <span className="text-[#00c8ff]">Videos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins">
            Watch our expert-led training sessions and learn from professional coaches
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-[#00c8ff]/30 hover:border-[#00c8ff]/60 rounded-lg overflow-hidden hover:shadow-[#00c8ff]/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(video)}
            >
              {/* Video Thumbnail/Embed */}
              <div className="relative aspect-w-16 aspect-h-9 group">
                <div className="relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Sci-fi corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00c8ff] opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00c8ff] opacity-60"></div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 font-poppins">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 font-poppins">
                  {video.description}
                </p>
                
                {/* Watch Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(video);
                  }}
                  className="inline-flex items-center text-[#00c8ff] hover:text-[#0099cc] font-medium transition-colors duration-300 font-poppins"
                >
                  Watch Full Video
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="text-center mt-12 p-8 bg-[#0a0a0a] border border-[#00c8ff]/30 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-2 font-poppins">
            Want More Training Content?
          </h3>
          <p className="text-gray-300 mb-4 font-poppins">
            Subscribe to our YouTube channel for the latest training videos and expert tips
          </p>
          <a
            href="https://www.youtube.com/@ufta" // Replace with actual channel URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-red-600/30 text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 hover:border-red-600/60 transition-all duration-300 font-poppins"
          >
            <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to UFTA
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#00c8ff] transition-colors duration-300 z-10"
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
            </button>

            {/* Modal Content */}
            <div
              className="bg-[#141414] border border-[#00c8ff]/50 rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video */}
              <div className="relative aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title={selectedVideo.title}
                  className="w-full h-64 sm:h-80 md:h-96"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Sci-fi corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#00c8ff] opacity-80 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#00c8ff] opacity-80 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#00c8ff] opacity-80 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#00c8ff] opacity-80 pointer-events-none"></div>
              </div>

              {/* Video Info */}
              <div className="p-6 bg-[#0a0a0a]">
                <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-300 font-poppins mb-4">
                  {selectedVideo.description}
                </p>
                
                {/* External Link */}
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#00c8ff] hover:text-[#0099cc] font-medium transition-colors duration-300 font-poppins"
                >
                  Open on YouTube
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm font-poppins">
                Press ESC or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HighPerformanceVideosSection;
