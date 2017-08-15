import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import { Expand } from '../../../misc';
import FeatureList from '../../featureList';
import { SwipeSlides } from '../slides';

const Styled = withStyles(
  createStyleSheet('PJMedia', theme => ({ padded: { padding: '0.5rem' }}))
);
const dStyle = { backgroundColor: '#fff' };

const PJMedia = ({ headerURL, classes, project, features }) =>
  (<Grid
    container
    align="center"
    justify="space-around"
    className={classes.padded}
   >
    <Grid item md hidden={{ smDown: true }}>
      <Expand
        dStyle={dStyle}
        header={<Text type="subheading">Tech Details</Text>}
      >
        <FeatureList tabLabel="tech" data={features} />
      </Expand>
    </Grid>
    <Grid item xs={12} sm={11} md={9}>
      <SwipeSlides project={project} />
    </Grid>
  </Grid>);

export default Styled(PJMedia);
