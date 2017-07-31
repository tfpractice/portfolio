import React from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { FadeIn } from 'animate-components';

import { slug } from '../../utils';
import ProjectLink from './link';
import ProjectInfo from './info';
import ProjectCard from './card';
import Single from './single';

const stateToProps = ({ projects }) => ({ projects });

const Projects = (props) => {
  const a = 0;

  return (
    <Grid container justify="center" align="center" className="projects-main">
      <Grid item xs={11} sm={10}>
        <FadeIn duration="200ms" timingFunction="ease-in">
          <Switch>
            <Route exact path={`${props.match.url}`} component={ProjectInfo} />
            <Route exact path={`${props.match.url}/:slug`} component={Single} />
          </Switch>
        </FadeIn>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(Projects);
