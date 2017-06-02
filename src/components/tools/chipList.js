import React from 'react';
import Grid from 'material-ui/Grid';

import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import FaceIcon from 'material-ui-icons/Face';
import { grey, } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import ToolChip from './chip';

const styleSheet = createStyleSheet('ToolChipList', theme => ({
  svgIcon: { color: grey[800], },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
}));

const ChipList = ({ tools, }) => (
  <Grid container direction="row" justify="center" >

    {/* <Paper> */}
    {tools.map(t => (
      <ToolChip tool={t} key={t.id} />
    ))}
    {/* </Paper> */}
  </Grid>
);

export default ChipList;
