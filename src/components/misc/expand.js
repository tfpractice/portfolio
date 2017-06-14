import React from 'react';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';
import Collapse from 'material-ui/transitions/Collapse';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { withState, } from 'recompose';

const stateful = withState('open', 'toggle', false);

const Expand = ({ open, children, toggle, header, }) => (
  <Grid container direction="column" >
    <Grid item >
      <Grid container justify="space-between" align="center">
        <Grid item onClick={() => toggle(x => !x)} >
          {header}
        </Grid>
        <Grid item >
          <IconButton onClick={() => toggle(x => !x)} >
            <ExpandMoreIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
    <Divider />
    <Grid item xs>
      <Collapse in={open}>
        {children}
      </Collapse>
    </Grid>
  </Grid>
);
  
export default stateful(Expand);
