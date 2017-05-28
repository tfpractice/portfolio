import React, { Component, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';

import { containers, } from '../../store/projects';
import Projects from '../projects';
import About from './about';
import Teaching from './teaching';
import Nav from './nav';

const { WithAll, } = containers;

const styles = { paddingTop: '5rem', };

class Home extends Component {
  render() {
    // console.log('this.prop', this.props);
    const { projects, } = this.props;

    return (
      <Grid container justify="center" style={styles} >
        <Nav />
        <Grid item sm={12}>
          <Switch >
            <Route
              path="/projects"
              component={props =>
                <Projects projects={projects} {...props} />}
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
export default WithAll(Home);
