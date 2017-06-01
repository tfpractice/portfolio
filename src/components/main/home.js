import React, { Component, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import { connect, } from 'react-redux';
import { Projects, } from '../../store';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ProjectRoute from '../projects';
import About from './about';
import Teaching from './teaching';
import Nav from './nav';

const { containers, actions: pActions, } = Projects;

const { WithAll, } = containers;

const styles = {
 paddingTop: '5rem',
// '.fade-enter' {
//   opacity: 0,
//   zIndex: 1
// },
//
// '.fade-enter.fade-enter-active '{
//   opacity: 1,
//   transition: opacity 250ms ease-in
// }
};

class Home extends Component {
  componentWillReceiveProps({ setProjects, projectsArray, projectsData, }) {
    !projectsData.loading && setProjects(projectsArray);
    !projectsData.loading && console.log('allTools', projectsData);
  }
  
  render() {
    console.log('HOME this.prop', this.props);
    const { projects, } = this.props;

    return (
      <Grid container justify="center" style={styles} >
        <Nav />
        <Grid item sm={12}>
          {/* <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          > */}
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
          {/* </ReactCSSTransitionGroup> */}
        </Grid>
      </Grid>
    );
  }
}
export default connect(null, pActions)(WithAll(Home));
