import React from 'react';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';

import ProjectCard from './card';

const CardList = ({ items }) =>
  (<Grid container justify="center">
    {!items.length
      ? <Grid item xs={11}>
        <CircularProgress color="accent" />
      </Grid>
      : items.map(p =>
        (<Grid item xs={11} sm={6} md={4} key={p.id}>
          <ProjectCard project={p} />
        </Grid>)
      )}
  </Grid>);

export default CardList;
