import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';

import { appFilt, libFilt, scrFilt, } from '../../utils';

import LandingList from '../projects/landingList';

const stateToProps = ({ projects, }) => ({
  apps: appFilt(projects),
  libs: libFilt(projects),
  scripts: scrFilt(projects),
});
const Libraries = ({ libs, }) => {
  const a = 0;
  
  return (
    <Grid container direction="column" align="center" justify="center" className="projects-info">
      <Grid item xs={11} >
        <Card raised>
          <CardHeader title="THese are my Libraries" />
          <CardActions>
            <Button >Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={11} >

        <LandingList items={libs} />
      </Grid>

    </Grid>
  );
};

export default connect(stateToProps)(Libraries);
