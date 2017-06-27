import React from 'react';
import List, { ListItem, ListItemText, ListSubheader, } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Text from 'material-ui/Typography';
import { Expand, } from '../misc';
const sortSkills = arr => arr.sort((a, b) => a.length - b.length);
const frontend = {
  category: 'frontend',
  skills: sortSkills([
    'react', 'jQuery', 'css', 'handlebars', 'redux', 'Bootstrap', 'material-ui',
    'apollo', 'd3js', ]),
};
const backend = {
  category: 'backend',
  skills: sortSkills([
    'nodejs', 'express', 'redux', 'ruby', 'php', 'mongoDB', 'firebase', 'mySQL',
    'ruby', 'graphQL', 'jest', 'rspec', 'jasmine', ]),
};

const types = [ frontend, backend, ];

const Skills = () => (
  <Grid container align="center" justify="space-between">
    {types.map((t, i) => (
      <Grid item xs={5} key={i}>
        <Expand header={<Text children={t.category}/> }>
          <Grid container align="center" justify="center">
            {t.skills.map((s, j) => (
              <Grid item xs key={j}>
                <Chip label={s} />
              </Grid>
            ))}
          </Grid>
        </Expand>
      </Grid>
    ))}
  </Grid>
);

export default Skills;

// const techniques = [
//   'Test Driven Development', 'functional programming',
//   'server rendering', 'database normalization', 'asynchronous', ];
