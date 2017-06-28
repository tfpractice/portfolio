import React from 'react';
import List, { ListItem, ListItemText, ListSubheader, } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Card, { CardContent, } from 'material-ui/Card';
import Text from 'material-ui/Typography';
import { Expand, } from '../../misc';
import { frontEnd, backEnd, } from './content';
import SkillView from './frontEnd';

const types = [ frontEnd, backEnd, ];

const Skills = () => (
  <Grid container align="center" justify="center">
    {types.map((t, i) => (
      <Grid item xs={11} key={i}>
        <Expand header={<Text type="display2" children={t.category}/> }>
          <SkillView skill={t}/>
        </Expand>

      </Grid>
    ))}
  </Grid>
);

export default Skills;
