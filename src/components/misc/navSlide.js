import React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import SwipeableViews from 'react-swipeable-views';
import { withState, } from 'recompose';
import AppBar from 'material-ui/AppBar';
import BottomNavigation, { BottomNavigationButton, } from 'material-ui/BottomNavigation';

import Toolbar from 'material-ui/Toolbar';
const withIndex = withState('index', 'setIndex', ({ index, }) => index || 0);

const NavSlide = ({ labels, index, setIndex, children, ...sprops }) => (
  <Grid container align="center" justify="center" >
    <Grid item xs={12}>
      <BottomNavigation index={index} onChange={(...args) => console.log('args', args)}>
        {labels.map((l, i) => (
          <BottomNavigationButton key={i} onClick={() => setIndex(() => i)} label={l} />
        ))}
      </BottomNavigation>
    </Grid>
    <Grid item xs={12}>
      <SwipeableViews index={index} enableMouseEvents {...sprops}>
        {children}
      </SwipeableViews>
    </Grid>
  </Grid>
);

export default withIndex(NavSlide);
