import React from 'react';
import Grid from 'material-ui/Grid';
import List, { ListItem, } from 'material-ui/List';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import FaceIcon from 'material-ui-icons/Face';
import grey from 'material-ui/colors/grey';
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
  <Grid container wrap="nowrap" >

    {/* <Paper> */}
    {tools.sort((a, b) => a.name.length - b.name.length).map(t => (
      <Grid item xs key={t.id}>
        <ToolChip tool={t} key={t.id} />
      </Grid>
    ))}
    {/* </Paper> */}
  </Grid>
);

export default ChipList;
