import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import { viewHex, } from './funcs';

const styleSheet = createStyleSheet('HexSVG', () => ({
  hexBox: {},
  hexGroup: {},

  hexPath: {},
}));

class Hex extends Component {
  componentDidMount() {
    viewHex(this.props.classes)();
  }
  render() {
    const { classes, } = this.props;
  
    return (
      <Grid container >
        <Grid item xs >
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
