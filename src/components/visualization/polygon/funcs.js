import * as d3 from 'd3';
import * as Polygon from 'endogenesis';
import React, { Component, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
const {
  setNumSides, apoMag, apoFactor, centralTicks, tickPath, inscribed, numSides,
  center, vertices, surroundTix, tesselate, radius, setX, setY, setRadius,
} = Polygon;
const tDom = poly => (2 * radius(poly)) + (apoMag(poly) / 2);
const pDom = poly => radius(poly);
const catBin = (a = [], b = []) => [ ...a, ...b, ];
const cVals = v => [ v.x, v.y, ];
const tVals = poly => tesselate(poly).map(vertices).reduce(catBin, []).map(cVals).reduce(catBin, []);

export const tessScale = base => box => d3.scaleLinear()
  .domain([ -tDom(base), tDom(base), ])
  .range([ box.height * 0.1, box.height * 0.9, ]);

export const polyScale = base => box => d3.scaleLinear()
  .domain([ -radius(base), radius(base), ])
  .range([ box.height * 0.1, box.height * 0.9, ]);

export const getBox = sel => d3.select(sel).node().getBoundingClientRect();

export const rawLine = data => d3.line()
  .x(d => d.x)
  .y(d => d.y)(data);

export const pathLine = (p, idx) => {
  const centralD = centralTicks(7)(p);
  const surData = surroundTix(7)(p);
 
  const lData = idx === 0 ? centralD : surData;
 
  return rawLine(lData);
};

export const tessLine = (p, idx) => {
  // const base = vertices(inscribed(p))[0];
  let pid;

  switch (idx) {
  case 1:
    pid = 3;
    break;
  case 2:
    pid = 4;
        
    break;
  default:
    pid = 1;
  }
  const base = vertices((p))[pid];

  // const centralD = tickPath(base)(6)(p);
  // const surData = tickPath(base)(6)(p);

  const centralD = centralTicks(7)(p);
  const surData = surroundTix(7)(p);
 
  const lData = idx === 0 ? centralD : surData;
 
  return rawLine(surData);
};

export const singleHex = classes => (links) => {
  const cont = `.${classes.hexBox}`;

  // const cont = '.hexBox';
  const csel = d3.select(cont).node();
  const polyBox = getBox(cont);
  const tessheight = (polyBox.height) / 4;
 
  const baseGon = setNumSides(6)(setRadius(tessheight)());
  const localScale = tessScale(baseGon)(polyBox);
  const gons = [ baseGon, ].concat(tesselate(baseGon));
  const modGon = g =>
    [ setX(localScale(g.x)), setY(localScale(g.y)), ]
      .reduce((pl, fn) => fn(pl), g);
  const mGons = gons.map(modGon);
 
  return d3.selectAll(`.${classes.hexBox}`)

    .selectAll(`.${classes.hexGroup}`)

    // .selectAll('.hexGroup')
    .data([ mGons[0], ])

    // .enter()
    .append('g')
    .classed(`.${classes.hexGroup}`, true)
    .append('path')
   
    .classed(`.${classes.path}`, true)
   
    .attr('d', pathLine)
    .attr('stroke', 'none');
};

export const appendTess = classes => (count) => {
  const cont = `.${classes.container}`;
  const tessBox = getBox(cont);
  const tessheight = (tessBox.height) / (7 * Math.cos(Math.PI / (6)));
  const baseGon = setNumSides(6)(setRadius(tessheight)());
  const localScale = tessScale(baseGon)(tessBox);
  const gons = (tesselate(baseGon));
  const modGon = g =>
    [ setX(localScale(g.x)), setY(localScale(g.y)), ]
      .reduce((pl, fn) => fn(pl), g);
  const mGons = gons.map(modGon);
  const hexes = d3.selectAll('.tHex');
  const dBox = getBox('.mainSlide').height;

  console.log('dbox', dBox);
  console.log('hexes', hexes);
  return d3.selectAll(cont)

    .selectAll('g')

    .attr('transform', `scale(${5})`)

    .classed(classes.tessGroup, true)
    .selectAll(`.${classes.path}`)
    .data(mGons)
    .enter()
    .append('path')
    .classed(classes.path, true)
    .attr('d', tessLine)

    .attr('stroke', 'none');
};

//
// export const appendHex = classes => (links) => {
//   const cont = `.${classes.container}`;
//
//   const tessBox = getBox(cont);
//   const tessheight = (tessBox.height) / (7 * Math.cos(Math.PI / (6)));
//   const baseGon = setNumSides(6)(setRadius(tessheight)());
//   const localScale = tessScale(baseGon)(tessBox);
//   const gons = [ baseGon, ].concat(tesselate(baseGon));
//   const modGon = g =>
//     [ setX(localScale(g.x)), setY(localScale(g.y)), ]
//       .reduce((pl, fn) => fn(pl), g);
//   const mGons = gons.map(modGon);
//
//   return d3.select(cont)
//
//     .selectAll(`.${classes.hexGroup}`)
//     .data(mGons)
//     .enter()
//     .append('g')
//     .classed(classes.hexGroup, true)
//     .append('path')
//     .classed(classes.hexPath, true)
//     .attr('d', pathLine)
//     .attr('stroke', 'none');
// };
