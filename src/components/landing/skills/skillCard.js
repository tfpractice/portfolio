import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia, CardHeader, } from 'material-ui/Card';
import { MarkdownPreview, } from 'react-marked-markdown';
import { withStyles, createStyleSheet, } from 'material-ui/styles';
import { HexCard, Expand, } from '../../misc';
import SkillSet from './skillSet';

const styles = createStyleSheet('SkillCard', theme => ({
  Grid: {
    backgroundColor: 'rgba(66,66,66,0.85)',
    backgroundImage: 'url(/images/hex05.svg)',
    backgroundPosition: 'left',
    backgroundColor: 'rgba(66,66,66,0.85)',
    backgroundSize: '200% 200%',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '5%',
  },
  Card: { backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none', },
    
})
);

const SkillCard = ({ skill, classes, }) => {
  const a = 0;

  return (
    <Grid container justify="center" className={classes.Grid} >
      <Grid item xs={11} md >
        <Card className={classes.Card} >
          <Expand header={<CardHeader subheader={skill.headline} />}>
            <CardContent>
              <Text component="div" color="secondary" >
                <MarkdownPreview value={skill.info}/>
              </Text>
            </CardContent>
          </Expand>

        </Card>
      </Grid>
      <Grid item xs={11} md={5} >
        <Card className={classes.Card} >
          <Expand header={ <CardHeader subheader={'Tools'} />}>
            <CardMedia>
              <SkillSet skill={skill}/>
            </CardMedia>
          </Expand>
        </Card>
      </Grid>
    </Grid>

  );
};

export default withStyles(styles)(SkillCard);
