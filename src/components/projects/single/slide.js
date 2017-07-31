import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import { MarkdownPreview } from 'react-marked-markdown';
import { Expand } from '../../misc';

const styles = {
  slide: {
    // padding: 15,
    height: '98%',
    color: '#fff',
  },
  slide1: { background: '#FEA900' },
  slide2: { background: '#B3DC4A' },
  slide3: { background: '#6AC0FF' },
};

const getStyle = data => ix =>
  Object.assign({}, styles.slide, styles[`slide${(ix + 1) % data.length}`]);

const Slide = ({ slide, project, ...props }) => {
  const a = 0;

  return (
    <Text component="div" color="inherit" type="body2">
      <MarkdownPreview value={slide.content} />
    </Text>
  );
};

export default Slide;
