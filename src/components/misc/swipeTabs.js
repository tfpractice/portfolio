import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import { withState, withHandlers, compose } from 'recompose';
import Tabs, { Tab } from 'material-ui/Tabs';
import withWidth, { isWidthUp, isWidthDown } from 'material-ui/utils/withWidth';

const cStyle = { maxHeight: '15rem' };

const wIndex = compose(
  withState('index', 'setIndex', ({ index = 0 }) => index),
  withHandlers({
    changeSet: ({ setIndex }) => (e, i) => setIndex(i),
    idxSet: ({ setIndex }) => i => () => setIndex(i),
    hPush: ({ history }) => hash => () => history.push({ pathname: '/', hash }),
  })
);

const SwipeTabs = ({ children, changeSet, width, index, iHue = '#f0f' }) =>
  (<Grid container justify="center" spacing={0}>
    <Grid item xs={11}>
      <Tabs
        centered
        fullWidth
        index={index}
        textColor="#fff"
        indicatorColor={iHue}
        onChange={changeSet}
      >
        {children.map((c, i) => <Tab key={i} label={c.props.tabLabel} />)}
      </Tabs>
    </Grid>
    <Grid item xs={12}>
      <SwipeableViews
        disabled
        index={index}
        containerStyle={cStyle}
        enableMouseEvents
        ignoreNativeScroll={isWidthUp('sm', width, false)}
      >
        {children}
      </SwipeableViews>
    </Grid>
  </Grid>);

export default wIndex(withWidth()(SwipeTabs));
