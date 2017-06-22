import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Hex from './hex';
import { appendTess, } from './funcs';

const styleSheet = createStyleSheet('Tess', () => ({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
  tessGroup: {
    width: '100%',
    height: '100%',
  },
  
  path: {
    width: '100%',
    height: '100%',
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
      <svg className={classes.container}>
        <g className={classes.tessGroup}>
          {cArray.map(k => (
            <Hex className={classes.path} key={k}/>
          ))}
        </g>
      </svg>
    );
  }
}
export default withStyles(styleSheet)(Tess);
