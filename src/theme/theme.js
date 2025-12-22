import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64FFDA',
      light: '#5BE9CD',
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
    },
    text: {
      primary: '#E6F1FF',
      secondary: '#8892B0',
      disabled: '#495670',
    },
    divider: 'rgba(100, 255, 218, 0.1)',
    action: {
      hover: 'rgba(100, 255, 218, 0.05)',
      selected: 'rgba(100, 255, 218, 0.1)',
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
            radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 217, 255, 0.03) 0%, transparent 50%)
          `,
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(17, 34, 64, 0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(100, 255, 218, 0.1)',
          borderRadius: 16,
          boxShadow: '0 8px 32px 0 rgba(10, 25, 47, 0.37)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
          fontWeight: 500,
          transition: 'all 0.3s ease',
        },
        outlined: {
          borderColor: '#64FFDA',
          color: '#64FFDA',
          '&:hover': {
            borderColor: '#5BE9CD',
            backgroundColor: 'rgba(100, 255, 218, 0.05)',
            boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)',
          },
        },
        contained: {
          backgroundColor: '#64FFDA',
          color: '#0A192F',
          '&:hover': {
            backgroundColor: '#5BE9CD',
            boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'rgba(100, 255, 218, 0.1)',
          color: '#64FFDA',
          border: '1px solid rgba(100, 255, 218, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(100, 255, 218, 0.2)',
            boxShadow: '0 0 10px rgba(100, 255, 218, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#64FFDA',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#5BE9CD',
          },
        },
      },
    },
  },
});

export default theme;
