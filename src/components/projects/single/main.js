import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import kramed from 'kramed';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MarkdownPreview } from 'react-marked-markdown';
import { CircularProgress } from 'material-ui/Progress';

import { containers } from '../../../store/projects';
import { findMatch, qUtils } from '../../../utils';
import { Expand, HexCard } from '../../misc';
import { getContent, getDemos, getProject, getSlides, getTech } from './pages';
import { markdown as mCont } from './pages/fenugreek/markdown';
import Slides from './slides';
import DemoView from './demoview';
import SkillsAndTools from './skillsAndTools';

const { WithSkills, WithProject } = containers;
const { edgeNodes } = qUtils;

const mapState = ({ projects }, { match: { params: { slug }}}) => ({
  slug,
  project: findMatch(slug)(projects),
  lSlides: getSlides(slug),
  localP: getProject(slug),
});
const mainStyle = { backgroundColor: 'rgba(158,158,158,0.5)' };

const Project = (props) => {
  const { project, slug, localP, slides, lSlides } = props;
  let view;

  if (!project) {
    view = (
      <Grid container align="center" justify="center" style={mainStyle}>
        <Grid item xs>
          <CircularProgress color="accent" />
        </Grid>
      </Grid>
    );
  } else {
    const isMissing = ({ id: toolId }) =>
      !new Set(edgeNodes(project.tools).map(({ id }) => id)).has(toolId);

    const xSkill = ({ id: skillId }) =>
      !new Set(edgeNodes(project.skills).map(({ id }) => id)).has(skillId);
    const hasSkill = skill => !xSkill(skill);

    const Demo = getDemos(slug);

    console.log('props', props);
    const tech = getTech(slug);
    const content = getContent(slug);
    const demo =
      !!Demo &&
      <Grid item xs={11}>
        <DemoView project={project} />
      </Grid>;

    const highlights =
      !!lSlides.length &&
      <Grid item xs={11}>
        <Slides project={project} data={lSlides} />
      </Grid>;

    view = (
      <Grid container align="center" justify="center" style={mainStyle}>
        <Grid item xs={11}>
          <HexCard>
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
          </HexCard>
        </Grid>
        {highlights}

        <Grid item xs={11}>
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

        <DemoView project={project} />
        <Grid item xs={11}>
          <SkillsAndTools project={project} />
        </Grid>
      </Grid>
    );
  }

  return view;
};

export default connect(mapState)(WithSkills(Project));
