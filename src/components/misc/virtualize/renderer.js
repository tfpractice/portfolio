/* eslint-disable react/no-multi-comp */

import React, { Component, } from 'react';
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard, virtualize, } from 'react-swipeable-views-utils';
import { mod, } from 'react-swipeable-views-core';

export const VirtualSwipe = (virtualize(SwipeableViews));

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: { backgroundColor: '#FEA900', },
  slide2: { backgroundColor: '#B3DC4A', },
  slide3: { backgroundColor: '#6AC0FF', },
};

export const getStyle = ix => styles[`slide${1 + (ix % 3)}`];
export const renderer = ({ index, key, ...props }) => {
  console.log('props', props);
  
  return (
    <div style={{ ...styles.slide, ...getStyle(index), }} key={key}>
      {`slide n°${index + 1}`}
    </div>
  );
};
