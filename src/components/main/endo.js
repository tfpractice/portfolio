import React, { Component, } from 'react';
import * as d3 from 'd3';
import { connect, } from 'react-redux';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { FadeIn, } from 'animate-components';

import { getBox, polyGrid, polyLine, rBox, showCircles, showPolys, xBox, yBox, } from '../visualization';

const mygons = polyGrid(20)(6);

const stateToProps = ({ projects, }) =>

  ({ shapes: polyGrid(projects.length)(6), });

const style = {
  width: '100%',
  height: '100%',
};

class Endo extends Component {
  componentDidMount() {
    const { shapes, } = this.props;

    showCircles(shapes);
    showPolys(shapes);
  }
  
  componentDidUpdate(prev, pp) {
    const { shapes, } = this.props;

    showCircles(shapes);
    showPolys(shapes);
  }

  render() {
    let { shapes, } = this.props;

    shapes = shapes.length ? shapes : polyGrid(20)(6);
    return (
      <Grid container justify="center">
        <Grid item xs={11} className="visBox">
          <svg className="endovis" style={style}>
            {shapes.map((p, i) => (
              <g className="polygon" key={i} />)
            )}
          </svg>
        </Grid>
        <Grid item xs={11}>
          <Grid container justify="center" align="flex-start" className="tickBox">
            {shapes.map((p, i) => (
              <Grid item xs={4} className="disBox" id={`vis${i}`} key={i}>
                <svg className="disVis" >
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

export default connect(stateToProps)(Endo);
