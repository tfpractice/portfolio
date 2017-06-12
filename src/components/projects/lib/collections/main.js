import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { FadeIn, } from 'animate-components';
import SwipeableViews from 'react-swipeable-views';

import Slides from './slides';
import Thoughts from './thoughts';
import Examples from './example';
import { devEx, future, highlights, info, technicals, } from './data';

const stateToProps = ({ projects, }) => ({ projects, });

class Fenugreek extends Component {
  render () {
    const props = this.props;

    return (
      <Grid container justify="center" align="center" direction="column" className="Fenugreek-main">
        <Grid item xs={11} sm={10} >
          <FadeIn duration="200ms" timingFunction="ease-in">
            <Slides data={highlights} />
            <Examples />
            <Thoughts data={devEx} />
          </FadeIn>
        </Grid>
      </Grid>
    );
  }
}
export default connect(stateToProps)(Fenugreek);
