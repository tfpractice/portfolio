import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import ScrollableAnchor from 'react-scrollable-anchor';
import { MarkdownPreview, } from 'react-marked-markdown';

// import Skills from '../skills';
import { HexCard, Expand, } from '../../misc';
import { content, codeStyle, } from './content';

const imgStyle = {
  width: 'calc(80% + 16px)',
  borderRadius: 'calc(50% )',
};

const cardStyle = { 'background-color': '#393939', };
const SkillView = ({ skill, }) => {
  console.log('skill', skill);
  return (
    <Grid container justify="space-around">
      <Grid item xs={11} sm={8}>
        <HexCard className="SkillCard" style={cardStyle}>
          <CardHeader title={skill.headline} />
          <CardContent>
            <Text color="secondary" type="headline">
              <MarkdownPreview value={skill.info}/>
            </Text>
          </CardContent>
          <CardActions>
            <Button >Learn More</Button>
          </CardActions>
        </HexCard>
      </Grid>
      <Grid item xs={11} sm={4}>
        <Grid container align="center" justify="space-between">
          <Grid item xs >
            <Expand header={<Text type="display1" children={skill.category}/> }>
              <Grid container align="center" justify="center">
                {skill.skills.map((s, j) => (
                  <Grid item xs key={j}>
                    <Chip label={s} />
                  </Grid>
                ))}
              </Grid>
            </Expand>
          </Grid>

        </Grid>
      </Grid>
    </Grid>

  );
};

export default (SkillView);
