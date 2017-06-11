import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { FadeIn, } from 'animate-components';

import Slides from './slides';
import { devEx,
future,
highlights,
info,
technicals, } from './data';
console.log('highlights', highlights);

//
// import { slug, } from '../../utils';
// import Single from './single';
// import ProjectLink from './link';
// import ProjectInfo from './info';
// import ProjectCard from './card';

const stateToProps = ({ projects, }) => ({ projects, });

class Fenugreek extends Component {
  
  render () {
    const props = this.props;

    return (
      <Grid container justify="center" align="center" direction="column" className="Fenugreek-main">
        <Grid item xs={11} sm={10} >
          <FadeIn duration="200ms" timingFunction="ease-in">
            <Slides data={highlights} />
          </FadeIn>
        </Grid>
      </Grid>
    );
  }
}
export default connect(stateToProps)(Fenugreek);
