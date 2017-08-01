import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

import Landing, { Contact, TabNav } from '../landing';
import { Single } from '../projects';
import { Projects } from '../../store';
import { FadeRoute } from '../../utils';
import { BackDrop } from '../visualization';

const { containers: { WithAll }, actions: pActions } = Projects;
const Styled = withStyles(
  createStyleSheet('Home', theme => ({ main: { marginTop: '5rem' }}))
);

class Home extends Component {
  componentWillReceiveProps({ setProjects, projectsArray, projectsData }) {
    const newInfo =
      !projectsData.loading &&
      projectsArray.length !== this.props.projectsArray.length;

    newInfo && setProjects(projectsArray);
  }

  render() {
    const { classes, projectsData: { loading }} = this.props;

    return (
      <Grid container justify="center" align="center" className={classes.main}>
        <TabNav />
        <Grid item xs={12} className="homeDiv">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path={`/:slug`} component={Single} />
          </Switch>
        </Grid>
        <Contact />
        <BackDrop />
      </Grid>
    );
  }
}
export default connect(null, pActions)(WithAll(Styled(Home)));
