import React from 'react';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import withWidth, { isWidthDown } from 'material-ui/utils/withWidth';
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bScale, bTypes, fScale, fTypes } from './content';

const mapState = (s, { skill }) => {
  console.log('skill', skill);
  const groups = [ ...new Set(skill.skillSet.map(s => s.type)) ];
  const byType = sArr => t => sArr.filter(s => s.type === t);

  const types = groups.map(group => ({
    group,
    skillArray: byType(skill.skillSet)(group),
  }));

  console.log('types', types);
  return { skill, types };
};
const Connected = connect(mapState);
const styles = createStyleSheet('SkillChip', (theme) => {
  let sheet = {};

  sheet = [ ...fTypes ]
    .map(t => ({ [t]: { backgroundColor: fScale(t) }}))
    .reduce((obj, next) => ({ ...obj, ...next }), sheet);
  sheet = [ ...bTypes ]
    .map(t => ({ [t]: { backgroundColor: bScale(t) }}))
    .reduce((obj, next) => ({ ...obj, ...next }), sheet);

  return sheet;
});
const Styled = withStyles(styles);

// const SkillSet = ({ skill, classes, types }) =>
//   (<Grid container align="center" justify="center">
//     {types.map(t =>
//       (<Grid item xs={11} key={t.group}>
//         <Grid container align="center" justify="center">
//           {t.skillArray.map(s =>
//             (<Grid item xs key={s.name}>
//               <Chip className={classes[s.type]} label={s.name} />
//             </Grid>)
//           )}
//         </Grid>
//         <Divider />
//       </Grid>)
//     )}
//   </Grid>);

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

const SkillList1 = ({ skill, width, classes, types }) =>
  (<Grid container direction="column" spacing={0}>
    {types.map(t =>
      (<Grid item xs={11} key={t.group}>
        <List>
          <ListSubheader>
            {t.group}
          </ListSubheader>
          <ListItem component={Grid}>
            {t.skillArray.map(s =>
              <Chip className={classes[s.type]} label={s.name} />
            )}
          </ListItem>
        </List>
      </Grid>)
    )}
  </Grid>);

export default Connected(Styled(withWidth()(SkillList)));
