import { createStyleSheet, withStyles } from 'material-ui/styles';

export const syntaxStyles = createStyleSheet('hljs', theme => ({
  '@global': {
    '.hljs': {
      'border-top': '0.5px solid rgba(255,0,255,0.5)',
      'border-bottom': '0.5px solid rgba(255,0,255,0.5)',
      'outline-top': '0.5px solid rgba(255,0,255,0.5)',
      'padding-bottom': '1rem',
    },
    '.hljs-comment': { color: '#99b5b5' },
    '.hljs-function': { color: theme.palette.accent },
  },
}));
