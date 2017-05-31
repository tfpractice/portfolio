import React, { Component, } from 'react';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Drawer from 'material-ui/Drawer';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import List, { ListItem, ListSubheader, } from 'material-ui/List';
import { Link, } from 'react-router-dom';
import { appFilt, libFilt, scrFilt, } from '../../utils';
import ProjectLink from '../projects/link';

const stateToProps = ({ projects, }) => ({
  applications: appFilt(projects),
  libraries: libFilt(projects),
  scripts: scrFilt(projects),
});

const styleSheet = createStyleSheet('Sidebar', () => ({
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
}));

class Sidebar extends Component {
  state = {
    open: {
      top: false,
      left: false,
      bottom: false,
      right: false,
    },
  };

  toggleDrawer = (side, open) => {
    const drawerState = {};

    drawerState[side] = open;
    this.setState({ open: drawerState, });
  };

  handleRightOpen = () => this.toggleDrawer('left', true);
  handleRightClose = () => this.toggleDrawer('left', false);

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const { toggle, user, applications, libraries, scripts, ...props } = this.props;

    console.log(' DRAWER this.props', this.props);
    return (
      <Grid container>
        {/* <Grid item> */}
        <IconButton contrast onClick={this.handleRightOpen}>
          <MenuIcon />
        </IconButton>
        {/* </Grid> */}

        <Drawer
          anchor="left"
          open={this.state.open.left}
          onRequestClose={this.handleRightClose}
        >

          <List
            id="simple-List"
            open={this.state.open}
          >
            <ListSubheader primary>
              LIST
            </ListSubheader>
            <Grid item>
              <List>
                <ListSubheader>
                  <Link to="/projects" >
                    <Text type="headline" secondary >
                      Applications
                    </Text>
                  </Link>
                </ListSubheader>
                {applications.map(a =>
                  (<ListItem key={a.id}>
                    <ProjectLink project={a} />
                  </ListItem>)
                  )}

              </List>
              <List>
                <ListSubheader>
                  <Link to="/projects" >
                    <Text type="headline" secondary >
                            Libraries
                          </Text>
                  </Link>
                </ListSubheader>
                {libraries.map(a =>
                        (<ListItem key={a.id}>
                          <ProjectLink project={a} />
                        </ListItem>)
                )}

              </List>

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
            <ListItem>
              hey i am a list item
            </ListItem>
          </List>

        </Drawer>
      </Grid>
    );
  }
}

Sidebar.contextTypes = { styleManager: customPropTypes.muiRequired, };

export default connect(stateToProps)(Sidebar);
