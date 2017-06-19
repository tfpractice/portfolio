import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import ScrollableAnchor from 'react-scrollable-anchor';
import List, { ListItem, } from 'material-ui/List';
import Testimonial from './testimonial';
import { FadeIn, } from 'animate-components';
import { Slide, } from '../misc';
import Skills from './skills';
import Reviews from './reviews';
import { Expand, Virtualize, VirtualSwipe, } from '../misc';

const Overview = () => (
  <Grid container justify="center" align="center">
    <Grid item xs={11}>
      <Card>
        <CardHeader title="Welcome to My site" />
        <CardContent>
          <Text color="secondary" type="body1">
            I'm a full-stack web developer and educator with a passion for functional programming and application architecture
          </Text>
        </CardContent>
        <CardActions>
          <Button compact>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>

    <Grid item xs={11}>
      <Grid container justify="center" gutter={40} >
        <Grid item xs={10} sm={6}>
          <Expand
            header={<Text color="inherit" type="display1" children="Skills" />}
            children={<Skills/>} />
        </Grid>
        <Grid item xs={10} sm={6}>
          <Expand
            header={<Text color="inherit" type="display1" children="Reviews" />}
            children={<Reviews/>} />
        </Grid>

        {/* <Grid item xs >
          <Virtualize enableMouseEvents renderer={() =>
            (
          <SwipeableViews>
          <Testimonial key={1}/>
          <Testimonial key={2}/>
          <Testimonial key={3}/>
          <Testimonial key={4}/>
          </SwipeableViews>

            )

          } />
        </Grid>  */}
        {/* <Grid item xs >
          <Virtualize >
            <Testimonial key={0}/>
            <Testimonial key={1}/>
            <Testimonial key={2}/>
            <Testimonial key={3}/>
          </Virtualize>
        </Grid> */}
      </Grid>
    </Grid>

  </Grid>
);

export default (Overview);
