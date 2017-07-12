import React, { Component, } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab, } from 'material-ui/Tabs';
import { withState, } from 'recompose';

import { HexSVG, BackDrop, RawGroup, } from '../visualization';
import Contact from './contact';
import About from './about';
import FrontMatter from './frontMatter';
import Apps from './apps';
import Libraries from './libraries';
import Teaching from './teaching';

const sections = [ '#frontMatter', '#about', '#teaching', '#apps', '#libs', ];
const ixMap = new Map(sections.map((k, i) => [ k, i, ]));

// const labelMap = new Map(sections.map((k, i) =>
//   i ? [ k, <Text align="center" noWrap type="subheading">{k.slice(1).toUpperCase()}</Text>, ] : [ k, <HexSVG />, ]));

//   
const labelMap = new Map(sections.map((k, i) =>
  i ? [ k, k.slice(1).toUpperCase(), ] : [ k, <HexSVG fill="#fff" />, ]));

const getIndex = (key = '#frontMatter') => ixMap.has(key) ? ixMap.get(key) : 0;
const getLabel = (key = '#frontMatter') => labelMap.has(key) ? labelMap.get(key) : '';

const withIndex = withState('index', 'setIndex', ({ location, }) => getIndex(location.hash));
const ixHandler = i => prv => i;

class Landing extends Component {
  render() {
    const { index, setIndex, match, location, history, } = this.props;
    const { hash, } = location;
    
    return (
      <Grid container align="center" justify="center">
        <Grid item xs={12}>
          <AppBar>
            <Tabs fullWidth scrollable scrollButtons="on" textColor="accent" index={getIndex(hash)} onChange={(e, i) => setIndex(x => i)}>
              {sections.map((l, i) => (
                <Tab key={i} label={getLabel(l)} onClick={() => history.replace({ hash: l, })} />
              ))}
            </Tabs>
          </AppBar>
        </Grid>
        <Grid item xs={11}>
          <SwipeableViews enableMouseEvents className="mainSlide" index={getIndex(hash)}>
            <FrontMatter sections={sections}/>
            <About/>
            <Teaching/>
            <Apps/>
            <Libraries/>
          </SwipeableViews>
        </Grid>
        <Grid item xs={12}>
          <Contact/>
        </Grid>
      </Grid>
    );
  }
}

export default withIndex(Landing);
