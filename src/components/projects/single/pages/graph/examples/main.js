import React from 'react';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import { mapTo } from 'fenugreek-collections';

import MapEx from './fizzbuzz';

const Demo = () =>
  (<Grid container align="center">
    <Grid item xs={11}>
      <SwipeableViews enableMouseEvents>
        <MapEx />
      </SwipeableViews>
    </Grid>
  </Grid>);

export default Demo;
