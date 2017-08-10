import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { MarkdownPreview } from 'react-marked-markdown';

const mOpts = {
  sanitize: false,
  smartypants: true,
};
const Slide = ({ slide, project, ...props }) =>
  (<Grid container justify="center" spacing={40}>
    <Grid item xs className="gridSlide">
      <Text className="slideText" type="subheading" align="center">
        <MarkdownPreview
          className="slide pjSlide"
          value={slide.content}
          markedOptions={mOpts}
        />
      </Text>
    </Grid>
  </Grid>);

export default Slide;
