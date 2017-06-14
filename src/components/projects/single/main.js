import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, CardMedia, } from 'material-ui/Card';
import { connect, } from 'react-redux';
import { FadeIn, } from 'animate-components';
import kramed from 'kramed';
import { MarkdownPreview, } from 'react-marked-markdown';

import { containers, } from '../../../store/projects';
import { findMatch, qUtils, } from '../../../utils';
import { getDemos, getProject, getSlides, } from './pages';
import { markdown as content, } from './pages/fenugreek/markdown';
import { slugData, } from './data';
import Slides from './slides';
const { WithSkills, } = containers;
const { edgeNodes, } = qUtils;

const stateToProps = ({ projects, ...state }, { match: { params: { slug, }, }, }) =>
  ({
    project: findMatch(slug)(projects), lSlides: getSlides(slug), localP: getProject(slug), sData: slugData(slug), slug,
  })

;
const Project = (props) => {
  const { project, sData, slug, localP, slides, lSlides, } = props;
  
  const isMissing = ({ id: toolId, }) =>
    !new Set(edgeNodes(project.tools).map(({ id, }) => id)).has(toolId);
  const xSkill = ({ id: skillId, }) =>
    !new Set(edgeNodes(project.skills).map(({ id, }) => id)).has(skillId);
  const Demo = getDemos(slug);

  //
 
  return (
    <Grid container align="center" justify="center" >
      <Card >
        <CardHeader title={project && project.title} />
        <CardContent>
          <Text type="title" >
            {project && project.description}
          </Text>
        </CardContent>
        <CardMedia>
          <Grid container justify="center" align="center">
            <Grid item xs={12}>
              <Slides project={project} data={lSlides} />

            </Grid>
          </Grid>
        </CardMedia>
      </Card>

      <Grid item xs={12}>
        <Text color="inherit" type="body1">
          <MarkdownPreview value={content} />
        </Text>
      </Grid>
      <Grid item xs={12} >
        <Demo/>
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
