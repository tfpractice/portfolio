import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';

import { containers, } from '../../store/projects';
const { WithProject, } = containers;

const ProjectCard = ({ project, ...props }) => {
  console.log('ProjectCardprops', props);
  return (
    <Card raised>
      <CardHeader title={project.title} />
      <CardContent>
        <Text type="subheading">
          {project.description}
        </Text>
      </CardContent>
      <CardActions>
        <Button compact>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default (ProjectCard);
