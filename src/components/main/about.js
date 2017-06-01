import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { FadeIn, } from 'animate-components';

const styles = { paddingTop: '5rem', };

const About = () => (
  <FadeIn duration="250ms" timingFunction="ease-in">
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
  </FadeIn>
    );

export default (About);
