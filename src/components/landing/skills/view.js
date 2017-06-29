import React from 'react';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Text from 'material-ui/Typography';
import { Expand, } from '../../misc';
import { frontEnd, backEnd, } from './content';
import SkillCard from './skillCard';
import Divider from 'material-ui/Divider';
const types = [ frontEnd, backEnd, ];

const Skills = () => (
  <Grid container align="center" justify="center">
    {types.map((t, i) => (
      <Grid item xs={11} key={i}>
        <Divider/>
        <Expand header={<Text type="display2" children={t.category}/> }>
          <SkillCard skill={t}/>
        </Expand>
      </Grid>
    ))}
  </Grid>
);

export default Skills;
