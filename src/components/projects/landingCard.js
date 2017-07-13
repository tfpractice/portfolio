import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';

import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Card, { CardActions, CardContent, CardHeader, CardMedia, } from 'material-ui/Card';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import { withState, } from 'recompose';

import { containers, } from '../../store/projects';
import { SwipeTabs, Expand, HexCard, } from '../misc';
import { qUtils, } from '../../utils';
import { ChipList, } from '../tools';
import ProjectLink from './link';
import FeatureList from './featureList';

const { WithProject, } = containers;
const gitLogo = 'https://jarroba.com/wp-content/uploads/2014/01/gitHub.png';
const { edgeNodes, } = qUtils;

const stateful = withState('open', 'toggle', false);
const typeMap = new Map([[ 'APP', '#ff00ff', ], [ 'SCRIPT', '#ff00ff', ], [ 'LIB', '#00796b', ], ]);
const getColor = pj => pj.category ? typeMap.get(pj.category) : '#b2dfdb';

const imgUrl = pj => `http://via.placeholder.com/350/${getColor(pj).slice(1)}/ffffff?text=_`;
const makeStyle = proj => ({
  backgroundImage: `url(${imgUrl(proj)})`,
  'details::after': { opacity: 0.5, },
  'details:hover': {
    opacity: 0.5,
    content: `${proj.description}`,
  },
});

const styleSheet = createStyleSheet('RecipeReviewCard', theme => ({
  details: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  closed: { '&:hover': { opacity: 0.5, }, },
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
  
  console.log(project.skills);
  
  return (
    <HexCard raised>
      <CardHeader
        avatar={
          <a target="_blank" href={project.repo}>
            <Avatar src={gitLogo} aria-label={`${project.title}`}/>
          </a>}
        title={
          <Grid container justify="space-between" align="center">
            <Grid item>
              <a target="_blank" href={project.url}

                children={ <Text type="title" children={project.title}/>
                }/>

              {/* <ProjectLink project={project} >
                <Text type="subheading">{project.title}</Text>
              </ProjectLink> */}
            </Grid>
            <Grid item>
              <IconButton onClick={() => toggle(x => !x)} >
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
          </Grid>
        }

      />

      <CardMedia className={`details ${classes.details} ${!open && classes.closed}`}
        style={!open ? { ...makeStyle(project), ...divStyle, } : divStyle}>
        <Collapse in={!open}>
          <Text type="subheading" align="center">{project.description}</Text>
        </Collapse>
        <Collapse in={open}>
          <CardMedia>

            <SwipeTabs >
              <FeatureList tabLabel="tech" data={features}/>
              <FeatureList tabLabel="highlights" data={project.details.map(d => d.caption)}/>
            </SwipeTabs>

          </CardMedia>
        </Collapse>
      </CardMedia>
      <Collapse in>
        <CardActions>
          <ChipList tools={edgeNodes(project.skills).concat(edgeNodes(project.tools))} />
        </CardActions>
      </Collapse>
    </HexCard>
  );
};

export default withStyles(styleSheet)(stateful(WithProject(LandingCard)));
