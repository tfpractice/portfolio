import React, { Component, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import { connect, } from 'react-redux';
import { Projects, } from '../../store';

import ProjectRoute from '../projects';
import About from './about';
import Teaching from './teaching';
import Nav from './nav';

const { containers, actions: pActions, } = Projects;

const { WithAll, } = containers;

const styles = { paddingTop: '5rem', };

class Home extends Component {
  componentWillReceiveProps({ setProjects, projectsArray, projectsData: { loading, }, }) {
    !loading && setProjects(projectsArray);
  }
  
  render() {
    console.log('HOME this.prop', this.props);
    const { projects, } = this.props;

    return (
      <Grid container justify="center" style={styles} >
        <Nav />
        <Grid item sm={12}>
          <Switch >
            <Route
              path="/projects"
              component={props =>
                <ProjectRoute projects={projects} {...props} />}
            />
            <Route path="/" exact component={About} />
            <Route path="/about" component={About} />
            <Route path="/teaching" component={Teaching} />
          </Switch>
        </Grid>
      </Grid>
    );
  }
}
export default connect(null, pActions)(WithAll(Home));
