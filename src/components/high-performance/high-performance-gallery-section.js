import * as React from "react";

const HighPerformanceGallerySection = () => {
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
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Training <span className="text-[#00c8ff]">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins">
            Get a glimpse of our high-performance training sessions and state-of-the-art facilities
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-[#00c8ff]/30 hover:border-[#00c8ff]/60 bg-[#141414] shadow-lg hover:shadow-[#00c8ff]/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white transform opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold font-poppins">{image.title}</h3>
                    <p className="text-sm text-gray-300">Click to view larger</p>
                  </div>
                </div>
              </div>
              
              {/* Sci-fi corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00c8ff] opacity-60"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00c8ff] opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00c8ff] opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00c8ff] opacity-60"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center px-6 py-3 border border-[#00c8ff]/30 text-base font-medium rounded-md text-white bg-[#00c8ff] hover:bg-[#0099cc] hover:border-[#00c8ff]/60 transition-all duration-300 font-poppins"
          >
            View Full Gallery
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
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
              className="bg-[#141414] border border-[#00c8ff]/50 rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[70vh] object-contain"
                />
                
                {/* Sci-fi corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#00c8ff] opacity-80"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#00c8ff] opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#00c8ff] opacity-80"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#00c8ff] opacity-80"></div>
              </div>

              {/* Image Info */}
              <div className="p-6 bg-[#0a0a0a]">
                <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 font-poppins">
                  {selectedImage.alt}
                </p>
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

export default HighPerformanceGallerySection;
