import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import List, { ListItem, ListSubheader, } from 'material-ui/List';
import { Link, } from 'react-router-dom';
import { appFilt, libFilt, scrFilt, } from '../../utils';
import { LinkList, ProjectLink, } from '../projects';

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

  expand = () => this.toggleDrawer('left', true);
  collapse = () => this.toggleDrawer('left', false);

  render() {
    const { applications, libraries, classes, scripts, } = this.props;

    // console.log(' DRAWER this.props', this.props);
    return (
      <Grid container>
        <IconButton contrast onClick={this.expand}>
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={this.state.open.left}
          onRequestClose={this.collapse}
        >

          <List
            className={classes.listFull}
            id="simple-List"
            open={this.state.open}
          >
            <ListSubheader primary>
              LIST
            </ListSubheader>
            <Grid item>
              <LinkList path="/projects" heading="Applications" items={applications} />
              {/* <List dense >
                <ListSubheader>
                  <Link to="/projects" >
                    <Text type="headline" secondary >
                      Applications
                    </Text>
                  </Link>
                </ListSubheader>

                <LinkList projects={applications} />
                {/* {applications.map(a =>
                  (<ListItem key={a.id}>
                    <ProjectLink project={a} />
                  </ListItem>)
                )}

            </List> */}
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

          </List>

        </Drawer>
      </Grid>
    );
  }
}

export default connect(stateToProps)(withStyles(styleSheet)(Sidebar));
