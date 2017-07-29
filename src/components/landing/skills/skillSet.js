import React from 'react';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import { bScale, bTypes, fScale, fTypes } from './content';

const styles = createStyleSheet('SkillChip', (theme) => {
  let sheet = {};

  sheet = [ ...fTypes ]
    .map(t => ({ [t]: { backgroundColor: fScale(t) }}))
    .reduce((obj, next) => ({ ...obj, ...next }), sheet);
  sheet = [ ...bTypes ]
    .map(t => ({ [t]: { backgroundColor: bScale(t) }}))
    .reduce((obj, next) => ({ ...obj, ...next }), sheet);

  return sheet;
});
const SkillSet = ({ skill, classes }) =>
  (<Grid container align="center" justify="center">
    {skill.skillSet.map(s =>
      (<Grid item xs key={s.name}>
        <Chip className={classes[s.type]} label={s.name} />
      </Grid>)
    )}
  </Grid>);

export default withStyles(styles)(SkillSet);
