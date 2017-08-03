import React from 'react';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';

import ProjectCard from './pjCard';

const CardList = ({ items }) =>
  (<Grid container justify="center">
    {!items.length
      ? <CircularProgress color="accent" />
      : items.map(p =>
        (<Grid item xs={11} sm={6} md={4} key={p.id}>
          <ProjectCard project={p} />
        </Grid>)
      )}
  </Grid>);

export default CardList;
