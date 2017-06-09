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
  
class Endo extends Component {
  componentDidMount() {
    const vSelect = d3.select('.endovis');
    const getBox = sel => sel.node().getBoundingClientRect();
    const endoBox = getBox(vSelect);
    const vBox = vSelect.node().getBoundingClientRect();

    const xScale = d3.scaleLinear()
    .domain(d3.extent(mygons, g => g.x))
    .range([ vBox.width * 0.1, vBox.width * 0.9, ]);
  
    const yScale = d3.scaleLinear()
    .domain(d3.extent(mygons, g => g.y))
    .range([ vBox.height * 0.1, vBox.height * 0.9, ]);
    
    const rScale = d3.scaleLinear()
    .domain(d3.extent(mygons, g => g.radius))
    .range([ vBox.bottom / mygons.length, vBox.top / mygons.length, ]);
    
    const visBox = d3
    .select('.visbox')
    .select('.endovis')
    .selectAll('.polygon')
    .data(mygons, (d, i) => {
      const data = d;

      return i;
    })
    .insert('circle')
    .attr('cx', d => xBox(mygons)(endoBox)(d.x))
    .attr('cy', d => yBox(mygons)(endoBox)(d.y))
    .attr('r', d => rBox(mygons)(endoBox)(d.radius))
    .attr('stroke', '#f0f')
    .attr('fill', 'none');
    
    const polyLine = (p, idx) => {
      const wCent = tickPoints(p)(3).reduce((p, n, i) => {
        console.log('p,n,i', p, n, i);
        
        return (i && (i % 3 === 0)) ? p.concat(center(p), n) : p.concat(n);
      }, []);
      const localD = vertices(p).concat(wCent);

      return d3.line()
        .x(d => xBox([{ x: 0, y: 0, }, p, ])(getBox(d3.select(`#vis${idx}`)))(d.x))
        .y(d => xBox([ p, ])(getBox(d3.select(`#vis${idx}`)))(d.y))(localD);
    };

    d3

      // .select('.disBox')
      // .select('.disVis')
      .selectAll('.disVis')
      .selectAll('.displayed')
      .data(mygons)

      // .append('path')
      .attr('d', polyLine)
      .attr('stroke', '#0f0')
      .attr('fill', 'none');
  }
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={11} className="visbox">
          <svg className="endovis" style={style}>
            {mygons.map((p, i) => (
              <g className="polygon" key={i} />)
            )}
            {mygons.map((p, i) => (
              <g className="displayed" key={i} />)
            )}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </svg>
        </Grid>
        {mygons.map((p, i) => (
          <Grid item xs={2} className="disBox">
            <svg className="disVis" id={`vis${i}`} style={style}>
              {/* {mygons.map((p, i) => ( */}
              <path className="displayed" key={i} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </svg>
          </Grid>
        )
        )}
        <Grid item xs={11}>
          <Card raised>
            <CardHeader title="Welcome to My site" />
            <CardContent>
              <Text secondary type="body1">
                {'FUCKINPOLYGONS'}

              </Text>

            </CardContent>
            <CardActions>
              <Button compact>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default (Endo);
