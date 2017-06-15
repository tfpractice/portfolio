import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import ScrollableAnchor from 'react-scrollable-anchor';

import { FadeIn, } from 'animate-components';
import { Slide, } from '../misc';

const About = () => (
  <Grid container direction="column" justify="center">
    <Grid item xs>
      <a href="#sa1"> Go to section 1 </a>
      <a href="#a2"> Go to section 2 </a>
    </Grid>
    <Grid item xs={12}>
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

  </Grid>
);

export default (About);
