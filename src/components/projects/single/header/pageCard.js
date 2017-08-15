import React from 'react';
import Grid from 'material-ui/Grid';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import Language from 'material-ui-icons/Language';
import withWidth, { isWidthUp, isWidthDown } from 'material-ui/utils/withWidth';
import { CardActions, CardMedia } from 'material-ui/Card';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';

import { ChipList } from '../../../tools';
import { Expand, PJCard } from '../../../misc';
import { dStyles, lightStyles, qUtils } from '../../../../utils';
import Header from './cardHead';
import PageMedia from './media';

const { edgeNodes } = qUtils;
const mapState = (state, { width }) => ({ big: isWidthUp('sm', width, false) });

const withSwitch = compose(
  withState('open', 'flip', ({ open }) => !!open),
  withHandlers({
    toggle: ({ flip }) => () => flip(x => !x),
    show: ({ flip }) => () => flip(true),
    hide: ({ flip }) => () => flip(false),
  })
);

const getChips = p => edgeNodes(p.tools).concat(edgeNodes(p.skills));

const Styled = withStyles(
  createStyleSheet('ProjectCard', theme => ({
    ...lightStyles,
    box: {},
    big: {
      backgroundColor: 'rgba(66,66,66,0.8)',
      '&:hover': { backgroundColor: 'rgba(66,66,66,1)' },
    },
    actions: { overflowX: 'auto', overflowY: 'hidden' },
  }))
);

const PageCard = ({ project, show, classes, big, toggle, ...props }) => {
  console.log('PageCard props', props);

  return (
    <PJCard raised headerURL={project.headerURL}>
      <Grid container justify="center">
        <Grid item xs={12} className={big ? classes.big : ''}>
          <Expand
            dStyle={dStyles[project.category]}
            color="default"
            header={
              <Grid container justify="space-between" align="center">
                <Grid item xs>
                  <Header {...project} />
                </Grid>
                {project.url &&
                  <Grid item xs={2}>
                    <IconButton target="_blank" href={project.url}>
                      <Language />
                    </IconButton>
                  </Grid>}
              </Grid>
            }
          >
            <CardMedia className={classes[project.category]}>
              <PageMedia project={project} {...project} />
            </CardMedia>
          </Expand>
          <CardActions>
            <Grid container align="center" justify="center">
              <Grid item xs={11} md={10}>
                <ChipList tools={getChips(project)} />
              </Grid>
            </Grid>
          </CardActions>
        </Grid>
      </Grid>
    </PJCard>
  );
};

export default withSwitch(Styled(withWidth()(connect(mapState)(PageCard))));
