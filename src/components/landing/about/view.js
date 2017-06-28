import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import ScrollableAnchor from 'react-scrollable-anchor';
import { MarkdownPreview, } from 'react-marked-markdown';
import Skills from '../skills';
import { HexCard, Expand, } from '../../misc';
import { HexSVG, } from '../../visualization';
import { content, codeStyle, } from './content';

const imgStyle = {
  width: 'calc(80% + 16px)',
  borderRadius: 'calc(50% )',
};
const About = () => (
  <Grid container justify="center" align="center">
    <Grid item xs={11}>
      <HexCard>
        <CardHeader title="A Passion for Programming" />
        <CardContent>
          <Grid container align="center">
            <Grid item xs={3}>
              <img style={imgStyle} src="/images/me.jpg"/>
            </Grid>
            <Grid item xs={8}>
              <Text color="secondary" type="headline p">
                <MarkdownPreview value={content}/>
              </Text>
            </Grid>
          </Grid>

        </CardContent>
        <CardActions>
          <Button >Learn More</Button>
        </CardActions>
      </HexCard>
    </Grid>
    <Grid item xs={11}>
      <HexCard>
        <CardHeader title="Code as Craft" />
        <CardContent>
          <Text color="secondary" type="subheading">
            <MarkdownPreview value={codeStyle}/>
          </Text>
        </CardContent>
        <CardActions>
          <Button >Learn More</Button>
        </CardActions>
      </HexCard>
    </Grid>

    <Grid item xs={11}>
      <Skills/>

    </Grid>
  </Grid>
);

export default (About);
