import React from 'react';
import Grid from 'material-ui/Grid';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';

import {
  bScale,
  bTypes,
  fScale,
  fTypes,
  stackScale,
  stackSort,
  stackTypes,
  tSort,
} from '../landing/skills/content';
import ToolChip from './chip';

const Styled = withStyles(
  createStyleSheet('SkillChip', theme => ({ list: { overflowX: 'auto', overflowY: 'hidden' }}))
);

const ChipList = ({ tools, classes }) =>
  (<Grid
    container
    justify="center"
    align="center"
    wrap="nowrap"
    className={classes.list}
  >
    {tSort(tools).reverse().map(t =>
      (<Grid item xs key={t.id}>
        <ToolChip tool={t} key={t.id} />
      </Grid>)
    )}
  </Grid>);

export default Styled(ChipList);
