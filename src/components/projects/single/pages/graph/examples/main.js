import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { FadeIn } from 'animate-components';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';

import { mapTo } from 'fenugreek-collections';

import SwipeableViews from 'react-swipeable-views';
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
