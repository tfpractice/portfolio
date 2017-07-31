import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import { connect } from 'react-redux';
import List, { ListSubheader } from 'material-ui/List';
import { containers } from '../../store/projects';
import { appFilt, libFilt, scrFilt } from '../../utils';

import ProjectLink from './link';
import ProjectCard from './card';
import CardList from './cardList';

const stateToProps = ({ projects }) => ({
  apps: appFilt(projects),
  libs: libFilt(projects),
  scripts: scrFilt(projects),
});

const ProjectInfo = ({ apps, libs, scripts }) => {
  const a = 0;

  return (
    <Grid
      container
      direction="column"
      align="center"
      justify="center"
      className="projects-info"
    >
      <Grid item xs={11}>
        <Card raised>
          <CardHeader title="THese are my projects" />
          <CardActions>
            <Button>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={11}>
        <Grid
          container
          direction="column"
          align="center"
          justify="center"
          className="project-info__list"
        >
          <Grid item xs={11} style={{ backgroundColor: 'rgba(255,0,255,.2)' }}>
            <Text align="center" type="display1">
              Applications
            </Text>
            <CardList items={apps} />
          </Grid>
          <Grid item xs={11} style={{ backgroundColor: 'rgba(0, 255,255,.2)' }}>
            <Text align="center" type="title">
              Libraries
            </Text>
            <CardList items={libs} />
          </Grid>
          <Grid item xs={11} style={{ backgroundColor: 'rgba( 255,255,0,.2)' }}>
            <Text align="center" type="display1">
              Misc
            </Text>
            <CardList items={scripts} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(ProjectInfo);
