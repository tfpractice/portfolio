import React from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';

import { slug, } from '../../utils';
import Single from './single';
import ProjectLink from './link';
import ProjectInfo from './info';

const stateToProps = ({ projects, }) => ({ projects, });

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

        {props.projects.map(p =>
          <ProjectLink project={p} key={p.id}>{p.title}</ProjectLink>
        )}
        <Switch >
          <Route exact path={`${props.match.url}`} component={ProjectInfo} />
          <Route exact path={`${props.match.url}/:slug`} component={Single} />
          
        </Switch>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(Projects);
