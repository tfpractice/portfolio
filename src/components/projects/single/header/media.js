import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';
import { Expand, HexCard, SwipeTabs } from '../../../misc';

import FeatureList from '../../featureList';
import { colors } from '../../pjCard';
import Slides, { SwipeSlides } from '../slides';

const isDef = ({ headerURL }) => headerURL.endsWith('default.svg');
const Styled = withStyles(
  createStyleSheet('PJMedia', theme => ({
    media: { minHeight: '8rem' },
    def: { minHeight: '8rem' },
    pic: { maxWidth: '100%' },
    slides: { overflow: 'none', maxHeight: '25rem' },
  }))
);

const PJMedia = ({ headerURL, classes, project, features }) =>
  (<Grid container align="center" justify="center">
    <Grid item xs={10} sm>
      <Expand header={'Technical details'}>
        <img src={headerURL} className={classes.pic} />
        <FeatureList tabLabel="tech" data={features} />
      </Expand>
    </Grid>
    <Grid item xs={12} sm={9} className={classes.slides}>
      <SwipeSlides project={project} />
    </Grid>
  </Grid>);

export default Styled(PJMedia);
