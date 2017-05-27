import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import { containers, } from '../../store/projects';
import Projects from '../projects';
import About from './about';
import Nav from './nav';

const { WithAll, } = containers;

const styles = { paddingTop: '5rem', };

class Home extends Component {
  render() {
    // console.log('this.prop', this.props);
    return (
      <Grid container justify="center" style={styles} >
        <Nav />
        <Grid item sm={12}>
          <Switch >
            <Route
              path="/projects" component={props =>
                <Projects projects={this.props.projects} {...props} />}
            />
            <Route path="/" exact component={About} />
          </Switch>
        </Grid>
      </Grid>
    );
  }
}
export default WithAll(Home);
