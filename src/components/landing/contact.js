import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet, } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton, } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import { withState, } from 'recompose';

// const gitUrl = 'https://github.com/tfpractice';
// const linkedIn = 'https://www.linkedin.com/in/tfpractice/';
// const codePen = 'https://codepen.io/tfpractice/';
//
// const gitLogo = 'https://jarroba.com/wp-content/uploads/2014/01/gitHub.png';

const gitHub = {
  label: 'github',
  imageURL: 'https://jarroba.com/wp-content/uploads/2014/01/gitHub.png',
  profileURL: 'https://github.com/tfpractice',
};
const codePen = {
  label: 'codepen',
  imageURL: '/images/codepenWhite.png',
  profileURL: 'https://codepen.io/tfpractice/',
};

// public/images/linkedinWhite.png
const linkedIn = {
  label: 'linkedIn',
  imageURL: 'https://jarroba.com/wp-content/uploads/2014/01/gitHub.png',
  profileURL: 'https://www.linkedin.com/in/tfpractice/',
};
const links = [ gitHub, codePen, linkedIn, ];
const styleSheet = createStyleSheet('SimpleBottomNavigation', { root: { width: 500, }, });

const withIndex = withState('index', 'setIndex', ({ index, } = { index: 0, }) => index);
const style = { minHeight: '5rem', };

class SimpleBottomNavigation extends Component {
  // state = { index: 0, };

  // handleChange = (event, index) => {
  //   this.setState({ index, });
  // };

  render() {
    const classes = this.props.classes;
    const { index, setIndex, } = this.props;

    return (
      <Grid container>
        <Grid item xs>
          <BottomNavigation style={style} index={index} onChange={(e, i) => setIndex(() => i)} showLabels>
            {links.map(l =>

              (<BottomNavigationButton key={l.label} label={l.label} icon={
                <a target="_blank" href={l.profileURL}>
                  <Icon>
                    <Avatar src={l.imageURL} aria-label={l.label}/>

                  </Icon>
                </a>
              } />)

            )}
          </BottomNavigation>
        </Grid>
      </Grid>
    );
  }
}

SimpleBottomNavigation.propTypes = { classes: PropTypes.object.isRequired, };

export default withStyles(styleSheet)(withIndex(SimpleBottomNavigation));
