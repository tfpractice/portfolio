import React from 'react';
import List, { ListItem, ListItemText, ListItemIcon, ListSubheader, } from 'material-ui/List';
import Text from 'material-ui/Typography';

const FeatureList = ({ data, }) => (
  <List dense>
    <ListSubheader>
      Project Features
    </ListSubheader>
    {data.map((f, i) => (
      <ListItem dense key={i}>
        <ListItemText primary={f} />
      </ListItem>
    ))}
  </List>
);

export default FeatureList;
