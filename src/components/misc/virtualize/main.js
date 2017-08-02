import React from 'react';
import Button from 'material-ui/Button';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { renderer as dRender, VirtualSwipe } from './renderer';

// import { mod, } from 'react-swipeable-views-core';

import { ixHandler, stateful } from './stateful';

const Carousel = ({
  index,
  setIndex,
  children,
  renderer = dRender,
  ...props
}) =>

  // console.log('children', children);
  (<div>
    <VirtualSwipe
      index={index}
      enableMouseEvents
      slideRenderer={({ index: ix, key }) =>
        (<SwipeableViews index={ix}>
          {children}
        </SwipeableViews>)}
      onChangeIndex={cix => setIndex(ixHandler(index))}
    />

    <br />
    {children.map((el, i) =>
      (<Button key={i} onClick={() => setIndex(ixHandler(i))}>
        {`go to slide n°${i}`}
      </Button>)
    )}
  </div>);

export default stateful(Carousel);
