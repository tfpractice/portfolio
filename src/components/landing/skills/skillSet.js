import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { withStyles, createStyleSheet, } from 'material-ui/styles';

import { fScale, bScale, fTypes, bTypes, } from './content';
import { HexCard, Expand, } from '../../misc';

const styles = createStyleSheet('SkillChip', (theme) => {
  let sheet = {};

  sheet = [ ...fTypes, ].map(t => ({ [t]: { backgroundColor: fScale(t), }, }))
    .reduce((obj, next) => ({ ...obj, ...next, }), sheet);
  sheet = [ ...bTypes, ].map(t => ({ [t]: { backgroundColor: bScale(t), }, }))
    .reduce((obj, next) => ({ ...obj, ...next, }), sheet);

  return sheet;
});
const SkillSet = ({ skill, classes, }) => {
  const a = 0;

  return (
    <Grid container align="center">
      <Grid item xs={11} >
        <Grid container align="center" justify="center">
          {skill.skillSet.map((s, j) => (
            <Grid item xs key={j}>
              <Chip className={classes[s.type]} label={s.name} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

  );
};

export default withStyles(styles)(SkillSet);
