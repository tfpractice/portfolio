import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { MarkdownPreview } from 'react-marked-markdown';

const Slide = ({ slide, project, ...props }) =>
  (<Text component="Grid" type="body2">
    <MarkdownPreview value={slide.content} />
  </Text>);

export default Slide;
