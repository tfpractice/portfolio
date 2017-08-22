import React from 'react';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import withWidth, { isWidthDown } from 'material-ui/utils/withWidth';
import Card, { CardActions } from 'material-ui/Card';
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Tabs, { Tab } from 'material-ui/Tabs';
import { ChipActions } from '../../tools';
import { bScale, bTypes, fScale, fTypes } from './content';

const mapState = (s, { skill }) => {
  const groups = [ ...new Set(skill.skillSet.map(s => s.type)) ];
  const byType = sArr => t => sArr.filter(s => s.type === t);

  const types = groups.map(group => ({
    group,
    skillArray: byType(skill.skillSet)(group),
  }));

  return { skill, types };
};
const Connected = connect(mapState);
const styles = createStyleSheet('SkillChip', (theme) => {
  let sheet = {
    scrollButton: {
      flex: '0 0 0.25rem',
      color: '#fff',
      background: 'none',
    },
    chipWrap: {
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      overflowY: 'hidden',
    },
  };

  sheet = [ ...fTypes ]
    .map(t => ({ [t]: { backgroundColor: fScale(t) }}))
    .reduce((obj, next) => ({ ...obj, ...next }), sheet);
  sheet = [ ...bTypes ]
    .map(t => ({ [t]: { backgroundColor: bScale(t) }}))
    .reduce((obj, next) => ({ ...obj, ...next }), sheet);

  return sheet;
});

const Styled = withStyles(styles);

const SkillList = ({ skill, width, classes, types }) =>
  (<Grid container direction="column" spacing={0}>
    {types.map(t =>
      (<Grid item xs key={t.group}>
        <List dense>
          <ListSubheader>
            {t.group}
          </ListSubheader>
          <ListItem dense>
            <Grid container spacing={8} align="center" justify="center">
              {t.skillArray.map(s =>
                (<Grid item xs key={s.name}>
                  <Chip className={classes[s.type]} label={s.name} />
                </Grid>)
              )}
            </Grid>
          </ListItem>
        </List>
      </Grid>)
    )}
  </Grid>);
const SActions = ({ type, width, classes, types }) =>
  (<Grid
    container
    component={CardActions}
    wrap="nowrap"
    spacing={8}
    align="center"
    justify="center"
    className={classes.chipWrap}
  >
    {type.skillArray.map(s =>
      (<Grid item xs key={s.name}>
        <Chip className={classes[s.type]} label={s.name} />
      </Grid>)
    )}
  </Grid>);
const SkillActions = Connected(Styled(withWidth()(SActions)));

const STabs2 = ({ skill, width, classes, types }) =>
  (<Grid container justify="space-around" align="center">
    {types.map(t =>
      (<Grid item xs key={t.group}>
        <List dense>
          <ListItem>
            <ListSubheader>
              {t.group}
            </ListSubheader>
            <Tabs
              centered
              fullWidth
              scrollable
              scrollButtons="on"
              index={false}
              buttonClassName={classes.scrollButton}
              onChange={e => false}
            >
              <SkillActions skill={skill} type={t} />
            </Tabs>
          </ListItem>
        </List>
      </Grid>)
    )}
  </Grid>);

const STabs = ({ skill, width, classes, types }) =>
  (<Grid container justify="space-between" align="center">
    {types.map(t =>
      (<Grid item xs key={t.group}>
        <Grid container dense component={List}>
          <Grid item xs={11} sm component={ListItem}>
            <ListSubheader>
              {t.group}
            </ListSubheader>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Tabs
              centered
              fullWidth
              scrollable
              scrollButtons="on"
              index={false}
              buttonClassName={classes.scrollButton}
              onChange={e => false}
            >
              <SkillActions skill={skill} type={t} />
            </Tabs>
          </Grid>
        </Grid>
      </Grid>)
    )}
  </Grid>);

// export const SkillTabs = Connected(Styled(withWidth()(SActions)));
//
export const SkillTabs = Connected(Styled(withWidth()(STabs)));
export default Connected(Styled(withWidth()(SkillList)));
