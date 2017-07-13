import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';
import { MarkdownPreview, } from 'react-marked-markdown';

import { HexCard, } from '../../misc';
import { libFilt, } from '../../../utils';
import LandingList from '../../projects/landingList';
import { content, } from './content';

const stateToProps = ({ projects, }) => ({ libs: libFilt(projects), });

const Libs = ({ libs, }) => (
  <Grid container justify="center" className="libraries-info">
    <Grid item xs={11} >
      <HexCard raised>
        <CardHeader title="Testable and Flexible"/>
        <CardContent>
          <Text component="div" color="secondary" type="body2">
            <MarkdownPreview value={content}/>
          </Text>
        </CardContent>
      </HexCard>
    </Grid>
    <Grid item xs={11}>
      <LandingList items={libs} />
    </Grid>
  </Grid>
);

export default connect(stateToProps)(Libs);
