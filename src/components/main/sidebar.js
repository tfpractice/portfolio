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
import { LinkList, } from '../projects';

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
  constructor(props) {
    super(props);
    this.state = {
      open: {
        top: false,
        left: false,
        bottom: false,
        right: false,
      },
    };
  }
  toggleDrawer (side, open) {
    const drawerState = {};

    drawerState[side] = open;
    this.setState({ open: drawerState, });
  }
  
  render() {
    const { applications, libraries, classes, scripts, } = this.props;
    const expand = () => this.toggleDrawer('left', true);
    const collapse = () => this.toggleDrawer('left', false);

    return (
      <Grid container>
        <IconButton color="contrast" onClick={expand}>
          <MenuIcon />
        </IconButton>
        <Grid item xs={4}>
          <Drawer anchor="left" open={this.state.open.left} onRequestClose={collapse} >
            <List dense className={classes.listFull} open={this.state.open} >
              <ListSubheader primary>
                <Link to="/" >
                  <Text type="button" color="secondary" >
                    tfpractice
                  </Text>
                </Link>
              </ListSubheader>
              <ListItem dense divider >
                <Grid container>
                  <Grid item>
                    <Link to="/about" >
                      about
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/teaching" >
                      teaching
                    </Link>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <LinkList path="/projects" heading="Applications" items={applications} />
            <LinkList path="/projects" heading="Libraries" items={libraries} />
          </Drawer>
        </Grid>
      </Grid>
    );
  }
}

export default connect(stateToProps)(withStyles(styleSheet)(Sidebar));
