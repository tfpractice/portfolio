import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import { connect } from 'react-redux';

import { slug } from '../../../utils';
import { Expand, HexCard } from '../../misc';
import Slide from './slide';
import { getSlides, hasSlides } from './pages';

const mapState = (state, { project }) => ({ slides: hasSlides(slug(project)) && getSlides(slug(project)) });
const slideStyle = {
  backgroundImage: 'url(/images/pinkHex50.svg)',
  backgroundPosition: 'left',

  backgroundSize: '200% 200%',
  backgroundRepeat: 'no-repeat',
};
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

const getStyle = data => ix =>
  Object.assign({}, styles.slide, styles[`slide${(ix + 1) % data.length}`]);

const justSlides = ({ data, project, slides, ...props }) =>
  slides &&
  <SwipeableViews slideStyle={slideStyle} enableMouseEvents>
    {slides.map((h, i) => <Slide key={i} slide={h} />)}
  </SwipeableViews>;

const Slides = ({ data, project, slides, ...props }) =>
  slides &&
  <Grid container justify="center" align="center">
    <Grid item xs>
      <Expand
        header={
          <Text color="inherit" type="title">
            Project Highlights
          </Text>
        }
      >
        <SwipeableViews slideStyle={slideStyle} enableMouseEvents>
          {slides.map((h, i) => <Slide key={i} slide={h} />)}
        </SwipeableViews>
      </Expand>
    </Grid>
  </Grid>;

export const SwipeSlides = connect(mapState)(justSlides);

export default connect(mapState)(Slides);
