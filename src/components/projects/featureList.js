import React from 'react';
import Icon from 'material-ui/Icon';
import SvgIcon from 'material-ui/SvgIcon';
import List, { ListItem, ListItemText, ListItemIcon, ListSubheader, ListItemAvatar, } from 'material-ui/List';

import { HexSVG, RawHex, } from '../visualization';
const FeatureList = ({ header, data, }) => (
  <List dense>
    { header && <ListSubheader>
      {header}
    </ListSubheader>}
    {data.map((f, i) => (
      <ListItem divider dense key={i}>
        <ListItemIcon><SvgIcon ><RawHex/></SvgIcon></ListItemIcon>
        <ListItemText inset primary={f} />
      </ListItem>
    ))}
  </List>
);

export default FeatureList;
