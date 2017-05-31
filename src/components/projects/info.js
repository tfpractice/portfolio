import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { connect, } from 'react-redux';
import List, { ListSubheader, } from 'material-ui/List';
import { containers, } from '../../store/projects';
import { appFilt, libFilt, scrFilt, } from '../../utils';

import ProjectLink from './link';
import ProjectCard from './card';
import CardList from './cardList';

const stateToProps = ({ projects, }) => {
  console.log('project', projects.map(({ id, }) => id));

  return ({
  apps: appFilt(projects),
  libs: libFilt(projects),
  scripts: scrFilt(projects),
  });
};

const ProjectInfo = ({ apps, libs, scripts, }) => {
  const a = 0;

  return (
    <Grid container justify="center" >
      <Grid item >
        <Card raised>
          <CardHeader title="THese are my projects" />
          <CardContent>
            <Text type="subheading">
              These are my projects
            </Text>
          </CardContent>
          <CardActions>
            <Button compact>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={12}>
        <Grid container direction="column" align="center">
          <Grid item md={10}>
            <Text type="title" >
              Applications
            </Text>
            <CardList items={apps} />
          </Grid>
          <Grid item md={10}>
            <Text type="title" >
              Libraries
            </Text>
            <CardList items={libs} />

          </Grid>
          <Grid item sm={12}>
            <Text type="subheading">
              Misc
            </Text>
            <Grid container>
              <Text type="subheading">
                Projects
              </Text>
              <CardList items={scripts} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(ProjectInfo);
