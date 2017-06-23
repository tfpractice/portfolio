import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Hex from './hex';
import Grid from 'material-ui/Grid';

import { appendTess, appendHex, } from './funcs';

const styleSheet = createStyleSheet('Tess', () => ({
  hexWrapper: {},
  hexBox: {},
  hexGroup: {},

  hexPath: {},
}));
const withHex = (Wrapped) => {
  class StyledHex extends Component {
    componentDidMount() {
      appendHex(this.props.classes)();
    }

    render() {
      const { classes, ...rest } = this.props;

      return <Wrapped {...rest} className={classes.hexWrapper}/>;
    }
  }
  return withStyles(styleSheet)(StyledHex);
};

export default (withHex);
