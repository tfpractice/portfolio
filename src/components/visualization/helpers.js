import * as d3 from 'd3';
import * as Polygon from 'endogenesis';
const {
  polygon, range, setNumSides, centralTicks, center, vertices, surroundTix, triangulate, tesselate,
  closedInterval, path, nthTick, tickPath, setRadius, tickPathInt, tickPoints,
} = Polygon;

export const polyGrid = count => sides =>
  range(count).map(i => polygon(i, i, 10, 0, sides));
export const xBox = data => box => d3.scaleLinear()
  .domain(d3.extent(data, g => g.x))
  .range([ box.width * 0.1, box.width * 0.9, ]);
export const yBox = data => box => d3.scaleLinear()
  .domain(d3.extent(data, g => g.y))
  .range([ box.height * 0.1, box.height * 0.9, ]);
export const rBox = data => box => d3.scaleLinear()
  .domain(d3.extent(data, g => g.radius))
  .range([ box.height * 0.1, box.height * 0.9, ]);
export const getBox = sel => d3.select(sel).node().getBoundingClientRect();
export const lineFunc = sel => data => d3.line()
  .x(d => yBox(data)(getBox(sel))(d.x))
  .y(d => yBox(data)(getBox(sel))(d.y))(data);

export const polyLine = selector => (p, idx) => {
  let lSrc,
  lData;
  
  lSrc = nthTick(8)(p)(4);
  const tickLocal = tickPathInt(3)(lSrc)(7)(p);
  const triLocal = triangulate(lSrc)(tickPoints(9)(p));
  const cloLocal = closedInterval(5)(lSrc)(tickPoints(9)(p));
  const patLocal = path(p);
  
  // console.log('p', p);
  lData = centralTicks(3)(setRadius(1)(p));
  return lineFunc(selector)(lData);
};

const tessPath = links => p =>
  setRadius(
    xBox(
      tesselate(setNumSides(links.length)(setRadius(10)())).map(vertices)
    )(
      getBox('.myHex')
    )(10)
  
  )(p);

export const createImage = links =>
  d3.select('#landingGrid')
    .append('svg')
    
    .classed('myHex', true)
    .selectAll('a')
    .data(links)
    .enter()
    .append('a')
    .attr('href', d => `/${d}`)
    .selectAll('path')
    .data(tesselate(setNumSides(links.length)(setRadius(1)())), (g, i) => {
      const a = 0;// console.log('g', g);

      return g;
    })
    .enter()
    .append('g')

    .append('path')
    .attr('id', (d, i) => `linkPath${i}`)
    .attr('d', (d, i) => {
      const a = 0;

      // console.log('POLYLINE', d);

      return polyLine('.myHex')(d);
    })
    .attr('stroke', '#0f0')
    .attr('stroke-width', '0.5')
    .attr('fill', 'none')
;

export const selectLinks = links =>
  d3.select('#landingGrid')

    .selectAll('a')
    .data(links)
    .data(tesselate(setNumSides(links.length)()))
    .append('svg')
    .attr('id', (d, i) => {
      const a = 0;

      // console.log('d', d);
      // console.log('d3.select(this).node()', d3.select(this).node());

      return `linkSVG${i}`;
    })

    .append('path')
    .attr('id', (d, i) => `linkPath${i}`)
    .attr('d', (d, i) => polyLine(`#linkSVG${i}`)(d))
    .attr('stroke', '#0f0')
    .attr('stroke-width', '0.5')
    .attr('fill', 'none');

export const showCircles = (data) => {
  const endoBox = getBox('.endovis');
  
  return d3
    .select('.visBox')
    .select('.endovis')
    .selectAll('.polygon')
    .data(data)
    .append('circle')
    .attr('cx', (d, i) => {
      const sx = xBox(data)(endoBox)(d.x);
      
      return `${5 * i}%`;
    })
    .attr('cy', (d, i) => {
      const rs = yBox(data)(endoBox)(d.y);
      
      return `${5 * i}%`;
    })
    .attr('r', (d) => {
      const rs = rBox(data)(endoBox)(d.radius);
      
      return '5%';
    })
    .attr('stroke', '#f0f')
    .attr('fill', 'none');
};

export const showPolys = data => d3
  .selectAll('.disBox')
  .selectAll('.displayed')
  .data(data)
  .attr('d', (p, i) => polyLine(`vis#${i}`)(p))
  .attr('stroke', '#0f0')
  .attr('stroke-width', '0.5')
  .attr('fill', 'none');

export const linkGons = links => d3
  .select('#landingGrid')
  .selectAll('a')
  .data(links)
  .data(polyGrid(links.length)(6))

  .append('svg')
  .attr('id', (d, i) => {
    const a = 0;

    // console.log('d', d);
    // console.log('d3.select(this).node()', d3.select(this).node());

    return `linkSVG${i}`;
  })
  .append('path')
  .attr('id', (d, i) => `linkPath${i}`)
  .attr('d', (d, i) => polyLine(`#linkSVG${i}`)(d))
  .attr('stroke', '#0f0')
  .attr('stroke-width', '0.5')
  .attr('fill', 'none');

export const linkGons3 = links => d3
  .select('#landingGrid')
  .selectAll('a')
  .data(links)

  .data([ polygon(1, 1, 10, 0, links.length), ], (d, i) => {
    console.log('polygon', d, i);
    return tesselate(d);
  }).enter()
  .append('svg')
  .attr('id', function (d, i) {
    console.log('d', d);
    console.log('d3.select(this).node()', d3.select(this).node());
    return `linkSVG${i}`;
  })
  .append('path')
  .attr('id', (d, i) => `linkPath${i}`)
  .attr('d', (d, i) => polyLine(`#linkSVG${i}`)(d))
  .attr('stroke', '#0f0')
  .attr('stroke-width', '0.5')
  .attr('fill', 'none');
export const linkGons2 = links => d3
  .select('#landingGrid')
  .select('#trefoil')
  .select('#linkBox')
  .data(links)
  .data([ polygon(1, 1, 10, 0, links.length), ], (d, i) => {
    console.log('polygon', d, i);
    return vertices(d);
  })

  .select('a')
  .data(vertices(polygon(1, 1, 10, 0, links.length)), (d, i) => {
    console.log('vertices', d, i);
    return d;
  })

  .attr('id', (d, i) => {
    console.log('a tag', d, i);
    return `link2Path${i}`;
  })
  .attr('href', (d, i) => {
    console.log('d,i', d, i);
    return links[i];
  });
