import React, { Component, } from 'react';
import * as d3 from 'd3';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { FadeIn, } from 'animate-components';
import { Polygon, } from 'endogenesis';
import * as endo from 'endogenesis';
const { polygon, range, setNumSides, } = Polygon;
const mygons = range(20).map(i => setNumSides(6)(polygon(i, i, 10)));

const style = {
  width: '100%',
  height: '100%',

  // transformOrigin: 'initial',
};

class Endo extends Component {
  componentDidMount() {
    const vSelect = d3.select('.endovis');
    const vBox = vSelect.node().getBoundingClientRect();

    console.log('vbox', vBox);
    console.log(' vBox.left, vBox.right,', vBox.left - vBox.right);
    console.log('vSelect.node()', vSelect.node());
    console.log(' vBox.top, vBox.bottom', vBox.top - vBox.bottom);
    console.log('d3.extent(mygons, g => g.x)', d3.extent(mygons, g => g.x));
    console.log('[ vBox.left, vBox.right, ]', [ vBox.left, vBox.right, ]);

    // console.log('vSelect', vSelect.node().getBoundingClientRect());
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
    .attr('cx', d => xScale(d.x))
    .attr('cy', d => yScale(d.y))
    .attr('r', d => rScale(d.radius))
    .attr('stroke', '#f0f');
  }
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={11} className="visbox">
          <svg className="endovis" style={style}>
            {mygons.map((p, i) => (
              <g className="polygon" key={i} />)
            )}
          </svg>
        </Grid>
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
