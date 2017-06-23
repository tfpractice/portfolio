import React, { Component, } from 'react';
import d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { Link, } from 'react-router-dom';
import Icon from 'material-ui/Icon';
import SwipeableViews from 'react-swipeable-views';
import { withState, } from 'recompose';

import Teaching from '../main/teaching';
import { createImage, linkGons, } from '../visualization';
import { NavSlide, } from '../misc';
import Overview from './overview';
import Header from './header';

// import ProjectInfo from '../projects/info';
import Apps from './apps';
import Libraries from './libraries';
import { Hex, NavTess, } from '../visualization';
const linkArray = [ 'about', 'teaching', 'projects', ];
const swipeLabels = [ 'frontMatter', 'about', 'apps', 'libraries', ];
const TextLinks = txtArr => txtArr.map(t => <Text type="title">{t.toUpperCase()}</Text>);
const withIndex = withState('index', 'setIndex', ({ index, }) => index || 0);

class Landing extends Component {
  render() {
    const labels = TextLinks(swipeLabels);
    const { index, setIndex, } = this.props;

    // const wNav=({ labels, index, setIndex, children, ...sprops }) => (
    //
    // <Grid container align="center" justify="center" >
    // <AppBar>
    //   <Toolbar>
    //     <Grid container align="center" >
    //
    //       {/* <BottomNavigation index={index}> */}
    //       {labels.map((l, i) => (
    //         <Grid item xs key={i}>
    //           <Button key={i} onClick={() => setIndex(() => i)} children={l} />
    //         </Grid>
    //       ))}
    //       {/* </BottomNavigation> */}
    //     </Grid>
    //   </Toolbar>
    // </AppBar>
    //   <Grid item xs={12}>
    //     <SwipeableViews index={index} enableMouseEvents {...sprops}>
    //  <Header/>
    //  <Overview/>
    //  <Apps/>
    //  <Libraries/>
    // </SwipeableViews>
    //   </Grid>
    // </Grid>
    // );
    
    return (
      <Grid container direction="column" justify="center">
        <Grid item xs>
          <AppBar>
            <Toolbar>
              <Grid container align="center" >

                {/* <BottomNavigation index={index}> */}
                {labels.map((l, i) => (
                  <Grid item xs key={i}>
                    <Button key={i} onClick={() => setIndex(() => i)} children={l} />
                  </Grid>
                ))}
                {/* </BottomNavigation> */}
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs>
          <SwipeableViews enableMouseEvents className="mainSlide" index={index}>
            <NavTess count={4} index={index} >
              {labels.map((l, i) => (
                <Button key={i} onClick={() => setIndex(() => i)} />

              ))}
            </NavTess>
            <Header/>
            <Overview/>
            <Apps/>
            <Libraries/>
          </SwipeableViews>
        </Grid>
      </Grid>
    );
  }
}

//
// const wNav=({ labels, index, setIndex, children, ...sprops }) => (
//
// <Grid container align="center" justify="center" >
//   {/* <Grid item xs={12}> */}
//   <AppBar>
//     <Toolbar>
//       <Grid container align="center" >
//
//         {/* <BottomNavigation index={index}> */}
//         {labels.map((l, i) => (
//           <Grid item xs key={i}>
//             <Button key={i} onClick={() => setIndex(() => i)} children={l} />
//           </Grid>
//         ))}
//         {/* </BottomNavigation> */}
//       </Grid>
//     </Toolbar>
//   </AppBar>
//   {/* </Grid> */}
//   <Grid item xs={12}>
//     <SwipeableViews index={index} enableMouseEvents {...sprops}>
//       {children}
//     </SwipeableViews>
//   </Grid>
// </Grid>
// );

export default withIndex(Landing);
