import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing, { Contact } from '../landing';
import { Single } from '../projects';
import { Projects } from '../../store';
import { FadeRoute } from '../../utils';
import { BackDrop } from '../visualization';

const { containers: { WithAll }, actions: pActions } = Projects;

class Home extends Component {
  componentWillReceiveProps({ setProjects, projectsArray, projectsData }) {
    const newInfo =
      !projectsData.loading &&
      projectsArray.length !== this.props.projectsArray.length;

    newInfo && setProjects(projectsArray);
  }

  render() {
    console.log('this.props', this.props);
    return (
      <Grid
        container
        justify="center"
        align="center"
        style={{ paddingTop: '5rem' }}
      >
        <Grid item xs={12} className="homeDiv">
          {/* <Route component={Landing} /> */}

          <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path={`/:slug`} component={Single} /> */}
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
