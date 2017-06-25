import * as d3 from 'd3';
import * as Polygon from 'endogenesis';

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

  const hexVG = d3.selectAll(`.${classes.hexBox}`)
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)
    .selectAll(`.${classes.hexGroup}`)
    .data([ viewGon, ])
    .append('g')
    .classed(classes.hexGroup, true)
    .append('path')
    .classed(classes.path, true)
    .attr('d', pathLine)
    .attr('stroke', 'none');

  // console.log('hexVG.node()', hexVG.node());
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
function pathLength(d, i, e) {
  // console.log('d,i,e', d, i, e);
  const len = d3.select(this).node().getTotalLength();

  console.log('len', len);
}
function dashArray() {
  const len = d3.select(this).node().getTotalLength();

  return `${len} ${len}`;
}
function pathOffset() {
  const len = d3.select(this).node().getTotalLength();

  return len;
}
export const viewTess = classes => (children) => {
  const viewGon = setNumSides(6)();
  const gons = (tesselate(viewGon));
  const allV = gons.map(vertices);
  const vx = radius(viewGon) * (-3);
  const vy = radius(viewGon) * (-3);
  const vw = radius(viewGon) * 4 * 3;
  const vh = radius(viewGon) * 4 * 3;

  const cont = `.${classes.wrapper}`;

  const t750 = d3.transition()
    .duration(750)
    .ease(d3.easeLinear);
  
  const tessBox = d3.selectAll(cont)
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)
    .selectAll('g')
    .classed(classes.group, true)

    .selectAll(`.${classes.path}`)
    .data(gons.slice(1))
    .attr('d', tessLine)
    .attr('stroke', 'none')
    .on('mouseover', fillPink)
    .on('mouseout', fillBlack);
    
  const paths = d3.selectAll(`.${classes.path}`);

  paths
    .attr('stroke', 'steelblue')
    .attr('stroke-width', '2')
    .attr('stroke-dasharray', dashArray)
    .attr('stroke-dashoffset', pathOffset);

  // .transition(t750)
    
  // .attr('stroke-dashoffset', 0);
  paths.on('mouseenter', function(a, b, c) {
    // console.log('title', this);
    console.log('a,b,c', a, b, c);
    d3.select(this)
      .transition(t750)
      .attr('stroke', '#0f0')

      .attr('stroke-dashoffset', pathOffset);
  });

  // const totalLength = path.node().getTotalLength();
  //
  // path
  //   .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
  //   .attr('stroke-dashoffset', totalLength)
  // .transition()
  // .duration(2000)
  // .ease('linear')
  // .attr('stroke-dashoffset', 0);
  //
  // svg.on('click', () => {
  //   path
  //     .transition()
  //     .duration(2000)
  //     .ease('linear')
  //     .attr('stroke-dashoffset', totalLength);
  // });
    
  const groupSelect = d3.select(`.${classes.group}`);
  const txt = d3.selectAll(`.${classes.text}`);

  // console.log('groupSelect', groupSelect);
  txt.style('color', 'green') // make the body green
    .transition(t750)
    .style('color', 'red'); // then transition to red
      
  txt.attr('x', `${vx}`)
    .attr('y', `${vy}`);
};
export const animatePath = (classes) => {
  const w = 700;
  const h = 300;

  const svg = d3.select('#drawPath')
    .append('svg')
    .attr('width', w)
    .attr('height', h)
    .attr('id', 'visualization')
    .attr('xmlns', 'http://www.w3.org/2000/svg');

  const data = d3.range(11).map(() => Math.random() * 10);
  const x = d3.scale.linear().domain([ 0, 10, ]).range([ 0, 700, ]);
  const y = d3.scale.linear().domain([ 0, 10, ]).range([ 10, 290, ]);
  const line = d3.svg.line()
    .interpolate('cardinal')
    .x((d, i) => x(i))
    .y(d => y(d));

  const path = svg.append('path')
    .attr('d', line(data))
    .attr('stroke', 'steelblue')
    .attr('stroke-width', '2')
    .attr('fill', 'none');

  const totalLength = path.node().getTotalLength();

  path
    .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
    .attr('stroke-dashoffset', totalLength)
    .transition()
    .duration(2000)
    .ease('linear')
    .attr('stroke-dashoffset', 0);

  svg.on('click', () => {
    path
      .transition()
      .duration(2000)
      .ease('linear')
      .attr('stroke-dashoffset', totalLength);
  });
};
export const showText = (classes) => {
  // const t750 = d3.transition()
  //   .duration(750)
  //   .ease(d3.easeLinear);
  //
  // const groupSelect = d3.select(`.${classes.group}`);
  // const txt = d3.selectAll(`.${classes.text}`);
  //
  // console.log('groupSelect', groupSelect);
  // txt.style('color', 'green') // make the body green
  //   .transition(t750)
  //   .style('color', 'red'); // then transition to red
  //
  // txt.attr('x', `${vx}`);
  //
  // // txt.attr('x',)

  console.log('txt');
};
