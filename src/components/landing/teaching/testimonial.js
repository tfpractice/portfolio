import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ExpandLess from 'material-ui-icons/ExpandLess';
import Divider from 'material-ui/Divider';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';

import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';
import { Expand, HexCard } from '../../misc';

// import { containers } from '../../store/projects';

const withSwitch = compose(
  withState('open', 'flip', ({ open }) => !!open),
  withHandlers({
    toggle: ({ flip }) => () => flip(x => !x),
    show: ({ flip }) => () => flip(true),
    hide: ({ flip }) => () => flip(false),
  })
);

const Styled = withStyles(
  createStyleSheet('Testimonial', theme => ({
    content: {
      transition: 'background 0.15s linear',
      '&:hover': { backgroundColor: 'rgba(255,255,255,0.5)' },
    },

    div: {
      margin: '0.5rem',
      backgroundColor: '#f0f',
    },
  }))
);

const Testimonial = ({ student, open, classes, toggle, show }) =>
  (<Grid container align="center" justify="center">
    <Grid item xs>
      <HexCard raised>
        <CardHeader
          avatar={<Avatar src={student.imgUrl} />}
          title={
            <Text type="title">
              {student.name}
            </Text>
          }
          subheader={
            <Text type="subheading">
              {student.position}
            </Text>
          }
        />

        <CardContent onClick={toggle} className={classes.content}>
          <Divider className={classes.div} />
          <Collapse in={!open}>
            <Text type="headline" align="center">
              {student.caption}
            </Text>
          </Collapse>
          <Collapse in={open}>
            <CardContent>
              <Text color="secondary" type="body1">
                {student.content}
              </Text>
            </CardContent>
          </Collapse>
          <Divider className={classes.div} />
        </CardContent>
      </HexCard>
    </Grid>
  </Grid>);

export default withSwitch(Styled(Testimonial));
