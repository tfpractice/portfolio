import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';
import { MarkdownPreview, } from 'react-marked-markdown';
import { HexCard, } from '../../misc';

import { appFilt, libFilt, scrFilt, } from '../../../utils';
import LandingList from '../../projects/landingList';
import { content, } from './content';

const stateToProps = ({ projects, }) => ({
  apps: appFilt(projects),
  libs: libFilt(projects),
  scripts: scrFilt(projects),
});

const Libs = ({ libs, }) => {
  const a = 0;
  
  return (
    <Grid container justify="center" className="libraries-info">
      <Grid item xs={11} >
        <HexCard raised>
          <CardHeader title="Testable and Flexible"/>
          <CardContent>
            <Text color="secondary" type="body2">
              <MarkdownPreview value={content}/>
            </Text>
          </CardContent>
          <CardActions>
            <Button >Learn More</Button>
          </CardActions>
        </HexCard>
      </Grid>
      <Grid item xs={11} >

        <LandingList items={libs} />
      </Grid>
      
    </Grid>
  );
};

export default connect(stateToProps)(Libs);
