import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';

import { containers, } from '../../store/projects';
import { findMatch, qUtils, } from '../../utils';
const { WithProject, WithTools, WithSkills, } = containers;

const { edgeNodes, } = qUtils;

const styles = { paddingTop: '5rem', };

const stateToProps = ({ projects, ...state }, { match: { params: { slug, }, }, ...own }) =>
   ({ project: findMatch(slug)(projects), })

;

const Project = (props) => {
  console.log('SINGLE PROJECT PORPS', props);
  const { project, } = props;

  // const images = edgeNodes(project.files);
  const isMissing = ({ id: toolId, }) =>
   !new Set(edgeNodes(project.tools).map(({ id, }) => id)).has(toolId);
  const xSkill = ({ id: skillId, }) =>
  !new Set(edgeNodes(project.skills).map(({ id, }) => id)).has(skillId);

  // console.log('images', images);
  return (
    <Grid container justify="center" >
      <Grid item xs={11}>
        <Card raised>
          <CardHeader title={project && project.title} />
          <CardContent>
            <Text type="subheading" >
              {project && project.description}
            </Text>
          </CardContent>
        </Card>
      </Grid>
      <Grid container>
        {/* <Paper> */}
        {/* {props.toolArray && props.toolArray.filter(isMissing).map(t => (
          <Grid item key={t.id}>
            <Button primary onClick={e => props.addTool(t)}>{t.name}</Button>
          </Grid>
        ))} */}
        {/* </Paper> */}
        {props.skillArray && props.skillArray.filter(xSkill).map(t => (
          <Grid item key={t.id}>
            <Button primary onClick={e => props.addSkill(t)}>{t.name}</Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(WithSkills(Project));
