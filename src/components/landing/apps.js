import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';
import List, { ListSubheader, } from 'material-ui/List';
import { appFilt, libFilt, scrFilt, } from '../../utils';

import LandingList from '../projects/landingList';
const stateToProps = ({ projects, }) => ({
  apps: appFilt(projects),
  libs: libFilt(projects),
  scripts: scrFilt(projects),
});

const ProjectInfo = ({ apps, }) => {
  const a = 0;
  
  return (
    <Grid container direction="column" align="center" justify="center" className="projects-info">
      <Grid item xs={11} >
        <Card raised>
          <CardHeader title="THese are my Apps" />
          <CardActions>
            <Button >Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={11}>

        <LandingList items={apps} />

      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(ProjectInfo);
