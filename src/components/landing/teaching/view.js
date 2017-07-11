import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import { MarkdownPreview, } from 'react-marked-markdown';

import { Expand, HexCard, } from '../../misc';
import { content, Wesley, } from './content';
import Testimonial from './testimonial';

const Teaching = () => (
  <Grid container justify="center" align="center">
    <Grid item xs={11}>
      <HexCard>
        <CardHeader title="Autodidact and Educator" />
        <CardContent>
          <Text color="secondary" type="body2">
            <MarkdownPreview value={content}/>
          </Text>
        </CardContent>
        <CardActions>
          <Text>Learn More</Text>
          <Button >Learn More</Button>
        </CardActions>
      </HexCard>
    </Grid>
    <Grid item xs={11}>
      <Expand
        header={<Text color="inherit" type="display1" children="Reviews" />}
        children={
          <Grid container justify="center" align="center">
            {[ ...Array(4).keys(), ].map((t, i) => (
              <Grid item xs={11} sm={6} key={i}>
                <Testimonial student={Wesley} key={i}/>
              </Grid>
            ))}
          </Grid>} />
    </Grid>

  </Grid>
);

export default (Teaching);
