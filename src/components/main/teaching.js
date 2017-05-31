import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';

const styles = { paddingTop: '5rem', };

// const stateToProps = state => (state);

const Teaching = () => (
  <Grid container justify="center" style={styles} >
    <Grid item sm={6}>
      <Card raised>
        <CardHeader title="Welcome to My site" />
        <CardContent>
          <Text type="subheading">
          As an educator .... </Text>
        </CardContent>
        <CardActions>
          <Button compact>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
    );

export default (Teaching);
