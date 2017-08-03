import React from 'react';
import Grid from 'material-ui/Grid';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';

import {
  bScale,
  bTypes,
  fScale,
  fTypes,
  stackScale,
  stackTypes,
} from '../landing/skills/content';
import ToolChip from './chip';

const Styled = withStyles(
  createStyleSheet('SkillChip', (theme) => {
    let sheet = { list: { overflowX: 'auto', overflowY: 'hidden' }};

    sheet = stackTypes
      .map(t => ({ [t]: { backgroundColor: stackScale(t) }}))
      .reduce((obj, next) => ({ ...obj, ...next }), sheet);
    sheet = [ ...bTypes ]
      .map(t => ({ [t]: { backgroundColor: bScale(t) }}))
      .reduce((obj, next) => ({ ...obj, ...next }), sheet);

    return sheet;
  })
);

//
// const Styled = withStyles(
//   createStyleSheet('ToolChipList', theme => ({
//     svgIcon: { color: grey[800] },
//     row: {
//       display: 'flex',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//     },
//   }))
// );
// const styles = ;
const ChipList = ({ tools, classes }) => {
  console.log('tools', tools);
  return (
    <Grid
      container
      justify="center"
      align="center"

      // wrap="nowrap"
      className={classes.list}
    >
      {[ ...tools ].sort((a, b) => a.name.length - b.name.length).map(t =>
        (<Grid item xs key={t.id}>
          <ToolChip className={classes[t.stack]} tool={t} key={t.id} />
        </Grid>)
      )}
    </Grid>
  );
};

export default Styled(ChipList);
