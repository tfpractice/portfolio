import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';

import { FadeIn, } from 'animate-components';
import { Slide, } from '../misc';
import Endo from './endo';
const About = () => (
  <Grid container justify="center">
    <Grid item xs={11}>
      <Card raised>
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

    {/* <Grid item xs> */}
    <SwipeableViews enableMouseEvents axis="y" resistance>
      <Grid item xs><div>Slides</div></Grid>
      <Grid item xs><div>Slides</div></Grid>
      <Grid item xs><div>Slides</div></Grid>
    </SwipeableViews>
    {/* </Grid> */}
  </Grid>
);

export default (About);
