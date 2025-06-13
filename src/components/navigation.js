import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

const Navigation = ({ location }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  
  // Helper function to check if current path matches link
  const isActive = (path) => {
    // Get current pathname from location prop or window.location as fallback
    const currentPath = location?.pathname || (typeof window !== 'undefined' ? window.location.pathname : '')
    
    if (path === '/' && currentPath === '/') return true
    if (path !== '/' && currentPath === path) return true
    // Handle trailing slash variations
    if (path !== '/' && currentPath === path + '/') return true
    if (path !== '/' && currentPath + '/' === path) return true
    
    return false
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3, 
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const mobileItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  return (
    <motion.nav 
      className="bg-black w-full z-50 fixed top-0 left-0 right-0"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div variants={logoVariants}>
            <Link to="/" className="flex items-center mr-6 no-underline">
              <motion.div 
                className="w-10 h-10 mr-2"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <StaticImage
                  src="../images/logo.jpg"
                  alt="UFTA Logo"
                  className="w-full h-full rounded-full object-cover"
                  width={40}
                  height={40}
                />
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                UFTA
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Main Navigation Container */}
          <motion.div 
            className="hidden md:flex items-center space-x-6"
            variants={navVariants}
          >
            <motion.div variants={navItemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/" 
                  className={`text-sm font-medium no-underline relative group ${
                    isActive('/') ? 'text-[#00c8ff] font-bold' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Home
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00c8ff] transition-all duration-300 ${
                      isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/about" 
                  className={`text-sm font-medium no-underline relative group ${
                    isActive('/about') ? 'text-[#00c8ff] font-bold' : 'text-white hover:text-gray-300'
                  }`}
                >
                  About Us
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00c8ff] transition-all duration-300 ${
                      isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/courses" 
                  className={`text-sm font-medium no-underline relative group ${
                    isActive('/courses') ? 'text-[#00c8ff] font-bold' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Courses
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00c8ff] transition-all duration-300 ${
                      isActive('/courses') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/services" 
                  className={`text-sm font-medium no-underline relative group ${
                    isActive('/services') ? 'text-[#00c8ff] font-bold' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Services
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00c8ff] transition-all duration-300 ${
                      isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/membership" 
                  className={`text-sm font-medium no-underline relative group ${
                    isActive('/membership') ? 'text-[#00c8ff] font-bold' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Membership
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00c8ff] transition-all duration-300 ${
                      isActive('/membership') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/events" 
                  className={`text-sm font-medium no-underline relative group ${
                    isActive('/events') ? 'text-[#00c8ff] font-bold' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Events
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00c8ff] transition-all duration-300 ${
                      isActive('/events') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/high-performance" 
                  className={`text-sm font-medium no-underline relative group ${
                    isActive('/high-performance') ? 'text-[#00c8ff] font-bold' : 'text-white hover:text-gray-300'
                  }`}
                >
                  High Performance
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00c8ff] transition-all duration-300 ${
                      isActive('/high-performance') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/job-placement" 
                  className={`text-sm font-medium no-underline relative group ${
                    isActive('/job-placement') ? 'text-[#00c8ff] font-bold' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Job Placement
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00c8ff] transition-all duration-300 ${
                      isActive('/job-placement') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Sign Up button */}
            <motion.div variants={navItemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/signup" className="px-5 py-1.5 text-sm font-medium border border-[#00c8ff] text-white no-underline hover:bg-[#00c8ff]/10 transition-colors duration-200">
                  Sign Up
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="text-white p-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-black border-t border-gray-800 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <motion.div variants={mobileItemVariants}>
                <Link 
                  to="/" 
                  className={`block px-3 py-2 no-underline hover:bg-gray-800 transition-colors duration-200 ${
                    isActive('/') ? 'text-[#00c8ff] bg-gray-800 font-bold' : 'text-white'
                  }`}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link 
                  to="/about" 
                  className={`block px-3 py-2 no-underline hover:bg-gray-800 transition-colors duration-200 ${
                    isActive('/about') ? 'text-[#00c8ff] bg-gray-800 font-bold' : 'text-white'
                  }`}
                >
                  About Us
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link 
                  to="/courses" 
                  className={`block px-3 py-2 no-underline hover:bg-gray-800 transition-colors duration-200 ${
                    isActive('/courses') ? 'text-[#00c8ff] bg-gray-800 font-bold' : 'text-white'
                  }`}
                >
                  Courses
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link 
                  to="/services" 
                  className={`block px-3 py-2 no-underline hover:bg-gray-800 transition-colors duration-200 ${
                    isActive('/services') ? 'text-[#00c8ff] bg-gray-800 font-bold' : 'text-white'
                  }`}
                >
                  Services
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link 
                  to="/membership" 
                  className={`block px-3 py-2 no-underline hover:bg-gray-800 transition-colors duration-200 ${
                    isActive('/membership') ? 'text-[#00c8ff] bg-gray-800 font-bold' : 'text-white'
                  }`}
                >
                  Membership
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link 
                  to="/events" 
                  className={`block px-3 py-2 no-underline hover:bg-gray-800 transition-colors duration-200 ${
                    isActive('/events') ? 'text-[#00c8ff] bg-gray-800 font-bold' : 'text-white'
                  }`}
                >
                  Events
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link 
                  to="/high-performance" 
                  className={`block px-3 py-2 no-underline hover:bg-gray-800 transition-colors duration-200 ${
                    isActive('/high-performance') ? 'text-[#00c8ff] bg-gray-800 font-bold' : 'text-white'
                  }`}
                >
                  High Performance
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link 
                  to="/job-placement" 
                  className={`block px-3 py-2 no-underline hover:bg-gray-800 transition-colors duration-200 ${
                    isActive('/job-placement') ? 'text-[#00c8ff] bg-gray-800 font-bold' : 'text-white'
                  }`}
                >
                  Job Placement
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link to="/signup" className="block px-3 py-2 mt-2 text-white no-underline border border-[#00c8ff] hover:bg-[#00c8ff]/10 transition-colors duration-200">Sign Up</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
