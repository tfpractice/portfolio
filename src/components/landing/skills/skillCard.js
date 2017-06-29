import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia, CardHeader, } from 'material-ui/Card';
import { MarkdownPreview, } from 'react-marked-markdown';
import { withStyles, createStyleSheet, } from 'material-ui/styles';
import { HexCard, Expand, } from '../../misc';
import SkillSet from './skillSet';

const imgStyle = {
  width: 'calc(80% + 16px)',
  borderRadius: 'calc(50% )',
};

const styles = createStyleSheet('SkillCard', (theme) => {
  console.log('theme', theme);
  return ({ Card: { backgroundColor: 'rgba(0,0,0,0.3)', }, });
})

;

const SkillCard = ({ skill, classes, }) => {
  const a = 0;

  return (
    <Grid container justify="space-around" className={classes.Card} >
      <Grid item xs={11} sm={8} >
        <Card className={classes.Card} >
          <CardHeader title={skill.headline} />
          <CardMedia>
            <SkillSet skill={skill}/>
            
          </CardMedia>
          <CardContent>
            <Expand header={skill.headline}>
              <Text color="secondary" >
                <MarkdownPreview value={skill.info}/>
              </Text>
            </Expand>
          </CardContent>

        </Card>
      </Grid>
      <Grid item xs={11} sm={4} />
    </Grid>

  );
};

export default withStyles(styles)(SkillCard);
