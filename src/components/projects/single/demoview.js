import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';

import { slug } from '../../../utils';
import { Expand } from '../../misc';
import { getDemos } from './pages';

const mapState = (state, { project }) => ({ Comp: getDemos(slug(project)) });

const DemoView = ({ Comp }) =>
  !!Comp &&
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
