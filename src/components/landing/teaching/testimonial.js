import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
const imgUrl = 'http://via.placeholder.com/350/00ff00/ffffff?text=_';

const Testimonial = () => (
  <Card raised>
    <CardHeader
      avatar={<Avatar src={imgUrl}/>}
      title="Theory is so great at teaching"
      subheader="rachelle F" />
    <CardContent>
      <Text color="secondary" type="body1">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
      </Text>
    </CardContent>
  </Card>

);

export default (Testimonial);
