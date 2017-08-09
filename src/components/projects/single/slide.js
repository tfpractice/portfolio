import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { MarkdownPreview } from 'react-marked-markdown';

const Slide = ({ slide, project, ...props }) =>
  (<Grid container justify="center">
    <Grid item xs className="pjSlide">
      <Text type="subheading">
        <MarkdownPreview value={slide.content} />
      </Text>
    </Grid>
  </Grid>);

export default Slide;
