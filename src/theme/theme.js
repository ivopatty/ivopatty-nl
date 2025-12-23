import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64FFDA',
      light: '#8FFFF0',
      dark: '#4FC3A7',
      contrastText: '#0A192F',
    },
    secondary: {
      main: '#00D9FF',
      light: '#4FC3F7',
      dark: '#0099CC',
      contrastText: '#0A192F',
    },
    background: {
      default: '#0A192F',
      paper: '#112240',
      glass: 'rgba(17, 34, 64, 0.6)',
      glassHover: 'rgba(29, 45, 80, 0.7)',
    },
    text: {
      primary: '#E6F1FF',
      secondary: '#A8B2D1',
      disabled: '#495670',
      gradient: 'linear-gradient(135deg, #E6F1FF 0%, #64FFDA 100%)',
    },
    divider: 'rgba(100, 255, 218, 0.12)',
    action: {
      hover: 'rgba(100, 255, 218, 0.08)',
      selected: 'rgba(100, 255, 218, 0.15)',
    },
    glow: {
      primary: 'rgba(100, 255, 218, 0.4)',
      secondary: 'rgba(0, 217, 255, 0.4)',
      soft: 'rgba(100, 255, 218, 0.2)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      color: '#E6F1FF',
    },
    h2: {
      fontWeight: 700,
      color: '#E6F1FF',
    },
    h3: {
      fontWeight: 700,
      color: '#E6F1FF',
    },
    h4: {
      fontWeight: 600,
      color: '#E6F1FF',
    },
    h5: {
      fontWeight: 600,
      color: '#E6F1FF',
    },
    h6: {
      fontWeight: 600,
      color: '#E6F1FF',
    },
    body1: {
      color: '#E6F1FF',
    },
    body2: {
      color: '#8892B0',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0A192F',
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 217, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 0%, rgba(100, 255, 218, 0.02) 0%, transparent 80%)
          `,
          backgroundAttachment: 'fixed',
          scrollBehavior: 'smooth',
        },
        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(100, 255, 218, 0.3) rgba(17, 34, 64, 0.3)',
        },
        '*::-webkit-scrollbar': {
          width: '8px',
        },
        '*::-webkit-scrollbar-track': {
          background: 'rgba(17, 34, 64, 0.3)',
        },
        '*::-webkit-scrollbar-thumb': {
          background: 'rgba(100, 255, 218, 0.3)',
          borderRadius: '4px',
          '&:hover': {
            background: 'rgba(100, 255, 218, 0.5)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.7) 0%, rgba(17, 34, 64, 0.5) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 20,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 48px 0 rgba(0, 0, 0, 0.5), 0 0 20px rgba(100, 255, 218, 0.1)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          color: '#E6F1FF',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
        },
        outlined: {
          borderColor: 'rgba(100, 255, 218, 0.4)',
          color: '#64FFDA',
          borderWidth: '1.5px',
          '&:hover': {
            borderColor: '#64FFDA',
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
            boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          backgroundColor: '#64FFDA',
          color: '#0A192F',
          boxShadow: '0 4px 12px rgba(100, 255, 218, 0.3)',
          '&:hover': {
            backgroundColor: '#8FFFF0',
            boxShadow: '0 6px 20px rgba(100, 255, 218, 0.5)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'rgba(100, 255, 218, 0.08)',
          color: '#64FFDA',
          border: '1px solid rgba(100, 255, 218, 0.2)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(100, 255, 218, 0.18)',
            borderColor: 'rgba(100, 255, 218, 0.5)',
            boxShadow: '0 0 12px rgba(100, 255, 218, 0.3)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 25, 47, 0.8)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderBottom: '1px solid rgba(100, 255, 218, 0.15)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#64FFDA',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          position: 'relative',
          '&:hover': {
            color: '#8FFFF0',
            filter: 'drop-shadow(0 0 8px rgba(100, 255, 218, 0.5))',
          },
        },
      },
    },
  },
});

export default theme;
