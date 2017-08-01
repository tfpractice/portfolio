import React from 'react';
import IconButton from 'material-ui/IconButton';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ExpandLess from 'material-ui-icons/ExpandLess';

import Grid from 'material-ui/Grid';
import Collapse from 'material-ui/transitions/Collapse';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { compose, withHandlers, withState } from 'recompose';
import { createStyleSheet, withStyles } from 'material-ui/styles';

const withSwitch = compose(
  withState('open', 'flip', ({ open = true }) => !!open),
  withHandlers({ toggle: ({ flip }) => () => flip(x => !x) })
);

const Styled = withStyles(
  createStyleSheet('Expand', theme => ({
    Grid: { backgroundColor: 'rgba(0,0,0,0.5)', paddingBottom: '5%' },
    Header: { backgroundColor: 'rgba(0,0,0,0.5)', boxShadow: 'none' },
    Divider: { backgroundColor: '#f0f' },
  }))
);

const Expand = ({
  open,
  children,
  toggle,
  color = 'inherit',
  header,
  classes,
}) =>
  (<Grid container justify="center" align="center">
    <Grid item xs={11}>
      <Grid container justify="space-between" align="center">
        <Grid item xs={9} onClick={toggle}>
          {header}
        </Grid>
        <Grid item xs={2}>
          <IconButton color={color} onClick={toggle}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={11}>
      <Divider className={classes.Divider} />
    </Grid>

    <Grid item xs={11}>
      <Collapse in={open}>
        {children}
      </Collapse>
    </Grid>
  </Grid>);

export default withSwitch(Styled(Expand));
