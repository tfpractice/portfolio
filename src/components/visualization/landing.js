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
  setX,
  setY,
  setRadius,
} = Polygon;

const tDom = poly => 2 * radius(poly) + apoMag(poly) / 2;
const catBin = (a = [], b = []) => [ ...a, ...b ];
const cVals = v => [ v.x, v.y ];
const tVals = poly =>
  tesselate(poly)
    .map(vertices)
    .reduce(catBin, [])
    .map(cVals)
    .reduce(catBin, []);

export const tessScale = base => box =>
  d3
    .scaleLinear()
    .domain([ -tDom(base), tDom(base) ])
    .range([ box.height * 0.1, box.height * 0.9 ]);

export const getBox = sel => d3.select(sel).node().getBoundingClientRect();

export const rawLine = sel => data => d3.line().x(d => d.x).y(d => d.y)(data);

export const pathLine = selector => (p, idx) => {
  const centralD = centralTicks(7)(p);
  const surData = surroundTix(7)(p);

  const lData = idx === 0 ? centralD : surData;

  return rawLine(selector)(lData);
};

export const tessGons = (links) => {
  const tessBox = getBox('#header');
  const tessheight =
    tessBox.height / (7 * Math.cos(Math.PI / (links.length * 2)));
  const baseGon = setNumSides(links.length * 2)(setRadius(tessheight)());
  const localScale = tessScale(baseGon)(tessBox);
  const gons = [ baseGon ].concat(tesselate(baseGon));
  const modGon = g =>
    [ setX(localScale(g.x)), setY(localScale(g.y)) ].reduce(
      (pl, fn) => fn(pl),
      g
    );
  const mGons = gons.map(modGon);

  return d3
    .select('#tess')
    .append('svg')
    .classed('myTess', true)
    .attr('width', '100%')
    .attr('height', '100%')
    .style('background-color', 'rgba(200,0,200,0.2)')
    .style('overflow', 'visible')
    .selectAll('path')
    .data(mGons)
    .enter()
    .append('path')
    .attr('id', (d, i) => `tessPath${i}`)
    .attr('d', pathLine('#tessPath'))
    .attr('stroke', 'none');
};
