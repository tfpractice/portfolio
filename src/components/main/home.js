import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { Route, Switch, } from 'react-router-dom';
import { connect, } from 'react-redux';
import { Projects, } from '../../store';
import { FadeRoute, } from '../../utils';
import ProjectRoute from '../projects';
import fs from 'fs';
import Landing from '../landing';

import Nav from './nav';
import { BackDrop, } from '../visualization';

const { containers: { WithAll, }, actions: pActions, } = Projects;

// console.log('fs', fs.write);
// console.log('fs.writeFile', fs.writeFile);
class Home extends Component {
  componentWillReceiveProps({ setProjects, projectsArray, projectsData, }) {
    console.log('this.props', this.props);
    !projectsData.loading && setProjects(projectsArray);
  }
 
  render() {
    return (
      <Grid container direction="column" justify="center" align="center" style={{ paddingTop: '5rem', }}>
        <Grid item xs={12} className="homeDiv">
          <Switch >
            <FadeRoute path="/projects" component={ProjectRoute} />

            <Route exact path="/" component={Landing} />
          </Switch>
        </Grid>
        <BackDrop/>
      </Grid>
    );
  }
}
export default connect(null, pActions)(WithAll(Home));
