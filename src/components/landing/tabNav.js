import React from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';
import Toolbar from 'material-ui/Toolbar';
import { withRouter } from 'react-router-dom';
import Tabs, { Tab } from 'material-ui/Tabs';
import { compose, withHandlers, withState } from 'recompose';

import { RawPath } from '../visualization';
import {
  getIndex as getIx,
  getLabel,
  hexIcon,
  ixMap,
  lMap,
  sections,
} from './sections';

const init = [ '#frontMatter', '#about', '#teaching', '#apps', '#libs' ];
const defProps = { sections: init };

const withIndex = compose(
  withState(
    'index',
    'setIndex',
    ({ index, location } = defProps) => index || getIx(sections)(location.hash)
  ),
  withHandlers({
    set: ({ setIndex }) => (e, i) => setIndex(i),
    changeSet: ({ setIndex }) => i => setIndex(i),
    hPush: ({ history }) => hash => () =>
      history.replace({ pathname: '/', hash }),
  })
);

const TabNav = ({ index, hPush, set } = defProps) =>
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
              <Tab key={i} label={getLabel(l)} onClick={hPush(l)} />
            )}
          </Tabs>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>);

export default withRouter(withIndex(TabNav));
