import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Language from 'material-ui-icons/Language';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import FeatureList from '../../featureList';
import { ChipList } from '../../../tools';
import { hasSlides } from '../pages';
import { Expand, HexCard } from '../../../misc';
import { dStyles, lightStyles, qUtils, slug } from '../../../../utils';
import { Features, PJMedia } from '../../pjCard';
import { SwipeSlides } from '../slides';
import Header from './cardHead';
import PageMedia from './media';

const { edgeNodes } = qUtils;

const gitSrc = '/images/github.png';
const covSource = `https://coveralls.io/repos/github/tfpractice/fenugreek-collections/badge.svg?branch=master`;
const buildSrc = `https://travis-ci.org/tfpractice/fenugreek-collections.svg?branch=master`;

const withSwitch = compose(
  withState('open', 'flip', ({ open }) => !!open),
  withHandlers({
    toggle: ({ flip }) => () => flip(x => !x),
    show: ({ flip }) => () => flip(true),
    hide: ({ flip }) => () => flip(false),
  })
);

const getChips = p =>
  p.category === 'APP' ? edgeNodes(p.tools) : edgeNodes(p.skills);

const Styled = withStyles(
  createStyleSheet('ProjectCard', theme => ({
    ...lightStyles,
    actions: { overflowX: 'auto', overflowY: 'hidden' },
  }))
);

const PageCard = ({ project, show, classes, toggle, open }) =>
  (<HexCard raised>
    <Expand
      dStyle={dStyles[project.category]}
      color="default"
      header={
        <Grid container justify="center" align="center">
          <Grid item xs>
            <Header {...project} />
          </Grid>
          <Grid item xs>
            <ListItem>
              <img src={buildSrc} />
              <img src={covSource} />

              <IconButton target="_blank" href={project.url}>
                <Language />
              </IconButton>
            </ListItem>
          </Grid>
        </Grid>
      }
    >
      <CardMedia className={!open ? classes[project.category] : ''}>
        <Collapse in={!open}>
          <PageMedia project={project} {...project} />
        </Collapse>
      </CardMedia>
    </Expand>
    <CardActions>
      <ChipList tools={getChips(project)} />
    </CardActions>
  </HexCard>);

export default withSwitch(Styled(PageCard));
