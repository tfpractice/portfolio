import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import { MarkdownPreview } from 'react-marked-markdown';
import { Expand, HexCard } from '../../misc';
import { Chiara, content, students, Wesley } from './content';
import Testimonial from './testimonial';

const Teaching = () =>
  (<Grid container justify="center" align="center">
    <Grid item xs={11}>
      <HexCard>
        <CardHeader title="Autodidact and Educator" />
        <CardContent>
          <Text component="div" color="secondary" type="body2">
            <MarkdownPreview value={content} />
          </Text>
        </CardContent>
      </HexCard>
    </Grid>
    <Grid item xs={11}>
      <Expand
        header={<Text color="inherit" type="display1" children="Reviews" />}
      >
        <Grid container justify="center">
          {students.map((t, i) =>
            (<Grid item xs={11} sm={6} key={t.name}>
              <Testimonial student={t} />
            </Grid>)
          )}
        </Grid>
      </Expand>
    </Grid>
  </Grid>);

export default Teaching;
