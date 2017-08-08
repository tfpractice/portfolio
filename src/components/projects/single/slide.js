import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import { MarkdownPreview } from 'react-marked-markdown';

const Slide = ({ slide, project, ...props }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs={11}>
      <Text component="div" align="center" type="body2">
        <MarkdownPreview value={slide.caption} />
      </Text>
    </Grid>
    <Grid item xs>
      <Text component="section" align="justify" type="subheading">
        <MarkdownPreview value={slide.content} />
      </Text>
    </Grid>
  </Grid>);

//
// (<Grid container justify="center" align="center">
//   <Grid item xs={11}>
//     <Text component="div" type="body2">
//       <MarkdownPreview value={slide.caption} />
//     </Text>
//   </Grid>
//   <Grid item xs={12}>
//     <Text component="div" type="subheading">
//       <MarkdownPreview value={slide.content} />
//     </Text>
//   </Grid>
// </Grid>);

export default Slide;
