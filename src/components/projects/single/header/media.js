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
  }))
);

const withMedia = compose(
  withState('pic', 'turn', true),
  withHandlers({
    showPic: ({ turn }) => () => turn(true),
    showText: ({ turn }) => () => turn(false),
  })
);

const PJMedia = ({ headerURL, category, details, features, classes }) =>
  (<Grid container align="center" justify="center">
    <Grid item xs={10} sm={5}>
      <img src={headerURL} style={{ maxWidth: '100%' }} />
    </Grid>
    <Grid item xs={10} sm>
      <SwipeTabs iHue={colors[category]}>
        <FeatureList tabLabel="highlights" data={details.map(d => d.caption)} />
        <FeatureList tabLabel="tech" data={features} />
      </SwipeTabs>
    </Grid>
  </Grid>);

export default withMedia(Styled(PJMedia));
