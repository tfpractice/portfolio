import React from 'react';
import { withStyles, createStyleSheet, } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
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
  <Grid container direction="column" align="center">
    <Grid item xs={12}>
      <Tabs centered scrollable fullWidth
        index={index}
        onChange={(e, i) => setIndex(ixHandler(i))}
        textColor="accent" >
        {children.map((c, i) => <Tab key={i} label={c.props.tabLabel} />)}
      </Tabs>
    </Grid>
    <SwipeableViews enableMouseEvents index={index}>
      {children}
    </SwipeableViews>
  </Grid>
);

export default withStyles(styleSheet)(withIndex(SwipeTabs));
