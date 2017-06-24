import React from 'react';
import List, { ListItem, ListItemText, ListItemIcon, ListSubheader, } from 'material-ui/List';
import Text from 'material-ui/Typography';
import { Hex, } from '../visualization';
import Avatar from 'material-ui/Avatar';
const FeatureList = ({ header, data, }) => (
  <List dense>
    { header && <ListSubheader>
      {header}
    </ListSubheader>}
    {data.map((f, i) => (
      <ListItem dense key={i}>
        <ListItemIcon><Hex/></ListItemIcon>
        <ListItemText primary={f} />
      </ListItem>
    ))}
  </List>
);

export default FeatureList;
