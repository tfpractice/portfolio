import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Hex from './hex';
import Grid from 'material-ui/Grid';

import { appendTess, viewTess, } from './funcs';

const styleSheet = createStyleSheet('Tess', () => ({
  container: {},
  tessGroup: {},
  
  tessPath: {},
}));

class Tess extends Component {
  componentDidMount() {
    viewTess(this.props.classes)(this.props.count || 6);
  }

  render() {
    const { classes, count, } = this.props;
    const cArray = [ ...Array(6).keys(), ];

    return (
      <Grid container align="center" justify="center" >
        <Grid item xs={11}>
          <svg preserveAspectRatio="xMidYMid" className={classes.container} >
            <g className={classes.tessGroup}>
              {cArray.map(k => (
                <path className={classes.tessPath} key={k}/>
              ))}
            </g>
          </svg>
        </Grid>
        
      </Grid>
    );
  }
}
export default withStyles(styleSheet)(Tess);
