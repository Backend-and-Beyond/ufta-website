import * as React from "react"
import { motion } from "framer-motion"

const InternationalPartnersSection = () => {
  // Simple, non-blinking animation variants
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Define our international partners data (both education partners and collaborations)
  const partners = [
    {
      id: "propta",
      name: "PROPTA USA",
      logo: "propta-logo.png",
      logoAlt: "PROPTA USA Logo",
      color: "from-red-500 to-red-600",
      borderColor: "border-red-500/30 hover:border-red-500/70",
      type: "Collaboration",
      description: "UFTA is an official education partner and the only authorized center of PROPTA USA for providing training and certifications in India. PROPTA (Professional Personal Trainers Association) USA is one of the leading education bodies in the United States and worldwide, dedicated to educating professional fitness and nutrition professionals since 1980.",
      details: "PROPTA's certification programs are recognized in 199 countries and are officially endorsed by the National Fitness League, the International Federation of Bodybuilders (IFBB PRO League), and accredited by bodies like the Bureau of Private Post Secondary Education (BPPE) in California, USA.",
      features: [
        "Globally recognized certifications",
        "Official certification center in India",
        "Recognition in 199 countries",
        "Endorsed by top fitness bodies",
        "Cutting-edge curriculum",
        "International standards"
      ],
      href: "https://www.propta.com/"
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
      ],
      href: "https://www.cases.org.uk/"
    },
    {
      id: "nyshsi",
      name: "NYSHSI USA",
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
      ],
      href: "https://acsm.org/about/community-impact-programs/nyshsi/"
    },
    {
      id: "iusca",
      name: "IUSCA",
      logo: null,
      logoAlt: "IUSCA Partnership",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/30 hover:border-purple-500/70",
      type: "Education Partner",
      description: "Our Founder's IUSCA certification brings global strength and conditioning expertise from an association partnered with over 150 top universities worldwide.",
      details: "This prestigious connection enables UFTA to incorporate world-class strength and conditioning principles and methodologies into our curriculum, ensuring our students receive training aligned with international best practices.",
      features: [
        "World-class S&C methodologies",
        "Connection to 150+ universities",
        "Research-backed training protocols",
        "International practitioner network"
      ],
      href: "https://iusca.org"
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
    <section
      id="partners"
      className="py-12 md:py-16 px-4 md:px-6"
    >
      {/* Section Header */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideUpVariant}
      >
        <motion.svg
          className="w-8 h-8 md:w-10 md:h-10 md:mr-3 mb-2 md:mb-0 text-[#00c8ff]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          whileHover={{ rotate: 5, scale: 1.05 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
        </motion.svg>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center relative">
            International <span className="text-[#00c8ff]">Partnerships</span>
            <motion.span
              className="absolute -top-3 md:-top-4 -right-5 md:-right-7 text-xs bg-gradient-to-r from-[#00c8ff] to-blue-600 px-2 py-0.5 rounded-full text-white hidden sm:block"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Global Network
            </motion.span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#00c8ff] to-transparent mt-2 mx-auto"></div>
        </div>
      </motion.div>

      {/* Global Recognition Badge */}
      <motion.div
        className="flex items-center justify-center mb-8 md:mb-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariant}
      >
        <div className="inline-flex items-center px-3 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#00c8ff]/20 to-transparent border border-[#00c8ff]/30 rounded-full shadow-lg shadow-[#00c8ff]/5">
          <div className="w-2 h-2 bg-[#00c8ff] rounded-full mr-2"></div>
          <span className="text-[#00c8ff] font-semibold mr-1 md:mr-2 text-sm md:text-base">Global Recognition:</span>
          <span className="text-gray-300 text-sm md:text-base">Our certifications and partnerships span <span className="font-semibold">199 countries</span> worldwide</span>
        </div>
      </motion.div>

      {/* Partners Categories */}
      {/*       <motion.div className="mb-8" variants={fadeInUp}>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Education Partners", "Collaborations"].map((category, idx) => (
            <div key={idx} className="px-6 py-2 bg-[#141414] border border-[#2A2A2A] rounded-full">
              <span className="text-[#00c8ff] font-medium">{category}</span>
            </div>
          ))}
        </div>
      </motion.div> */}

      {/* Education Partners Section */}
      {educationPartners.length > 0 && (
        <>
          <motion.div
            className="mb-6 md:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Education Partners</h3>
            <p className="text-gray-400 text-sm md:text-base">Official educational institutions and certification bodies we partner with.</p>
          </motion.div>

          <div className="space-y-8 md:space-y-12 mb-12 md:mb-16">
            {educationPartners.map((partner, index) => (
              <a href={partner.href} target="_blank" rel="noopener noreferrer" key={partner.id} className="block group">
                <motion.div
                  key={partner.id}
                  className={`bg-[#141414] border ${partner.borderColor} rounded-xl p-4 md:p-8 relative overflow-hidden group`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariant}
                  whileHover={{ y: -5 }}
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br ${partner.color} rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-30`}></div>
                    <div className={`absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl ${partner.color} rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-20`}></div>
                  </div>

                  {/* Content grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative z-10">
                    {/* Logo/Image Area */}
                    <div className="md:col-span-4 flex items-center justify-center p-2 md:p-4">
                      <motion.div
                        className="w-full flex items-center justify-center"
                        whileHover={{ scale: 1.03, rotate: 0.5 }}
                      >
                        {renderPartnerLogo(partner)}
                      </motion.div>
                    </div>

                    {/* Content Area */}
                    <div className="md:col-span-8">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                        <span className="text-white">{partner.name.split(' ')[0]}</span>
                        {partner.name.split(' ').length > 1 && (
                          <span className={`text-gradient bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`}> {partner.name.split(' ').slice(1).join(' ')}</span>
                        )}
                      </h3>

                      <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4 text-gray-300">
                        {partner.description}
                      </p>

                      <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-gray-400">
                        {partner.details}
                      </p>

                      {/* Features List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mt-4">
                        {partner.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            viewport={{ once: true }}
                          >
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#00c8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </>
      )}

      {/* Collaborations Section */}
      {collaborations.length > 0 && (
        <>
          <motion.div
            className="mb-6 md:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">International Collaborations</h3>
            <p className="text-gray-400 text-sm md:text-base">Strategic partnerships that enhance our global reach and expertise.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {collaborations.map((partner, index) => (
              <a href={partner.href} target="_blank" rel="noopener noreferrer" key={partner.id} className="block group">
                <motion.div
                  key={partner.id}
                  className={`bg-[#141414] border ${partner.borderColor} rounded-lg p-4 md:p-6 relative overflow-hidden group`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariant}
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br ${partner.color} rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-20`}></div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                      <span className="text-white">{partner.name.split(' ')[0]}</span>
                      {partner.name.split(' ').length > 1 && (
                        <span className={`text-gradient bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`}> {partner.name.split(' ').slice(1).join(' ')}</span>
                      )}
                    </h3>

                    <p className="leading-relaxed mb-3 md:mb-4 text-gray-300 text-sm md:text-base">
                      {partner.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                      {partner.features.slice(0, 2).map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          viewport={{ once: true }}
                        >
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-[#00c8ff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </>
      )}

      {/* Global Impact Stats */}
      <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-[#2A2A2A] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { value: "199", label: "Countries with Recognition", icon: "🌎" },
          { value: "1980", label: "PROPTA Founded", icon: "🏆" },
          { value: "150+", label: "University Connections", icon: "🏛️" },
          { value: "100%", label: "Employment Recognition", icon: "💼" }
        ].map((stat, idx) => (
          <div
            key={idx}
            className="text-center bg-[#141414] border border-[#2A2A2A] rounded-lg p-3 md:p-4 relative overflow-hidden group hover:border-[#00c8ff]/30 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${idx * 0.1}s`,
              animationFillMode: 'forwards'
            }}
          >
            <div className="absolute -bottom-2 -right-2 text-3xl md:text-5xl opacity-10 group-hover:opacity-20 transition-opacity">{stat.icon}</div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00c8ff] mb-1 md:mb-2">
              {stat.value}
            </div>
            <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternationalPartnersSection;
