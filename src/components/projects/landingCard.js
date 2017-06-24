import React from 'react';
import classnames from 'classnames';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Card, { CardActions, CardContent, CardHeader, CardMedia, } from 'material-ui/Card';
import List, { ListItem, } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import { withState, } from 'recompose';
import { containers, } from '../../store/projects';
import { Expand, SwipeTabs, } from '../misc';
import { qUtils, slug, } from '../../utils';
import { ChipList, } from '../tools';
import ProjectLink from './link';
import FeatureList from './featureList';
import SwipableViews from 'react-swipeable-views';
const { WithProject, } = containers;
const gitLogo = 'https://jarroba.com/wp-content/uploads/2014/01/gitHub.png';
const { edgeNodes, } = qUtils;

const stateful = withState('open', 'toggle', false);
const imgBase = 'http://image.tmdb.org/t/p/w300/';
const hasImage = proj => proj.backdrop_path || proj.poster_path;
const projImg = proj => proj.backdrop_path ? proj.backdrop_path : proj.poster_path;

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
  const features = project.features || [
    'built with es6, bundled with Rollup',
    '90% code-coverage, tested with Jest',
    'full documentation deployed on surge',
  ];

  !project.details.every(d => d.caption) && console.log('project has no details', project.title);
  const details = [
    { caption: 'built with es6, bundled with Rollup', },
    { caption: '90% code-coverage, tested with Jest', },
    { caption: 'full documentation deployed on surge', },
  ];

  // const details = project.details.map(d => d.caption) || [
  //   'built with es6, bundled with Rollup',
  //   '90% code-coverage, tested with Jest',
  //   'full documentation deployed on surge',
  // ];

  return (
    <Card raised>
      <CardHeader
        avatar={<a target="_blank" href={project.repo}>
          <Avatar src={gitLogo} aria-label={`${project.title}`}/>
        </a>}
        title={
          <ProjectLink project={project} >
            <Text type="title">{project.title}</Text>
          </ProjectLink>} />
      <CardMedia className={classes.details}
        style={!open ? { ...makeStyle(project), ...divStyle, } : divStyle}>
        {!open && <Text type="subheading" align="center">{project.description}</Text>}
        <Collapse in={open}>
          <CardContent>
            <SwipeTabs enableMouseEvents>

              <FeatureList tabLabel="tech" header={'tech features'} data={features}/>
              <FeatureList tabLabel="highlights" header={'project higlights '} data={project.details.map(d => d.caption)}/>
            </SwipeTabs>
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
  
