import React from 'react';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import { mapTo } from 'fenugreek-collections';

import MapEx from './mapTo';

const double = x => x * 2;
const halve = x => x / 2;
const stateToProps = ({ projects }) => ({ projects });

const Demo = () =>
  (<Grid container>
    <Grid item xs={11}>
      <SwipeableViews enableMouseEvents>
        <MapEx />
      </SwipeableViews>
    </Grid>
  </Grid>);

export default Demo;
