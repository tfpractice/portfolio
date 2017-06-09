import React, { Component, } from 'react';
import * as d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { FadeIn, } from 'animate-components';
import { Polygon, } from 'endogenesis';
import * as endo from 'endogenesis';
const { polygon, range, setNumSides, center, vertices, tickPoints, } = Polygon;
const mygons = range(20).map(i => setNumSides(6)(polygon(i, i, 10)));

const style = {
  width: '100%',
  height: '100%',
};
const xBox = data => box => d3.scaleLinear()
  .domain(d3.extent(data, g => g.x))
  .range([ box.width * 0.1, box.width * 0.9, ]);

const yBox = data => box => d3.scaleLinear()
  .domain(d3.extent(data, g => g.y))
  .range([ box.height * 0.1, box.height * 0.9, ]);

const rBox = data => box => d3.scaleLinear()
  .domain(d3.extent(data, g => g.radius))
  .range([ box.bottom / data.length, box.top / data.length, ]);

const getBox = sel => sel.node().getBoundingClientRect();

class Endo extends Component {
  componentDidMount() {
    const endoBox = getBox(d3.select('.endovis'));
    
    d3
      .select('.visBox')
      .select('.endovis')
      .selectAll('.polygon')
      .data(mygons)
      .append('circle')
      .attr('cx', d => xBox(mygons)(endoBox)(d.x))
      .attr('cy', d => yBox(mygons)(endoBox)(d.y))
      .attr('r', d => rBox(mygons)(endoBox)(d.radius))
      .attr('stroke', '#f0f')
      .attr('fill', 'none');
    
    const polyLine = (p, idx) => {
      const localBox = d3.select(`#vis${idx}`);
      const localD = tickPoints(p)(3).reduce((p, n, i) =>
        (i && (i % 3 === 0)) ? p.concat(center(p), n) : p.concat(n), vertices(p));
      
      return d3.line()
        .x(d => xBox(localD)(getBox(localBox))(d.x))
        .y(d => xBox(localD)(getBox(localBox))(d.y))(localD);
    };
    
    d3
      .selectAll('.disBox')
      .selectAll('.displayed')
      .data(mygons)
      .attr('d', polyLine)
      .attr('stroke', '#0f0')
      .attr('stroke-width', '0.5')
      .attr('fill', 'none');
  }
  
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={11} className="visBox">
          <svg className="endovis" style={style}>
            {mygons.map((p, i) => (
              <g className="polygon" key={i} />)
            )}
          </svg>
        </Grid>
        <Grid item xs={11}>
          <Grid container justify="center" align="flex-start" className="tickBox">
            {mygons.map((p, i) => (
              <Grid item xs={1} className="disBox" id={`vis${i}`} key={i}>
                <svg className="disVis">
                  <path className="displayed" />
                </svg>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={11}>
          <Card raised>
            <CardHeader title="FUCKINPOLYGONS" />
            
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default (Endo);
