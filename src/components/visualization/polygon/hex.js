import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import { appendHex, singleHex, } from './funcs';

const styleSheet = createStyleSheet('HexSVG', () => ({
  container: {
    width: 'auto',

    height: 'auto',
    overflow: 'visible',
  },
  hexGroup: {
    width: 'auto',

    height: 'auto',
  },

  hexPath: {
    width: 'auto',

    height: 'auto',
  },
}));

class Hex extends Component {
  componentDidMount() {
    singleHex(this.props.classes)();
  }
  render() {
    const { classes, } = this.props;

    return (
      <svg className={classes.container}>
        <g className={classes.hexGroup}>
          <path className={classes.hexPath}/>
        </g>
      </svg>
    );
  }
}
export default withStyles(styleSheet)(Hex);
