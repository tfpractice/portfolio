import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
import { compose, withHandlers, withState } from 'recompose';
import { Route, Switch } from 'react-router-dom';

import { Single } from '../projects';
import { RawPath } from '../visualization';
import About from './about';
import FrontMatter from './frontMatter';
import Apps from './apps';
import Libraries from './libraries';
import Teaching from './teaching';
import TabNav from './tabNav';
import Views from './view';
import { getIndex, getLabel, hexIcon, ixMap, lMap, sections } from './sections';

const style = { overflowX: 'hidden' };

const withIndex = compose(
  withState('index', 'setIndex', ({ location: { hash }}) => getIndex(hash)),
  withHandlers({
    set: ({ setIndex }) => (e, i) => setIndex(i),
    changeSet: ({ setIndex }) => i => setIndex(i),
    hPush: ({ history }) => hash => () => history.replace({ hash }),
  })
);

const PureLanding = ({ index, set, changeSet, hPush, location, history }) => {
  const { hash } = location;

  return (
    <Grid container align="center" justify="center">
      <Grid item xs={12}>
        <SwipeableViews
          enableMouseEvents
          index={getIndex(hash)}
          slideStyle={style}
          onChangeIndex={changeSet}
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
