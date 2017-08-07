import React from 'react';
import Grid from 'material-ui/Grid';
import { NavTess } from '../visualization';

const FrontMatter = ({ sections }) =>
  (<Grid container justify="center" align="center" id="header">
    <Grid item xs={12}>
      <NavTess paths={sections} />
    </Grid>
  </Grid>);

export default FrontMatter;
