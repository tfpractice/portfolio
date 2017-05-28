import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Link, } from 'react-router-dom';
import Sidebar from './sidebar';

const Nav = ({ match, ...props }) => (
  <AppBar>
    <Toolbar>
      <Grid container justify="space-between" direction="row" align="center">
        <Grid item>
          <Grid container justify="center">
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
        <Grid item>
          <Link to="/projects" >
            <Text type="headline" secondary >
                Projects
              </Text>
          </Link>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
  );

export default Nav;
