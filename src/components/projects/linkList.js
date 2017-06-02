import React, { Component, } from 'react';
import { connect, } from 'react-redux';

import Text from 'material-ui/Typography';

import { createStyleSheet, withStyles, } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListSubheader, } from 'material-ui/List';
import { Link, } from 'react-router-dom';

import ProjectLink from './link';

export const LinkList = ({ items, path, heading, }) => (
  <List dense>
    <ListSubheader>
      <Link to={path} >
        <Text type="headline" secondary >
          {heading}
        </Text>
      </Link>
    </ListSubheader>
    {items.map(p =>
      (<ListItem inset button dense divider key={p.id}>
        <ProjectLink project={p} />
      </ListItem>)
    )}
  </List>
);

export default LinkList;
