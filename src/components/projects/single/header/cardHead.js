import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { CardHeader } from 'material-ui/Card';

const gitSrc = '/images/github.png';
const covSource = `https://coveralls.io/repos/github/tfpractice/fenugreek-collections/badge.svg?branch=master`;

const buildSrc = `https://travis-ci.org/tfpractice/fenugreek-collections.svg?branch=master`;

const Header = ({ project }) =>
  (<CardHeader
    avatar={
      <a target="_blank" href={project.repo}>
        <Avatar src={gitSrc} aria-label={project.title} />
      </a>
    }
    title={
      <Grid container>
        <Grid item xs>
          <a target="_blank" href={project.url}>
            <Text type="subheading" children={project.title} />
          </a>
        </Grid>
        <Grid item xs={4}>
          <img src={covSource} />
        </Grid>

        <Grid item xs={4}>
          <img src={buildSrc} />
        </Grid>
      </Grid>
    }
  />);

export default Header;
