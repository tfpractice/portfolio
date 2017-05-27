import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';

const styles = { paddingTop: '5rem', };

const stateToProps = state => (state);

const About = () => (
  <Grid container justify="center" style={styles} >
    <Grid item sm={6}>
      <Card raised>
        <CardHeader title="Welcome to My site" />
        <CardContent>
          <Text type="subheading">
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
