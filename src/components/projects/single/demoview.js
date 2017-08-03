import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';

import { containers } from '../../../store/projects';
import { qUtils, slug } from '../../../utils';
import { Expand } from '../../misc';
import { getDemos, hasDemos } from './pages';

const { WithSkills, WithProject } = containers;
const { edgeNodes } = qUtils;

const mapState = (state, { project }) => ({ demo: hasDemos(slug(project)) });

const DemoView = (props) => {
  const { project, demo: Demo } = props;
  let view;

  if (!project) {
    view = (
      <Grid container align="center" justify="center">
        <Grid item xs>
          <CircularProgress color="accent" />
        </Grid>
      </Grid>
    );
  } else {
    view =
      !!Demo &&
      <Grid item xs={11}>
        <Expand
          header={
            <Text color="inherit" type="title">
              Demos
            </Text>
          }
        >
          <Demo />
        </Expand>
      </Grid>;
  }

  return view;
};

export default WithSkills(connect(mapState)(DemoView));
