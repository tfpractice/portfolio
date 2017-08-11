import React from 'react';
import Avatar from 'material-ui/Avatar';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import ExpandLess from 'material-ui-icons/ExpandLess';
import Language from 'material-ui-icons/Language';
import { CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';

import { Expand, HexCard, SwipeTabs } from '../../misc';
import { dStyles, lightStyles, pColors, qUtils, slug } from '../../../utils';
import { ChipList, JustChips } from '../../tools';
import FeatureList from '../featureList';
import PJModal from '../single/modal';
import PJMedia from './media';

const { edgeNodes } = qUtils;
const gitLogo = 'https://jarroba.com/wp-content/uploads/2014/01/gitHub.png';

const withSwitch = compose(
  withState('open', 'flip', ({ open }) => !!open),
  withHandlers({
    toggle: ({ flip }) => () => flip(x => !x),
    show: ({ flip }) => () => flip(true),
    hide: ({ flip }) => () => flip(false),
  })
);

const isApp = p => p.category === 'APP';

const getChips = p => (isApp(p) ? edgeNodes(p.tools) : edgeNodes(p.skills));
const getTech = p => (isApp(p) ? edgeNodes(p.tools) : edgeNodes(p.skills));

const Styled = withStyles(
  createStyleSheet('ProjectCard', theme => ({
    ...lightStyles,
    SCRIPT: { backgroundColor: '#00796b' },
    actions: { overflowX: 'auto', overflowY: 'hidden' },
  }))
);

const ProjectCard = ({ project, show, classes, toggle, open, ...props }) =>
  (<HexCard raised>
    <Expand
      dStyle={dStyles[project.category]}
      color="default"
      open={true}
      header={
        <CardHeader
          title={project.title}
          avatar={
            <a target="_blank" href={project.repo}>
              <Avatar src={gitLogo} aria-label={`${project.title}`} />
            </a>
          }
        />
      }
    >
      <CardMedia
        onClick={show}
        className={!open ? classes[project.category] : ''}
      >
        <Collapse in={!open}>
          <PJMedia project={project} />
        </Collapse>
        <Collapse in={open}>
          <SwipeTabs iHue={pColors[project.category]}>
            <FeatureList
              tabLabel="highlights"
              data={project.details.map(d => d.caption)}
            />
            <FeatureList tabLabel="tech" data={project.features} />
          </SwipeTabs>
        </Collapse>
      </CardMedia>

      <Collapse in={!open}>
        <CardActions>
          <ChipList tools={getChips(project)} />
          <IconButton href={project.url} target="_blank">
            <Language />
          </IconButton>
        </CardActions>
      </Collapse>

      <Collapse in={open}>
        <CardActions>
          <PJModal project={project} label="learn more" open={false} />
          <IconButton href={project.url} target="_blank">
            <Language />
          </IconButton>

          <IconButton onClick={toggle}>
            <ExpandLess />
          </IconButton>
        </CardActions>
      </Collapse>
    </Expand>
  </HexCard>);

export default withSwitch(Styled(ProjectCard));
