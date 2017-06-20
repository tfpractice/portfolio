import React, { Component, } from 'react';
import d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { Link, } from 'react-router-dom';

import { createImage, linkGons, tessGons, } from '../visualization';

const linkArray = [ 'about', 'teaching', 'projects', ];

class Header extends Component {
  componentDidMount() {
    linkGons(linkArray);
    tessGons(linkArray);
    createImage(linkArray);
  }
  
  render() {
    return (
      <Grid container direction="column" justify="center">
        <Grid item xs id="tess"/>
        <Grid item xs id="landingGrid">
          <Grid container justify="center" className="linkWrapper">
            {linkArray.map((path, i) => (
              <Grid item xs key={i}>
                <Link to={`/${path}`} className="svgLink" key={i}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Header;
            
