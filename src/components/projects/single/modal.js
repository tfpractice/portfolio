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

import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
  withResponsiveFullScreen,
} from 'material-ui/Dialog';

import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

import { compose, withHandlers, withState } from 'recompose';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import { findMatch, slug as pSlug, qUtils } from '../../../utils';
import { Expand, HexCard } from '../../misc';
import PageCard from './header/pageCard';
import { getContent, getProject, getSlides, getTech } from './pages';
import { markdown as mCont } from './pages/fenugreek/markdown';
import Slides from './slides';
import DemoView from './demoview';
import SkillsAndTools from './skillsAndTools';
import PJContent from './content';

const { edgeNodes } = qUtils;

const Styled = withStyles(
  createStyleSheet('PJModal', (theme) => {
    console.log('theme', theme);
    return {
      paper: {
        backgroundColor: 'rgba(238,238,238,0.85)',
        width: 'inherit',
        maxWidth: 'inherit',
      },
    };
  })
);
const withModal = compose(
  withState('open', 'turn', false),
  withHandlers({ toggle: ({ turn }) => () => turn(x => !x) })
);
const mapState = ({ projects }, { project }) => ({
  slug: pSlug(project),

  project,
});

const Project = (props) => {
  const { project, classes, open, toggle, trigger } = props;
  let view;

  console.log('pSlug(project)', pSlug(project));

  const label = props.label || project.title;

  if (!project) {
    view = (
      <Grid container align="center" justify="center">
        <Grid item xs>
          <CircularProgress color="accent" />
        </Grid>
      </Grid>
    );
  } else {
    view = (
      <Grid container align="center">
        <Grid item>
          <Button onClick={toggle}>
            {label}
          </Button>

          <Dialog
            classes={classes}
            open={open}
            onRequestClose={toggle}
            transition={<Slide direction="up" />}
          >
            <DialogContent>
              <Grid container align="center" justify="center">
                <Grid item xs={11}>
                  <PageCard project={project} />
                </Grid>

                <Grid item xs={11}>
                  <PJContent project={project} />
                </Grid>
                {/* <Grid item xs={11}>
                  <DemoView project={project} />
                </Grid> */}
                <Grid item xs={11}>
                  <SkillsAndTools project={project} />
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    );
  }

  return view;
};

export default connect(mapState)(withModal(Styled(Project)));

// export default connect(mapState)(WithSkills(withModal(Styled(Project))));
