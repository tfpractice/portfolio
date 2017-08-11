import * as d3 from 'd3';
import * as Polygon from 'endogenesis';

const {
  polygon,
  range,
  setNumSides,

  vertices,
  surroundTix,

  tesselate,

  path,

  setX,
  setY,
  setRadius,
} = Polygon;

export const colorScale = data =>
  d3.scaleLinear().domain(d3.extent(data, g => g.x)).range([ '#f0f', '#0f0' ]);

const polyScale = data =>
  d3.scaleLinear().domain([ 0, data.length - 1 ]).range([ '#000', '#fff' ]);

export const polyGrid = count => sides =>
  range(count).map(i => polygon(i, i, 10, 0, sides));

export const xBox = data => box =>
  d3
    .scaleLinear()
    .domain(d3.extent(data, g => g.x))
    .range([ box.width * 0.1, box.width * 0.9 ]);

export const yBox = data => box =>
  d3
    .scaleLinear()
    .domain(d3.extent(data, g => g.y))
    .range([ box.height * 0.9, box.height * 0.1 ]);

export const rBox = data => box =>
  d3
    .scaleLinear()
    .domain(d3.extent(data, g => g.radius))
    .range([ 0, box.height / data.length ]);

export const getBox = sel => d3.select(sel).node().getBoundingClientRect();

export const lineFunc = sel => data =>
  d3
    .line()
    .x(d => yBox(data)(getBox(sel))(d.x))
    .y(d => yBox(data)(getBox(sel))(d.y))(data);

export const landLineF = sel => data => d3.line().x(d => d.x).y(d => d.y)(data);

export const polyLine = selector => (p, idx) => lineFunc(selector)(path(p));

export const landingLine = selector => (p, idx) =>
  landLineF(selector)(surroundTix(7)(path(p)));

export const tessGons = (links) => {
  const baseGon = setNumSides(links.length * 2)(setRadius(70)());
  const gons = [ baseGon ].concat(tesselate(baseGon));
  const allV = gons.map(vertices).reduce((a, b) => a.concat(b), []);
  const xScale = xBox(allV)(getBox('#tess'));
  const yScale = yBox(allV)(getBox('#tess'));

  const scaleGon = g =>
    [ setX(xScale(g.x)), setY(yScale(g.y)) ].reduce((pl, fn) => fn(pl), g);
  const scaledGons = gons.map(scaleGon);

  return d3
    .select('#tess')
    .append('svg')
    .classed('myTess', true)
    .attr('width', '100%')
    .attr('height', '100%')
    .style('background-color', 'rgba(200,0,200,0.2)')
    .style('overflow', 'visible')
    .selectAll('path')
    .data(scaledGons, (g, i) => g)
    .enter()
    .append('path')
    .attr('x', d => d.x)
    .attr('y', d => d.y)
    .attr('id', (d, i) => `tessPath${i}`)
    .attr('d', (d, i) => landingLine(`#tessPath${i}`)(d))
    .attr('stroke', (d, i) => polyScale(scaledGons)(i))
    .attr('stroke-width', '0.5')
    .attr('fill', (d, i) => polyScale(scaledGons)(i));
};

export const createImage = links =>
  d3
    .select('#landingGrid')
    .append('svg')
    .classed('myHex', true)
    .selectAll('a')
    .data(links)
    .enter()
    .append('a')
    .attr('href', d => `/${d}`)
    .selectAll('path')
    .data(
      tesselate(setNumSides(links.length)(setRadius(1)())).concat(
        setNumSides(links.length)(setRadius(1)())
      ),
      (g, i) => g
    )
    .enter()
    .append('g')
    .append('path')
    .attr('id', (d, i) => `linkPath${i}`)
    .attr('d', (d, i) => polyLine('.myHex')(d))
    .attr('stroke', '#0f0')
    .attr('stroke-width', '0.5')
    .attr('fill', 'none');

export const selectLinks = links =>
  d3
    .select('#landingGrid')
    .selectAll('a')
    .data(links)
    .data(tesselate(setNumSides(links.length)()))
    .append('svg')
    .attr('id', (d, i) => `linkSVG${i}`)
    .append('path')
    .attr('id', (d, i) => `linkPath${i}`)
    .attr('d', (d, i) => polyLine(`#linkSVG${i}`)(d))
    .attr('stroke', '#0f0')
    .attr('stroke-width', '0.5')
    .attr('fill', 'none');

export const showPolys = data =>
  d3
    .selectAll('.disBox')
    .selectAll('.displayed')
    .data(data)
    .attr('d', (p, i) => polyLine(`vis#${i}`)(p))
    .attr('stroke', '#0f0')
    .attr('stroke-width', '0.5')
    .attr('fill', 'none');

export const linkGons = links =>
  d3
    .select('#landingGrid')
    .selectAll('a')
    .data(links)
    .data(polyGrid(links.length)(6))
    .append('svg')
    .attr('id', (d, i) => `linkSVG${i}`)
    .append('path')
    .attr('id', (d, i) => `linkPath${i}`)
    .attr('d', (d, i) => polyLine(`#linkSVG${i}`)(d))
    .attr('stroke', '#0f0')
    .attr('stroke-width', '0.5')
    .attr('fill', 'none');

export const showCircles = data =>
  d3
    .select('.visBox')
    .select('.endovis')
    .selectAll('.polygon')
    .data(data)
    .append('circle')
    .attr('cx', (d, i) => `${5 * i}%`)
    .attr('cy', (d, i) => `${5 * i}%`)
    .attr('r', d => '5%')
    .attr('stroke', '#f0f')
    .attr('fill', 'none');
