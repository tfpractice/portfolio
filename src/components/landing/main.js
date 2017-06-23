import React, { Component, } from 'react';
import d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { Link, } from 'react-router-dom';
import Icon from 'material-ui/Icon';
import { withState, } from 'recompose';

import Teaching from '../main/teaching';
import { createImage, linkGons, } from '../visualization';
import { NavSlide, } from '../misc';
import Overview from './overview';
import Header from './header';

// import ProjectInfo from '../projects/info';
import Apps from './apps';
import Libraries from './libraries';
import { Hex, Tess, } from '../visualization';
const linkArray = [ 'about', 'teaching', 'projects', ];
const swipeLabels = [ 'about', 'apps', 'libraries', ];
const TextLinks = txtArr => txtArr.map(t => <Text type="title">{t.toUpperCase()}</Text>);

class Landing extends Component {
  render() {
    return (
      <Grid container direction="column" justify="center">
        <Grid item xs>
          <NavSlide className="mainSlide" labels={[ <Hex/>, ...TextLinks(swipeLabels), ]}>
            <Tess count={4} />
            {/* <Header/> */}
            <Overview/>
            <Apps/>
            <Libraries/>
          </NavSlide>
        </Grid>
      </Grid>
    );
  }
}

export default (Landing);
