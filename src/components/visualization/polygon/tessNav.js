import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { NavLink } from 'react-router-dom';
import { withState } from 'recompose';
import { createStyleSheet, withStyles } from 'material-ui/styles';

// import { linkName } from '../../landing/sections';
import { appendText, viewTess } from './funcs';

const defPaths = [ 'DEVELOPER', 'DESIGNER', 'EDUCATOR' ];

const linkName = (k) => {
  const sliced = k.slice(1);

  if (sliced === 'apps') {
    return 'APPLICATIONS';
  } else if (sliced === 'libs') {
    return 'LIBRARIES';
  }
  return sliced.toUpperCase();
};
const Styled = withStyles(
  createStyleSheet('TessNav', theme => ({
    container: {},
    wrapper: {},
    tessGroup: {},
    group: {},
    tessText: {},
    tessWrap: {},
    text: {},
    textGroup: {},
    tessPath: {},
    path: { fill: '#000' },
    animPath: { strokeWidth: '0.01px', stroke: '#000' },
    pathLink: { '&:hover': { '& :first-child': { fill: '#f0f' }}},
    filler: {},
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
  }))
);

const withLink = withState('links', 'setLinks', defPaths);

class TessNav extends Component {
  componentDidMount() {
    viewTess(this.props.classes)(this.props.children);
    appendText(this.props.classes);
  }

  render() {
    const { classes, paths, links } = this.props;

    const showSpan = names => names.map(p =>
      (<tspan className={classes.span} key={p}>
        <tspan className={`${classes.subSpan}`}> // </tspan>
        {p}
      </tspan>)
    );

    return (
      <Grid container align="center" justify="center">
        <Grid item xs>
          <svg className={classes.wrapper}>
            <g className={classes.textGroup}>
              <text className={`tessText ${classes.mainText}`}>tfpractice</text>
              <text className={`tessText ${classes.subText}`}>
                {showSpan(links)}
              </text>
            </g>
            <g className={classes.group}>
              {paths.slice(1).map(c =>
                (<NavLink
                  to={`/${c}`}
                  key={c}
                  className={classes.pathLink}
                  onMouseOver={() => {
                    clearTimeout(this.tID);
                    this.props.setLinks([ linkName(c) ]);
                  }}
                  onMouseOut={() =>
                    (this.tID = setTimeout(() => {
                      this.props.setLinks(defPaths);
                    }, 750))}
                >
                  <path className={classes.path} />
                  <path className={classes.filler} />
                </NavLink>)
              )}
            </g>
          </svg>
        </Grid>
      </Grid>
    );
  }
}
export default Styled(withLink(TessNav));
