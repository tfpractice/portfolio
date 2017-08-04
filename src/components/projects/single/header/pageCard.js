import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import { containers } from '../../../../store/projects';
import { Expand, HexCard, SwipeTabs } from '../../../misc';
import { qUtils } from '../../../../utils';
import { ChipList } from '../../../tools';
import ProjectLink from '../../link';
import FeatureList from '../../featureList';
import { Features, PJMedia } from '../../pjCard';

import Slides, { SwipeSlides } from '../slides';
import Header from './cardHead';
import PageMedia from './media';

const { WithProject, WithSkills, DropTool } = containers;
const { edgeNodes } = qUtils;

const withSwitch = compose(
  withState('open', 'flip', ({ open }) => !!open),
  withHandlers({
    toggle: ({ flip }) => () => flip(x => !x),
    show: ({ flip }) => () => flip(true),
    hide: ({ flip }) => () => flip(false),
  })
);

const getChips = p =>
  p.category === 'APP' ? edgeNodes(p.tools) : edgeNodes(p.skills);
const colors = {
  APP: 'rgba(255,0,255,1)',
  LIB: 'rgba(0,255,255,1)',
};
const dStyles = {
  APP: { backgroundColor: colors.APP },
  LIB: { backgroundColor: colors.LIB },
};
const Styled = withStyles(
  createStyleSheet('ProjectCard', theme => ({
    APP: { backgroundColor: 'rgba(255,0,255,0.3)' },
    LIB: { backgroundColor: 'rgba(0,255 ,255,0.3)' },
    SCRIPT: { backgroundColor: '#00796b' },
    actions: { overflowX: 'auto', overflowY: 'hidden' },
  }))
);

const PageCard = ({ project, show, classes, toggle, open, ...props }) => {
  console.log('project', project);
  console.log('props', props);
  return (
    <HexCard raised>
      <Expand
        dStyle={dStyles[project.category]}
        color="default"
        open={true}
        header={<Header project={project} />}
      >
        <CardMedia className={!open ? classes[project.category] : ''}>
          <Collapse in={!open}>
            <PageMedia project={project} />
          </Collapse>
          <Collapse in={open}>
            {<SwipeSlides project={project} /> ||
              <SwipeTabs iHue={colors[project.category]}>
                <FeatureList
                  tabLabel="highlights"
                  data={project.details.map(d => d.caption)}
                />
                <FeatureList tabLabel="tech" data={project.features} />
              </SwipeTabs>}
          </Collapse>
        </CardMedia>
      </Expand>
      <Grid container justify="center" align="center">
        <Grid item xs={11} className={classes.actions}>
          <CardActions>
            <Grid container justify="center" align="center">
              <Grid item xs>
                <ChipList tools={getChips(project)} />
              </Grid>
              <Grid item xs>
                <Button target="_blank" href={project.url}>
                  view online
                </Button>
              </Grid>
              <Grid item xs>
                <IconButton onClick={toggle}>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        </Grid>
      </Grid>
    </HexCard>
  );
};

export default DropTool(withSwitch(Styled(PageCard)));
