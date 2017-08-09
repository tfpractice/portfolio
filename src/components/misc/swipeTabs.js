import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import { withState } from 'recompose';
import Tabs, { Tab } from 'material-ui/Tabs';
import { createStyleSheet, withStyles } from 'material-ui/styles';

export const withIndex = withState(
  'index',
  'setIndex',
  ({ index = 0 }) => index
);
export const ixHandler = i => prv => i;
const sStyle = { overflow: 'none' };
const cStyle = { maxHeight: '20rem', overflow: 'none' };

const SwipeTabs = ({ children, iHue = '#f0f', index, top = true, setIndex }) =>
  (<Grid container justify="center" align="center">
    {top &&
      <Grid item xs={11}>
        <Tabs
          centered
          index={index}
          indicatorColor={iHue}
          textColor="#fff"
          onChange={(e, i) => setIndex(p => i)}
        >
          {children.map((c, i) => <Tab key={i} label={c.props.tabLabel} />)}
        </Tabs>
      </Grid>}
    <Grid item xs={12}>
      <SwipeableViews
        containerStyle={cStyle}
        style={sStyle}
        slideStyle={sStyle}
        enableMouseEvents
        index={index}
      >
        {children}
      </SwipeableViews>
    </Grid>
    {!top &&
      <Grid item xs={11}>
        <Tabs
          centered
          index={index}
          indicatorColor={iHue}
          textColor="#fff"
          onChange={(e, i) => setIndex(p => i)}
        >
          {children.map((c, i) => <Tab key={i} label={c.props.tabLabel} />)}
        </Tabs>
      </Grid>}
  </Grid>);

export default withIndex(SwipeTabs);
