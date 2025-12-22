import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

export const ThemeWrapper = ({ children }) => (
  <CacheProvider value={muiCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </CacheProvider>
);

export default ThemeWrapper;
