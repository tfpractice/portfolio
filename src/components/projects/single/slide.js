import React from 'react';
import SwipeableViews from 'react-swipeable-views';

// import { connect, } from 'react-redux';
// import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

// import Text from 'material-ui/Typography';
// import { FadeIn, } from 'animate-components';
import Card, { CardContent, CardMedia, } from 'material-ui/Card';

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
 
const Slide = ({ slide, project, ...props }) => {
  
  const a = 0;

  return (
    <Grid style={styles.slide}>
      <Card>
        <Grid container direction="column" align="center">
          
          <CardMedia>
            <Grid item xs={11}>
              <img width="100%" src={slide.blobUrl}/>
            </Grid>
          </CardMedia>
          <CardContent>
            {slide.details[0].text}
          </CardContent>
          <CardContent />
        </Grid>
      </Card>
    </Grid>
  );
};

export default Slide;
