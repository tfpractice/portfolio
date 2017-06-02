import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';

import { Link, } from 'react-router-dom';
import Sidebar from './sidebar';

const Nav = ({ match, ...props }) => (
  <AppBar>
    <Toolbar>
      <Grid container justify="space-around" direction="row" align="center">
        <Grid item>
          <Grid container >
            <Grid item >
              <Sidebar />
            </Grid>
            <Grid item >
              <Link to="/" >
                <Text type="headline" secondary >
                  tfpractice portfolio
                </Text>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item>
            <Grid container justify="space-around" align="center">
              <Grid item>
                <Link to="/projects" >
                  <Text type="headline" secondary >
                    Projects
                  </Text>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/about" >
                  <Text type="headline" secondary >
                    About
                  </Text>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/teaching" >
                  <Text type="headline" secondary >
                    Teaching
                  </Text>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </Toolbar>
  </AppBar>
  );

export default Nav;
