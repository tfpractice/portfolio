import React from 'react';
import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';

import { dStyles, pColors, slug } from '../../../utils';

const mOpts = {
  sanitize: false,
  smartypants: true,
};

const style = { backgroundColor: `rgba(40, 44, 52, 0.5)` };

const Slide = ({ slide, project }) =>
  (<Text className="slideText" type="body1" style={style} align="center">
    <MarkdownPreview value={slide.content} markedOptions={mOpts} />
  </Text>);

export default Slide;
