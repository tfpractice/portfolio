import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { FadeIn, } from 'animate-components';
import Card, { CardContent, } from 'material-ui/Card';
import { devEx, future, highlights, info, technicals, } from './data';
 
const Thoughts = ({ data, }) => (
  <Grid container>
    <Grid item xs={11}>
      <Card >
        {data.map((d, i) => (
          <CardContent key={i}>
            <Text >
              {d}
            </Text>
          </CardContent>

            ))}
      </Card>
    </Grid>
  </Grid>
);

export default Thoughts;
