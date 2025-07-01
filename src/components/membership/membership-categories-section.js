import * as React from "react"
import { motion } from "framer-motion"

const MembershipCategoriesSection = () => {
  // Simple, unified animation variants
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

  const membershipCategories = [
    {
      name: "Student Membership",
      price: "₹500",
      period: "per year",
      color: "blue",
      description: "Perfect for students entering the fitness industry",
      features: [
        "Access to educational resources",
        "Student networking events",
        "Career guidance workshops",
        "Exclusive student content",
        "Mentorship program access"
      ],
      icon: "M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    },
    {
      name: "Professional Membership",
      price: "₹2,000",
      period: "per year",
      color: "green",
      description: "For established fitness professionals",
      features: [
        "Advanced training materials",
        "Professional networking",
        "Continuing education credits",
        "Industry certification support",
        "Research publication access"
      ],
      icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
    },
    {
      name: "Institutional Membership",
      price: "₹10,000",
      period: "per year",
      color: "purple",
      description: "Comprehensive membership for fitness institutions",
      features: [
        "Multi-user access",
        "Institutional certifications",
        "Bulk training programs",
        "Custom content development",
        "Priority support and consultation"
      ],
      icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return {
          accent: '#00c8ff',
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/30',
          text: 'text-blue-400'
        };
      case 'green':
        return {
          accent: '#10b981',
          bg: 'bg-green-500/10',
          border: 'border-green-500/30',
          text: 'text-green-400'
        };
      case 'purple':
        return {
          accent: '#8b5cf6',
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/30',
          text: 'text-purple-400'
        };
      default:
        return {
          accent: '#00c8ff',
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/30',
          text: 'text-blue-400'
        };
    }
  };

  return (
    <section 
      id="categories" 
      className="py-16"
    >
      {/* Section Header */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-[#0A0A0A] h-40 -mx-4 sm:-mx-6 lg:-mx-8 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c8ff]/10 to-transparent opacity-30"></div>
          <div className="absolute right-10 top-5 w-20 h-20 rounded-full bg-[#00c8ff]/5"></div>
          <div className="absolute left-1/4 bottom-0 w-16 h-16 rounded-full bg-[#00c8ff]/5"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            className="bg-[#141414] border border-[#2A2A2A] p-3 rounded-full mb-5 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
          >
            <motion.svg 
              className="w-10 h-10 text-[#00c8ff]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
            </motion.svg>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpVariant}
          >
            Membership <span className="text-[#00c8ff]">Categories</span>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00c8ff]/50 via-[#00c8ff] to-[#00c8ff]/50 mx-auto mt-4"></div>
          </motion.h2>
          
          <motion.p 
            className="text-center text-xl leading-relaxed mt-6 text-gray-300 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
          >
            Choose the membership category that best suits your professional needs and career goals.
          </motion.p>
        </div>
      </div>
      
      {/* Comparison Guide */}
      <motion.div 
        className="max-w-md mx-auto mb-12 bg-[#141414] border border-[#2A2A2A] rounded-lg py-4 px-6 flex items-center justify-between shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideUpVariant}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00c8ff] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-white">Not sure which plan is right for you?</span>
        </div>
        <motion.a 
          href="#join" 
          className="text-[#00c8ff] text-sm font-semibold flex items-center hover:underline"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          Contact Us
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </motion.div>
      
      {/* Membership Cards Container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {/* Static decorative elements */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-[#00c8ff]/5 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute -right-20 bottom-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10 opacity-50"></div>
        
        {membershipCategories.map((category, index) => {
          const colors = getColorClasses(category.color);
          
          return (
            <motion.div
              key={index}
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
            >
              {/* Card */}
              <motion.div 
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 relative overflow-hidden shadow-xl hover:border-[#00c8ff]/50 transition-all duration-300"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Static card borders */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-[#00c8ff] via-transparent to-transparent opacity-20"></div>
                
                {/* Header */}
                <motion.div 
                  className="flex items-center mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInVariant}
                >
                  <div className={`p-3 rounded-full ${colors.bg} ${colors.border} border mr-4`}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-6 w-6 ${colors.text}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </motion.div>
                
                {/* Price */}
                <motion.div 
                  className="mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInVariant}
                >
                  <div className="flex items-baseline">
                    <span className={`text-3xl font-bold ${colors.text}`}>{category.price}</span>
                    <span className="text-gray-400 ml-2">/{category.period}</span>
                  </div>
                </motion.div>
                
                {/* Features */}
                <motion.div 
                  className="space-y-3 mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideUpVariant}
                >
                  {category.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex}
                      className="flex items-center"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeInVariant}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${colors.text} mr-3 flex-shrink-0`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* CTA Button */}
                <motion.button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${colors.bg} ${colors.border} border ${colors.text} hover:bg-opacity-20`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choose {category.name}
                </motion.button>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  )
}

export default MembershipCategoriesSection
