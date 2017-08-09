import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import Text from 'material-ui/Typography';
import { RawPath } from '../visualization';
import { Expand } from '../misc';

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

const FeatureList = ({ header, data, classes }) =>
  (<List dense>
    {header &&
      <ListSubheader>
        {header}
      </ListSubheader>}
    {data.map((f, i) =>
      (<ListItem disableGutters dense divider key={i}>
        <SvgIcon className={classes.Icon} viewBox="-1,-1,2,2">
          <RawPath />
        </SvgIcon>

        <ListItemText primary={f} />
      </ListItem>)
    )}
  </List>);

const ExList = ({ header, data, classes }) =>
  (<List dense subheader={header || ''}>
    <Expand
      header={
        <ListSubheader>
          {header}
        </ListSubheader>
      }
    >
      {data.map((f, i) =>
        (<ListItem disableGutters dense divider key={i}>
          <SvgIcon className={classes.Icon} viewBox="-1,-1,2,2">
            <RawPath />
          </SvgIcon>

          <ListItemText primary={f} />
        </ListItem>)
      )}
    </Expand>
  </List>);

export const ExpandList = Styled(ExList);
export default Styled(FeatureList);
