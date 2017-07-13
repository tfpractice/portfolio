import React from 'react';
import { withStyles, createStyleSheet, } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab, } from 'material-ui/Tabs';
import { withState, } from 'recompose';

export const withIndex = withState('index', 'setIndex', ({ index = 0, }) => index);
export const ixHandler = i => prv => i;

const styleSheet = createStyleSheet('FullWidthTabs', theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  appBar: { backgroundColor: theme.palette.background.appBar, },
}));

const SwipeTabs = ({ children, index, setIndex, }) => (
  <Grid container justify="center" align="center">
    <Grid item xs={11}>
      <Tabs centered index={index} indicatorColor="#f0f" textColor="#fff"
        onChange={(e, i) => setIndex(p => i)} >
        {children.map((c, i) =>
          <Tab key={i} label={c.props.tabLabel} />
        )}
      </Tabs>
    </Grid>
    <Grid item xs={11}>
      <SwipeableViews enableMouseEvents index={index}>
        {children}
      </SwipeableViews>
    </Grid>
  </Grid>
);

export default withStyles(styleSheet)(withIndex(SwipeTabs));
