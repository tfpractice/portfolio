import React from 'react';
import Grid from 'material-ui/Grid';

import LandingCard from './landingCard';

const LandingList = ({ items, }) => (
  <Grid container justify="center" >
    {items.map(p =>
      (<Grid item xs={11} sm={6} md={4} key={p.id}>
        <LandingCard project={p} />
      </Grid>)
    )}
  </Grid>);

export default LandingList;
