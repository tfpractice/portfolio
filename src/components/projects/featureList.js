import React from 'react';
import Icon from 'material-ui/Icon';
import List, { ListItem, ListItemText, ListItemIcon, ListSubheader, ListItemAvatar, } from 'material-ui/List';

import { HexSVG, } from '../visualization';
const FeatureList = ({ header, data, }) => (
  <List dense>
    { header && <ListSubheader>
      {header}
    </ListSubheader>}
    {data.map((f, i) => (
      <ListItem divider key={i}>
        <ListItemIcon><Icon ><HexSVG/></Icon></ListItemIcon>
        <ListItemText primary={f} />
      </ListItem>
    ))}
  </List>
);

export default FeatureList;
