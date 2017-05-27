import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { Link, Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import { containers, } from '../../store/projects';
import Single from './single';
const { WithAll, } = containers;

// /const
// const stateToProps = ({ game: { inPlay, }, }) => ({ inPlay, });

const Projects = (props) => {
  console.log('projects');
  console.log('Projects props', props);
  return (
    <Grid container justify="center" align="center" direction="column">
      <Grid item sm={12}>
        {props.projects.map(p =>
          (<Link to={`${props.match.url}/${p.id}`} key={p.id}>
            { p.title}
          </Link>))}
        <h1>projects</h1>
        <Switch >
          <Route path={`${props.match.url}/:project_id`} component={Single} />
          {/* <Route path="/" exact component={About} /> */}
        </Switch>
      </Grid>
    </Grid>
  );
};

export default (Projects);
