import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';

import { slug } from '../../../utils';
import { Expand } from '../../misc';
import { getDemos, hasDemos } from './pages';

const mapState = (state, { project }) => ({
  demo: hasDemos(slug(project)),
  Comp: hasDemos(slug(project)) && getDemos(slug(project)),
});

const DemoView = ({ project, demo, Comp }) =>
  Comp &&
  <Grid item xs={11}>
    <Expand
      header={
        <Text color="inherit" type="title">
          Demos
        </Text>
      }
    >
      <Comp />
    </Expand>
  </Grid>;

export default connect(mapState)(DemoView);
