import React from 'react';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';

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

const Slide = ({ slide, project, ...props }) =>
  (<Text component="div" type="body2">
    <MarkdownPreview value={slide.content} />
  </Text>);

export default Slide;
