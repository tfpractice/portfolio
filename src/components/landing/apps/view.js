import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import { connect } from 'react-redux';
import { MarkdownPreview } from 'react-marked-markdown';

import { HexCard } from '../../misc';
import { appFilt } from '../../../utils';
import { CardList } from '../../projects';
import { info } from './content';

const mapState = ({ projects }) => ({ apps: appFilt(projects) });
const Connected = connect(mapState);
const tStyle = { paddingTop: '0px' };
const hStyle = { paddingBottom: '0px' };

const Apps = ({ apps }) =>
  (<Grid container justify="center" align="center" className="apps-info">
    <Grid item xs={11}>
      <HexCard raised>
        <CardHeader
          style={hStyle}
          title={
            <Text color="secondary" component="div">
              <MarkdownPreview value={info.caption} />
            </Text>
          }
        />

        <Text component={CardContent} color="secondary" style={tStyle}>
          <MarkdownPreview value={info.content} />
        </Text>
      </HexCard>
    </Grid>
    <Grid item xs={11}>
      <CardList items={apps} />
    </Grid>
  </Grid>);

export default Connected(Apps);
