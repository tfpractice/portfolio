import React from 'react';
import Grid from 'material-ui/Grid';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';

import ToolChip from './chip';

const Styled = withStyles(
  createStyleSheet('ToolChipList', theme => ({
    svgIcon: { color: grey[800] },
    row: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  }))
);

const ChipList = ({ tools }) =>
  (<Grid container wrap="nowrap">
    {/* <Paper> */}
    {tools.sort((a, b) => a.name.length - b.name.length).map(t =>
      (<Grid item xs key={t.id}>
        <ToolChip tool={t} key={t.id} />
      </Grid>)
    )}
    {/* </Paper> */}
  </Grid>);

export default ChipList;
