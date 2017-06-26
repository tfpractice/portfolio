import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import ScrollableAnchor from 'react-scrollable-anchor';
import List, { ListItem, } from 'material-ui/List';

import { Expand, Virtualize, VirtualSwipe, } from '../misc';
import Testimonial from './testimonial';
import Skills from './skills';
import Reviews from './reviews';
import About from './about';
import Teaching from './teaching';
const Overview = () => (
  <Grid container justify="center" align="center">
    <Grid item xs={11}>
      <About/>
    </Grid>
    <Grid item xs={11}>
      <Grid container justify="center" >
        <Grid item xs={11}>
          <Expand
            header={<Text color="inherit" type="display1" children="Skills" />}
            children={<Skills/>} />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default (Overview);
