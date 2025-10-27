import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0066FF', // Modern mavi
      light: '#4D94FF',
      dark: '#0052CC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00C853', // Yeşil
      light: '#5EFC82',
      dark: '#009624',
    },
    success: {
      main: '#00C853',
      light: '#5EFC82',
      dark: '#009624',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
    },
    error: {
      main: '#FF5252',
      light: '#FF8A80',
      dark: '#C50E29',
    },
    info: {
      main: '#0066FF',
      light: '#4D94FF',
      dark: '#0052CC',
    },
    background: {
      default: '#F5F7FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A202C',
      secondary: '#718096',
    },
    divider: '#E2E8F0',
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: '#1A202C',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: '#1A202C',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#1A202C',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1A202C',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1A202C',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#1A202C',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#2D3748',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#718096',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
          fontSize: '0.95rem',
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 102, 255, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 102, 255, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          border: '1px solid #E2E8F0',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          fontSize: '0.8125rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0066FF',
            },
          },
        },
      },
    },
  },
});

export default theme;