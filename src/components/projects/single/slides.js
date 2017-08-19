import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';

import { dStyles, pColors, slug } from '../../../utils';
import { Expand, SwipeTabs } from '../../misc';
import Slide from './slide';
import { getSlides } from './pages';

const mapState = (state, { project }) => ({ slides: getSlides(slug(project)) });

const JustSlides = ({ project, slides }) =>
  slides.length &&
  <SwipeTabs iHue={pColors[project.category]}>
    {slides.map((h, i) =>
      <Slide project={project} tabLabel="." key={i} slide={h} />
    )}
  </SwipeTabs>;

const Slides = ({ data, project, slides, ...props }) =>
  slides.length &&
  <Grid container justify="center" align="center" spacing={0}>
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
