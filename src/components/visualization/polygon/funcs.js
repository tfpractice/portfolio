import * as d3 from 'd3';
import * as Polygon from 'endogenesis';

const {
  setNumSides, apoMag, apoFactor, centralTicks, tickPath, inscribed, numSides,
  center, vertices, tessVector, surroundTix, tesselate, rotation, radius, setX, setY, nthTess, setRadius,
  exoRadius,
  exoFactor,
  lacunaPathN,
  lacunaTicks,
  tessVex,
  setRotation,
  baseAngle,
  exoVector,
  nthExo,
  exoVex,
  exoGons,
  exoTess,
  exoTesses,
  lacunaPath,
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
  const lData = (idx === 0 || idx % 7 === 0) ? centralD : surData;
 
  return rawLine(lData);
};

export const backLine = (p, idx) => {
  const centralD = centralTicks(7)(p);
  const surData = surroundTix(7)(p);
  const lData = (idx === 0 || idx % 7 === 0) ? centralD : surData;

  // console.log('lacunaPathN(7)(p)(idx)', lacunaPathN(7)(p)(idx));

  console.log('lacunaPath(7)(p))', lacunaPath(7)(p));
  console.log('lData', lData);
  return rawLine(lData.concat(lacunaPath(7)(p).slice(idx, idx + 6)));
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
  const len = d3.select(this).node().getTotalLength();
}
function dashArray() {
  const len = d3.select(this).node().getTotalLength();

  return `${len} ${len}`;
}
function pathOffset() {
  const len = d3.select(this).node().getTotalLength();

  return len;
}
const t750 = d3.transition()
  .duration(1000 * 2)
  .ease(d3.easeLinear);
const t1000 = d3.transition()
  .duration((1000 * 2) + 250)
  .ease(d3.easeLinear);

export const viewTess = classes => (children) => {
  const viewGon = setNumSides(6)();
  const gons = (tesselate(viewGon));
  const allV = gons.map(vertices);
  const vx = radius(viewGon) * (-3);
  const vy = radius(viewGon) * (-3);
  const vw = radius(viewGon) * 4 * 3;
  const vh = radius(viewGon) * 4 * 3;

  const cont = `.${classes.wrapper}`;
  
  const tessBox = d3.selectAll(cont)
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)
    .selectAll(`.${classes.group}`)
    .attr('transform', 'rotate(-60)')

    .selectAll(`.${classes.path}`)
    .data(gons.slice(1).reverse())

    .attr('d', tessLine);
};

export const appendText = (classes) => {
  d3.selectAll('.tessText')
    .attr('transform', (d, i,) => `translate(0,${i * 0.6}) scale(.04)`)
    .attr('x', 1000);
  const animMain = d3.selectAll(`.${classes.mainText}`)
    .transition(t750)
    .attr('x', '0');
  const animSub = d3.selectAll(`.${classes.subText}`)
    .transition(t1000)
    .attr('x', '0')

  //
  // .attr('stroke-dasharray', (d, i, els) => {
  //   console.log('d,i,els', d, i, els);
  //   const plen = els[i].getTotalLength();
  //
  //   console.log('plen', plen);
  //   return `${plen} ${plen}`;
  // })
  // .attr('stroke-dashoffset', (d, i, els) => {
  //   console.log('d,i,els', d, i, els);
  //   const plen = els[i].getTotalLength();
  //
  //   return plen;
  //
  // })
  //
  // .transition(t1000)

    .attr('stroke-dashoffset', 0);
};

export const viewBackDrop = (classes) => {
  const viewGon = setNumSides(6)();
  const gons = (exoTesses(viewGon));
  const vx = exoRadius(viewGon) * (-3);
  const vy = exoRadius(viewGon) * (-3);
  const vw = exoRadius(viewGon) * (3 * 1.2);
  const vh = exoRadius(viewGon) * (3 * 1.2);

  // console.log('Polygon', Polygon);
  // console.log('vx,vy,vw,vh', vx, vy, vw, vh);
  const cont = `.${classes.wrapper}`;
  
  const tessBox = d3.select('#root')
    .insert('svg')
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)
    .attr('width', '100%')
    .attr('height', '100%')
    .style('left', '0')
    .style('top', '0')
    .style('position', 'fixed')
    .attr('z-index', '-10')
    .attr('fill', 'rgba(255,0,255,0.05)')
    .selectAll(`.${classes.path}`)
    .data(gons)
    .enter()
    .append('path')
    .classed(classes.path, true)
    .attr('d', hexLine);

  const shownew = () =>
    d3.selectAll(cont)
      .attr('viewBox', `${vx},${vy},${vw},${vh}`)

      .selectAll(`.${classes.group}`)

      // .data([ viewGon, ...exoGons(viewGon), ])

      // .enter()
      .selectAll(`.${classes.path}`)
      .data(gons)
      .enter()
      .append('path')
      .classed(classes.path, true)

      // .on('mouseover', (d, i) => console.log('i', i))
      .attr('fill', (d, i) => (!i || i % 7 === 0) ? '#f0f' : '#000')
      .attr('d', backLine);
      
  // shownew();
};
