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

const mapState = (state, { project }) => ({ slides: hasSlides(slug(project)) && getSlides(slug(project)) });
const slideStyle = {
  backgroundImage: 'url(/images/pinkHex50.svg)',
  backgroundPosition: 'left',

  backgroundSize: '200% 200%',
  backgroundRepeat: 'no-repeat',
};
const getBG = pj => lightStyles[pj.category];
const styles = {
  slide: {
    padding: 15,
    minHeight: '100',
    color: '#fff',
  },
  slide1: { background: '#FEA900' },
  slide2: { background: '#B3DC4A' },
  slide3: { background: '#6AC0FF' },
};

const JustSlides = ({ project, slides }) =>
  slides &&
  <SwipeTabs iHue={pColors[project.category]}>
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
