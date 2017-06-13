import React from 'react';
import SwipeableViews from 'react-swipeable-views';

// import { connect, } from 'react-redux';
// import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

// import Text from 'material-ui/Typography';
// import { FadeIn, } from 'animate-components';
import Card, { CardContent, } from 'material-ui/Card';
import Slide from './slide';

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

/* <Grid key={i} style={styles.slide}> */
/* <Card>
      <CardContent>
        {h.data}
      </CardContent>
      <CardContent>

      </CardContent>
      </Card>
    </Grid> */
const getStyle = data => ix => Object.assign({}, styles.slide,
  styles[`slide${(ix + 1) % data.length}`]);
 
const Slides = ({ data, project, ...props }) => {
  
  const a = 0;

  return (
    <Grid container>
      <Grid item xs={11}>
        <SwipeableViews enableMouseEvents>
          {data.map((h, i) => (
            <Slide key={i} slide={h}/>

          ))}
        </SwipeableViews>
      </Grid>
    </Grid>
  );
};

export default Slides;
