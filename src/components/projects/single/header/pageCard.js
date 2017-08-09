import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Language from 'material-ui-icons/Language';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import FeatureList from '../../featureList';
import { ChipList } from '../../../tools';
import { hasSlides } from '../pages';
import { cardStyle, Expand, HexCard, PJCard } from '../../../misc';
import { dStyles, lightStyles, qUtils, slug } from '../../../../utils';
import { Features, PJMedia } from '../../pjCard';
import { SwipeSlides } from '../slides';
import Header from './cardHead';
import PageMedia from './media';

const { edgeNodes } = qUtils;

const gitSrc = '/images/github.png';
const covSource = `https://coveralls.io/repos/github/tfpractice/fenugreek-collections/badge.svg?branch=master`;
const buildSrc = `https://travis-ci.org/tfpractice/fenugreek-collections.svg?branch=master`;

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

const Styled = withStyles(
  createStyleSheet('ProjectCard', theme => ({
    ...lightStyles,
    box: {
      backgroundColor: 'rgba(66,66,66,0.8)',
      '&:hover': { backgroundColor: 'rgba(66,66,66,1)' },
    },
    actions: { overflowX: 'auto', overflowY: 'hidden' },
  }))
);

const PageCard = ({ project, show, classes, toggle, open }) =>
  (<PJCard raised headerURL={project.headerURL}>
    <Grid container align="center" justify="center" className={classes.box}>
      <Grid item xs>
        <Expand
          dStyle={dStyles[project.category]}
          color="default"
          header={
            <Grid container justify="center" align="center">
              <Grid item xs>
                <Header {...project} />
              </Grid>
              <Grid item xs>
                <ListItem>
                  <img src={buildSrc} />
                  <img src={covSource} />
                  <IconButton target="_blank" href={project.url}>
                    <Language />
                  </IconButton>
                </ListItem>
              </Grid>
            </Grid>
          }
        >
          <CardMedia className={!open ? classes[project.category] : ''}>
            <Collapse in={!open}>
              <PageMedia project={project} {...project} />
            </Collapse>
          </CardMedia>
        </Expand>
        <CardActions>
          <ChipList tools={getChips(project)} />
        </CardActions>
      </Grid>
    </Grid>
  </PJCard>);

export default withSwitch(Styled(PageCard));
