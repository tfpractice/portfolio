import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';

import LandingCard from './landingCard';

const LandingList = ({ items, }) => (
  <Grid container justify="center" >
    {items.map(p =>
      (<Grid item xs={11} sm={6} md={4} lg={3} key={p.id}>
        <LandingCard project={p} />
      </Grid>)
    )}
  </Grid>);

export default LandingList;
