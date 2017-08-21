import React from 'react';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ExpandLess from 'material-ui-icons/ExpandLess';
import Grid from 'material-ui/Grid';
import Collapse from 'material-ui/transitions/Collapse';
import Divider from 'material-ui/Divider';
import { compose, withHandlers, withState } from 'recompose';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import { RawPath } from '../visualization';

const withSwitch = compose(
  withState('open', 'flip', ({ open = true }) => !!open),
  withHandlers({ toggle: ({ flip }) => () => flip(x => !x) })
);

const Styled = withStyles(
  createStyleSheet('Expand', theme => ({
    Grid: { backgroundColor: 'rgba(0,0,0,0.5)', paddingBottom: '5%' },
    Header: { backgroundColor: 'rgba(0,0,0,0.5)', boxShadow: 'none' },
    Divider: { backgroundColor: '#f0f', marginBottom: theme.spacing.unit },
  }))
);

const Expand = ({ open, children, dStyle, toggle, color, header, classes }) =>
  (<Grid container justify="center" align="center" spacing={0}>
    <Grid item xs={11}>
      <Grid container justify="space-between" align="center" spacing={0}>
        <Grid item xs={9} onClick={toggle}>
          {header}
        </Grid>
        <Grid item xs={2}>
          <IconButton color={color || 'inherit'} onClick={toggle}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={11}>
      <Divider className={classes.Divider} style={{ ...dStyle }} />
    </Grid>

    <Grid item xs={11}>
      <Collapse in={open}>
        {children}
      </Collapse>
    </Grid>
  </Grid>);

export default withSwitch(Styled(Expand));
