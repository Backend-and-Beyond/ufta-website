// Animation variants and configurations for Framer Motion
// This file centralizes all animation definitions used across pages

/**
 * Standard animation variants with customizable options
 */
export const createAnimationVariants = (options = {}) => {
  const {
    // Timing options
    duration = 0.6,
    fastDuration = 0.4,
    slowDuration = 0.8,
    
    // Easing options
    ease = [0.25, 0.1, 0.25, 1],
    
    // Movement distances
    slideDistance = 40,
    yDistance = 30,
    
    // Stagger options
    staggerDelay = 0.15,
    delayChildren = 0.2,
    
    // Scale options
    scaleStart = 0.96,
    cardYOffset = 20,
  } = options;

  return {
    // Basic fade animations
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration, ease }
      }
    },

    fadeInUp: {
      hidden: { opacity: 0, y: yDistance },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease }
      }
    },

    fadeInDown: {
      hidden: { opacity: 0, y: -yDistance },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease }
      }
    },

    // Slide animations
    slideInLeft: {
      hidden: { opacity: 0, x: -slideDistance },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, ease }
      }
    },

    slideInRight: {
      hidden: { opacity: 0, x: slideDistance },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, ease }
      }
    },

    // Scale animations
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, ease }
      }
    },

    scaleUp: {
      hidden: { opacity: 0, scale: scaleStart },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: fastDuration, ease }
      }
    },

    // Container animations for staggered children
    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delayChildren,
          duration: 0.3
        }
      }
    },

    staggerContainerFast: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.1,
          duration: 0.2
        }
      }
    },

    // Smooth timeline container for sequential animations
    timelineContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          delayChildren: 0.2,
          duration: 0.4
        }
      }
    },

    // Card animations
    cardVariant: {
      hidden: { opacity: 0, y: cardYOffset, scale: scaleStart },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: fastDuration, ease }
      }
    },

    // Timeline specific animations
    timelineItemLeft: {
      hidden: { opacity: 0, x: -30, scale: 0.98 },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.5, ease }
      }
    },

    timelineItemRight: {
      hidden: { opacity: 0, x: 30, scale: 0.98 },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.5, ease }
      }
    },

    // Gentle fade variants
    gentleFadeUp: {
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease }
      }
    },

    // Specialized animations
    slideUp: {
      hidden: { opacity: 0, y: yDistance },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease }
      }
    },

    slideDown: {
      hidden: { opacity: 0, y: -yDistance },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease }
      }
    },

    // Rotation animations
    rotateIn: {
      hidden: { opacity: 0, rotate: -10, scale: 0.9 },
      visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { duration, ease }
      }
    },

    // Complex entrance animations
    bounceIn: {
      hidden: { opacity: 0, scale: 0.3 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 300,
          duration: 0.8
        }
      }
    },

    // Page transition variants
    pageTransition: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease }
      },
      exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3, ease }
      }
    }
  };
};

/**
 * Pre-configured animation sets for different page types
 */
export const pageAnimations = {
  // Standard page animations
  standard: createAnimationVariants(),
  
  // Fast animations for interactive elements
  fast: createAnimationVariants({
    duration: 0.4,
    fastDuration: 0.3,
    staggerDelay: 0.1
  }),
  
  // Slow, elegant animations for hero sections
  elegant: createAnimationVariants({
    duration: 1.0,
    fastDuration: 0.8,
    ease: "easeInOut",
    slideDistance: 80,
    yDistance: 80
  }),
  
  // Subtle animations for content sections
  subtle: createAnimationVariants({
    duration: 0.6,
    slideDistance: 40,
    yDistance: 40,
    scaleStart: 0.98
  })
};

/**
 * Common hover animations
 */
export const hoverAnimations = {
  scale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  },
  
  scaleUp: {
    whileHover: { scale: 1.1 },
    transition: { duration: 0.3 }
  },
  
  lift: {
    whileHover: { y: -5, scale: 1.02 },
    transition: { duration: 0.3 }
  },
  
  rotate: {
    whileHover: { rotate: 5, scale: 1.05 },
    transition: { duration: 0.3 }
  },
  
  glow: {
    whileHover: { 
      boxShadow: "0 0 20px rgba(0, 200, 255, 0.3)",
      scale: 1.02 
    },
    transition: { duration: 0.3 }
  }
};

/**
 * Viewport animation settings
 */
export const viewportSettings = {
  // Standard viewport settings
  standard: {
    once: true,
    amount: 0.2
  },
  
  // For elements that should trigger early
  early: {
    once: true,
    amount: 0.1
  },
  
  // For elements that should trigger late
  late: {
    once: true,
    amount: 0.5
  },
  
  // For repeating animations
  repeat: {
    once: false,
    amount: 0.3
  }
};

/**
 * Common transition settings
 */
export const transitions = {
  default: {
    duration: 0.6,
    ease: "easeOut"
  },
  
  fast: {
    duration: 0.3,
    ease: "easeOut"
  },
  
  slow: {
    duration: 1.0,
    ease: "easeInOut"
  },
  
  spring: {
    type: "spring",
    damping: 20,
    stiffness: 300
  },
  
  bouncy: {
    type: "spring",
    damping: 10,
    stiffness: 400
  }
};

/**
 * Utility function to get animations for specific page types
 */
export const getPageAnimations = (pageType = 'standard', customOptions = {}) => {
  if (pageAnimations[pageType]) {
    return pageAnimations[pageType];
  }
  
  return createAnimationVariants(customOptions);
};

// Export default standard animations for backward compatibility
export default pageAnimations.standard;
