import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';

import { containers, } from '../../store/projects';

const styles = { paddingTop: '5rem', };

const ProjectInfo = (props) => {
  console.log('SINGLE PROJECT PORPS', props);
  const { project, } = props;

  return (
    <Grid container justify="center" >
      <Grid item>
        <Card raised>
          <CardHeader title="THese are my projects" />
          <CardContent>
            <Text type="subheading">
              THese are my projects
            </Text>
          </CardContent>
          <CardActions>
            <Button compact>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default (ProjectInfo);
