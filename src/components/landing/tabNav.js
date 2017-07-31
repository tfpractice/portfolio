import React from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';
import Toolbar from 'material-ui/Toolbar';
import { withRouter } from 'react-router-dom';
import Tabs, { Tab } from 'material-ui/Tabs';
import { compose, withHandlers, withState } from 'recompose';

import { RawPath } from '../visualization';

const ixMap = sects => new Map(sects.map((k, i) => [ k, i ]));

const hexIcon = (
  <SvgIcon transform="scale(1.3)" viewBox="-1,-1,2,2">
    <RawPath />
  </SvgIcon>
);

const lMap = sects =>
  new Map(
    sects.map((k, i) => (i ? [ k, k.slice(1).toUpperCase() ] : [ k, hexIcon ]))
  );

const getIx = sects => (key = '#frontMatter') =>
  ixMap(sects).has(key) ? ixMap(sects).get(key) : 0;

const getLabel = sects => (key = '#frontMatter') =>
  lMap(sects).has(key) ? lMap(sects).get(key) : '';

const withIndex = compose(
  withState(
    'index',
    'setIndex',
    ({ index, sections, location }) => index || getIx(sections)(location.hash)
  ),
  withHandlers({
    set: ({ setIndex }) => (e, i) => setIndex(i),
    changeSet: ({ setIndex }) => i => setIndex(i),
    hPush: ({ history }) => hash => () => history.replace({ hash }),
  })
);

const TabNav = ({ index, hPush, set, sections }) =>
  (<AppBar>
    <Toolbar>
      <Grid container justify="center" align="center">
        <Grid item>
          <Tabs
            centered
            scrollable
            index={index}
            scrollButtons="on"
            textColor="#fff"
            indicatorColor="#f0f"
            onChange={set}
          >
            {sections.map((l, i) =>
              <Tab key={i} label={getLabel(sections)(l)} onClick={hPush(l)} />
            )}
          </Tabs>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>);

export default withRouter(withIndex(TabNav));
