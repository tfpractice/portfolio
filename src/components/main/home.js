import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import Landing, { Contact, TabNav } from '../landing';
import { Projects } from '../../store';
import { BackDrop } from '../visualization';

const { containers: { WithAll }, actions } = Projects;

const Styled = withStyles(
  createStyleSheet('Home', { main: { marginTop: '5rem' }})
);

class Home extends Component {
  componentWillReceiveProps({ setProjects, projectsArray, projectsData }) {
    const ready = !projectsData.loading;
    const diffLength = projectsArray.length !== this.props.projectsArray.length;
    const newInfo = ready && diffLength;

    newInfo && setProjects(projectsArray);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" align="center" className={classes.main}>
        <TabNav />
        <Grid item xs={12} className="homeDiv">
          <Route component={Landing} />
        </Grid>
        <Contact />
        <BackDrop />
      </Grid>
    );
  }
}
export default connect(null, actions)(WithAll(Styled(Home)));
