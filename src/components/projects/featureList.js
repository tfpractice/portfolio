import React from 'react';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';
import Text from 'material-ui/Typography';
import List, { ListItem, ListItemText, ListItemIcon, ListSubheader, ListItemAvatar, } from 'material-ui/List';

import { HexSVG, RawHex, RawGroup, } from '../visualization';
import { withStyles, createStyleSheet, } from 'material-ui/styles';

const styles = createStyleSheet('Expand', theme => ({
  Icon: {
    maxWidth: '8%',
    maxHeight: '8%',
    minWidth: '7%',
    minHeight: '7%',
    color: ' rgba(255, 255, 255, 1)',
    '&:hover': { color: 'rgba(255, 0, 255, 1)', },
    marginRight: '4%',
  },
  Grid: { backgroundColor: 'rgba(0,0,0,0.5)', paddingBottom: '5%', },
  Header: { backgroundColor: 'rgba(0,0,0,0.5)', boxShadow: 'none', },
  Divider: { backgroundColor: '#f0f', },

}));

// width: 24px;
// color: rgba(255, 255, 255, 1);
// height: 24px;
// margin-right: 16px;
const FeatureList = ({ header, data, classes, }) => (

  <List >
    { header && <ListSubheader>
      {header}
    </ListSubheader>}
    {data.map((f, i) => (
      <ListItem divider key={i}>
        <ListItemIcon className={classes.Icon}>
          <SvgIcon >
            {/* <ListItemAvatar> */}
            <RawHex/>
            {/* </ListItemAvatar> */}
          </SvgIcon>
        </ListItemIcon>
        <ListItemText primary={<Text type="body2">{f}</Text>} />
      </ListItem>
    ))}
  </List>

);

export default withStyles(styles)(FeatureList);
