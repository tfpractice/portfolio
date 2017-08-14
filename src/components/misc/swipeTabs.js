import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import { withState, withHandlers, compose } from 'recompose';
import Tabs, { Tab } from 'material-ui/Tabs';

export const withIndex = withState(
  'index',
  'setIndex',
  ({ index = 0 }) => index
);

const wIndex = compose(
  withState('index', 'setIndex', ({ index = 0 }) => index),
  withHandlers({
    changeSet: ({ setIndex }) => (e, i) => setIndex(i),
    idxSet: ({ setIndex }) => i => () => setIndex(i),
    hPush: ({ history }) => hash => () => history.push({ pathname: '/', hash }),
  })
);

export const ixHandler = i => prv => i;
const sStyle = { overflow: 'none' };
const cStyle = { maxHeight: '20rem', overflow: 'none' };

const SwipeTabs = ({ children, changeSet, index, iHue = '#f0f', top = true }) =>
  (<Grid container justify="center" align="center">
    {top &&
      <Grid item xs={11}>
        <Tabs
          centered
          index={index}
          textColor="#fff"
          indicatorColor={iHue}
          onChange={changeSet}
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
          onChange={changeSet}
        >
          {children.map((c, i) => <Tab key={i} label={c.props.tabLabel} />)}
        </Tabs>
      </Grid>}
  </Grid>);

export default wIndex(SwipeTabs);
