import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { NavLink, } from 'react-router-dom';
import { withState, } from 'recompose';
import { viewTess, viewBackDrop, } from './funcs';
import Text from 'material-ui/Typography';

const styleSheet = createStyleSheet('BackDrop', (theme) => {
  console.log('theme', theme);
  
  return ({
    
    container: {},
    wrapper: {},
    tessGroup: {},
    group: {},
    tessText: {},
    path: { },
    animPath: { strokeWidth: '0.01px', stroke: '#000', },
    tessWrap: {},
    text: {},
    textGroup: {},
    pathLink: { '&:hover': { fill: '#f0f', }, },
    mainText: {
      ...theme.typography.title,
      'font-weight': '400',
      
      textDecoration: '#f0f',
      textDecorationColor: '#f0f',
      
    },
    subText: {
      ...theme.typography.subheading,
      fontSize: theme.typography.title.fontSize / 2,
    },
    span: { textDecoration: 'none', },
    subSpan: { fill: '#f0f', },
    
    tessPath: {},
    tessPath: {},
  });
});

// const defPaths = [ 'DEVELOPER', 'DESIGNER', 'EDUCATOR', ];
//
// const withLink = withState('links', 'setLinks', defPaths);

class BackDrop extends Component {
  componentDidMount() {
    viewBackDrop(this.props.classes);
    
    // appendText(this.props.classes);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const { classes, paths, } = this.props;
  
    return (
    
      <svg className={classes.wrapper} >
        <g className={classes.group} />
      </svg>
      
    );
  }
}
export default withStyles(styleSheet)((BackDrop));
