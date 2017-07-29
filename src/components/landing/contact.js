import React from 'react';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
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
  imageURL: 'https://jarroba.com/wp-content/uploads/2014/01/gitHub.png',
  profileURL: 'https://www.linkedin.com/in/tfpractice/',
};
const links = [ gitHub, codePen, linkedIn ];

const styleSheet = createStyleSheet('SimpleBottomNavigation', { root: { width: 500 }});
const Styled = withStyles(
  createStyleSheet('SimpleBottomNavigation', { root: { width: 500 }})
);

const withIndex = withState(
  'index',
  'setIndex',
  ({ index } = { index: 0 }) => index
);
const Indexed = compose(
  withState('index', 'setIndex', ({ index } = { index: 0 }) => index),
  withHandlers({
    set: ({ setIndex }) => i => () => setIndex(i),
    setChange: ({ setIndex }) => (e, i) => setIndex(i),
  })
);
const style = { minHeight: '5rem', backgroundColor: 'rgba(158,158,158,0.9)' };

const Contact = ({ index, setIndex, setChange, set }) =>
  (<Grid container>
    <Grid item xs>
      <BottomNavigation
        showLabels
        style={style}
        value={index}
        onChange={setChange}
      >
        {links.map(l =>
          (<BottomNavigationButton
            key={l.label}
            target="_blank"
            href={l.profileURL}
            label={l.label}
            icon={
              <span>
                <Avatar src={l.imageURL} aria-label={l.label} />
              </span>
            }
          />)
        )}
      </BottomNavigation>
    </Grid>
  </Grid>);

export default Indexed(Styled(Contact));
