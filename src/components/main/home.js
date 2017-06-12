import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { Route, Switch, } from 'react-router-dom';
import { connect, } from 'react-redux';

import { Projects, } from '../../store';
import { FadeRoute, } from '../../utils';
import ProjectRoute from '../projects';
import About from './about';

import Teaching from './teaching';
import Nav from './nav';

const { containers: { WithAll, }, actions: pActions, } = Projects;

class Home extends Component {
  componentWillReceiveProps({ setProjects, projectsArray, projectsData, }) {
    !projectsData.loading && setProjects(projectsArray);
  }
  
  render() {
    return (
      <Grid container direction="column" justify="center" align="center" style={{ paddingTop: '5rem', }}>
        <Nav />
        <Grid item xs={11} sm={10} className="homeDiv">
          <Switch >
            <FadeRoute path="/projects" component={ProjectRoute} />
            <FadeRoute path="/about" component={About} />
            <FadeRoute path="/teaching" component={Teaching} />
            <Route exact path="/" component={About} />
          </Switch>
        </Grid>
      </Grid>
    );
  }
}
export default connect(null, pActions)(WithAll(Home));
