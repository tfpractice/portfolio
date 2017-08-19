import * as d3 from 'd3';
import * as Polygon from 'endogenesis';

const {
  setNumSides,
  apoMag,
  centralTicks,
  vertices,
  surroundTix,
  tesselate,
  radius,
  closed,
  exoRadius,
  exoTesses,
} = Polygon;
const tDom = poly => 2 * radius(poly) + apoMag(poly) / 2;

export const tessScale = base => box =>
  d3
    .scaleLinear()
    .domain([ -tDom(base), tDom(base) ])
    .range([ box.height * 0.1, box.height * 0.9 ]);

export const polyScale = base => box =>
  d3
    .scaleLinear()
    .domain([ -radius(base), radius(base) ])
    .range([ box.height * 0.1, box.height * 0.9 ]);

export const getBox = sel => d3.select(sel).node().getBoundingClientRect();

export const rawLine = data => d3.line().x(d => d.x).y(d => d.y)(data);

export const pathLine = (p, idx) => {
  const centralD = centralTicks(7)(p);
  const surData = surroundTix(7)(p);
  const lData = idx === 0 ? centralD : surData;

  return rawLine(lData);
};

export const hexLine = (p, idx) => {
  const centralD = centralTicks(7)(p);
  const surData = surroundTix(7)(p);
  const lData = idx === 0 || idx % 7 === 0 ? centralD : surData;

  return rawLine(lData);
};

export const backLine = (p, idx) => {
  const centralD = centralTicks(7)(p);
  const surData = surroundTix(7)(p);
  const lData = idx === 0 || idx % 7 === 0 ? centralD : surData;

  return rawLine(lData);
};

export const tessLine = (p, idx) => {
  const centralD = centralTicks(7)(p);
  const surData = surroundTix(7)(p);

  return rawLine(surData);
};

export const vLine = (p, idx) => {
  const centralD = centralTicks(7)(p);
  const surData = surroundTix(7)(p);

  return rawLine(closed(vertices(p)));
};

export const viewHex = classes => (links) => {
  const viewGon = setNumSides(6)();
  const vx = -1 * radius(viewGon);
  const vy = -1 * radius(viewGon);
  const vw = 2 * radius(viewGon);
  const vh = 2 * radius(viewGon);
  const hexVG = d3
    .selectAll(`.${classes.hexBox}`)
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)
    .selectAll(`.${classes.hexGroup}`)
    .data([ viewGon ])
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

  return d3
    .selectAll(`.${classes.hexWrapper}`)
    .append('svg')
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)
    .selectAll(`.${classes.hexGroup}`)
    .data([ viewGon ])
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
const t750 = d3.transition().duration(1000 * 2).ease(d3.easeLinear);
const t1000 = d3.transition().duration(1000 * 2 + 250).ease(d3.easeLinear);

export const viewTess = classes => (children) => {
  const viewGon = setNumSides(6)();
  const gons = tesselate(viewGon);
  const allV = gons.map(vertices);
  const vx = radius(viewGon) * -3;
  const vy = radius(viewGon) * -3;
  const vw = radius(viewGon) * 4 * 3;
  const vh = radius(viewGon) * 4 * 3;
  const cont = `.${classes.wrapper}`;
  const groups = d3
    .selectAll(cont)
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)
    .selectAll(`.${classes.group}`)
    .attr('transform', 'rotate(-60)')
    .attr('fill', 'rgba(239,239,239,0.01)')
    .selectAll(`.${classes.pathLink}`)
    .data(gons.slice(1).reverse());

  groups.select(`.${classes.filler}`).attr('d', vLine);
  groups.select(`.${classes.path}`).attr('d', tessLine);
};

export const appendText = (classes) => {
  d3
    .selectAll('.tessText')
    .attr('transform', (d, i) => `translate(0,${i * 0.6}) scale(.04)`)
    .attr('x', 1000);
  const animMain = d3
    .selectAll(`.${classes.mainText}`)
    .transition(t750)
    .attr('x', '0');
  const animSub = d3
    .selectAll(`.${classes.subText}`)
    .transition(t1000)
    .attr('x', '0')
    .attr('stroke-dashoffset', 0);
};

export const viewBackDrop = (classes) => {
  const viewGon = setNumSides(6)();
  const gons = exoTesses(viewGon);
  const vx = exoRadius(viewGon) * -3;
  const vy = exoRadius(viewGon) * -3;
  const vw = exoRadius(viewGon) * (3 * 1.2);
  const vh = exoRadius(viewGon) * (3 * 1.2);
  const cont = `.${classes.wrapper}`;

  const tessBox = d3
    .select('#root')
    .append('svg')
    .attr('viewBox', `${vx},${vy},${vw},${vh}`)
    .attr('width', '100%')
    .attr('height', '100%')
    .style('left', '0')
    .style('background-color', 'rgba(239,239,239,1)')
    .style('top', '0')
    .style('position', 'fixed')
    .style('z-index', '-10')
    .attr('fill', 'rgba(255,0,255,0.06)')
    .append('g')
    .classed(classes.group, true)
    .attr('transform', 'scale(1)')
    .selectAll(`.${classes.path}`)
    .data(gons)
    .enter()
    .append('path')
    .classed(classes.path, true)
    .attr('d', hexLine);
  const shownew = () =>
    d3
      .selectAll(cont)
      .attr('viewBox', `${vx},${vy},${vw},${vh}`)
      .selectAll(`.${classes.group}`)
      .selectAll(`.${classes.path}`)
      .data(gons)
      .enter()
      .append('path')
      .classed(classes.path, true)
      .attr('fill', (d, i) => (!i || i % 7 === 0 ? '#f0f' : '#000'))
      .attr('d', backLine);
};
