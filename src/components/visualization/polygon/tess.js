import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Hex from './hex';
import Grid from 'material-ui/Grid';

import { appendTess, } from './funcs';

const styleSheet = createStyleSheet('Tess', () => ({
  container: {
    width: 'auto',
    height: 'auto',

    overflow: 'visible',
  },
  tessGroup: {
    width: 'auto',
    height: 'auto',
    overflow: 'visible',

  },
  
  path: {
    width: 'auto',
    height: 'auto',
    overflow: 'visible',

  },
}));

class Tess extends Component {
  componentDidMount() {
    appendTess(this.props.classes)(this.props.count || 6);
  }

  render() {
    const { classes, count, } = this.props;
    const cArray = [ ...Array(count).keys(), ];

    return (
      <Grid container align="center" justify="center">
        <Grid item xs={12}>

          <svg className={classes.container} >
            <g className={classes.tessGroup}>
              {/* {cArray.map(k => (
                <Grid item xs>
                  <Hex key={k}/>
                </Grid>
              ))} */}
            </g>
          </svg>
        </Grid>
        {/* </Grid> */}
        {/* {cArray.map(k => (

          // <Grid item xs>
            <Hex className="tHex" key={k}/>

          // </Grid>
        ))} */}
      </Grid>
    );
  }
}
export default withStyles(styleSheet)(Tess);
