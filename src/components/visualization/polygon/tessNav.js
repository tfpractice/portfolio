import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Hex from './hex';
import Grid from 'material-ui/Grid';
import { NavLink, } from 'react-router-dom';

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
    const { classes, paths, } = this.props;
    const cArray = [ ...Array(6).keys(), ];
    
    return (
      <Grid container align="center" justify="center" >
        <Grid item xs={10}>
          <svg className={classes.container} >
            <g className={classes.tessGroup}>
              {this.props.paths.map((c, k) => (
                k !== 0 && <NavLink to={c} key={k} {...c.props}><path key={k} className={classes.tessPath} {...c.props} /></NavLink>
              ))}
            </g>
          </svg>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styleSheet)(Tess);
