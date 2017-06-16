import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import SwipeableViews from 'react-swipeable-views';
import ScrollableAnchor from 'react-scrollable-anchor';

import { FadeIn, } from 'animate-components';
import { Slide, } from '../misc';

const Testimonial = () => (
  <Card raised>
    <CardHeader title="Theory is so great at teaching" subheader="rachelle F" />
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
