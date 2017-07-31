import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
import Toolbar from 'material-ui/Toolbar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withState } from 'recompose';
import { withRouter } from 'react-router';
import { RawPath } from '../visualization';
import About from './about';
import FrontMatter from './frontMatter';
import Apps from './apps';
import Libraries from './libraries';
import Teaching from './teaching';

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

const withIndex = withState('index', 'setIndex', ({ location }) =>
  getIndex(location.hash)
);

const TabNav = ({ index, setIndex, location, history, sections }) =>
  (<AppBar>
    <Toolbar>
      <Grid container justify="center" align="center">
        <Grid item>
          <Tabs
            index={index}
            centered
            scrollable
            scrollButtons="on"
            textColor="#fff"
            indicatorColor="#f0f"
            onChange={(e, i) => setIndex(i)}
          >
            {sections.map((hash, i) =>
              (<Tab
                key={i}
                label={getLabel(hash)}
                onClick={() => history.replace({ hash })}
              />)
            )}
          </Tabs>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>);

export default withRouter(withIndex(TabNav));
