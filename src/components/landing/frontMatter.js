import React, { Component, } from 'react';
import d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { NavTess, } from '../visualization';
import { withRouter, } from 'react-router-dom';

const sections = [ '#frontMatter', '#backDrop', '#about', '#teaching', '#apps', '#libs', ];

const FrontMatter = ({ history, }) => (
  <Grid container justify="center" id="header">
    <Grid item xs>
      <NavTess paths={sections} />
    </Grid>
  </Grid>
);

export default withRouter(FrontMatter);
