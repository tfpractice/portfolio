import React, { Component, } from 'react';
import d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { Link, } from 'react-router-dom';
import * as visualization from '../visualization';
import { createImage, linkGons, LandingVis, Hex, Tess, WithHex, } from '../visualization';

const HexButton = WithHex(Button);
const { tessGons, } = LandingVis;
const linkArray = [ 'about', 'teaching', 'projects', ];

class Header extends Component {
  componentDidMount() {

  }
  
  render() {
    return (
      <Grid container justify="center" id="header">

        { [ ...Array(5).keys(), ].map(k =>
          (<Grid item xs key={k}>
            <HexButton>hexbutton</HexButton>
          </Grid>)
        )}

      </Grid>
    );
  }
}
export default Header;
            
