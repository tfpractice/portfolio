import React from 'react';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';
import Text from 'material-ui/Typography';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';

import { createStyleSheet, withStyles } from 'material-ui/styles';
import { HexSVG, RawGroup, RawHex, RawPath } from '../visualization';

const styles = createStyleSheet('Expand', theme => ({
  Icon: {
    maxWidth: '8%',
    maxHeight: '8%',
    minWidth: '7%',
    minHeight: '7%',
    color: ' rgba(255, 255, 255, 1)',
    '&:hover': { color: 'rgba(255, 0, 255, 1)' },
  },
  Grid: { backgroundColor: 'rgba(0,0,0,0.5)', paddingBottom: '5%' },
  Header: { backgroundColor: 'rgba(0,0,0,0.5)', boxShadow: 'none' },
  Divider: { backgroundColor: '#f0f' },
}));

const FeatureList = ({ header, data, classes }) =>
  (<List dense subheader={header || ''}>
    {data.map((f, i) =>
      (<ListItem dense divider key={i}>
        <ListItemIcon className={classes.Icon}>
          <SvgIcon viewBox="-1,-1,2,2">
            <RawPath />
          </SvgIcon>
        </ListItemIcon>
        <ListItemText primary={f} />
      </ListItem>)
    )}
  </List>);

export default withStyles(styles)(FeatureList);
