import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Hex from './hex';
import Grid from 'material-ui/Grid';
import { NavLink, } from 'react-router-dom';

import { viewTess, showText, } from './funcs';
import Text from 'material-ui/Typography';
const styleSheet = createStyleSheet('Tess', theme => ({
  container: {},
  wrapper: {},
  tessGroup: {},
  group: {},
  tessText: {},
  path: {},
  tessWrap: {},
  text: {},

  // theme.typography,
  tessPath: {},
  tessPath: {},
}));

class Tess extends Component {
  componentDidMount() {
    viewTess(this.props.classes)(this.props.children);

    showText(this.props.classes);
  }

  render() {
    const { classes, paths, } = this.props;
    const cArray = [ ...Array(6).keys(), ];
    
    return (
      <Grid container align="center" justify="center" >
        <Grid item xs={10}>
          <Text className={classes.text} type="display1">'tfpractice'</Text>
          
          <svg className={classes.wrapper} >
            <g className={classes.group}>
              <text className={classes.text}>

                {/* <foreignObject class="node" width="100%" height="100%"> */}
                {/* </foreignObject> */}

              </text>

              {this.props.paths.map((c, k) => (
                k !== 0 && <NavLink to={c} key={k} {...c.props}><path key={k} className={classes.path} {...c.props} /></NavLink>
              ))}
            </g>
          </svg>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styleSheet)(Tess);
