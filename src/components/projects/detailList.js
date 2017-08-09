import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { connect } from 'react-redux';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import Text from 'material-ui/Typography';
import { MarkdownPreview } from 'react-marked-markdown';
import { pColors, slug } from '../../utils';
import { RawPath } from '../visualization';
import { Expand } from '../misc';
import { getSlides } from './single/pages';

const mapState = (state, { project }) => ({ data: getSlides(slug(project)) });
const Styled = withStyles(
  createStyleSheet('Expand', theme => ({
    Icon: {
      maxWidth: '1rem',
      maxHeight: '1rem',
      minWidth: '1rem',
      minHeight: '1rem',
      color: ' rgba(255, 255, 255, 1)',
      '&:hover': { color: 'inherit' },
    },
    Grid: { backgroundColor: 'rgba(0,0,0,0.5)', paddingBottom: '5%' },
    Header: { backgroundColor: 'rgba(0,0,0,0.5)', boxShadow: 'none' },
    Divider: { backgroundColor: '#f0f' },
  }))
);

const Details = ({ header, data, classes }) =>
  (<List dense subheader={header || ''}>
    {data.map((f, i) =>
      (<ListItem disableGutters dense divider key={i}>
        {/* <ListItemIcon className={classes.Icon}> */}
        <SvgIcon className={classes.Icon} viewBox="-1,-1,2,2">
          <RawPath />
        </SvgIcon>
        {/* </ListItemIcon> */}
        <Expand header={<ListItemText primary={f.caption} />}>
          <Text component="div" type="headline">
            <MarkdownPreview value={f.content} />
          </Text>
        </Expand>
      </ListItem>)
    )}
  </List>);

export default connect(mapState)(Styled(Details));
