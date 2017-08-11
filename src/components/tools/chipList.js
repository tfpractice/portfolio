import React from 'react';
import Grid from 'material-ui/Grid';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import { tSort } from '../landing/skills/content';
import ToolChip from './chip';

const Styled = withStyles(
  createStyleSheet('SkillChip', theme => ({
    list: {
      overflowX: 'auto',
      overflowY: 'none',
    },
  }))
);

const ChipList = ({ tools, classes }) =>
  (<Grid container wrap="nowrap" className={classes.list}>
    {tSort(tools).reverse().map(t =>
      (<Grid item xs key={t.id}>
        <ToolChip tool={t} key={t.id} />
      </Grid>)
    )}
  </Grid>);

const Chips = ({ tools, classes }) =>
  (<Grid container align="center" className={classes.list}>
    {tSort(tools).reverse().map(t =>
      (<Grid item xs key={t.id}>
        <ToolChip tool={t} key={t.id} />
      </Grid>)
    )}
  </Grid>);

export const JustChips = Styled(Chips);
export default Styled(ChipList);
