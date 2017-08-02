import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import ExpandLess from 'material-ui-icons/ExpandLess';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';

import { containers } from '../../store/projects';
import { Expand, HexCard, SwipeTabs } from '../misc';
import { qUtils } from '../../utils';
import { ChipList } from '../tools';
import ProjectLink from './link';
import FeatureList from './featureList';

const { WithProject } = containers;
const gitLogo = 'https://jarroba.com/wp-content/uploads/2014/01/gitHub.png';
const { edgeNodes } = qUtils;

const stateful = withState('open', 'toggle', false);
const withSwitch = compose(
  withState('open', 'flip', ({ open }) => !!open),
  withHandlers({
    toggle: ({ flip }) => () => flip(x => !x),
    show: ({ flip }) => () => flip(true),
    hide: ({ flip }) => () => flip(false),
  })
);
const typeMap = new Map([
  [ 'APP', '#ff00ff' ],
  [ 'SCRIPT', '#ff00ff' ],
  [ 'LIB', '#00796b' ],
]);
const getColor = pj => (pj.category ? typeMap.get(pj.category) : '#b2dfdb');

const imgUrl = pj =>
  `http://via.placeholder.com/350/${getColor(pj).slice(1)}/ffffff?text=_`;

const makeStyle = proj => ({
  backgroundImage: `url(${imgUrl(proj)})`,
  'details::after': { opacity: 0.5, content: 'hover content' },
  'details:hover': {
    opacity: 0.5,
    content: `${proj.description}`,
  },
});

const Styled = withStyles(
  createStyleSheet('RecipeReviewCard', theme => ({
    details: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    closed: { '&:hover': { ':&after': { content: 'abcd' }, opacity: 0.5 }},
    content: { flex: '1 0 auto' },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest }),
    },
    expandOpen: { transform: 'rotate(90deg)' },
    flexGrow: { flex: '1 1 auto' },
    actions: { overflowX: 'auto', overflowY: 'hidden' },
  }))
);

const divStyle = { minHeight: '80px' };

const ProjectCard = ({ project, show, classes, toggle, open }) => {
  const features = project.features || [
    'built with es6, bundled with Rollup',
    '90% code-coverage, tested with Jest',
    'full documentation deployed on surge',
  ];

  return (
    <HexCard raised>
      <Expand
        color="default"
        open={true}
        header={
          <CardHeader
            avatar={
              <a target="_blank" href={project.repo}>
                <Avatar src={gitLogo} aria-label={`${project.title}`} />
              </a>
            }
            title={
              <a target="_blank" href={project.url}>
                <Text type="subheading" children={project.title} />
              </a>
            }
          />
        }
      >
        <CardMedia
          onClick={show}
          className={`details ${classes.details} ${!open && classes.closed}`}
          style={!open ? { ...makeStyle(project), ...divStyle } : divStyle}
        >
          <Collapse in={!open}>
            <Text type="subheading" align="center">
              {project.description}
            </Text>
          </Collapse>
          <Collapse in={open}>
            <CardMedia>
              <SwipeTabs>
                <FeatureList tabLabel="tech" data={features} />
                <FeatureList
                  tabLabel="highlights"
                  data={project.details.map(d => d.caption)}
                />
              </SwipeTabs>
            </CardMedia>
          </Collapse>
        </CardMedia>

        <Collapse in={open}>
          <CardActions className={classes.actions}>
            <ProjectLink project={project}>
              <Button>learn more</Button>
            </ProjectLink>

            <Button target="_blank" href={project.url}>
              view online
            </Button>

            <IconButton onClick={toggle}>
              <ExpandLess />
            </IconButton>
          </CardActions>
        </Collapse>

        <Collapse in={!open}>
          <CardActions style={{ overflowX: 'auto', overflowY: 'hidden' }}>
            <Grid container>
              <Grid item xs={11}>
                <ChipList
                  tools={edgeNodes(project.skills).concat(
                    edgeNodes(project.tools)
                  )}
                />
              </Grid>
            </Grid>
          </CardActions>
        </Collapse>
      </Expand>
    </HexCard>
  );
};

export default WithProject(withSwitch(Styled(ProjectCard)));
