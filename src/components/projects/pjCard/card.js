import React from 'react';
import Avatar from 'material-ui/Avatar';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Tabs from 'material-ui/Tabs';
import Grid from 'material-ui/Grid';
import ExpandLess from 'material-ui-icons/ExpandLess';
import Language from 'material-ui-icons/Language';
import { CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';

import { Expand, HexCard, SwipeTabs } from '../../misc';
import { dStyles, lightStyles, pColors, qUtils } from '../../../utils';
import { ChipActions } from '../../tools';
import FeatureList from '../featureList';
import PJModal from '../single';
import PJMedia from './media';

const { edgeNodes } = qUtils;
const gitLogo = '/images/gitHub.png';

const withSwitch = compose(
  withState('open', 'flip', ({ open }) => !!open),
  withHandlers({
    toggle: ({ flip }) => () => flip(x => !x),
    show: ({ flip }) => () => flip(true),
    hide: ({ flip }) => () => flip(false),
  })
);

const isApp = p => p.category === 'APP';

const getChips = p => edgeNodes(p.skills).concat(edgeNodes(p.tools));
const getTech = p => (isApp(p) ? edgeNodes(p.tools) : edgeNodes(p.skills));

const Styled = withStyles(
  createStyleSheet('ProjectCard', theme => ({
    ...lightStyles,
    scrollButton: {
      flex: '0 0 0.25rem',
      color: '#fff',
      background: 'none',
    },
    SCRIPT: { backgroundColor: '#00796b' },
  }))
);

const hStyle = { paddingBottom: '1rem' };

const ProjectCard = ({ project, show, classes, toggle, open }) =>
  (<HexCard raised>
    <Expand
      dStyle={dStyles[project.category]}
      color="default"
      open={true}
      header={
        <CardHeader
          style={hStyle}
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
        <Tabs
          centered
          fullWidth
          scrollable
          scrollButtons="on"
          index={false}
          buttonClassName={classes.scrollButton}
          onChange={e => false}
        >
          <ChipActions tools={getChips(project)} />
        </Tabs>
      </Collapse>

      <Collapse in={open}>
        <CardActions>
          <PJModal project={project} label="learn more" open={false} />
          {project.url &&
            <IconButton href={project.url} target="_blank">
              <Language />
            </IconButton>}

          <IconButton onClick={toggle}>
            <ExpandLess />
          </IconButton>
        </CardActions>
      </Collapse>
    </Expand>
  </HexCard>);

export default withSwitch(Styled(ProjectCard));
