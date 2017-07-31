import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import { MarkdownPreview } from 'react-marked-markdown';

import Skills from '../skills';
import { HexCard } from '../../misc';
import { content } from './content';

const imgStyle = {
  width: 'calc(80% + 16px)',
  borderRadius: 'calc(50% )',
};

const About = () =>
  (<Grid container justify="center" align="center">
    <Grid item xs={11}>
      <HexCard>
        <CardHeader title="A Passion for Programming" />
        <CardContent>
          <Grid container justify="center" align="center">
            <Grid item xs={11} sm={3}>
              <img style={imgStyle} src="/images/me.jpg" alt="tfp-profile" />
            </Grid>
            <Grid item xs={11} sm={9}>
              <Text component="div" color="secondary" type="headline">
                <MarkdownPreview value={content} />
              </Text>
            </Grid>
          </Grid>
        </CardContent>
      </HexCard>
    </Grid>
    <Grid item xs={11}>
      <Skills />
    </Grid>
  </Grid>);

export default About;
