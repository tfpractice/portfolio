import React from 'react';
import List, { ListItem, ListItemText, ListItemIcon, ListSubheader, ListItemAvatar, } from 'material-ui/List';

const FeatureList = ({ header, data, }) => (
  <List dense>
    { header && <ListSubheader>
      {header}
    </ListSubheader>}
    {data.map((f, i) => (
      <ListItem dense divider key={i}>
        <ListItemAvatar><img src="/images/hex.svg"/></ListItemAvatar>
        <ListItemText primary={f} />
      </ListItem>
    ))}
  </List>
);

export default FeatureList;
