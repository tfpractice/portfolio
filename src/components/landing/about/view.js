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
import { HexCard, } from '../../misc';
import { content, codeStyle, } from './content';

const imgStyle = {
  width: 'calc(80% + 16px)',
  borderRadius: 'calc(50% )',
};
const About = () => (
  <Grid container justify="center" align="center">
    <Grid item xs={11}>
      <Grid container justify="space-around">
        <Grid item xs={12} sm={8}>
          <HexCard>
            <CardHeader title="A Passion for Programming" />
            <CardContent>
              <Grid container align="center">
                <Grid item xs={11} sm={3}>
                  <img style={imgStyle} src="/images/me.jpg"/>
                </Grid>
                <Grid item xs={11} sm={9}>
                  <Text component="div" color="secondary" type="headline">
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
        {/* <Grid item xs={12} sm={4}>
          <Grid container >
            <Grid item xs>
          <SwipeableViews enableMouseEvents>
          <img src="http://via.placeholder.com/300/b2dfdb/ffffff?text=_" />
          <img src="http://via.placeholder.com/300/b2dfdb/ffffff?text=_" />
          <img src="http://via.placeholder.com/300/b2dfdb/ffffff?text=_" />
          <img src="http://via.placeholder.com/300/b2dfdb/ffffff?text=_" />
          </SwipeableViews>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
    </Grid>

    <Grid item xs={12}>
      <Skills/>
    </Grid>
  </Grid>
);

export default (About);
