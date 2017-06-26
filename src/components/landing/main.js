import React, { Component, } from 'react';
import d3 from 'd3';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import { NavLink, } from 'react-router-dom';
import { withState, } from 'recompose';

import { HexSVG, } from '../visualization';
import Overview from './overview';
import FrontMatter from './frontMatter';
import Apps from './apps';
import Libraries from './libraries';
import Teaching from './teaching';
const sections = [ '#frontMatter', '#about', '#teaching', '#apps', '#libs', ];
const ixMap = new Map(sections.map((k, i) => [ k, i, ]));
const labelMap = new Map(sections.map((k, i) =>
  i ? [ k, <Text type="title">{k.slice(1).toUpperCase()}</Text>, ] : [ k, <HexSVG />, ]));

const getIndex = (key = '#frontMatter') => ixMap.has(key) ? ixMap.get(key) : 0;
const getLabel = (key = '#frontMatter') => labelMap.has(key) ? labelMap.get(key) : '';

const withIndex = withState('index', 'setIndex', ({ index, }) => index || 0);
const ixHandler = i => prv => i;

class Landing extends Component {
  render() {
    const { index, setIndex, match, location, history, } = this.props;
    const { hash, } = location;
    
    return (
      <Grid container direction="column" justify="center">
        <Grid item xs>
          <AppBar>
            <Toolbar>
              <Grid container align="center" >
                {sections.map((l, i) => (
                  <Grid item xs key={i}>
                    <Button key={i} href={l} color="accent">{getLabel(l)}</Button>
                  </Grid>
                ))}
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs>
          <SwipeableViews enableMouseEvents className="mainSlide" index={getIndex(hash)}>
            <FrontMatter/>
            <Overview/>
            <Teaching/>
            <Apps/>
            <Libraries/>
          </SwipeableViews>
        </Grid>
      </Grid>
    );
  }
}

export default withIndex(Landing);
