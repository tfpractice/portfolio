import React, { Component, } from 'react';
import d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { FadeIn, } from 'animate-components';
import { Link, } from 'react-router-dom';
import { createImage, getBox, linkGons, linkGons2, linkGons3, polyGrid, polyLine, rBox,
  selectLinks, } from '../visualization';
import SwipeableViews from 'react-swipeable-views';
import About from './about';
import Teaching from '../main/teaching';
import Overview from './overview';

const linkArray = [ 'about', 'teaching', 'projects', ];
    
class Landing extends Component {
  componentDidMount() {
    linkGons(linkArray);
    createImage(linkArray);
  }
  render() {
    return (
      <Grid container direction="column" justify="center">
        <SwipeableViews enableMouseEvents >
          <Grid item xs id="landingGrid">
            <Grid container justify="center" className="linkWrapper">
              {linkArray.map((path, i) => (
                <Grid item xs key={i}>
                  <Link to={`/${path}`} className="svgLink" key={i}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {}
          <Overview/>

          {}
          <Grid item xs >
            {}
            <Teaching/>
            <Teaching/>
            <Teaching/>
            <Teaching/>

          </Grid>
        </SwipeableViews>

      </Grid>

    );
  }
}

export default (Landing);
