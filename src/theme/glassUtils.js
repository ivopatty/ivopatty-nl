/**
 * Glassmorphism utility functions for consistent frosted glass effects
 * throughout the application
 */

/**
 * Standard glass card effect
 * @param {object} theme - MUI theme object
 * @param {number} opacity - Background opacity (0-1), default 0.7
 * @returns {object} - CSS-in-JS styles object
 */
export const glassCard = (theme, opacity = 0.7) => ({
  background: `rgba(17, 34, 64, ${opacity})`,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 16,
  boxShadow: '0 8px 32px 0 rgba(10, 25, 47, 0.37)',
});

/**
 * Elevated glass card with hover effect
 * @param {object} theme - MUI theme object
 * @returns {object} - CSS-in-JS styles object
 */
export const glassCardHover = (theme) => ({
  background: 'rgba(29, 45, 80, 0.8)',
  backdropFilter: 'blur(15px)',
  WebkitBackdropFilter: 'blur(15px)',
  border: `1px solid rgba(100, 255, 218, 0.2)`,
  boxShadow: `
    0 12px 48px 0 rgba(10, 25, 47, 0.5),
    0 0 20px 0 rgba(100, 255, 218, 0.1)
  `,
  transform: 'translateY(-4px)',
});

/**
 * Navbar glass effect
 * @param {object} theme - MUI theme object
 * @param {number} opacity - Background opacity (0-1), default 0.85
 * @returns {object} - CSS-in-JS styles object
 */
export const glassNavbar = (theme, opacity = 0.85) => ({
  background: `rgba(10, 25, 47, ${opacity})`,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderBottom: `1px solid ${theme.palette.divider}`,
});

/**
 * Transparent/subtle glass effect (e.g., for hero sections)
 * @param {object} theme - MUI theme object
 * @returns {object} - CSS-in-JS styles object
 */
export const glassSubtle = (theme) => ({
  background: 'rgba(17, 34, 64, 0.4)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 24,
  boxShadow: '0 8px 32px 0 rgba(10, 25, 47, 0.37)',
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
 * @param {string} color - Glow color (hex or rgba)
 * @param {number} intensity - Glow intensity, default 0.2
 * @returns {object} - CSS-in-JS styles object
 */
export const glowEffect = (color = '#64FFDA', intensity = 0.2) => ({
  boxShadow: `0 0 20px rgba(100, 255, 218, ${intensity})`,
});

export const glassStyles = {
  card: glassCard,
  cardHover: glassCardHover,
  navbar: glassNavbar,
  subtle: glassSubtle,
  fallback: glassFallback,
  glow: glowEffect,
};

export default glassStyles;
