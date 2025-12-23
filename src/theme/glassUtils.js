/**
 * Glassmorphism utility functions for consistent frosted glass effects
 * throughout the application
 */

/**
 * Standard glass card effect
 * @param {object} theme - MUI theme object
 * @param {number} opacity - Background opacity (0-1), default 0.6
 * @returns {object} - CSS-in-JS styles object
 */
export const glassCard = (theme, opacity = 0.6) => ({
  background: `linear-gradient(135deg, rgba(17, 34, 64, ${opacity}) 0%, rgba(17, 34, 64, ${opacity * 0.8}) 100%)`,
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: 20,
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
});

/**
 * Premium glass card with enhanced depth
 * @param {object} theme - MUI theme object
 * @returns {object} - CSS-in-JS styles object
 */
export const glassPremiumCard = (theme) => ({
  background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.75) 0%, rgba(17, 34, 64, 0.55) 100%)',
  backdropFilter: 'blur(24px) saturate(200%)',
  WebkitBackdropFilter: 'blur(24px) saturate(200%)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderTop: '2px solid rgba(255, 255, 255, 0.25)',
  borderLeft: '2px solid rgba(255, 255, 255, 0.25)',
  borderRadius: 24,
  boxShadow: `
    0 8px 32px 0 rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(100, 255, 218, 0.05) inset
  `,
  position: 'relative',
  overflow: 'hidden',
});

/**
 * Elevated glass card with hover effect
 * @param {object} theme - MUI theme object
 * @returns {object} - CSS-in-JS styles object
 */
export const glassCardHover = (theme) => ({
  background: 'linear-gradient(135deg, rgba(29, 45, 80, 0.85) 0%, rgba(29, 45, 80, 0.65) 100%)',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  border: '1px solid rgba(100, 255, 218, 0.3)',
  borderTop: '2px solid rgba(100, 255, 218, 0.4)',
  borderLeft: '2px solid rgba(100, 255, 218, 0.4)',
  boxShadow: `
    0 12px 48px 0 rgba(0, 0, 0, 0.5),
    0 0 20px 0 rgba(100, 255, 218, 0.15),
    0 0 0 1px rgba(100, 255, 218, 0.1) inset
  `,
  transform: 'translateY(-8px)',
});

/**
 * Floating glass card effect with lift
 * @param {object} theme - MUI theme object
 * @returns {object} - CSS-in-JS styles object
 */
export const glassFloatingCard = (theme) => ({
  background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.8) 0%, rgba(17, 34, 64, 0.6) 100%)',
  backdropFilter: 'blur(28px) saturate(200%)',
  WebkitBackdropFilter: 'blur(28px) saturate(200%)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderTop: '2px solid rgba(255, 255, 255, 0.3)',
  borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
  borderRadius: 28,
  boxShadow: `
    0 16px 64px 0 rgba(0, 0, 0, 0.6),
    0 8px 24px 0 rgba(100, 255, 218, 0.1),
    0 0 0 1px rgba(100, 255, 218, 0.08) inset
  `,
  transform: 'translateY(-12px) scale(1.02)',
});

/**
 * Navbar glass effect
 * @param {object} theme - MUI theme object
 * @param {number} opacity - Background opacity (0-1), default 0.8
 * @returns {object} - CSS-in-JS styles object
 */
export const glassNavbar = (theme, opacity = 0.8) => ({
  background: `linear-gradient(to bottom, rgba(10, 25, 47, ${opacity}) 0%, rgba(10, 25, 47, ${opacity * 0.85}) 100%)`,
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
  borderBottom: '1px solid rgba(100, 255, 218, 0.15)',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
});

/**
 * Transparent/subtle glass effect (e.g., for hero sections)
 * @param {object} theme - MUI theme object
 * @returns {object} - CSS-in-JS styles object
 */
