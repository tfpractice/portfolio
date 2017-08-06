import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';

import { dStyles, slug } from '../../../utils';
import { Expand } from '../../misc';
import { getDemos } from './pages';

const mapState = (state, { project }) => ({ Comp: getDemos(slug(project)) });

const DemoView = ({ Comp, project }) =>
  !!Comp &&
  <Grid container justify="center" align="center">
    <Grid item xs={11}>
      <Expand
        dStyle={dStyles[project.category]}
        header={
          <Text color="inherit" type="title">
            Demos
          </Text>
        }
      >
        <Comp />
      </Expand>
    </Grid>
  </Grid>;

export default connect(mapState)(DemoView);
