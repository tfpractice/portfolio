import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { MarkdownPreview } from 'react-marked-markdown';

const mOpts = {
  sanitize: false,
  smartypants: true,
};
const Slide = ({ slide, project, ...props }) =>
  (<Text className="slideText" type="subheading" align="center">
    <MarkdownPreview value={slide.content} markedOptions={mOpts} />
  </Text>);

export default Slide;
