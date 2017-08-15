import React from 'react';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { CardHeader } from 'material-ui/Card';

const gitSrc = '/images/gitHub.png';

const Header = ({ repo, title }) =>
  (<CardHeader
    title={title}
    avatar={
      <a target="_blank" href={repo}>
        <Avatar src={gitSrc} aria-label={title} />
      </a>
    }
  />);

export default Header;
