import React from 'react';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import grey from 'material-ui/colors/grey';
import {
  bScale,
  bTypes,
  fScale,
  fTypes,
  stackScale,
  stackTypes,
} from '../landing/skills/content';

const Styled = withStyles(
  createStyleSheet('SkillChip', (theme) => {
    let sheet = { chip: { margin: theme.spacing.unit }};

    sheet = stackTypes
      .map(t => ({ [t]: { backgroundColor: stackScale(t) }}))
      .reduce((obj, next) => ({ ...obj, ...next }), sheet);
    sheet = [ ...bTypes ]
      .map(t => ({ [t]: { backgroundColor: bScale(t) }}))
      .reduce((obj, next) => ({ ...obj, ...next }), sheet);

    return sheet;
  })
);

const ToolChip = ({ tool, classes, ...rest }) => {
  console.log('classes, tool', classes, tool, rest);

  return <Chip className={classes[tool.stack]} label={tool.name} />;
};

export default Styled(ToolChip);
