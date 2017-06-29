import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia, CardHeader, } from 'material-ui/Card';
import { MarkdownPreview, } from 'react-marked-markdown';
import { withStyles, createStyleSheet, } from 'material-ui/styles';
import { HexCard, Expand, } from '../../misc';
import SkillSet from './skillSet';

const styles = createStyleSheet('SkillCard', (theme) => {
  console.log('theme', theme);
  return ({
    Grid: { backgroundColor: 'rgba(0,0,0,0.5)', },
    Card: { backgroundColor: 'rgba(0,0,0,0)', },
    
  });
})

;

const SkillCard = ({ skill, classes, }) => {
  const a = 0;

  return (
    <Grid container justify="space-around" align="center" className={classes.Grid} >
      <Grid item xs={11} sm={7} >
        <Card className={classes.Card} >
          <CardHeader title={skill.headline} />

          <CardContent>
            {/* <Expand header={skill.headline}> */}
            <Text color="secondary" >
              <MarkdownPreview value={skill.info}/>
            </Text>
            {/* </Expand> */}
          </CardContent>

        </Card>
      </Grid>
      <Grid item xs={11} sm={5} >
        <Card className={classes.Card} >
          {/* <CardHeader title={skill.headline} /> */}
          <CardMedia>
            <SkillSet skill={skill}/>

          </CardMedia>

        </Card>
      </Grid>
    </Grid>

  );
};

export default withStyles(styles)(SkillCard);
