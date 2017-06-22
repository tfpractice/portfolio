import React, { Component, } from 'react';
import d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { Link, } from 'react-router-dom';

import { createImage, linkGons, LandingVis, Hex, } from '../visualization';

const { tessGons, } = LandingVis;
const linkArray = [ 'about', 'teaching', 'projects', ];

class Header extends Component {
  componentDidMount() {
    // linkGons(linkArray);
    // tessGons(linkArray);

    // createImage(linkArray);
  }
  
  render() {
    return (
      <Grid container justify="center" id="header">
        
        <Grid item xs>
          <Hex/>

        </Grid>
        <Grid item xs>
          <Hex/>

        </Grid>
        <Grid item xs>
          <Hex/>

        </Grid>
        <Grid item xs>
          <Hex/>

        </Grid>

      </Grid>
    );
  }
}
export default Header;
            
