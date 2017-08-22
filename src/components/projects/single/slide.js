import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { MarkdownPreview } from 'react-marked-markdown';

import { dStyles, pColors, slug } from '../../../utils';

const mOpts = {
  markedOptions: {
    sanitize: false,
    smartypants: true,
  },
};

const style = { backgroundColor: `rgba(40, 44, 52, 0.5)` };

const Slide = ({ slide, project }) =>
  (<Text className="slide" align="center" style={style} component={CardMedia}>
    <MarkdownPreview value={slide.content} {...mOpts} />
  </Text>);

export default Slide;
