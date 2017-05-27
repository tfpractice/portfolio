import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { graphql, } from 'react-apollo';
import gql from 'graphql-tag';

import About from './about';
import Nav from './nav';

const all = gql`query GetViewer {
  viewer {
    id
    allProjects{
      edges{
        node{
          id
          description
        }
      }
    }
  }
}`;

// import { Game, } from './game';

const styles = { paddingTop: '5rem', };

// /const
// const stateToProps = ({ game: { inPlay, }, }) => ({ inPlay, });

class Home extends Component {
  render() {
    console.log('this.prop', this.props);
    return (
      <Grid container justify="center" style={styles} >
        <Nav />
        <Grid item sm={12}>
          <Switch >
            {/* <Route path="/play" component={Game} /> */}
            <Route path="/" exact component={About} />
          </Switch>
        </Grid>
      </Grid>
    );
  }
}
export default graphql(all)(Home);
