import React from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';
import Toolbar from 'material-ui/Toolbar';
import { Link, withRouter } from 'react-router-dom';
import Tabs, { Tab } from 'material-ui/Tabs';
import { compose, withHandlers, withState } from 'recompose';

// import { Link } from 'module';
import { RawPath } from '../visualization';
import {
  getIndex as getIx,
  getLabel,
  hexIcon,
  sections as init,
  ixMap,
  lMap,
} from './sections';

const defProps = { sections: init };

const withIndex = compose(
  withState(
    'index',
    'setIndex',
    ({ index, location } = defProps) => index || getIx(location.hash) || false
  ),
  withHandlers({
    set: ({ setIndex }) => (e, i) => setIndex(i),
    changeSet: ({ setIndex }) => i => setIndex(i),
    hPush: ({ history }) => hash => () => history.push({ pathname: '/', hash }),
  })
);

const TabNav = ({ index, hPush, set } = defProps) =>
  (<AppBar>
    <Toolbar>
      <Grid container justify="center" align="center">
        <Grid item>
          <Tabs
            centered
            index={index}
            scrollButtons="on"
            textColor="#fff"
            indicatorColor="#f0f"
            onChange={set}
          >
            {init.map((l, i) =>
              <Tab key={i} label={getLabel(l)} onClick={hPush(l)} />
            )}
          </Tabs>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>);

export default withRouter(withIndex(TabNav));
