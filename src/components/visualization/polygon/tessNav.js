import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Hex from './hex';
import Grid from 'material-ui/Grid';

import { appendTess, viewTess, } from './funcs';

const styleSheet = createStyleSheet('Tess', () => ({
  container: {},
  tessGroup: {},
  tessWrap: {},
  tessPath: {},
}));

class Tess extends Component {
  componentDidMount() {
    viewTess(this.props.classes)(this.props.children);
  }

  render() {
    const { classes, } = this.props;
    const cArray = [ ...Array(6).keys(), ];
    
    return (
      <Grid container align="center" justify="center" >
        <Grid item xs={10}>
          <svg className={classes.container} >
            <g className={classes.tessGroup}>
              {this.props.children.map((c, k) => (
                k !== 0 && <path key={k} className={classes.tessPath} {...c.props} />
              ))}
            </g>
          </svg>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styleSheet)(Tess);
