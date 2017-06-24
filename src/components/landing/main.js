import React, { Component, } from 'react';
import d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { Link, } from 'react-router-dom';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import { Route, } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { withState, } from 'recompose';

import Teaching from '../main/teaching';
import { NavSlide, } from '../misc';
import Overview from './overview';
import Header from './header';
import FrontMatter from './frontMatter';
import Apps from './apps';
import Libraries from './libraries';
import { Hex, NavTess, HexSVG, } from '../visualization';

const linkArray = [ 'about', 'teaching', 'projects', ];
const swipeLabels = [ 'about', 'apps', 'libraries', ];
const TextLinks = txtArr => [ <Hex/>, ].concat(txtArr.map(t => <Text type="title">{t.toUpperCase()}</Text>));
const withIndex = withState('index', 'setIndex', ({ index, }) => index || 0);

class Landing extends Component {
  render() {
    const labels = TextLinks(swipeLabels);
    const { index, setIndex, match, } = this.props;

    console.log('this.props', this.props);
    return (
      <Grid container direction="column" justify="center">
        <Grid item xs>
          <AppBar>
            <Toolbar>
              <Grid container align="center" >
                {labels.map((l, i) => (
                  <Grid item xs key={i}>
                    <Button key={i} onClick={() => setIndex(() => i)} children={l} />
                  </Grid>
                ))}
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs>
          <Route path="/:key?" render={({ match, history, }) => {
            console.log('match', match.params.key);
            console.log('history', history);
            return (<SwipeableViews enableMouseEvents className="mainSlide" index={index}>
              <NavTess index={index} >
                {labels.map((l, i) => (
                  <Button key={i} onClick={() => setIndex(() => i)} />
                ))}
              </NavTess>
              <HexSVG/>
              
              <FrontMatter/>
              <Overview/>
              <Apps/>
              <Libraries/>
            </SwipeableViews>);
          }}/>

        </Grid>
      </Grid>
    );
  }
}

export default withIndex(Landing);
