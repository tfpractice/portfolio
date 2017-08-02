import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';

import { Expand, HexCard } from '../../misc';
import Slide from './slide';

// import hexPath from '../../../../public/images/';
const slideStyle = {
  backgroundImage: 'url(/images/pinkHex50.svg)',
  backgroundPosition: 'left',

  // backgroundColor: 'rgba(66,66,66,0.85)',
  backgroundSize: '200% 200%',
  backgroundRepeat: 'no-repeat',
};
const styles = {
  slide: {
    padding: 15,
    minHeight: '100',
    color: '#fff',
  },
  slide1: { background: '#FEA900' },
  slide2: { background: '#B3DC4A' },
  slide3: { background: '#6AC0FF' },
};

const getStyle = data => ix =>
  Object.assign({}, styles.slide, styles[`slide${(ix + 1) % data.length}`]);

const Slides = ({ data, project, ...props }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs>
      <Expand
        header={
          <Text color="inherit" type="title">
            Project Highlights
          </Text>
        }
      >
        <SwipeableViews slideStyle={slideStyle} enableMouseEvents>
          {data.map((h, i) => <Slide key={i} slide={h} />)}
        </SwipeableViews>
      </Expand>
    </Grid>
  </Grid>);

//
// <Grid item xs={11}>
//   <Grid container direction="column" justify="center" align="center">
//
//       <Grid item>
//         <Slides project={project} data={lSlides} />
//       </Grid>
//     </Expand>
//   </Grid>
// </Grid>

export default Slides;
