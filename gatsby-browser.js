/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import ThemeWrapper from './src/theme/ThemeWrapper';

export const wrapRootElement = ({ element }) => (
  <ThemeWrapper>{element}</ThemeWrapper>
);
