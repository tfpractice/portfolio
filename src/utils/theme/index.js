import createPalette from 'material-ui/styles/palette';
import { createMuiTheme, MuiThemeProvider, } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import pink from 'material-ui/colors/pink';
import teal from 'material-ui/colors/teal';
import { create, } from 'jss';
import { createStyleManager, } from 'jss-theme-reactor/styleManager';
import jssPreset from 'jss-preset-default';
import jssGlobal from 'jss-global';
import { syntaxStyles, } from './syntax';

const palette = createPalette({ primary: grey, accent: pink, type: 'dark', fuchsia: '#f0f', });

const myTheme = createMuiTheme({ palette, });
const myManager = createStyleManager({
  theme: myTheme,
  jss: create(jssPreset(), jssGlobal()),
});

const { styleManager, theme, } = MuiThemeProvider.createDefaultContext(
  { theme: myTheme, });

styleManager.render(syntaxStyles);
export { styleManager, theme, };
