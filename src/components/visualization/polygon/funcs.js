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

// <img src='data:image/svg+xml;utf8,<svg ... > ... </svg>'>

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
export const hexLine = (p, idx) => {
  const centralD = centralTicks(7)(p);
  const surData = surroundTix(7)(p);
  const lData = idx === 0 ? centralD : surData;
 
  return rawLine(lData);
};
export const tessLine = (p, idx) => {
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
  const centralD = centralTicks(7)(p); const surData = surroundTix(7)(p);
  const lData = idx === 0 ? centralD : surData;
 
  return rawLine(surData);
};

export const viewHex = classes => (links) => {
  const viewGon = setNumSides(6)();
  const vx = -1 * radius(viewGon);
  const vy = -1 * radius(viewGon);
  const vw = 2 * radius(viewGon);
  const vh = 2 * radius(viewGon);

  const hexParent = d3.select(`.${classes.hexBox}`).node().parentNode;

  const parentSelect = d3.select(hexParent);

  console.log('parentSelect', parentSelect);
  d3.selectAll(`.${classes.hexBox}`)
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)
    .selectAll(`.${classes.hexGroup}`)
    .data([ viewGon, ])
    .append('g')
    .classed(classes.hexGroup, true)
    .append('path')
    .classed(classes.path, true)
    .attr('d', pathLine)
    .attr('stroke', 'none');

  //
  // console.log('d3.select(`.${classes.hexBox}`).node()', d3.select(`.${classes.hexBox}`).html());
  //
  // parentSelect.append('img')
  //   .attr('src', () => {
  //     const sel = d3.select(`.${classes.hexBox}`);
  //     const serial = new XMLSerializer().serializeToString(sel.node());
  //
  //     console.log('serial', serial);
  //     const srcString = `data:image/svg+xml;utf8,${serial}`;
  //
  //     // console.log('sel', sel);
  //     // console.log('srcString', srcString);
  //     return srcString;
  //   }
  //   );
};

export const appendHex = classes => (links) => {
  const viewGon = setNumSides(6)();
  const vx = -1 * radius(viewGon);
  const vy = -1 * radius(viewGon);
  const vw = 2 * radius(viewGon);
  const vh = 2 * radius(viewGon);

  return d3.selectAll(`.${classes.hexWrapper}`)
    .append('svg')
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)

    // .selectAll(`.${classes.hexGroup}`)
    .selectAll(`.${classes.hexGroup}`)
    .data([ viewGon, ])
    .append('g')
    .classed(classes.hexGroup, true)
    .append('path')
    .classed(classes.path, true)
    .attr('d', pathLine)
    .attr('stroke', 'none');
};

function fillPink(d, i, nodes) {
  d3.select(this).attr('fill', '#f0f');
}
function fillBlack() {
  d3.select(this).attr('fill', '#000');
}

export const viewTess = classes => (children) => {
  const viewGon = setNumSides(6)();
  const gons = (tesselate(viewGon));
  const allV = gons.map(vertices);
  const vx = radius(viewGon) * (-3);
  const vy = radius(viewGon) * (-3);
  const vw = radius(viewGon) * 4 * 3;
  const vh = radius(viewGon) * 4 * 3;

  const cont = `.${classes.container}`;

  return d3.selectAll(cont)
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)
    .selectAll('g')
    .classed(classes.tessGroup, true)

    // .attr('transform', `rotate(${60})`)
    .selectAll(`.${classes.tessPath}`)
    .data(gons.slice(1))
    .attr('d', tessLine)
    .attr('stroke', 'none')
    .on('mouseover', fillPink)
    .on('mouseout', fillBlack);
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
