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

const Overview = () => (
  <Grid container align="center">
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
      <Grid container >

        <Grid item xs={12} sm={6}>
          <Grid container >
            <Grid item xs={12} sm={4}>
              <List>
                <ListItem>"I have this skill and am very good"</ListItem>
                <ListItem>"I have this skill and am very good"</ListItem>
                <ListItem>"I have this skill and am very good"</ListItem>
                <ListItem>"I have this skill and am very good"</ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={4}>
              <List>
                <ListItem>"I have this skill and am very good"</ListItem>
                <ListItem>"I have this skill and am very good"</ListItem>
                <ListItem>"I have this skill and am very good"</ListItem>
                <ListItem>"I have this skill and am very good"</ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={4}>
              <List>
                <ListItem>"I have this skill and am very good"</ListItem>
                <ListItem>"I have this skill and am very good"</ListItem>
                <ListItem>"I have this skill and am very good"</ListItem>
                <ListItem>"I have this skill and am very good"</ListItem>
              </List>
            </Grid>

          </Grid>

        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container justify="center">
            <Grid item xs={12} sm={3}>
              <Testimonial/>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Testimonial/>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Testimonial/>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Testimonial/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  </Grid>
);

export default (Overview);
