import React from 'react';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';
import Collapse from 'material-ui/transitions/Collapse';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { withState, } from 'recompose';
import { withStyles, createStyleSheet, } from 'material-ui/styles';

const stateful = withState('open', 'toggle', ({ open = true, }) => !!open);

const styles = createStyleSheet('Expand', theme => ({
  Grid: { backgroundColor: 'rgba(0,0,0,0.5)', paddingBottom: '5%', },
  Header: { backgroundColor: 'rgba(0,0,0,0.5)', boxShadow: 'none', },
  Divider: { backgroundColor: '#f0f', },
    
}));

const Expand = ({ open, children, toggle, header, classes, }) => (
  <Grid container justify="center" align="center">
    <Grid item xs={11} >
      <Grid container justify="space-between" align="center">
        <Grid item onClick={() => toggle(x => !x)} >
          {header}
        </Grid>
        <Grid item >
          <IconButton color="inherit" onClick={() => toggle(x => !x)} >
            <ExpandMoreIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={11}>
      <Divider className={classes.Divider} />
    </Grid>

    <Grid item xs={11} >
      <Collapse in={open}>
        {children}
      </Collapse>

    </Grid>

  </Grid>
);
  
export default stateful(withStyles(styles)(Expand));
