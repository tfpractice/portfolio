import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { NavLink, } from 'react-router-dom';
import { withState, } from 'recompose';
import { viewTess, showText, appendText, } from './funcs';
import Text from 'material-ui/Typography';

const styleSheet = createStyleSheet('TessNav', theme => ({
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
}));
const defPaths = [ 'DEVELOPER', 'DESIGNER', 'EDUCATOR', ];

const withLink = withState('links', 'setLinks', defPaths);

class TessNav extends Component {
  componentDidMount() {
    viewTess(this.props.classes)(this.props.children);
    appendText(this.props.classes);
  }
  
  render() {
    const { classes, paths, } = this.props;
    
    const showSpan = paths => paths.map((p, i) => (
      <tspan className={classes.span} key={i}>
        <tspan className={`${classes.subSpan}`}> // </tspan>
        {p.toUpperCase()}
      </tspan>
      
    ));
    
    return (
      <Grid container align="center" justify="center" >
        <Grid item xs={10}>
          <svg className={classes.wrapper} >
            <g className={classes.textGroup}>
              <text className={`tessText ${classes.mainText}`}>
                tfpractice
              </text>
              <text className={`tessText ${classes.subText}`}>
                {showSpan(this.props.links)}
              </text>
            </g>
            <g className={classes.group}>
              {this.props.paths.map((c, k) => (
                k && <NavLink to={c} key={k}
                  className={classes.pathLink}
                  onMouseOver={() => {
                    clearTimeout(this.tID);
                    this.props.setLinks(x => [ c.slice(1), ]);
                  }}

                  onMouseOut={() =>
                    this.tID = setTimeout(() => {
                      this.props.setLinks(x => defPaths);
                    }, 1000)
                  }
                >
                  <path key={k} className={classes.path} />
                </NavLink>
              ))}
            </g>
          </svg>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styleSheet)(withLink(TessNav));
