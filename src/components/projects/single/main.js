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
import ProjectCard from './header/pageCard';
import { getContent, getProject, getSlides, getTech } from './pages';
import { markdown as mCont } from './pages/fenugreek/markdown';
import Slides from './slides';
import DemoView from './demoview';
import SkillsAndTools from './skillsAndTools';
import PJContent from './content';

const { WithSkills, WithProject } = containers;
const { edgeNodes } = qUtils;

const mapState = ({ projects }, { match: { params: { slug }}}) => ({
  slug,
  project: findMatch(slug)(projects),
});
const mainStyle = { backgroundColor: 'rgba(158,158,158,0.5)' };

const Project = (props) => {
  const { project } = props;
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
    view = (
      <Grid container align="center" justify="center" style={mainStyle}>
        <Grid item xs={12}>
          <ProjectCard project={project} />
        </Grid>

        <Grid item xs={11}>
          <PJContent project={project} />
        </Grid>
        <Grid item xs={11}>
          <DemoView project={project} />
        </Grid>
        <Grid item xs={11}>
          <SkillsAndTools project={project} />
        </Grid>
      </Grid>
    );
  }

  return view;
};

export default connect(mapState)(WithSkills(Project));
