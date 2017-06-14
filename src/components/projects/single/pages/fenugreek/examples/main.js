import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { FadeIn, } from 'animate-components';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import MapEx from './mapTo';
import { mapTo, } from 'fenugreek-collections';

import SwipeableViews from 'react-swipeable-views';

const dubstring = `doubleNums() {
  const { numbers, } = this.state;

  this.setState({
    numbers: mapTo(double)(numbers),
  });
}`;
const halfStr = `halveNums() {
  const { numbers, } = this.state;
  
  this.setState({
    numbers: mapTo(halve)(numbers),
  });
}`;
const resStr = `resetNums() {
  this.setState({ 
    numbers: [ 1, 2, 3, 4, ],
  });
}`;

const double = x => x * 2;
const halve = x => x / 2;
const stateToProps = ({ projects, }) => ({ projects, });

const Demo = () =>
  (<Grid container>
    <Grid item xs={11}>
      <SwipeableViews enableMouseEvents >
        <MapEx/>
      </SwipeableViews>

    </Grid>
  </Grid>);

export default (Demo);
