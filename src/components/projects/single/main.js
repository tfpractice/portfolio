import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';
import { FadeIn, } from 'animate-components';

import { containers, } from '../../../store/projects';
import { findMatch, qUtils, } from '../../../utils';
import { Fenugreek, } from '../lib';

import { getDemos, } from './demos';

import { slugData, slugMap, } from './data';
import Slides from './slides';
import Thoughts from './thoughts';
const { WithProject, WithTools, WithSkills, } = containers;

const { edgeNodes, } = qUtils;

const styles = { paddingTop: '5rem', };

const stateToProps = ({ projects, ...state }, { match: { params: { slug, }, }, }) =>

  ({ project: findMatch(slug)(projects), sData: slugData(slug), slug, })

;

const Project = (props) => {
  console.log('SINGLE PROJECT PORPS', props);
  const { project, sData, slug, slides, } = props;

  console.log('slides', slides);
  const isMissing = ({ id: toolId, }) =>
    !new Set(edgeNodes(project.tools).map(({ id, }) => id)).has(toolId);
  const xSkill = ({ id: skillId, }) =>
    !new Set(edgeNodes(project.skills).map(({ id, }) => id)).has(skillId);
  const Demo = getDemos(slug);

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

      <Grid item xs={11} sm={10} >
        <FadeIn duration="200ms" timingFunction="ease-in">
          {slides && <Slides project={project} data={slides} />}
          {<Demo/>}
          {/* <Thoughts data={project.thoughts ? project.thoughts : []} /> */}
        </FadeIn>
      </Grid>
      <Grid item>
        <Grid container>
          {props.skillArray && props.skillArray.filter(xSkill).map(t => (
            <Grid item key={t.id}>
              <Button color="primary" onClick={e => props.addSkill(t)}>{t.name}</Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(WithSkills(Project));
