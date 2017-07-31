import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
import { withState } from 'recompose';

import { RawPath } from '../visualization';
import About from './about';
import FrontMatter from './frontMatter';
import Apps from './apps';
import Libraries from './libraries';
import Teaching from './teaching';
import TabNav from './tabNav';

const style = { overflowX: 'hidden' };

const sections = [ '#frontMatter', '#about', '#teaching', '#apps', '#libs' ];
const ixMap = new Map(sections.map((k, i) => [ k, i ]));

const hexIcon = (
  <SvgIcon transform="scale(1.3)" viewBox="-1,-1,2,2">
    <RawPath />
  </SvgIcon>
);

const lMap = new Map(
  sections.map((k, i) => (i ? [ k, k.slice(1).toUpperCase() ] : [ k, hexIcon ]))
);

const getIndex = (key = '#frontMatter') =>
  ixMap.has(key) ? ixMap.get(key) : 0;

const getLabel = (key = '#frontMatter') => (lMap.has(key) ? lMap.get(key) : '');

const withIndex = withState('index', 'setIndex', ({ location: { hash }}) =>
  getIndex(hash)
);

const PureLanding = ({ index, setIndex, location, history }) => {
  const { hash } = location;

  return (
    <Grid container align="center" justify="center">
      <TabNav sections={sections} />
      <Grid item xs={12}>
        <SwipeableViews
          enableMouseEvents
          index={getIndex(hash)}
          slideStyle={style}
          onChangeIndex={i => setIndex(i)}
        >
          <FrontMatter sections={sections} />
          <About />
          <Teaching />
          <Apps />
          <Libraries />
        </SwipeableViews>
      </Grid>
    </Grid>
  );
};

export default withIndex(PureLanding);
