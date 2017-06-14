import React from 'react';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';
import Collapse from 'material-ui/transitions/Collapse';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { withState, } from 'recompose';

const stateful = withState('open', 'toggle', false);

const Expand = ({ open, children, toggle, }) => (
  <Grid container>
    <Grid item xs={12}>
      <Paper>
        <IconButton onClick={() => toggle(x => !x)} >
          <ExpandMoreIcon />
        </IconButton>
      </Paper>
    </Grid>
    <Grid item xs={12}>

      <Divider inset/>
      <Collapse in={open}>
        {children}
      </Collapse>
    </Grid>
  </Grid>
);
  
export default stateful(Expand);
