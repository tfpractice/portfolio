import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { qUtils, } from '../../utils';

import { containers, } from '../../store/projects';
const { WithProject, } = containers;
const { edgeNodes, } = qUtils;

const ProjectCard = ({ project, }) => {
  const a = 0;

  return (
    <Card raised>
      <CardHeader title={project.title} />
      <CardContent>
        {project.features.map(f =>
          (<Text type="subheading">
            {f}
          </Text>)
        )}
      </CardContent>
      <CardActions>
        {edgeNodes(project.tools).map(t =>
          <Chip label={t.name} />)}
      </CardActions>
    </Card>
  );
};

export default (ProjectCard);
