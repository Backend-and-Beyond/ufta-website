import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const InternationalPartnersSection = () => {
  const { staggerContainer, gentleFadeUp, cardVariant, slideInLeft, slideInRight, fadeInUp } = pageAnimations.standard;

  // Define our international partners data (both education partners and collaborations)
  const partners = [
    {
      id: "propta",
      name: "PROPTA USA",
      logo: "propta-logo.png",
      logoAlt: "PROPTA USA Logo",
      color: "from-red-500 to-red-600",
      borderColor: "border-red-500/30 hover:border-red-500/70",
      type: "Education Partner",
      description: "UFTA is an official education partner and the only authorized center of PROPTA USA for providing training and certifications in India. PROPTA (Professional Personal Trainers Association) USA is one of the leading education bodies in the United States and worldwide, dedicated to educating professional fitness and nutrition professionals since 1980.",
      details: "PROPTA's certification programs are recognized in 199 countries and are officially endorsed by the National Fitness League, the International Federation of Bodybuilders (IFBB PRO League), and accredited by bodies like the Bureau of Private Post Secondary Education (BPPE) in California, USA.",
      features: [
        "Globally recognized certifications",
        "Official certification center in India",
        "Recognition in 199 countries",
        "Endorsed by top fitness bodies",
        "Cutting-edge curriculum", 
        "International standards"
      ]
    },
    {
      id: "cases",
      name: "CASES UK",
      logo: null,
      logoAlt: "CASES UK Partnership",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/30 hover:border-blue-500/70",
      type: "Collaboration",
      description: "Our strategic affiliation with the Chartered Association of Sport and Exercise Sciences (CASES) UK underscores UFTA's commitment to promoting excellence through evidence-based practice on an international level.",
      details: "Through this partnership, UFTA students benefit from globally recognized standards and access to cutting-edge research and methodologies in the field of sport and exercise sciences.",
      features: [
        "Access to international resources",
        "Evidence-based teaching methodologies",
        "Alignment with global standards",
        "Professional networking opportunities",
        "Research collaboration",
        "Knowledge exchange programs"
      ]
    },
    {
      id: "nyshsi",
      name: "NYSHSI U.S.A.",
      logo: null,
      logoAlt: "NYSHSI USA Partnership",
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/30 hover:border-green-500/70",
      type: "Collaboration",
      description: "Recognition as a 'Best Practices Partner' by the National Youth Sports Health & Safety Institute (NYSHSI) U.S.A. reflects our dedication to upholding the highest standards in youth sports health and safety.",
      details: "This collaboration validates our commitment to implementing research-backed safety protocols and health-focused practices in our youth-oriented training programs.",
      features: [
        "Best practices for youth sports",
        "Safety-focused curriculum",
        "Age-appropriate training methods",
        "Holistic development approach"
      ]
    },
    {
      id: "iusca",
      name: "IUSCA UK",
      logo: null,
      logoAlt: "IUSCA UK Partnership", 
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/30 hover:border-purple-500/70",
      type: "Collaboration",
      description: "Our Founder's IUSCA UK certification brings global strength and conditioning expertise from an association partnered with over 150 top universities worldwide.",
      details: "This prestigious connection enables UFTA to incorporate world-class strength and conditioning principles and methodologies into our curriculum, ensuring our students receive training aligned with international best practices.",
      features: [
        "World-class S&C methodologies",
        "Connection to 150+ universities",
        "Research-backed training protocols",
        "International practitioner network"
      ]
    }
  ];

  // Function to render partner logo based on ID
  const renderPartnerLogo = (partner) => {
    switch (partner.id) {
      case "propta":
        return (
          <div className={`w-full h-32 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center text-white font-bold text-2xl`}>
            PROPTA USA
          </div>
        );
      default:
        return (
          <div className={`w-full h-32 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center text-white font-bold text-2xl`}>
            {partner.name}
          </div>
        );
    }
  };

  // Group partners by type for tab organization
  const educationPartners = partners.filter(partner => partner.type === "Education Partner");
  const collaborations = partners.filter(partner => partner.type === "Collaboration");

  return (
    <motion.section 
      id="partners" 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Section Header */}
      <motion.div 
        className="flex items-center justify-center mb-12"
        variants={gentleFadeUp}
      >
        <motion.svg 
          className="w-10 h-10 mr-3 text-[#00c8ff]" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
        </motion.svg>
        <div>
          <h2 className="text-4xl font-bold text-white text-center relative">
            International <span className="text-[#00c8ff]">Partnerships</span>
            <motion.span 
              className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-[#00c8ff] to-blue-600 px-2 py-0.5 rounded-full text-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Global Network
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00c8ff] to-transparent mt-2"></div>
        </div>
      </motion.div>

      {/* Global Recognition Badge */}
      <motion.div
        className="flex items-center justify-center mb-12"
        variants={fadeInUp}
      >
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00c8ff]/20 to-transparent border border-[#00c8ff]/30 rounded-full shadow-lg shadow-[#00c8ff]/5">
          <div className="w-2 h-2 bg-[#00c8ff] rounded-full mr-2 animate-pulse"></div>
          <span className="text-[#00c8ff] font-semibold mr-2">Global Recognition:</span>
          <span className="text-gray-300">Our certifications and partnerships span <span className="font-semibold">199 countries</span> worldwide</span>
        </div>
      </motion.div>
      
      {/* Partners Categories */}
      <motion.div className="mb-8" variants={fadeInUp}>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Education Partners", "Collaborations"].map((category, idx) => (
            <div key={idx} className="px-6 py-2 bg-[#141414] border border-[#2A2A2A] rounded-full">
              <span className="text-[#00c8ff] font-medium">{category}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education Partners Section */}
      {educationPartners.length > 0 && (
        <>
          <motion.div className="mb-10" variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-white mb-2">Education Partners</h3>
            <p className="text-gray-400">Official educational institutions and certification bodies we partner with.</p>
          </motion.div>
          
          <motion.div 
            className="space-y-12 mb-16"
            variants={staggerContainer}
          >
            {educationPartners.map((partner, index) => (
              <motion.div 
                key={partner.id}
                className={`bg-[#141414] border ${partner.borderColor} rounded-lg p-8 relative overflow-hidden group transition-all duration-300`}
                variants={cardVariant}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br ${partner.color} rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-30`}></div>
                  <div className={`absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl ${partner.color} rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-20`}></div>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                  {/* Logo/Image Area */}
                  <motion.div 
                    className="md:col-span-4 flex items-center justify-center p-4"
                    variants={slideInLeft}
                  >
                    <motion.div
                      className="w-full flex items-center justify-center"
                      whileHover={{ scale: 1.03, rotate: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {renderPartnerLogo(partner)}
                    </motion.div>
                  </motion.div>
                  
                  {/* Content Area */}
                  <motion.div 
                    className="md:col-span-8"
                    variants={slideInRight}
                  >
                    <h3 className="text-2xl font-bold mb-4">
                      <span className="text-white">{partner.name.split(' ')[0]}</span>
                      {partner.name.split(' ').length > 1 && (
                        <span className={`text-gradient bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`}> {partner.name.split(' ').slice(1).join(' ')}</span>
                      )}
                    </h3>
                    
                    <p className="text-lg leading-relaxed mb-4 text-gray-300">
                      {partner.description}
                    </p>
                    
                    <p className="text-base leading-relaxed mb-6 text-gray-400">
                      {partner.details}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {partner.features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          viewport={{ once: true }}
                        >
                          <svg className="w-5 h-5 text-[#00c8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {/* Collaborations Section */}
      {collaborations.length > 0 && (
        <>
          <motion.div className="mb-10" variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-white mb-2">International Collaborations</h3>
            <p className="text-gray-400">Strategic partnerships that enhance our global reach and expertise.</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {collaborations.map((partner, index) => (
              <motion.div 
                key={partner.id}
                className={`bg-[#141414] border ${partner.borderColor} rounded-lg p-6 relative overflow-hidden group transition-all duration-300`}
                variants={cardVariant}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br ${partner.color} rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-20`}></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">
                    <span className="text-white">{partner.name.split(' ')[0]}</span>
                    {partner.name.split(' ').length > 1 && (
                      <span className={`text-gradient bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`}> {partner.name.split(' ').slice(1).join(' ')}</span>
                    )}
                  </h3>
                  
                  <p className="leading-relaxed mb-4 text-gray-300">
                    {partner.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {partner.features.slice(0, 2).map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <svg className="w-4 h-4 text-[#00c8ff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {/* Global Impact Stats */}
      <motion.div
        className="mt-16 pt-8 border-t border-[#2A2A2A] grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={staggerContainer}
      >
        {[
          { value: "199", label: "Countries with Recognition", icon: "🌎" },
          { value: "1980", label: "PROPTA Founded", icon: "🏆" },
          { value: "150+", label: "University Connections", icon: "🏛️" },
          { value: "100%", label: "Employment Recognition", icon: "💼" }
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            className="text-center bg-[#141414] border border-[#2A2A2A] rounded-lg p-4 relative overflow-hidden group hover:border-[#00c8ff]/30 transition-all duration-300"
            variants={fadeInUp}
            custom={idx}
            whileHover={{ y: -5 }}
          >
            <div className="absolute -bottom-2 -right-2 text-5xl opacity-10 group-hover:opacity-20 transition-opacity">{stat.icon}</div>
            <motion.div 
              className="text-3xl md:text-4xl font-bold text-[#00c8ff] mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (idx * 0.1), duration: 0.4 }}
              viewport={{ once: true }}
            >
              {stat.value}
            </motion.div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default InternationalPartnersSection;
