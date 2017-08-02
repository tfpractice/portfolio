import React from 'react';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import grey from 'material-ui/colors/grey';

const Styled = withStyles(
  createStyleSheet('ToolChip', theme => ({
    chip: { margin: theme.spacing.unit },
    svgIcon: { color: grey[800] },
    row: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  }))
);

const ToolChip = ({ tool, classes, ...rest }) => <Chip label={tool.name} />;

export default Styled(ToolChip);
