import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import { appendHex, singleHex, } from './funcs';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet('HexSVG', () => ({
  hexBox: {
    width: 'auto',
    height: 'auto',

    // overflow: 'visible',
  },
  hexGroup: {

    width: 'auto',
    backgroundColor: '#333',
    height: 'auto',

    // overflow: 'visible',

  },

  hexPath: {
    width: 'auto',

    // overflow: 'visible',

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
      <Grid container direction="column" justify="center">
        <Grid item xs={12} >
          <svg className={`hexBox ${classes.hexBox}`}>
            <g className={`hexGroup ${classes.hexGroup}`}>
              <path className={`hexPath ${classes.hexPath}`}/>
            </g>
          </svg>
        </Grid>
      </Grid>

    );
  }
}
export default withStyles(styleSheet)(Hex);
