
import React, { Component, } from 'react';
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard, virtualize, } from 'react-swipeable-views-utils';
import { mod, } from 'react-swipeable-views-core';
import { withState, } from 'recompose';
import { renderer as dRender, VirtualSwipe, } from './renderer';

// import { mod, } from 'react-swipeable-views-core';

import { ixHandler, stateful, } from './stateful';

const Carousel = ({ index, setIndex, children, renderer = dRender, ...props }) => {
  console.log('children', children);
  return (
    <div>
      <VirtualSwipe
        index={index}
        enableMouseEvents
        onChangeIndex={cix => setIndex(ixHandler(index))}
        slideRenderer={({ index: ix, key, }) =>

          <SwipeableViews index={ix}>{children}</SwipeableViews>
        }
      />

      <br />
      {children.map((el, i) =>
        (<Button key={i} onClick={() => setIndex(ixHandler(i))}>
          {`go to slide n°${i}`}
        </Button>)
      ) }

    </div>
  );
};

export default stateful((Carousel));
