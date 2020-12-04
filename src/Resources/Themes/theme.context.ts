import {createContext} from 'react';

import baseTheme from './base.theme';

import type {Theme} from './base.theme.js';

type ThemeType = {
  theme: Theme;
};

const themeContext = createContext<ThemeType>({
  theme: baseTheme,
});

export default themeContext;
