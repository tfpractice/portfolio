import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';

import { containers, } from '../../store/projects';

const { WithProject, } = containers;

const styles = { paddingTop: '5rem', };

// const stateToProps = ({ projects, }, { match: { params: { project_id, }, }, }) =>
// ({
//  project: projects.find(p => p.id === project_id
// ),
// });

const stateToProps = (state, { match: { params: { project_id, }, }, ...own }) => {
  console.log('state, own', state, own);
  return ({ id: project_id, });

// ({
 // project: projects.find(p => p.id === project_id
// ),
};

const Project = ({ project, ...props }) => {
  console.log('SINGLE PROJECT PORPS', props);
  return (
    <Grid container justify="center" style={styles} >
      <Grid item>
        <Card raised>
          <CardHeader title={project && project.title} />
          <CardContent>
            <Text type="subheading">
              {project && project.description}
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

export default connect(stateToProps)(WithProject(Project));
