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
import { MarkdownPreview } from 'react-marked-markdown';

import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';
import { Expand, HexCard } from '../../misc';

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
      transition: 'background 0.1s linear',
      '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
    },
    pic: { height: '3rem', width: '3rem' },
    div: {
      margin: '0.5rem',
      backgroundColor: '#f0f',
    },
  }))
);

const Testimonial = ({ student, open, classes, toggle, show }) =>
  (<HexCard raised>
    <CardHeader
      avatar={<Avatar className={classes.pic} src={student.imgUrl} />}
      title={
        <Text type="display1" align="right">
          {student.name}
        </Text>
      }
      subheader={
        <Text type="subheading" align="right" color="inherit">
          {student.position}
        </Text>
      }
    />

    <CardContent onClick={toggle} className={classes.content}>
      <Divider className={classes.div} />
      <Collapse in={!open}>
        <Text type="headline" align="center">
          "{student.caption}..."
        </Text>
      </Collapse>
      <Collapse in={open}>
        <CardContent>
          <Text component="div" color="secondary" type="body2">
            <MarkdownPreview value={student.content} />
          </Text>
        </CardContent>
      </Collapse>
      <Divider className={classes.div} />
    </CardContent>
  </HexCard>);

export default withSwitch(Styled(Testimonial));
