import createPalette from 'material-ui/styles/palette';
import grey from 'material-ui/colors/grey';
import pink from 'material-ui/colors/pink';
import jssPreset from 'jss-preset-default';
import jssGlobal from 'jss-global';
import { createMuiTheme } from 'material-ui/styles';
import { create } from 'jss';
import { createStyleManager } from 'jss-theme-reactor/styleManager';

import { syntaxStyles } from './syntax';

const toHex = (num) => {
  console.log('num, num.toString(16)', num, num.toString(16));
  return num.toString(16);
};
const toDec = (hex) => {
  console.log('parseInt(hex, 16)', parseInt(hex, 16) << 4);
  return parseInt(hex, 16) << 4;
};
const palette = createPalette({
  primary: grey,
  accent: pink,
  type: 'dark',
  magent: '#f0f',
});

const theme = createMuiTheme({
  palette,
  magenta: '#f0f',
  cyan: '#0ff',
  toHex,
  toDec,
});
const styleManager = createStyleManager({
  theme,
  jss: create(jssPreset(), jssGlobal()),
});

export { styleManager, theme };
