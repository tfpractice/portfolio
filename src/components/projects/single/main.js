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
import { autoplay } from 'react-swipeable-views-utils';
import { FadeIn } from 'animate-components';
import { CircularProgress } from 'material-ui/Progress';

import { containers } from '../../../store/projects';
import { findMatch, qUtils } from '../../../utils';
import { Expand, HexCard } from '../../misc';
import { getContent, getDemos, getProject, getSlides, getTech } from './pages';
import { markdown as mCont } from './pages/fenugreek/markdown';
import Slides from './slides';

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

    const Demo = getDemos(slug);
    const tech = getTech(slug);
    const content = getContent(slug);

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
        <Grid item xs={11}>
          <Grid container direction="column" justify="center" align="center">
            <Expand
              header={
                <Text color="inherit" type="title">
                  Project Highlights
                </Text>
              }
            >
              <Grid item>
                <Slides project={project} data={lSlides} />
              </Grid>
            </Expand>
          </Grid>
        </Grid>

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

        <Grid item xs={11}>
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

        <Grid item xs={11}>
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
  }

  return view;
};

export default connect(mapState)(WithSkills(Project));