export const glassSubtle = (theme) => ({
  background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.4) 0%, rgba(17, 34, 64, 0.25) 100%)',
  backdropFilter: 'blur(16px) saturate(150%)',
  WebkitBackdropFilter: 'blur(16px) saturate(150%)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
  borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: 24,
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
});

/**
 * Glass pill/button effect
 * @param {object} theme - MUI theme object
 * @returns {object} - CSS-in-JS styles object
 */
export const glassPill = (theme) => ({
  background: 'rgba(17, 34, 64, 0.5)',
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 50,
  padding: theme.spacing(1.5, 4),
  boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
});

/**
 * Glass pill hover state
 * @param {object} theme - MUI theme object
 * @returns {object} - CSS-in-JS styles object
 */
export const glassPillHover = (theme) => ({
  background: 'rgba(29, 45, 80, 0.7)',
  borderColor: 'rgba(100, 255, 218, 0.3)',
  boxShadow: '0 8px 24px 0 rgba(100, 255, 218, 0.15)',
  transform: 'translateY(-2px)',
});

/**
 * Fallback styles for browsers that don't support backdrop-filter
 * @param {object} theme - MUI theme object
 * @returns {object} - CSS-in-JS styles object
 */
export const glassFallback = (theme) => ({
  '@supports not (backdrop-filter: blur(10px))': {
    background: 'rgba(17, 34, 64, 0.95)',
  },
});

/**
 * Glow effect for interactive elements
 * @param {string} color - Glow color (hex or rgba), default primary
 * @param {number} intensity - Glow intensity, default 0.3
 * @returns {object} - CSS-in-JS styles object
 */
export const glowEffect = (color = '#64FFDA', intensity = 0.3) => ({
  boxShadow: `0 0 20px rgba(100, 255, 218, ${intensity})`,
  transition: 'box-shadow 0.3s ease',
});

/**
 * Strong glow effect
 * @param {string} color - Glow color (hex or rgba), default primary
 * @returns {object} - CSS-in-JS styles object
 */
export const glowStrong = (color = '#64FFDA') => ({
  boxShadow: `
    0 0 20px rgba(100, 255, 218, 0.4),
    0 0 40px rgba(100, 255, 218, 0.2),
    0 0 60px rgba(100, 255, 218, 0.1)
  `,
});

/**
 * Shimmer overlay effect for cards
 * @returns {object} - CSS-in-JS styles object
 */
export const shimmerOverlay = () => ({
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    transition: 'left 0.6s ease',
  },
  '&:hover::after': {
    left: '100%',
  },
});

/**
 * Depth layering - creates visual depth with shadows
 * @param {number} level - Depth level (1-5)
 * @returns {object} - CSS-in-JS styles object
 */
export const depthLayer = (level = 1) => {
  const depths = {
    1: '0 2px 8px rgba(0, 0, 0, 0.15)',
    2: '0 4px 16px rgba(0, 0, 0, 0.25)',
    3: '0 8px 32px rgba(0, 0, 0, 0.35)',
    4: '0 16px 48px rgba(0, 0, 0, 0.45)',
    5: '0 24px 64px rgba(0, 0, 0, 0.55)',
  };
  return {
    boxShadow: depths[level] || depths[1],
  };
};

/**
 * Gradient border effect
 * @param {object} theme - MUI theme object
 * @returns {object} - CSS-in-JS styles object
 */
export const gradientBorder = (theme) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: '1px',
    background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.5), rgba(0, 217, 255, 0.5))',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
});

// Export all utilities as a single object
export const glassStyles = {
  card: glassCard,
  premiumCard: glassPremiumCard,
  cardHover: glassCardHover,
  floatingCard: glassFloatingCard,
  navbar: glassNavbar,
  subtle: glassSubtle,
  pill: glassPill,
  pillHover: glassPillHover,
  fallback: glassFallback,
  glow: glowEffect,
  glowStrong: glowStrong,
  shimmer: shimmerOverlay,
  depth: depthLayer,
  gradientBorder: gradientBorder,
};

export default glassStyles;
