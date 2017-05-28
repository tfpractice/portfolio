import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { Link, Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { containers, } from '../../store/projects';
import Single from './single';
import ProjectLink from './link';
import ProjectInfo from './info';
const { WithProject, WithAll, } = containers;

// /const
// const stateToProps = ({ game: { inPlay, }, }) => ({ inPlay, });

const Projects = (props) => {
  console.log('projects');
  console.log('Projects props', props);
  return (
    <Grid container justify="center" align="center" direction="column">
      <Grid item sm={12}>
        <Text type="subheading">
          Projects
        </Text>
      </Grid>
      <Grid item sm={12}>
        <Text type="subheading">
          Projects
        </Text>
        {props.projects.map((p) => {
          console.log('p', p);
          return <ProjectLink project={p} key={p.id} />;
        }
        )}
        <Switch >
          <Route exact path={`${props.match.url}/:project_id`} component={Single} />
          <Route exact path={`${props.match.url}`} component={ProjectInfo} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default WithAll(Projects);
