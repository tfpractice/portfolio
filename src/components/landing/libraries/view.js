import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import { connect } from 'react-redux';
import { MarkdownPreview } from 'react-marked-markdown';

import { HexCard } from '../../misc';
import { libFilt } from '../../../utils';
import { CardList } from '../../projects';
import { content, info } from './content';

const mapState = ({ projects }) => ({ libs: libFilt(projects) });
const Connected = connect(mapState);

const tStyle = { paddingTop: '0px' };
const hStyle = { paddingBottom: '0px' };

const Libs = ({ libs }) =>
  (<Grid container justify="center" align="center" className="libraries-info">
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

        <Text color="secondary" component={CardContent} style={tStyle}>
          <MarkdownPreview value={info.content} />
        </Text>
      </HexCard>
    </Grid>
    <Grid item xs={11}>
      <CardList items={libs} />
    </Grid>
  </Grid>);

export default Connected(Libs);
