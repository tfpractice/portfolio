import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { CardActions, CardHeader } from 'material-ui/Card';

const gitSrc = '/images/github.png';
const covSource = `https://coveralls.io/repos/github/tfpractice/fenugreek-collections/badge.svg?branch=master`;
const buildSrc = `https://travis-ci.org/tfpractice/fenugreek-collections.svg?branch=master`;

const Header = ({ project, repo, url, title }) =>
  (<CardHeader
    avatar={
      <a target="_blank" href={repo}>
        <Avatar src={gitSrc} aria-label={title} />
      </a>
    }
    title={
      <a target="_blank" href={url}>
        <Text type="title" align="center" children={title} />
      </a>
    }
  />);

export default Header;
