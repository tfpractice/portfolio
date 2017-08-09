import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';
import { Expand, HexCard, SwipeTabs } from '../../../misc';

import FeatureList from '../../featureList';
import Details from '../../detailList';
import { colors } from '../../pjCard';
import Slides, { SwipeSlides } from '../slides';

const isDef = ({ headerURL }) => headerURL.endsWith('default.svg');

const Styled = withStyles(
  createStyleSheet('PJMedia', theme => ({
    grid: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },

    // exp: { backgroundColor: 'rgba(128,128,128,0.8)' },
    pic: { maxWidth: '80%' },
    slides: { overflow: 'none', maxHeight: '25rem' },
  }))
);
const dStyle = { backgroundColor: '#fff' };

const PJMedia = ({ headerURL, classes, project, features }) =>
  (<Grid container align="center" justify="center">
    <Grid item xs={12} sm>
      <Expand dStyle={dStyle} header={<Text type="title">Tech</Text>}>
        <FeatureList tabLabel="tech" data={features} />
      </Expand>
    </Grid>
    <Grid item xs={12} sm={9} className={classes.slides}>
      <SwipeSlides project={project} />
    </Grid>
  </Grid>);

export default Styled(PJMedia);
