import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import { MarkdownPreview } from 'react-marked-markdown';

const Slide = ({ slide, project, ...props }) =>
  (<Grid container justify="center">
    <Grid item xs={12}>
      <CardMedia>
        <Text component="div" type="body2">
          <MarkdownPreview value={slide.caption} />
        </Text>
      </CardMedia>

      <CardMedia>
        <Text component="section" type="subheading">
          <MarkdownPreview value={slide.content} />
        </Text>
      </CardMedia>
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
