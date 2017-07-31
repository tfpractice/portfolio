import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from 'material-ui/Typography';

import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';
import { Link } from 'react-router-dom';

import ProjectLink from './link';

export const LinkList = ({ items, path, heading }) =>
  (<List dense>
    <ListSubheader>
      <Link to={path}>
        <Text type="headline" color="secondary">
          {heading}
        </Text>
      </Link>
    </ListSubheader>
    {items.map(p =>
      (<ListItem button dense divider key={p.id}>
        <ListItemText inset primary={<ProjectLink project={p} />} />
      </ListItem>)
    )}
  </List>);

export default LinkList;
