import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import ScrollableAnchor from 'react-scrollable-anchor';
import Avatar from 'material-ui/Avatar';
import { FadeIn, } from 'animate-components';
import { Slide, } from '../misc';
import Endo from './endo';

const About = () => (
  <Grid container direction="column" justify="center">
    <Grid item xs>
      <a href="#sa1"> Go to section 1 </a>
      <a href="#a2"> Go to section 2 </a>
    </Grid>
    <Grid item xs={11}>
      <Card raised>
        <CardHeader title="Welcome to My site" />
        <CardContent>
          <Grid container>
            <Grid item>
              <Avatar src="/images/me.jpg"/>
            </Grid>
            <Grid item>
              <Text color="secondary" type="body1">
                I'm a full-stack web developer and educator with a passion for functional programming and application architecture
              </Text>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button >Learn More</Button>
        </CardActions>
      </Card>

    </Grid>

    {/* <Grid item xs> */}
    <SwipeableViews enableMouseEvents resistance>
      <Grid item xs id={`ag${1}`}><ScrollableAnchor id={`a${1}`}><Card>Slides</Card></ScrollableAnchor></Grid>
      <Grid item xs id={`ag${2}`}><ScrollableAnchor id={`a${2}`}><Card>Slides</Card></ScrollableAnchor></Grid>
      <Grid item xs id={`ag${3}`}><ScrollableAnchor id={`a${3}`}><Card>Slides</Card></ScrollableAnchor></Grid>
    </SwipeableViews>
    {/* </Grid> */}
  </Grid>
);

export default (About);
