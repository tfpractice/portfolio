import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { FadeIn, } from 'animate-components';

const About = () => (
  <Grid container justify="center">
    <Grid item xs={11} sm={10}>
      <Card raised>
        <CardHeader title="Welcome to My site" />
        <CardContent>
          <Text type="paragraph">
            A web developer with a passion for functional programming and application architecture
            </Text>
        </CardContent>
        <CardActions>
          <Button compact>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
    );

export default (About);
