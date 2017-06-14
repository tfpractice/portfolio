import createPalette from 'material-ui/styles/palette';
import { createMuiTheme, MuiThemeProvider, } from 'material-ui/styles';
import { grey, pink, teal, } from 'material-ui/styles/colors';
import { create, } from 'jss';
import { createStyleManager, } from 'jss-theme-reactor/styleManager';
import jssPreset from 'jss-preset-default';
import jssGlobal from 'jss-global';
import { syntaxStyles, } from './syntax';
const palette = createPalette({ primary: grey, accent: pink, type: 'dark', });

const myTheme = createMuiTheme({ palette, });
const myManager = createStyleManager({
  theme: myTheme,
  jss: create(jssPreset(), jssGlobal()),
});

const { styleManager, theme, } =
MuiThemeProvider.createDefaultContext(
  { theme: myTheme, styleManager: myManager, });

styleManager.render(syntaxStyles);
export { styleManager, theme, };
