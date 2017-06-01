import React, { Component, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import { connect, } from 'react-redux';
import { Projects, } from '../../store';
import { CSSTransitionGroup, } from 'react-transition-group'; // ES6
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import { FadeIn, } from 'animate-components';

import ProjectRoute from '../projects';
import About from './about';
import Teaching from './teaching';
import Nav from './nav';

const { containers, actions: pActions, } = Projects;

const { WithAll, } = containers;

const styleSheet = createStyleSheet('Home', theme => ({
  root: {
 paddingTop: '5rem',
 '&.active': { backgroundColor: '#ff00ff', },
  },
  appear: { opacity: 0.01, },
  appearActive: {
    opacity: 1,
    transition: 'opacity 400ms ease-in',
  },
  enter: {
    opacity: 0,
    zIndex: 1,
  },
  enterActive: {
    opacity: 1,
    transition: 'opacity 400ms ease-in',
  },
  leave: { opacity: 1, },
  leaveActive: {
  opacity: 0.1,
  transition: 'opacity 400ms ease-in',
  },
}));

class Home extends Component {
  componentWillReceiveProps({ setProjects, projectsArray, projectsData, }) {
    !projectsData.loading && setProjects(projectsArray);
  }
  
  render() {
    console.log('HOME this.prop', this.props);
    const { projects, classes, } = this.props;

    return (
      <Grid container justify="center" className={classes.root}>
        <Nav />
        <Grid item sm={12}>
          <FadeIn duration="300ms" timingFunction="ease-in">
            <Switch >
              <Route path="/projects" component={ProjectRoute} />
              <Route exact path="/about" component={About} />
              <Route exact path="/teaching" component={Teaching} />
              <Route exact path="/" component={About} />
            </Switch>
          </FadeIn>
        </Grid>
      </Grid>
    );
  }
}
export default connect(null, pActions)(WithAll(withStyles(styleSheet)(Home)));

// {/* <CSSTransitionGroup
//   transitionName={classes}
//   transitionAppear
//   transitionAppearTimeout={400}
//   transitionEnterTimeout={400}
//   transitionLeaveTimeout={400}
// > */}
//
// {/* </CSSTransitionGroup> */}
