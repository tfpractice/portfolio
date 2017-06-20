import React from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FaceIcon from 'material-ui-icons/Face';
import { grey, } from 'material-ui/styles/colors';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet('ToolChip', theme => ({
  chip: { margin: theme.spacing.unit, },
  svgIcon: { color: grey[800], },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
}));

const ToolChip = ({ tool, classes, ...rest }) => {
  //
  const a = 0;

  return (
    <Chip label={tool.name} />

  );
};

export default withStyles(styleSheet)(ToolChip);
