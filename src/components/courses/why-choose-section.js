import * as React from "react"
import { motion } from "framer-motion"
import { pageAnimations, viewportSettings } from "../../utils/animations"

const WhyChooseSection = () => {
  const { fadeInUp } = pageAnimations.standard;

  return (
    <motion.section 
      id="why-choose" 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
    >
      <div className="flex items-center justify-center mb-10">
        <svg className="w-10 h-10 mr-3 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5Z" />
        </svg>
        <h2 className="text-4xl font-bold text-white text-center relative">
          Why Choose <span className="text-[#00c8ff]">UFTA?</span>
          <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#00c8ff]"></span>
        </h2>
      </div>
      
      <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-10 text-center">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00c8ff] to-transparent opacity-50"></div>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-6">At UFTA, we offer world-class education with prestigious affiliations like BASES UK, USAW, NSCA, NASM, and ACSM. Our accredited programs are recognised by major sports organisations, and our expert faculty provides evidence-based training in sports sciences.</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00c8ff]/30">
              <svg className="w-8 h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Expert Faculty</h3>
            <p className="text-gray-400 text-sm">Learn from industry-leading professionals with decades of experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00c8ff]/30">
              <svg className="w-8 h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-7.5A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74-1.1 7.843-2.918" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Global Recognition</h3>
            <p className="text-gray-400 text-sm">Internationally recognized certifications valid in 199 countries</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00c8ff]/30">
              <svg className="w-8 h-8 text-[#00c8ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Career Support</h3>
            <p className="text-gray-400 text-sm">100% placement assistance and ongoing career guidance</p>
          </div>
        </div>
        
        <p className="text-[#00c8ff] font-semibold text-lg">Approved providers of leading fitness and sports science bodies.</p>
      </div>
    </motion.section>
  )
}

export default WhyChooseSection
