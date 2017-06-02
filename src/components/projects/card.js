import React from 'react';
import classnames from 'classnames';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardHeader, CardMedia, } from 'material-ui/Card';
import List, { ListItem, } from 'material-ui/List';

import Collapse from 'material-ui/transitions/Collapse';

import IconButton from 'material-ui/IconButton';

import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { createStyleSheet, withStyles, } from 'material-ui/styles';

import { withState, } from 'recompose';

import { qUtils, slug, } from '../../utils';
import { ChipList, } from '../tools';
import ProjectLink from './link';

const { edgeNodes, } = qUtils;

const stateful = withState('open', 'toggle', false);
const imageUrl = pj => `http://via.placeholder.com/350?text=${slug(pj)}`;

const styleSheet = createStyleSheet('RecipeReviewCard', theme => ({
  // card: { maxWidth: 400, },
  card: { display: 'flex', },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: { flex: '1 0 auto', },
  cover: {
    // maxWidth: 9%,
    maxHeight: '9%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
    paddingBottom: 8,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest, }),
  },
  expandOpen: { transform: 'rotate(90deg)', },

// avatar: { backgroundColor: red[500], },
  flexGrow: { flex: '1 1 auto', },
}));
const ProjectCard = ({ project, classes, toggle, ...props }) => {
  const a = 0;

  return (
    <Card raised>
      <CardHeader title={<ProjectLink project={project} />} />
      <Collapse in={props.open}>
        <CardContent>
          <Grid container direction="column" align="center">
            {project.features.map((f, i) => (
              <Grid item key={i} >
                <Text type="subheading" noWrap>
                  {f}
                </Text>
              </Grid>))}
          </Grid>
        </CardContent>
      </Collapse>
      <CardMedia>
        <Paper>
          <img src={imageUrl(project)} />
        </Paper>
      </CardMedia>
      <CardActions>
        <IconButton onClick={() => toggle(x => !x)} >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={props.open}>
        <Paper>
          <ChipList tools={edgeNodes(project.tools)} />

        </Paper>
      </Collapse>
    </Card>
  );
};

export default withStyles(styleSheet)(stateful(ProjectCard));
  
