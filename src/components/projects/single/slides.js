import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Card, { CardContent, } from 'material-ui/Card';
import Slide from './slide';

const styles = {
  slide: {
    padding: 15,
    minHeight: '100',
    color: '#fff',
  },
  slide1: { background: '#FEA900', },
  slide2: { background: '#B3DC4A', },
  slide3: { background: '#6AC0FF', },
};

const getStyle = data => ix => Object.assign({}, styles.slide,
  styles[`slide${(ix + 1) % data.length}`]);
 
const Slides = ({ data, project, ...props }) => {
  const a = 0;

  // style={getStyle(data)(i)}

  return (
    <SwipeableViews enableMouseEvents>
      {data.map((h, i) => (
        <Slide key={i} slide={h} />
      ))}
    </SwipeableViews>
  );
};

export default Slides;
