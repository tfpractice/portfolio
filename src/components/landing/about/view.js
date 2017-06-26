import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import ScrollableAnchor from 'react-scrollable-anchor';
import { MarkdownPreview, } from 'react-marked-markdown';

import { FadeIn, } from 'animate-components';
import { Expand, } from '../../misc';
import { content, } from './content';
const About = () => (
  <Grid container justify="center" align="center">
    <Grid item xs={11}>
      <Card>
        <CardHeader title="A Passion for Programming" />
        <CardContent>
          <Text color="secondary" type="body2">
            <MarkdownPreview value={content}/>
          </Text>
        </CardContent>
        <CardActions>
          <Button >Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={10}>
      <Grid container direction="column" justify="center" align="center">
        <Expand header={ <Text color="inherit" type="title">
          {'A Passion for Programming'}
        </Text>}>
          <Grid item >
            <Text color="secondary" type="body2">
              <MarkdownPreview value={content}/>
            </Text>
          </Grid>
        </Expand>
      </Grid>
    </Grid>
  </Grid>
);

export default (About);
