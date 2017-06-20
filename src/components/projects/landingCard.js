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
import { containers, } from '../../store/projects';
import { Expand, } from '../misc';
import { qUtils, slug, } from '../../utils';
import { ChipList, } from '../tools';
import ProjectLink from './link';
const { WithProject, } = containers;

const { edgeNodes, } = qUtils;

const stateful = withState('open', 'toggle', false);
const imgBase = 'http://image.tmdb.org/t/p/w300/';
const hasImage = proj => proj.backdrop_path || proj.poster_path;
const projImg = proj => proj.backdrop_path ? proj.backdrop_path : proj.poster_path;

// const imgUrl = proj =>
//   hasImage(proj) ? `${imgBase}${projImg(proj)}` : `http://placehold.it/300x200?text=${proj.title}`;

const imgUrl = pj => 'http://via.placeholder.com/350/ff00ff/ffffff?text=_';
const makeStyle = proj => ({ backgroundImage: `url(${imgUrl(proj)})`, });

const styleSheet = createStyleSheet('RecipeReviewCard', theme => ({
  // card: { maxWidth: 400, },
  details: {
    display: 'flex',
    flexDirection: 'column',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: '0.5',
  },
  content: { flex: '1 0 auto', },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest, }),
  },
  expandOpen: { transform: 'rotate(90deg)', },
  flexGrow: { flex: '1 1 auto', },
}));
const divStyle = { minHeight: '80px', };

const LandingCard = ({ project, classes, toggle, open, ...props }) => {
  const a = 0;

  return (
    <Card raised>
      <CardHeader title={<ProjectLink project={project} >
        <Text type="title" align="center">{project.title}</Text>
      </ProjectLink>} />
      <CardMedia className={classes.details}
        style={!open ? { ...makeStyle(project), ...divStyle, } : divStyle}>

        <Collapse in={open}>
          <CardContent>
            <Grid container align="center">
              <Grid item xs={4}>
                <img src={imgUrl(project)} style={{ maxWidth: '100%', }}/>
              </Grid>
              <Grid item xs={7}>
                {project.features.map((f, i) => (
                  <Text type="body1" children={f} key={i} noWrap />
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </CardMedia>
      <CardActions>
        <IconButton onClick={() => toggle(x => !x)} >
          <ExpandMoreIcon />
        </IconButton>
        <ChipList tools={edgeNodes(project.tools)} />
      </CardActions>
    </Card>
  );
};

export default withStyles(styleSheet)(stateful(WithProject(LandingCard)));
  
