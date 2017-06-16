import React, { Component, } from 'react';
import d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { FadeIn, } from 'animate-components';
import { Link, } from 'react-router-dom';
import { getBox, linkGons, polyGrid, polyLine, rBox, showCircles, showPolys, xBox, yBox, } from './endoHelp';
import SwipeableViews from 'react-swipeable-views';
import About from './about';
import Teaching from './teaching';
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
          <Grid item xs>
            <Card raised>
              <CardHeader title="Welcome to My site" />
              <CardContent>
                <Text color="secondary" type="body1">
                  I'm a full-stack web developer and educator with a passion for functional programming and application architecture
                </Text>
              </CardContent>
              <CardActions>
                <Button compact>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs >
            {/* <About/> */}
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
