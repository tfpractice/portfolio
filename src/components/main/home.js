import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing from '../landing';
import Contact from '../landing/contact';
import ProjectRoute, { Single } from '../projects';
import { Projects } from '../../store';
import { FadeRoute } from '../../utils';
import { BackDrop } from '../visualization';

const { containers: { WithAll }, actions: pActions } = Projects;

class Home extends Component {
  componentWillReceiveProps({ setProjects, projectsArray, projectsData }) {
    !projectsData.loading && setProjects(projectsArray);
  }

  render() {
    return (
      <Grid
        container
        justify="center"
        align="center"
        style={{ paddingTop: '5rem' }}
      >
        <Grid item xs={12} className="homeDiv">
          <Switch>
            <FadeRoute path="/projects" component={ProjectRoute} />
            <Route
              exact
              path={`${this.props.match.url}/:slug`}
              component={Single}
            />

            <Route exact path="/" render={props => <Landing {...props} />} />
          </Switch>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
        <BackDrop />
      </Grid>
    );
  }
}
export default connect(null, pActions)(WithAll(Home));
