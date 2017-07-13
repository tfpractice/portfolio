import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { Expand, } from '../../misc';
import { skillTypes, } from './content';
import SkillCard from './skillCard';

const Skills = () => (
  <Grid container justify="center">
    {skillTypes.map((t, i) => (
      <Grid item xs={11} sm key={i}>
        <Expand header={
          <Text color="inherit" type="display2" children={t.category}/> }>
          <SkillCard skill={t}/>
        </Expand>
      </Grid>
    ))}
  </Grid>
  
);

export default Skills;
