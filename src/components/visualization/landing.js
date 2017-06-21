import * as d3 from 'd3';
import * as Polygon from 'endogenesis';

const {
  polygon, range, setNumSides, apoMag, apoFactor, centralTicks, center, vertices, surroundTix, triangulate, tesselate,
  closedInterval, path, nthTick, radius, inscribed, tickPath, setX, setY, setRadius, tickPathInt, tickPoints,
} = Polygon;

const tDom = poly => ((1.5 * apoMag(poly)) + radius(poly));

// const tDom = poly => ((radius(poly)) * apoFactor(poly) * apoFactor(poly));
const tRange = poly => tesselate(poly).map(vertices).map(v => v.x);

export const tessScale = base => box => d3.scaleLinear()
  .domain([ -tDom(base), tDom(base), ])
  .range([ box.height * 0.1, box.height * 0.9, ]);

export const colorScale = data => d3.scaleLinear()
  .domain(d3.extent(data, g => g.x))
  .range([ '#f0f', '#0f0', ]);
  
const ixScale = data => d3.scaleLinear()
  .domain([ 0, data.length - 1, ])
  .range([ '#000', '#fff', ]);

export const xBox = data => box => d3.scaleLinear()
  .domain(d3.extent(data, g => g.x))
  .range([ box.width * 0.1, box.width * 0.9, ]);

export const yBox = data => box => d3.scaleLinear()
  .domain(d3.extent(data, g => g.y))
  .range([ box.height * 0.1, box.height * 0.9, ]);

export const rBox = data => box => d3.scaleLinear()
  .domain(d3.extent(data, g => g.radius))
  .range([ 0, box.height / data.length, ]);

export const getBox = sel => d3.select(sel).node().getBoundingClientRect();

export const scaledLine = sel => data => d3.line()
  .x(d => yBox(data)(getBox(sel))(d.x))
  .y(d => yBox(data)(getBox(sel))(d.y))(data);

export const rawLine = sel => data => d3.line()
  .x(d => d.x)
  .y(d => d.y)(data);

export const pathLine = selector => (p, idx) => {
  let lSrc,
  lData;

  lSrc = vertices(inscribed(p))[Math.floor(p.numSides / 2)];
  const tickLocal = tickPathInt(3)(lSrc)(7)(p);
  const tPath = tickPath(lSrc)(7)(p);
  const triLocal = triangulate(lSrc)(tickPoints(3)(p));
  const cloLocal = closedInterval(5)(lSrc)(tickPoints(9)(p));
  const patLocal = path(p);
  const centralD = centralTicks(7)(p);

  lData = idx === 0 ? centralD : tPath;
  return rawLine(selector)(lData);
};

export const tessGons = (links) => {
  const tessBox = getBox('#header');
  const tessheight = (tessBox.height) / 6;
  const baseGon = setNumSides(links.length * 2)(setRadius(tessheight)());
  const localScale = tessScale(baseGon)(tessBox);
  const gons = [ baseGon, ].concat(tesselate(baseGon));
  const allV = gons.map(vertices).reduce((a, b) => a.concat(b), []);
  const xScale = xBox(allV)(getBox('#header'));
  const yScale = yBox(allV)(getBox('#header'));
  const rScale = rBox(gons)(getBox('#header'));
  const scaleGon = g => [ setX(xScale(g.x)), setY(yScale(g.y)), ]
    .reduce((pl, fn) => fn(pl), g);
  const modGon = g => [ setX(localScale(g.x)), setY(localScale(g.y)), ]
    .reduce((pl, fn) => fn(pl), g);
  const scaledGons = gons.map(scaleGon);
  const mGons = gons.map(modGon);

  console.log('allV', allV);
  console.log('gons', gons);
  console.log('scaledGons', scaledGons);
  console.log('mGons', mGons);
  console.log('tessBox.height', tessBox.height);
  console.log('tessBox', tessBox);
  console.log('tessheight', tessheight);
  return d3.select('#tess')
    .append('svg')
    .classed('myTess', true)
    .attr('width', '100%')
    .attr('height', '100%')
    .style('background-color', 'rgba(200,0,200,0.2)')
    .style('overflow', 'visible')
    .selectAll('path')
    .data(mGons, (g, i) => {
      const a = 0;

      console.log('g', g);
      return g;
    })
    .enter()
    .append('path')
    .attr('x', d => (d.x))
    .attr('y', d => (d.y))
    .attr('id', (d, i) => `tessPath${i}`)
    .attr('d', pathLine('#tessPath'))

    // .attr('transform', (d, i) => `translate(${tessBox.width / 2},${tessBox.height / 2})`)
    .attr('stroke', (d, i) => ixScale(scaledGons)(i))
    .attr('stroke-width', '0.5')
    .attr('fill', (d, i) => ixScale(scaledGons)(i));
};
