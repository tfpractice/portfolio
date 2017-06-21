import * as d3 from 'd3';
import * as Polygon from 'endogenesis';
import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import { createStyleSheet, withStyles, } from 'material-ui/styles';

const {
  setNumSides, apoMag, apoFactor, centralTicks, center, vertices, surroundTix,
  tesselate, radius, setX, setY, setRadius,
} = Polygon;

const tDom = poly => (2 * radius(poly)) + (apoMag(poly) / 2);
const catBin = (a = [], b = []) => [ ...a, ...b, ];
const cVals = v => [ v.x, v.y, ];
const tVals = poly => tesselate(poly).map(vertices).reduce(catBin, []).map(cVals).reduce(catBin, []);

export const tessScale = base => box => d3.scaleLinear()
  .domain([ -tDom(base), tDom(base), ])
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

export const appendHex = classes => (links) => {
  const sel = `.${classes.container}`;
  const tessBox = getBox(sel);
  const tessheight = (tessBox.height) / (7 * Math.cos(Math.PI / (6)));
  const baseGon = setNumSides(6)(setRadius(tessheight)());
  const localScale = tessScale(baseGon)(tessBox);
  
  const gons = [ baseGon, ].concat(tesselate(baseGon));
  const modGon = g =>
    [ setX(localScale(g.x)), setY(localScale(g.y)), ]
      .reduce((pl, fn) => fn(pl), g);
  const mGons = gons.map(modGon);
  
  return d3.select(sel)

    // .append('svg')
    // .classed(classes.path, true)
    // .attr('width', '100%')
    // .attr('height', '100%')
    .style('overflow', 'visible')
    .selectAll('path')
    .data(mGons)
    .enter()
    .append('path')

    .attr('d', pathLine)
    .attr('stroke', 'none');
};

const styleSheet = createStyleSheet('HexSVG', () => ({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
  path: {
    width: '100%',
    height: '100%',
  },
}));

class Hex extends Component {
  componentDidMount() {
    const { classes, } = this.props;

    console.log('classes', classes);
    appendHex(classes)();
  }
  render() {
    const { classes, } = this.props;

    return <svg className={classes.container} />;

    //
    // return (
    //   <Grid container direction="column" align="center">
    //     <Grid item xs={12} >
    //       <svg className={classes.container} />
    //       {/* <path className={classes.path}/>
    //       </svg> */}
    //     </Grid>
    //   </Grid>
    //
    // );
  }
}
export default withStyles(styleSheet)(Hex);
