import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

import { Expand } from '../../misc';

const DemoView = ({ comp }) =>
  (<Grid item xs={11}>
    <Expand
      header={
        <Text color="inherit" type="title">
          Demos
        </Text>
      }
    >
      <comp />
    </Expand>
  </Grid>);

export default DemoView;
