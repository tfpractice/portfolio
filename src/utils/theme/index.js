import createPalette from 'material-ui/styles/palette';
import grey from 'material-ui/colors/grey';
import pink from 'material-ui/colors/pink';
import teal from 'material-ui/colors/teal';
import jssPreset from 'jss-preset-default';
import jssGlobal from 'jss-global';
import { createMuiTheme } from 'material-ui/styles';
import { create } from 'jss';
import { createStyleManager } from 'jss-theme-reactor/styleManager';

import { syntaxStyles } from './syntax';

const palette = createPalette({
  primary: grey,
  accent: pink,
  type: 'dark',
  fuchsia: '#f0f',
});

const theme = createMuiTheme({ palette });
const styleManager = createStyleManager({
  theme,
  jss: create(jssPreset(), jssGlobal()),
});

// styleManager.render(syntaxStyles);
export { styleManager, theme };
