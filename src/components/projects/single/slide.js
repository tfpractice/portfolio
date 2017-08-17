import React from 'react';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';

const mOpts = {
  sanitize: false,
  smartypants: true,
};

const Slide = ({ slide, project, ...props }) =>
  (<Text className="slideText" type="body1" align="center">
    <MarkdownPreview value={slide.content} markedOptions={mOpts} />
  </Text>);

export default Slide;
