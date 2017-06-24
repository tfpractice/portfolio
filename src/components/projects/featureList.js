import React from 'react';
import List, { ListItem, ListItemText, ListItemIcon, ListSubheader, } from 'material-ui/List';
import Text from 'material-ui/Typography';

const FeatureList = ({ header, data, }) => (
  <List dense>
    <ListSubheader>
      {header}
    </ListSubheader>
    {data.map((f, i) => (
      <ListItem dense key={i}>
        <ListItemText primary={f} />
      </ListItem>
    ))}
  </List>
);

export default FeatureList;
