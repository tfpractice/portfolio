import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';

const getBG = bool => ({ headerURL }) =>
  bool ? { backgroundImage: `url(${headerURL})` } : {};

const isDef = ({ headerURL }) => headerURL.endsWith('default.svg');
const Styled = withStyles(
  createStyleSheet('PJMedia', theme => ({
    media: {
      minHeight: '8rem',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      '&:hover': { background: 'none' },
    },
    def: {
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

const PJMedia = ({ pic, project, classes, showText, showPic }) =>
  (<Grid
    container
    align="center"
    justify="center"
    onMouseEnter={showText}
    onMouseLeave={showPic}
    className={isDef(project) ? classes.def : classes.media}
    style={getBG(pic)(project)}
   >
    <Grid item xs={12}>
      {!pic &&
        <Text type="headline" align="center">
          {project.description}
        </Text>}
    </Grid>
  </Grid>);

export default withMedia(Styled(PJMedia));
