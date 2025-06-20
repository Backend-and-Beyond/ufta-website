import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"

// Add custom CSS for navigation
const navigationStyles = `
  .nav-container {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  
  .more-dropdown {
    position: relative;
    z-index: 99998;
  }
  
  .dropdown-menu {
    position: fixed !important;
    z-index: 999999 !important;
    transform: translateZ(0);
    will-change: transform;
    isolation: isolate;
    pointer-events: auto;
  }

  .dropdown-overlay {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    z-index: 999998 !important;
    pointer-events: none;
  }
`

const Navigation = ({ location }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [moreMenuOpen, setMoreMenuOpen] = React.useState(false)
  const [dropdownPosition, setDropdownPosition] = React.useState({ top: 0, left: 0 })
  const moreButtonRef = React.useRef(null)
  
  // Update dropdown position when menu opens
  React.useEffect(() => {
    if (moreMenuOpen && moreButtonRef.current) {
      const updatePosition = () => {
        const rect = moreButtonRef.current.getBoundingClientRect()
        setDropdownPosition({
          top: rect.bottom + 8,
          left: Math.min(rect.right - 224, window.innerWidth - 240) // Ensure it stays within viewport
        })
      }
      
      updatePosition()
      
      // Update position on window resize
      window.addEventListener('resize', updatePosition)
      window.addEventListener('scroll', updatePosition)
      
      return () => {
        window.removeEventListener('resize', updatePosition)
        window.removeEventListener('scroll', updatePosition)
      }
    }
  }, [moreMenuOpen])
  
  // Close more menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuOpen && !event.target.closest('.more-dropdown') && !event.target.closest('.dropdown-menu')) {
        setMoreMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [moreMenuOpen])
  
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
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.3, 
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const navItemVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.2, ease: "easeOut" }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.3, 
        ease: "easeOut",
        delay: 0.1
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
    <>
      <style>{navigationStyles}</style>
      <motion.nav 
        className="bg-black/90 w-full fixed top-0 left-0 right-0 nav-container"
        style={{ zIndex: 999997 }}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div variants={logoVariants} className="flex-shrink-0">
              <Link to="/" className="flex items-center no-underline">
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
            
            {/* Desktop Navigation */}
            <motion.div 
              className="hidden lg:flex items-center space-x-6"
              variants={navVariants}
            >
              <motion.div variants={navItemVariants}>
                <Link 
                  to="/" 
                  className={`text-sm font-medium no-underline relative group px-3 py-2 rounded transition-colors duration-200 ${
                    isActive('/') ? 'text-[#00c8ff] bg-[#00c8ff]/10' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div variants={navItemVariants}>
                <Link 
                  to="/about" 
                  className={`text-sm font-medium no-underline relative group px-3 py-2 rounded transition-colors duration-200 ${
                    isActive('/about') ? 'text-[#00c8ff] bg-[#00c8ff]/10' : 'text-white hover:text-gray-300'
                  }`}
                >
                  About Us
                </Link>
              </motion.div>

              <motion.div variants={navItemVariants}>
                <Link 
                  to="/courses" 
                  className={`text-sm font-medium no-underline relative group px-3 py-2 rounded transition-colors duration-200 ${
                    isActive('/courses') ? 'text-[#00c8ff] bg-[#00c8ff]/10' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Courses
                </Link>
              </motion.div>

              <motion.div variants={navItemVariants}>
                <Link 
                  to="/services" 
                  className={`text-sm font-medium no-underline relative group px-3 py-2 rounded transition-colors duration-200 ${
                    isActive('/services') ? 'text-[#00c8ff] bg-[#00c8ff]/10' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Services
                </Link>
              </motion.div>

              <motion.div variants={navItemVariants}>
                <Link 
                  to="/membership" 
                  className={`text-sm font-medium no-underline relative group px-3 py-2 rounded transition-colors duration-200 ${
                    isActive('/membership') ? 'text-[#00c8ff] bg-[#00c8ff]/10' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Membership
                </Link>
              </motion.div>

              <motion.div variants={navItemVariants}>
                <Link 
                  to="/events" 
                  className={`text-sm font-medium no-underline relative group px-3 py-2 rounded transition-colors duration-200 ${
                    isActive('/events') ? 'text-[#00c8ff] bg-[#00c8ff]/10' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Events
                </Link>
              </motion.div>

              <div className="relative more-dropdown">
                <motion.div variants={navItemVariants}>
                  <motion.button
                    ref={moreButtonRef}
                    onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                    className="text-sm font-medium text-white hover:text-gray-300 flex items-center px-3 py-2 rounded transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={moreMenuOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Get in Touch button */}
              <motion.div variants={navItemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to="/contact" 
                    className="px-4 py-2 text-sm font-medium bg-[#00c8ff] text-black no-underline hover:bg-[#00c8ff]/90 transition-colors duration-200 rounded"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                className="text-white p-2 focus:outline-none"
              >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
        </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden bg-black border-t border-gray-800 overflow-hidden"
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
                  High Performance Clinic
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
    
    {/* Portal-based dropdown menu for better z-index handling */}
    {typeof window !== 'undefined' && moreMenuOpen && createPortal(
      <div className="dropdown-overlay">
        <AnimatePresence>
          <motion.div
            className="dropdown-menu w-56 bg-black border border-gray-800 rounded-md shadow-lg"
            style={{ 
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              zIndex: 999999 
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-1">
              <Link 
                to="/high-performance" 
                className={`block px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-200 no-underline ${
                  isActive('/high-performance') ? 'text-[#00c8ff] bg-gray-800' : 'text-white'
                }`}
                onClick={() => setMoreMenuOpen(false)}
              >
                High Performance Clinic
              </Link>
              <Link 
                to="/job-placement" 
                className={`block px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-200 no-underline ${
                  isActive('/job-placement') ? 'text-[#00c8ff] bg-gray-800' : 'text-white'
                }`}
                onClick={() => setMoreMenuOpen(false)}
              >
                Job Placement
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>,
      document.body
    )}
    </>
  )
}

export default Navigation
