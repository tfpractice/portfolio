import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import { connect } from 'react-redux';
import { MarkdownPreview } from 'react-marked-markdown';

import { HexCard } from '../../misc';
import { appFilt } from '../../../utils';
import { CardList } from '../../projects';
import { content } from './content';

const stateToProps = ({ projects }) => ({ apps: appFilt(projects) });

const Apps = ({ apps }) =>
  (<Grid container justify="center" className="apps-info">
    <Grid item xs={11}>
      <HexCard raised>
        <CardHeader title="Architecture and Experimentation" />
        <CardContent>
          <Text component="div" color="secondary" type="body2">
            <MarkdownPreview value={content} />
          </Text>
        </CardContent>
      </HexCard>
    </Grid>
    <Grid item xs={11}>
      <CardList items={apps} />
    </Grid>
  </Grid>);

export default connect(stateToProps)(Apps);
