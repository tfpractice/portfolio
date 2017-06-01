import React from 'react';
import classnames from 'classnames';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import Card, { CardActions, CardContent, CardHeader, CardMedia, } from 'material-ui/Card';
import List from 'material-ui/List';

import Collapse from 'material-ui/transitions/Collapse';
import Slide from 'material-ui/transitions/Slide';

import IconButton from 'material-ui/IconButton';

import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { createStyleSheet, withStyles, } from 'material-ui/styles';

import { withState, } from 'recompose';
import { qUtils, } from '../../utils';

import { containers, } from '../../store/projects';
import ProjectLink from './link';

const { WithProject, } = containers;
const { edgeNodes, } = qUtils;

const toggler = (open => !open);
const stateful = withState('open', 'toggle', false);

const styleSheet = createStyleSheet('RecipeReviewCard', theme => ({
  // card: { maxWidth: 400, },
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

  console.log('ProjectCard props', props);
  return (
    <Card raised>
      <CardHeader title={<ProjectLink project={project} />} />
      <CardContent>
        {project.features.map((f, i) =>
          (<Text key={i} type="subheading">
            {f}
          </Text>)
        )}
      </CardContent>
      <CardActions>
        <Grid container direction="row" className={classes.flexGrow} align="center" >
          <Grid item >
            <IconButton
              className={classnames(classes.expand, { [classes.expandOpen]: props.open, })}
              onClick={() => toggle(x => !x)}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Grid>

        </Grid>

      </CardActions>
      <Collapse
        in={props.open}
        transitionDuration="auto"
      >
        {/* <Grid item > */}
        <CardContent>
          {edgeNodes(project.tools).map(t => (
            <Chip key={t.id} label={t.name} />
          ))}
          {/* </Grid> */}

        </CardContent>
      </Collapse>
    </Card>
  );
};

export default withStyles(styleSheet)(stateful(ProjectCard));
  
