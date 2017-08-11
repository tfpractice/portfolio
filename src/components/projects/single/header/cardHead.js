import React from 'react';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Language from 'material-ui-icons/Language';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import { CardHeader } from 'material-ui/Card';

const gitSrc = '/images/github.png';

const Header = ({ project, repo, url, title }) =>
  (<CardHeader
    avatar={
      <a target="_blank" href={repo}>
        <Avatar src={gitSrc} aria-label={title} />
      </a>
    }
    title={title}
  />);

export default Header;
