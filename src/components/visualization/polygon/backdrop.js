import React, { Component } from 'react';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { viewBackDrop } from './funcs';

const styleSheet = createStyleSheet('BackDrop', theme => ({
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
}));

class BackDrop extends Component {
  componentDidMount() {
    viewBackDrop(this.props.classes);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { classes } = this.props;

    return (
      <svg className={classes.wrapper}>
        <g className={classes.group} />
      </svg>
    );
  }
}
export default withStyles(styleSheet)(BackDrop);
