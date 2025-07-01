import * as React from "react"
import { motion } from "framer-motion"

const JoinMembershipSection = () => {
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

  const membershipPlans = [
    {
      name: "Basic Membership",
      price: "₹2,999",
      period: "per month",
      popular: false,
      features: [
        "Access to gym facilities",
        "Basic fitness assessment",
        "Group fitness classes",
        "Locker facilities",
        "Nutritional guidance",
        "Monthly progress tracking"
      ]
    },
    {
      name: "Premium Membership",
      price: "₹4,999",
      period: "per month",
      popular: true,
      features: [
        "All Basic features",
        "Personal training sessions (2/month)",
        "Advanced fitness assessment",
        "Specialized training programs",
        "Nutrition consultation",
        "Priority class booking",
        "Guest passes (2/month)",
        "Access to premium equipment"
      ]
    },
    {
      name: "Elite Membership",
      price: "₹7,999",
      period: "per month",
      popular: false,
      features: [
        "All Premium features",
        "Unlimited personal training",
        "Customized meal plans",
        "Recovery therapy sessions",
        "Competition preparation",
        "24/7 gym access",
        "Unlimited guest passes",
        "Priority equipment booking"
      ]
    }
  ];

  return (
    <section 
      id="join-membership" 
      className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUpVariant}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            variants={fadeInVariant}
          >
            Choose Your <span className="text-[#00c8ff]">Membership</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInVariant}
          >
            Select the perfect plan that suits your fitness goals and lifestyle. 
            All memberships come with expert guidance and premium facilities.
          </motion.p>
        </motion.div>

        {/* Membership Plans Grid */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border ${
                plan.popular 
                  ? "border-[#00c8ff] shadow-lg shadow-[#00c8ff]/20" 
                  : "border-gray-700"
              } hover:border-[#00c8ff] transition-all duration-300 group`}
              variants={cardVariant}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-[#00c8ff] to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-[#00c8ff]">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-[#00c8ff] mr-3 mt-0.5 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#00c8ff] to-blue-500 text-white hover:shadow-lg hover:shadow-[#00c8ff]/30"
                    : "bg-gray-700 text-white hover:bg-[#00c8ff] hover:text-white"
                } group-hover:scale-105`}>
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-center border border-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-4"
            variants={fadeInVariant}
          >
            Need Help Choosing?
          </motion.h3>
          <motion.p 
            className="text-gray-300 mb-6 max-w-2xl mx-auto"
            variants={fadeInVariant}
          >
            Our fitness consultants are here to help you find the perfect membership plan 
            tailored to your specific goals and requirements.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInVariant}
          >
            <button className="bg-gradient-to-r from-[#00c8ff] to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#00c8ff]/30 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border border-[#00c8ff] text-[#00c8ff] px-8 py-3 rounded-xl font-semibold hover:bg-[#00c8ff] hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "No Hidden Fees",
              description: "Transparent pricing with no surprise charges or hidden costs."
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: "Flexible Terms",
              description: "Monthly, quarterly, or annual plans with easy cancellation options."
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Instant Activation",
              description: "Start your fitness journey immediately after membership signup."
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center"
              variants={cardVariant}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00c8ff] to-blue-500 rounded-full text-white mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default JoinMembershipSection
