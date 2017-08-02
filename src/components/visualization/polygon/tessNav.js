import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { NavLink } from 'react-router-dom';
import { withState } from 'recompose';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import { appendText, viewTess } from './funcs';

const Styled = withStyles(
  createStyleSheet('TessNav', theme => ({
    container: {},
    wrapper: {},
    tessGroup: {},
    group: {},
    tessText: {},
    path: {},
    animPath: { strokeWidth: '0.01px', stroke: '#000' },
    tessWrap: {},
    text: {},
    textGroup: {},
    pathLink: { '&:hover': { fill: '#f0f' }},
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
    span: { textDecoration: 'none' },
    subSpan: { fill: '#f0f' },

    tessPath: {},
  }))
);
const defPaths = [ 'DEVELOPER', 'DESIGNER', 'EDUCATOR' ];

const withLink = withState('links', 'setLinks', defPaths);

class TessNav extends Component {
  componentDidMount() {
    viewTess(this.props.classes)(this.props.children);
    appendText(this.props.classes);
  }

  render() {
    const { classes, paths } = this.props;

    const showSpan = paths =>
      paths.map((p, i) =>
        (<tspan className={classes.span} key={p}>
          <tspan className={`${classes.subSpan}`}> // </tspan>
          {p.toUpperCase()}
        </tspan>)
      );

    return (
      <Grid container align="center" justify="center">
        <Grid item xs={10}>
          <svg className={classes.wrapper}>
            <g className={classes.textGroup}>
              <text className={`tessText ${classes.mainText}`}>tfpractice</text>
              <text className={`tessText ${classes.subText}`}>
                {showSpan(this.props.links)}
              </text>
            </g>
            <g className={classes.group}>
              {this.props.paths.map(
                (c, k) =>
                  k &&
                  <NavLink
                    to={`/${c}`}
                    key={c}
                    className={classes.pathLink}
                    onMouseOver={() => {
                      clearTimeout(this.tID);
                      this.props.setLinks([ c.slice(1) ]);
                    }}
                    onMouseOut={() =>
                      (this.tID = setTimeout(() => {
                        this.props.setLinks(defPaths);
                      }, 1000))}
                  >
                    <path className={classes.path} />
                  </NavLink>
              )}
            </g>
          </svg>
        </Grid>
      </Grid>
    );
  }
}
export default Styled(withLink(TessNav));
