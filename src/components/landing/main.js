import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import { compose, withHandlers, withState } from 'recompose';
import withWidth, { isWidthDown } from 'material-ui/utils/withWidth';

import About from './about';
import FrontMatter from './frontMatter';
import Apps from './apps';
import Libraries from './libraries';
import Teaching from './teaching';
import { getIndex, sections } from './sections';

const style = { overflowX: 'hidden' };

const withIndex = compose(
  withState('index', 'setIndex', ({ location: { hash }}) => getIndex(hash)),
  withHandlers({
    set: ({ setIndex }) => (e, i) => setIndex(i),
    changeSet: ({ setIndex }) => i => setIndex(i),
    hPush: ({ history }) => hash => () => history.replace({ hash }),
  })
);

const PureLanding = ({ changeSet, width, location }) => {
  const { hash } = location;

  return (
    <Grid container align="center" justify="center">
      <Grid item xs={12}>
        <SwipeableViews
          animateHeight={isWidthDown('sm', width, false)}
          enableMouseEvents
          slideStyle={style}
          onChangeIndex={changeSet}
          index={getIndex(hash)}
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

export default withIndex(withWidth()(PureLanding));
