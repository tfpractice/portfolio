import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';

const Teaching = () => (
  <Grid container justify="center" >
    <Grid item xs={11}>
      <Card raised>
        <CardHeader title="Welcome to My site" />
        <CardContent>
          <Text type="subheading">
          As an educator .... </Text>
        </CardContent>
        <CardActions>
          <Button >Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);

export default (Teaching);
