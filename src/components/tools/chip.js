import React from 'react';
import Chip from 'material-ui/Chip';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import {
  bScale,
  bTypes,
  stackScale,
  stackTypes,
} from '../landing/skills/content';

const Styled = withStyles(
  createStyleSheet('SkillChip', (theme) => {
    let sheet = {};

    sheet = stackTypes
      .map(t => ({ [t]: { backgroundColor: stackScale(t) }}))
      .reduce((obj, next) => ({ ...obj, ...next }), sheet);
    sheet = [ ...bTypes ]
      .map(t => ({ [t]: { backgroundColor: bScale(t) }}))
      .reduce((obj, next) => ({ ...obj, ...next }), sheet);

    return sheet;
  })
);

const ToolChip = ({ tool, classes }) =>
  <Chip className={classes[tool.stack]} label={tool.name} />;

export default Styled(ToolChip);
