import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { FadeIn, } from 'animate-components';
import Card, { CardContent, } from 'material-ui/Card';
import { devEx, future, highlights, info, technicals, } from './data';
const styles = {
 slide: {
   padding: 15,
   minHeight: 100,
   color: '#fff',
 },
 slide1: { background: '#FEA900', },
 slide2: { background: '#B3DC4A', },
 slide3: { background: '#6AC0FF', },
};
const getStyle = data => ix => Object.assign({}, styles.slide,
 styles[`slide${(ix + 1) % data.length}`]);
 
const Slides = ({ data, }) => (
  <Grid container>
    <Grid item xs={11}>
      <SwipeableViews enableMouseEvents>
        {[ ...data, ].map((h, i) => (
          <Grid key={i} style={styles.slide}>
            <Card>
              <CardContent>
                {h}
                <ul className="sections">
                  <li id="title">
                    <div className="annotation">
                     <h1>iterable.js</h1>
                   </div>
                  </li>
                  <li id="section-1">
                    <div className="annotation">
                     <div className="pilwrap ">
                       <a className="pilcrow" href="#section-1">&#182;</a>
                     </div>
                     <p>
                       <strong>isIterable</strong>
                       <code>:: obj ->; bool</code>
                       "checks if an object is iterable"
                     </p>
                   </div>
                    <div className="content"><div className="highlight"><pre><span className="hljs-keyword">export</span> <span className="hljs-keyword">const</span> isIterable = <span className="hljs-function"><span className="hljs-params">o</span> =>;</span> !!o[<span className="hljs-built_in">Symbol</span>.iterator];</pre></div></div>
                  </li>
                 
                  <li id="section-2">
                    <div className="annotation">
                     <div className="pilwrap ">
                       <a className="pilcrow" href="#section-2">&#182;</a>
                     </div>
                     <p><strong>iterify</strong> <code>:: obj ->; iterable</code>
                       returns the object or an Iterable
                     </p>
                   </div>
                    <div className="content"><div className="highlight"><pre><span className="hljs-keyword">export</span> <span className="hljs-keyword">const</span> iterify = <span className="hljs-function"><span className="hljs-params">o</span> =>;</span> isIterable(o) ? o : [ o, ];</pre></div></div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
       ))}
      </SwipeableViews>
    </Grid>
  </Grid>
);

export default Slides;
