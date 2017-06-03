import React from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { FadeIn, } from 'animate-components';

import { slug, } from '../../utils';
import Single from './single';
import ProjectLink from './link';
import ProjectInfo from './info';
import ProjectCard from './card';

const stateToProps = ({ projects, }) => ({ projects, });

const Projects = (props) => {
  const a = 0;

  return (
    <Grid container justify="center" align="center" direction="column" className="projects-main">
      <Grid item xs={11} sm={10} >
        <FadeIn duration="200ms" timingFunction="ease-in">
          <Switch >
            <Route exact path={`${props.match.url}`} component={ProjectInfo} />
            <Route exact path={`${props.match.url}/:slug`} component={Single} />
          </Switch>
        </FadeIn>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(Projects);
