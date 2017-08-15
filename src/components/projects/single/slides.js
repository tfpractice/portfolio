import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';

import { dStyles, pColors, slug } from '../../../utils';
import { Expand, SwipeTabs } from '../../misc';
import Slide from './slide';
import { getSlides, hasSlides } from './pages';

const mergeMarkdown = sArr => (slide, i) => ({ ...sArr[i], ...slide });

const mapState = (state, { project }) => ({ slides: hasSlides(slug(project)) && getSlides(slug(project)) });

const JustSlides = ({ project, slides }) =>
  slides &&
  <SwipeTabs iHue={pColors[project.category]}>
    {slides.map((h, i) => <Slide tabLabel="." key={i} slide={h} />)}
  </SwipeTabs>;

const Slides = ({ data, project, slides, ...props }) =>
  slides &&
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
