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

const styles = {
 slide: {
   padding: 15,
   minHeight: 100,
   color: '#fff',
 },
 slide1: { background: '#FEA900', },
 slide2: { background: '#B3DC4A', },
 slide3: { background: '#6AC0FF', },
};

const getStyle = data => ix => Object.assign({}, styles.slide,
 styles[`slide${(ix + 1) % data.length}`]);
 
const Slides = ({ data, }) => (
  <Grid container>
    <Grid item xs={11}>
      <SwipeableViews enableMouseEvents>
        {[ ...data, ].map((h, i) => (
          <Grid key={i} style={styles.slide}>
            <Card>
              <CardContent>
                {h}
              </CardContent>
              <CardContent>
                <code>
                  export const isIterable = o => !!o[Symbol.iterator];

                  export const iterify = o => isIterable(o) ? o : [ o, ];

                </code>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </SwipeableViews>
    </Grid>
  </Grid>
);

export default Slides;
