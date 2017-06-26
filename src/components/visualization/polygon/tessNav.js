import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Hex from './hex';
import Grid from 'material-ui/Grid';
import { NavLink, } from 'react-router-dom';
import { withState, } from 'recompose';
import { viewTess, showText, appendText, } from './funcs';
import Text from 'material-ui/Typography';

const styleSheet = createStyleSheet('Tess', (theme) => {
  console.log('theme', theme);
  
  return ({
    container: {},
    wrapper: {},
    tessGroup: {},
    group: {},
    tessText: {},
    path: {},
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
const defPaths = [ 'DEVELOPER', 'DESIGNER', 'EDUCATOR', ];

const withLink = withState('links', 'setLinks', defPaths);

class Tess extends Component {
  componentDidMount() {
    viewTess(this.props.classes)(this.props.children);
    appendText(this.props.classes);
  }

  render() {
    const { classes, paths, } = this.props;

    const showSpan = paths => paths.map((p, i) => (
      <tspan className={classes.span} key={i}>
        <tspan className={`${classes.subSpan}`}> // </tspan>
        {p}
      </tspan>
      
    ));

    return (
      <Grid container align="center" justify="center" >
        <Grid item xs={10}>

          <svg className={classes.wrapper} >
            <g className={classes.group}>

              <g className={classes.textGroup}>
                <text className={`tessText ${classes.mainText}`}>
                  tfpractice
                </text>
                <text className={`tessText ${classes.subText}`}>
                  {showSpan(this.props.links)}

                </text>
              </g>
              {this.props.paths.map((c, k) => (
                k !== 0 && <NavLink
                  onMouseOver={() => this.props.setLinks(x => [ c.slice(1), ])}
                  onMouseOut={() =>
                    setTimeout(() => {
                      this.props.setLinks((x) => {
                        console.log('x', x);
                        return defPaths;
                        return x[0] !== c.slice(1) ? defPaths : x;
                      });
                    }, 1000)
                  }
                  to={c}
                  key={k}
                  className={classes.pathLink}>
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
export default withStyles(styleSheet)(withLink(Tess));
