import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';

const typeMap = new Map([
  [ 'APP', '#ff00ff' ],
  [ 'SCRIPT', '#ff00ff' ],
  [ 'LIB', '#00796b' ],
]);
const getColor = pj => (pj.category ? typeMap.get(pj.category) : '#b2dfdb');

const imgUrl = pj =>
  `http://via.placeholder.com/350/${getColor(pj).slice(1)}/ffffff?text=_`;

const Styled = withStyles(
  createStyleSheet('PJMedia', theme => ({
    media: {
      minHeight: '8rem',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      '&:hover': { background: 'none' },
    },

    default: {
      minHeight: '8rem',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      '&:hover': { background: 'none' },
    },
  }))
);

const withMedia = compose(
  withState('pic', 'turn', true),
  withHandlers({
    showPic: ({ turn }) => () => turn(true),
    showText: ({ turn }) => () => turn(false),
  })
);
const isDefault = ({ headerURL }) => headerURL.endsWith('default.svg');
const getHeader = bool => ({ headerURL }) => {
  console.log('headerURL', headerURL);

  return bool ? { backgroundImage: `url(${headerURL})` } : {};
};
const PJMedia = ({ pic, project, classes, showText, showPic }) =>
  (<Grid
    container
    align="center"
    justify="center"
    onMouseEnter={showText}
    onMouseLeave={showPic}
    className={isDefault(project) ? classes.default : classes.media}
    style={getHeader(pic)(project)}
  >
    <Grid item xs={12}>
      {!pic &&
        <Text type="headline" align="center">
          {project.description}
        </Text>}
    </Grid>
  </Grid>);

export default withMedia(Styled(PJMedia));
