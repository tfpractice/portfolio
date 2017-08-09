import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { MarkdownPreview } from 'react-marked-markdown';

const Slide = ({ slide, project, ...props }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs={11}>
      <Text component="div" align="center" type="title">
        <MarkdownPreview value={slide.caption} />
      </Text>
    </Grid>
    <Grid item xs>
      <Text align="justify" type="title">
        <MarkdownPreview value={slide.content} />
      </Text>
    </Grid>
  </Grid>);

export default Slide;
