import React, { Component, } from 'react';
import d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { FadeIn, } from 'animate-components';
import { Link, } from 'react-router-dom';
import { getBox, linkGons, polyGrid, polyLine, rBox, showCircles, showPolys, xBox, yBox, } from './endoHelp';

import Endo from './endo';

const linkArray = [ 'about', 'teaching', 'projects', ];
const selectLinks = () =>
  d3.select('#landingGrid')
    .selectAll('a')
    .data(linkArray);
    
class Landing extends Component {
  componentDidMount() {
    linkGons(linkArray);
    showPolys(polyGrid(3)(6));
  }
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={11} id="landingGrid">
          <Grid container className="linkWrapper">
            Landing
            {linkArray.map((path, i) => (<Grid item xs key={i}>
              <Link to={`/${path}`} className="svgLink" key={i}/>
            </Grid>))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default (Landing);
