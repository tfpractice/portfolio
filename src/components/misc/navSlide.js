import React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { withState } from 'recompose';

const withIndex = withState('index', 'setIndex', ({ index }) => index || 0);

const NavSlide = ({ labels, index, setIndex, children, ...sprops }) =>
  (<Grid container align="center" justify="center">
    <AppBar>
      <Toolbar>
        <Grid container align="center">
          {labels.map((l, i) =>
            (<Grid item xs key={i}>
              <Button key={i} onClick={() => setIndex(() => i)} children={l} />
            </Grid>)
          )}
        </Grid>
      </Toolbar>
    </AppBar>
    <Grid item xs={12}>
      <SwipeableViews index={index} enableMouseEvents {...sprops}>
        {children}
      </SwipeableViews>
    </Grid>
  </Grid>);

export default withIndex(NavSlide);
