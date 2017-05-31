import React, { Component, } from 'react';
import { connect, } from 'react-redux';

import Text from 'material-ui/Typography';

import { createStyleSheet, withStyles, } from 'material-ui/styles';
import List, { ListItem, ListSubheader, } from 'material-ui/List';
import { Link, } from 'react-router-dom';

import ProjectLink from './link';

export const LinkList = ({ items, path, heading, }) => (
  <List >
    <ListSubheader>
      <Link to={path} >
        <Text type="headline" secondary >
          {heading}
        </Text>
      </Link>
    </ListSubheader>
    {items.map(p =>
      (<ListItem key={p.id}>
        <ProjectLink project={p} />
      </ListItem>)
    )}
  </List>
);

export default LinkList;
