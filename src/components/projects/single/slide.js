import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import { MarkdownPreview } from 'react-marked-markdown';

const Slide = ({ slide, project, ...props }) =>

  // (<Card>
  //   <CardContent>
  //     {/* <Text component="Grid" type="body2"> */}
  //     <MarkdownPreview value={slide.caption} />
  //     {/* </Text> */}
  //   </CardContent>
  //   <CardMedia>
  //     <MarkdownPreview value={slide.content} />
  //   </CardMedia>
  // </Card>);

  (<Grid container justify="center" align="center">
    <Grid item xs={11}>
      <Text component="Grid" type="body2">
        <MarkdownPreview value={slide.caption} />
      </Text>
    </Grid>
    <Grid item xs={11}>
      {/* <Text component="Grid" type="body2"> */}
      <MarkdownPreview value={slide.content} />
      {/* </Text> */}
    </Grid>
  </Grid>);

export default Slide;
