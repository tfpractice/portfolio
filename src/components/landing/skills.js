import React from 'react';
import List, { ListItem, ListItemText, ListSubheader, } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Text from 'material-ui/Typography';
import { Expand, } from '../misc';

const frontend = {
  category: 'frontend',
  skills: [
    'react', 'jQuery', 'css', 'handlebars', 'redux', 'Bootstrap', 'material-ui',
    'apollo', 'd3js', ].sort((a, b) => a.length - b.length),
};
const backend = {
  category: 'backend',
  skills: [
    'nodejs', 'express', 'redux', 'ruby', 'php', 'mongoDB', 'firebase', 'mySQL',
    'ruby', 'graphQL', 'jest', 'rspec', 'jasmine', ],
};

const types = [ frontend, backend, ];

const Skills = () => (
  <Grid container direction="column" justify="center">
    {types.map((t, i) => (
      <Grid item xs key={i}>
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
