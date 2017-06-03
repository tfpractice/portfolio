import createPalette from 'material-ui/styles/palette';
import { createMuiTheme, MuiThemeProvider, } from 'material-ui/styles';
import { grey, pink, teal, } from 'material-ui/styles/colors';

const palette = createPalette({ primary: grey, accent: pink, type: 'dark', });

const { styleManager, theme, } = MuiThemeProvider.createDefaultContext(
  { theme: createMuiTheme({ palette, }), });

export { styleManager, theme, };
