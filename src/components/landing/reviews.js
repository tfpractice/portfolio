import React from 'react';
import Testimonial from './testimonial';
import Grid from 'material-ui/Grid';

const Reviews = () => (
  <Grid container justify="center" align="center">
    {[ ...Array(4).keys(), ].map((t, i) => (
      <Grid item xs key={i}>
        <Testimonial key={i}/>
      </Grid>
    ))}
  </Grid>
);

export default Reviews;
