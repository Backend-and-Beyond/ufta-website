import React, { useState } from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const HighPerformanceServicesSection = () => {
  const { fadeInUp, staggerContainer, cardVariant, scaleIn } = pageAnimations.standard;
  const [expandedFeatures, setExpandedFeatures] = useState({});
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [modalService, setModalService] = useState(null); // Modal state

  const toggleFeatures = (serviceKey) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [serviceKey]: !prev[serviceKey]
    }));
  };

  const toggleDescription = (serviceKey) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [serviceKey]: !prev[serviceKey]
    }));
  };

  // Function to check if description needs truncation (more than 4 lines worth of text)
  const shouldTruncateDescription = (description) => {
    return description.length > 180; // Approximate character count for 4 lines at 14px font
  };

  // Function to get truncated description
  const getTruncatedDescription = (description) => {
    if (description.length <= 180) return description;
    
    // Find the last complete word within the character limit
    const truncated = description.substring(0, 180);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    
    return truncated.substring(0, lastSpaceIndex) + '...';
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Reset expanded features and descriptions when changing category
    setExpandedFeatures({});
    setExpandedDescriptions({});
  };

  // Get unique categories from services
  const getUniqueCategories = () => {
    const categories = services.map(service => service.category);
    return ['All Services', ...new Set(categories)];
  };

  // Get category count
  const getCategoryCount = (category) => {
    if (category === 'All Services') return services.length;
    return services.filter(service => service.category === category).length;
  };

  // Get category colors
  const getCategoryColor = (category) => {
    const colors = {
      'Rehabilitation': 'text-emerald-400',
      'Assessment': 'text-blue-400',
      'Performance': 'text-yellow-400',
      'Research': 'text-indigo-400'
    };
    return colors[category] || 'text-[#00c8ff]';
  };

  const getCategoryBg = (category) => {
    const colors = {
      'Rehabilitation': 'bg-emerald-400/10 border-emerald-400/30',
      'Assessment': 'bg-blue-400/10 border-blue-400/30',
      'Performance': 'bg-yellow-400/10 border-yellow-400/30',
      'Research': 'bg-indigo-400/10 border-indigo-400/30'
    };
    return colors[category] || 'bg-[#00c8ff]/10 border-[#00c8ff]/30';
  };

  // Services data
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15M21.75 9A13.401 13.401 0 0 0 12 3.75m0 16.5A13.401 13.401 0 0 0 2.25 9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75a13.401 13.401 0 0 1 9.75 5.25m-19.5 0A13.401 13.401 0 0 1 12 3.75m0 16.5a13.401 13.401 0 0 1-9.75-5.25" />
        </svg>
      ),
      title: "Injury Rehabilitation & Reconditioning",
      description: "UFTA's in-house Sports Medicine facilities are dedicated to the comprehensive management of injuries for both athletes and the general public. Led by specialists like Dr. Dipankar Bhattacharryya (Dean of Sports & Exercise Medicine) and Bibhu Moni Singha (PhD Scholar, Sports & Exercise Scientist with expertise in Rehabilitation & Reconditioning), we focus on a holistic approach to recovery.",
      features: [
        "Expert Assessment: Thorough evaluation to understand the nature and extent of the injury",
        "Non-Invasive Techniques: Prioritizing conservative and effective treatment methods",
        "Personalized Programs: Tailored rehabilitation and reconditioning plans to meet individual needs",
        "Performance Focused: Aiming not just for recovery, but for a safe return to peak performance",
        "Injury Prevention: Educating on strategies to avoid future injuries and manage physical overload",
        "Active & Healthy Lifestyle: Promoting long-term well-being beyond immediate recovery"
      ],
      color: "emerald",
      category: "Rehabilitation"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
      title: "Posture Analysis & GAIT Lab",
      description: "Understanding your body's alignment and movement patterns is key to preventing injuries and improving efficiency. Our GAIT lab provides in-depth analysis.",
      features: [
        "Comprehensive assessment of static and dynamic posture",
        "Detailed analysis of walking and running mechanics (GAIT)",
        "Identification of imbalances and movement dysfunctions",
        "Recommendations for corrective exercises and ergonomic adjustments",
        "Advanced technology for precise movement analysis",
        "Personalized improvement strategies"
      ],
      color: "blue",
      category: "Assessment"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
        </svg>
      ),
      title: "Advanced Biomechanical Analysis",
      description: "Our Sports & Exercise Biomechanics lab is equipped with state-of-the-art technology to dissect and understand the mechanics of human movement in sports and daily activities.",
      features: [
        "High-speed camera systems to capture and analyze complex movements",
        "Advanced software for detailed motion analysis",
        "Force plate assessments for ground reaction forces",
        "3D motion capture technology",
        "Sport-specific movement analysis",
        "Performance optimization recommendations"
      ],
      color: "purple",
      category: "Assessment"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
      title: "Cardiovascular Assessment & Monitoring",
      description: "Comprehensive cardiac health evaluation and monitoring to ensure safe and effective training programs.",
      features: [
        "Resting and exercise ECG monitoring",
        "Heart rate variability analysis",
        "VO2 max testing and assessment",
        "Blood pressure monitoring during exercise",
        "Cardiac risk stratification",
        "Personalized training zone recommendations"
      ],
      color: "red",
      category: "Assessment"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      ),
      title: "Performance Testing & Optimization",
      description: "Comprehensive fitness assessments and performance optimization protocols for athletes and fitness enthusiasts.",
      features: [
        "Strength and power testing protocols",
        "Agility and speed assessments",
        "Flexibility and mobility evaluations",
        "Body composition analysis",
        "Sport-specific performance metrics",
        "Periodized training program development"
      ],
      color: "yellow",
      category: "Performance"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.052-.75.085a2.25 2.25 0 0 0-2.25 2.25v.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.5a2.25 2.25 0 0 0-2.25-2.25 24.394 24.394 0 0 0-.75-.085ZM12.75 3.104v5.714a2.25 2.25 0 0 0 .659 1.591L17.5 14.5M19.5 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 9.107 9.107Z" />
        </svg>
      ),
      title: "Research & Development",
      description: "Contributing to the advancement of sports science through ongoing research and evidence-based practice implementation.",
      features: [
        "Clinical research studies",
        "Evidence-based practice development",
        "Technology integration in rehabilitation",
        "Collaboration with academic institutions",
        "Publication of research findings",
        "Continuous improvement of protocols"
      ],
      color: "indigo",
      category: "Research"
    }
  ];

  // Filter services based on active category
  const filteredServices = activeCategory === 'All Services' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <motion.section 
      id="services"
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00c8ff]/5 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      {/* Section Header with Enhanced Background */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-[#0A0A0A] h-48 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/10 to-blue-500/10 opacity-40"></div>
          <div className="absolute right-1/4 top-10 w-16 h-16 rounded-full bg-[#00c8ff]/10"></div>
          <div className="absolute left-1/3 bottom-5 w-20 h-20 rounded-full bg-blue-500/10"></div>
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.52-.635 1.421-.825 2.246-.397l.713.572c.796.641.796 1.793 0 2.434l-.713.572c-.825.428-1.726.238-2.246-.397L11.42 15.17zm0 0L5.828 9.97a6 6 0 00-2.12-.523L3.04 9.324a.75.75 0 10-.422 1.406l.56.169A6 6 0 005.828 11.5l5.592 5.592z" />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative mb-2"
            variants={fadeInUp}
          >
            Specialized <span className="text-[#00c8ff]">Services</span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-[#00c8ff]/50 mx-auto mb-6"
            variants={fadeInUp}
          ></motion.div>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mb-3 text-gray-300 max-w-3xl"
            variants={fadeInUp}
          >
            Our comprehensive range of specialized services utilizes cutting-edge technology and evidence-based methodologies 
            to elevate your athletic performance and overall well-being.
          </motion.p>
        </div>
      </div>
      
      {/* Service Categories Navigation */}
      <motion.div 
        className="flex justify-center flex-wrap gap-3 mb-12"
        variants={staggerContainer}
      >
        {getUniqueCategories().map((category, idx) => (
          <motion.button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory === category 
                ? 'bg-[#00c8ff]/20 text-[#00c8ff] border border-[#00c8ff]/30' 
                : 'bg-[#1A1A1A] text-gray-300 border border-[#2A2A2A] hover:border-[#00c8ff]/30 hover:bg-[#00c8ff]/10 hover:text-[#00c8ff]'
            }`}
            variants={scaleIn}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>{category}</span>
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              activeCategory === category 
                ? 'bg-[#00c8ff]/30 text-[#00c8ff]' 
                : 'bg-[#2A2A2A] text-gray-400'
            }`}>
              {getCategoryCount(category)}
            </span>
          </motion.button>
        ))}
      </motion.div>
      
      {/* Results Counter */}
      <motion.div 
        className="text-center mb-8"
        variants={fadeInUp}
      >
        <p className="text-gray-400 text-sm">
          Showing <span className="text-[#00c8ff] font-semibold">{filteredServices.length}</span> service{filteredServices.length !== 1 ? 's' : ''} 
          {activeCategory !== 'All Services' && (
            <span> in <span className="text-[#00c8ff] font-semibold">{activeCategory}</span></span>
          )}
        </p>
      </motion.div>
      
      {/* Services Cards Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => {
            // Create a unique key based on service title and category to maintain state correctly
            const serviceKey = `${service.category}-${service.title.replace(/\s+/g, '-').toLowerCase()}`;
            
            return (
              <motion.div 
                key={serviceKey} 
                className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-6 relative overflow-hidden group h-full flex flex-col shadow-xl"
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }
                  }
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  borderColor: "rgba(0, 200, 255, 0.6)",
                  boxShadow: "0 20px 40px rgba(0, 200, 255, 0.1)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
            {/* Card Top Gradient Bar */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-60"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            ></motion.div>
            
            {/* Category Badge */}
            <motion.div 
              className="absolute top-4 right-4 z-10"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              <div className={`text-xs px-2 py-1 rounded border ${getCategoryBg(service.category)}`}>
                <span className={getCategoryColor(service.category)}>{service.category}</span>
              </div>
            </motion.div>
            
            {/* Service Icon */}
            <motion.div 
              className="flex justify-center mb-6 relative"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 0.3,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-[#00c8ff]/0 via-[#00c8ff]/5 to-[#00c8ff]/0 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div 
                className="relative z-10 text-[#00c8ff]"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
              >
                {service.icon}
              </motion.div>
            </motion.div>
            
            <div className="flex-grow flex flex-col">
              {/* Service Title */}
              <motion.h3 
                className="text-xl font-bold mb-4 text-white text-center group-hover:text-[#00c8ff] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.4 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {service.title}
              </motion.h3>
              
              {/* Service Description */}
              <motion.div 
                className="bg-[#141414] rounded-lg p-4 mb-5 min-h-[100px] flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.5 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  backgroundColor: "rgba(20, 20, 20, 0.8)",
                  transition: { duration: 0.3 }
                }}
              >
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {expandedDescriptions[serviceKey] || !shouldTruncateDescription(service.description) 
                      ? service.description 
                      : getTruncatedDescription(service.description)
                    }
                  </p>
                  
                  {/* Show More/Less button for description */}
                  {shouldTruncateDescription(service.description) && (
                    <button
                      onClick={() => toggleDescription(serviceKey)}
                      className="text-xs text-[#00c8ff] hover:text-[#00c8ff]/80 transition-colors duration-300 mt-2 flex items-center gap-1"
                    >
                      <span>
                        {expandedDescriptions[serviceKey] ? 'Show Less' : 'Read More'}
                      </span>
                      <svg
                        className="w-3 h-3 transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ transform: expandedDescriptions[serviceKey] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
              </motion.div>
              
              {/* Key Features are now shown in modal, so remove toggle button and preview */}
              
              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 mt-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.6 
                }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="flex-1 inline-block bg-transparent border border-[#2A2A2A] hover:border-[#00c8ff]/30 text-gray-300 hover:text-[#00c8ff] font-medium py-3 px-4 rounded-lg transition duration-300 text-sm text-center"
                  onClick={() => setModalService(service)} // Open modal on click
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: "rgba(0, 200, 255, 0.5)",
                    backgroundColor: "rgba(0, 200, 255, 0.05)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        );
        })
        ) : (
          <motion.div 
            className="col-span-full text-center py-12"
            variants={fadeInUp}
          >
            <p className="text-gray-400 text-lg">No services found for the selected category.</p>
          </motion.div>
        )}
      </motion.div>
      
      {/* CTA Banner */}
      <motion.div 
        className="mt-16 bg-gradient-to-r from-[#0A0A0A] to-[#141414] border border-[#2A2A2A] rounded-xl p-8 lg:p-10 relative overflow-hidden shadow-xl"
        variants={fadeInUp}
      >
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[#00c8ff]/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl opacity-70"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to take your <span className="text-[#00c8ff]">performance</span> to the next level?
            </h3>
            <p className="text-gray-300 max-w-2xl">
              Our team of experts is ready to assess your needs and create a personalized plan that will help you achieve your fitness and performance goals.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-end">
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-[#00c8ff] text-black hover:bg-[#00c8ff]/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule Assessment</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      {/* Modal for Key Features */}
      {modalService && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setModalService(null)}
        >
          <motion.div 
            className="bg-[#181818] rounded-xl shadow-2xl p-8 max-w-lg w-full relative"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ 
              duration: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="absolute top-3 right-3 text-gray-400 hover:text-[#00c8ff] text-2xl font-bold"
              onClick={() => setModalService(null)}
              aria-label="Close"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              &times;
            </motion.button>
            <motion.div 
              className="flex flex-col items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.div 
                className="text-[#00c8ff] mb-2"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              >
                {modalService.icon}
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-2 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                {modalService.title}
              </motion.h3>
              <motion.div 
                className="text-xs px-2 py-1 rounded border mb-3 mt-1 {getCategoryBg(modalService.category)}"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <span className={getCategoryColor(modalService.category)}>{modalService.category}</span>
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-gray-300 text-sm mb-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {modalService.description}
            </motion.p>
            <motion.h4 
              className="font-semibold text-[#00c8ff] mb-2 text-center flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Key Features
            </motion.h4>
            <motion.ul 
              className="space-y-2 text-xs text-gray-400 mb-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {modalService.features.map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: 0.7 + idx * 0.1, duration: 0.3 }
                    }
                  }}
                >
                  <svg className="w-4 h-4 text-[#00c8ff] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" /></svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <motion.button
                className="inline-block bg-[#00c8ff] text-black hover:bg-[#00c8ff]/90 px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
                onClick={() => setModalService(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  )
}

export default HighPerformanceServicesSection;
