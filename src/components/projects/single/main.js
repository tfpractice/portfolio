import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { connect } from 'react-redux';
import { FadeIn } from 'animate-components';
import kramed from 'kramed';
import { MarkdownPreview } from 'react-marked-markdown';
import Divider from 'material-ui/Divider';
import { autoplay } from 'react-swipeable-views-utils';
import { containers } from '../../../store/projects';
import { findMatch, qUtils } from '../../../utils';
import { Expand } from '../../misc';
import { getContent, getDemos, getProject, getSlides, getTech } from './pages';
import { markdown as mCont } from './pages/fenugreek/markdown';

import Slides from './slides';

const { WithSkills } = containers;
const { edgeNodes } = qUtils;
const stateToProps = (
  { projects, ...state },
  { match: { params: { slug }}}
) => ({
  project: findMatch(slug)(projects),
  lSlides: getSlides(slug),
  localP: getProject(slug),
  slug,
});
const Project = (props) => {
  const { project, slug, localP, slides, lSlides } = props;
  const isMissing = ({ id: toolId }) =>
    !new Set(edgeNodes(project.tools).map(({ id }) => id)).has(toolId);
  const xSkill = ({ id: skillId }) =>
    !new Set(edgeNodes(project.skills).map(({ id }) => id)).has(skillId);
  const Demo = getDemos(slug);
  const tech = getTech(slug);
  const content = getContent(slug);

  console.log('slug', slug);
  return (
    <Grid container direction="column" justify="center">
      <Grid item xs>
        <Card>
          <CardHeader title={project && project.title} />
          <CardContent>
            <Text type="title">
              {project && project.description}
            </Text>
            <List />
            {tech.map((t, i) =>
              (<ListItem key={i}>
                <ListItemText primary={t} key={i} />
              </ListItem>)
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs>
        <Grid container direction="column" justify="center" align="center">
          <Expand
            header={
              <Text color="inherit" type="title">
                {'Project Highlights'}
              </Text>
            }
          >
            <Grid item>
              <Slides project={project} data={lSlides} />
            </Grid>
          </Expand>
        </Grid>
      </Grid>

      <Grid item xs>
        <Expand
          open
          header={
            <Text color="inherit" type="title">
              In-Depth
            </Text>
          }
        >
          <Text component="div" color="inherit" type="body1">
            <MarkdownPreview value={content} />
          </Text>
        </Expand>
      </Grid>

      <Grid item xs>
        <Expand
          header={
            <Text color="inherit" type="title">
              Demos
            </Text>
          }
        >
          <Demo />
        </Expand>
      </Grid>

      <Grid item xs>
        <Expand
          header={
            <Text color="inherit" type="title">
              Skills
            </Text>
          }
        >
          <Grid container>
            {props.skillArray &&
              props.skillArray.filter(xSkill).map(t =>
                (<Grid item key={t.id}>
                  <Button color="primary" onClick={e => props.addSkill(t)}>
                    {t.name}
                  </Button>
                </Grid>)
              )}
          </Grid>
        </Expand>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(WithSkills(Project));
