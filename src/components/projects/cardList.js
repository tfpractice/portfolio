import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { connect, } from 'react-redux';

import ProjectLink from './link';
import ProjectCard from './card';

const CardList = ({ items, }) => (
  <Grid container direction="row" >
    {items.map(p =>
      (<Grid item md={4} key={p.id}>
        <ProjectCard project={p} />
      </Grid>)
    )}
  </Grid>);

export default CardList;
