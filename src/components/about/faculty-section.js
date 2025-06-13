import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { pageAnimations } from "../../utils/animations"

const FacultySection = () => {
  const { staggerContainer, gentleFadeUp, cardVariant, fadeInUp } = pageAnimations.standard;

  // Create a mapping of images to use with StaticImage
  const getStaticImage = (imageName, altText, className) => {
    switch (imageName) {
      case "../images/bhibhu.png":
        return (
          <StaticImage
            src="../../images/bhibhu.png"
            alt={altText}
            className={className}
            placeholder="blurred"
          />
        );
      case "../images/faculty1.png":
        return (
          <StaticImage
            src="../../images/faculty1.png"
            alt={altText}
            className={className}
            placeholder="blurred"
          />
        );
      case "../images/faculty2.png":
        return (
          <StaticImage
            src="../../images/faculty2.png"
            alt={altText}
            className={className}
            placeholder="blurred"
          />
        );
      case "../images/faculty3.jpg":
        return (
          <StaticImage
            src="../../images/faculty3.jpg"
            alt={altText}
            className={className}
            placeholder="blurred"
          />
        );
      default:
        return (
          <StaticImage
            src="../../images/faculty1.png"
            alt={altText}
            className={className}
            placeholder="blurred"
          />
        );
    }
  };

  const facultyMembers = [
    {
      name: "Bibhu Moni Singha",
      title: "Founder & Director, Sr. Director PROPTA U.S.A.",
      qualification: "PhD (Pursuing), M.Sc. S&C. 23+ yrs exp.",
      image: "../images/bhibhu.png"
    },
    {
      name: "Dr. Dipankar Bhattacharryya",
      title: "Dean Sports & Ex. Medicine",
      qualification: "MBBS, PGDSM. 34+ yrs exp. Lifetime Award.",
      image: "../images/faculty1.png"
    },
    {
      name: "Sangeeta Bora",
      title: "Co-Founder & Director Admin",
      qualification: "PGDM, Fitness Entrepreneur.",
      image: "../images/faculty2.png"
    },
    {
      name: "Alvi Yusuf",
      title: "Faculty, Nutrition & S&C",
      qualification: "B.Sc. Zoology, Cert. ST&C. 3+ yrs exp.",
      image: "../images/faculty3.jpg"
    },
    {
      name: "Archana Thakuria",
      title: "Faculty, S&C & Fitness",
      qualification: "B.E., Cert. ST&C. 7+ yrs exp.",
      image: "../images/faculty1.png"
    },
    {
      name: "More Expert Faculty",
      title: "Diverse specialists & guest lecturers",
      qualification: "Dedicated sports science professionals",
      image: "../images/faculty2.png"
    }
  ];

  return (
    <motion.section 
      id="faculty" 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div 
        className="flex items-center justify-center mb-10"
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </motion.svg>
        <h2 className="text-4xl font-bold text-white text-center relative">
          Our Esteemed <span className="text-[#00c8ff]">Faculty</span>
          <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
        </h2>
      </motion.div>
      
      <motion.p 
        className="text-center text-xl leading-relaxed mb-10 text-gray-300"
        variants={gentleFadeUp}
      >
        UFTA's courses are led by a distinguished team of award-winning experts.
      </motion.p>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        {facultyMembers.map((faculty, index) => (
          <motion.div 
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-xl"
            variants={cardVariant}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative w-full h-96 overflow-hidden rounded-xl">
              {/* Background layer that will be visible through the cut */}
              <div className="absolute inset-0 bg-[#d4ff8b] z-5"></div>
              
              {/* Main image container with triangle cut */}
              <div className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}>
                {getStaticImage(
                  faculty.image,
                  faculty.name,
                  "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                )}
                
                {/* Enhanced gradient overlay from top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300 z-15"></div>
                
                {/* Enhanced gradient overlay from bottom - stronger black */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90 z-15"></div>
                
                {/* Subtle vignette effect */}
                <div className="absolute inset-0 bg-radial-gradient shadow-inner z-15"></div>
              </div>
              
              {/* Content Box with enhanced styling */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                {/* Line accent */}
                <div className="w-20 h-1 bg-[#d4ff8b] mb-3 rounded-full"></div>
                <h3 className="text-[#d4ff8b] text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                  {faculty.name}
                </h3>
                <p className="text-white text-sm mb-1 group-hover:text-[#00c8ff] transition-colors duration-300">
                  {faculty.title}
                </p>
                <p className="text-gray-300 text-xs">
                  {faculty.qualification}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* View All Courses Button */}
      <motion.div 
        className="text-center mt-12"
        variants={fadeInUp}
      >
        <motion.button
          className="px-10 py-3 bg-[#00c8ff]/10 text-[#00c8ff] border border-[#00c8ff]/30 rounded-lg hover:bg-[#00c8ff]/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore All Training Programs
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FacultySection;
