import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import { connect } from 'react-redux';

import { dStyles, lightStyles, pColors, slug } from '../../../utils';
import { Expand, HexCard, SwipeTabs } from '../../misc';

import Slide from './slide';
import { getSlides, hasSlides } from './pages';

const mergeMarkdown = sArr => (slide, i) => ({ ...sArr[i], ...slide });
const mapState = (state, { project }) => ({
  slides: hasSlides(slug(project)) && getSlides(slug(project)),
  dslides: project.details.map(mergeMarkdown(getSlides(slug(project)))),
});

const JustSlides = ({ project, slides, dslides }) =>
  slides &&
  <SwipeTabs top={false} iHue={pColors[project.category]}>
    {slides.map((h, i) => <Slide tabLabel="." key={i} slide={h} />)}
  </SwipeTabs>;

const Slides = ({ data, project, slides, ...props }) =>
  slides &&
  <Grid container justify="center" align="center">
    <Grid item xs>
      <Expand
        dStyle={dStyles[project.category]}
        header={
          <Text color="inherit" type="title">
            Project Highlights
          </Text>
        }
      >
        <JustSlides project={project} slides={slides} />
      </Expand>
    </Grid>
  </Grid>;

export const SwipeSlides = connect(mapState)(JustSlides);

export default connect(mapState)(Slides);
