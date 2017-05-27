import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import { containers, } from '../../store/projects';
const { WithAll, } = containers;

// /const
// const stateToProps = ({ game: { inPlay, }, }) => ({ inPlay, });

const Projects = (props) => {
  console.log('projects');
  console.log('Projects props', props);
  return (
    <Grid container justify="center" align="center" direction="column">
      <Grid item sm={12}>
        <h1>projects</h1>
        <Switch >
          {/* <Route path={`${props.match.url}/:project_id`}  component={Game} /> */}
          {/* <Route path="/" exact component={About} /> */}
        </Switch>
      </Grid>
    </Grid>
  );
};

export default (Projects);
