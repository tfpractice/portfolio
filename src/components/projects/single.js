import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';

import { containers, } from '../../store/projects';
import { findMatch, qUtils, } from '../../utils';
const { WithProject, WithTools, } = containers;

const { edgeNodes, } = qUtils;

const styles = { paddingTop: '5rem', };

const stateToProps = ({ projects, ...state }, { match: { params: { slug, }, }, ...own }) =>
   ({ project: findMatch(slug)(projects), })

;

const Project = (props) => {
  // console.log('SINGLE PROJECT PORPS', props);
  const { project, } = props;
  const isMissing = ({ id: toolId, }) => !new Set(edgeNodes(project.tools).map(({ id, }) => id)).has(toolId);

  return (
    <Grid container justify="center" >
      <Grid item>
        <Paper>
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
        </Paper>
      </Grid>
      <Grid container>
        {props.toolArray && props.toolArray.filter(isMissing).map(t => (
          <Grid item key={t.id}>
            <Button primary onClick={e => props.addTool(t)}>{t.name}</Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(WithTools(Project));
