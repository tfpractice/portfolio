import React from 'react';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import BNav, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';

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

const linkedIn = {
  label: 'linkedIn',
  imageURL: '/images/In-White-128px-R.png',
  profileURL: 'https://www.linkedin.com/in/tfpractice/',
};

const links = [ gitHub, linkedIn, codePen ];

const Styled = withStyles(
  createStyleSheet('Contact', {
    avatar: { borderRadius: 0 },
    label: { marginTop: '0.5rem' },
    nav: { minHeight: '5rem', backgroundColor: 'rgba(158,158,158,0.9)' },
  })
);

const Indexed = compose(
  withState('index', 'setIndex', ({ index } = { index: 2 }) => index),
  withHandlers({
    set: ({ setIndex }) => i => () => setIndex(i),
    setChange: ({ setIndex }) => (e, i) => setIndex(i),
  })
);

const Contact = ({ setChange, classes }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs={12}>
      <BNav className={classes.nav} onChange={setChange}>
        {links.map(l =>
          (<BottomNavigationButton
            showLabel
            target="_blank"
            key={l.label}
            href={l.profileURL}
            label={
              <Text align="center" type="caption" className={classes.label}>
                {l.label}
              </Text>
            }
            icon={
              <Avatar
                className={classes.avatar}
                src={l.imageURL}
                aria-label={l.label}
              />
            }
          />)
        )}
      </BNav>
    </Grid>
  </Grid>);

export default Indexed(Styled(Contact));
