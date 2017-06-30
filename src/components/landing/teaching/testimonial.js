import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Card, { CardActions, CardContent, CardMedia, CardHeader, } from 'material-ui/Card';
import { Expand, } from '../../misc';

const imgUrl = 'http://via.placeholder.com/350/00ff00/ffffff?text=_';

const Testimonial = ({ student, }) => (
  
  <Grid container align="center" justify="center">
    <Grid item xs>
      <Card raised>
        <CardHeader
          avatar={<Avatar src={student.imgUrl}/>}
          title={student.name}
          subheader={`${student.position}`} />
        <Grid container justify="center">
          <Grid item xs={11}>
            <CardContent>
              <Expand open={false} header={<Text color="inherit" type="title" >{student.caption}</Text>}>
                <Text color="secondary" type="body1">
                  {student.content}
                </Text>
              </Expand>
            </CardContent>
          </Grid>

        </Grid>

      </Card>
    </Grid>

  </Grid>

);

export default (Testimonial);
