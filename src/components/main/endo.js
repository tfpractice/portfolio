import React, { Component, } from 'react';
import * as d3 from 'd3';
import { connect, } from 'react-redux';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { FadeIn, } from 'animate-components';

import { getBox, polyGrid, polyLine, rBox, showCircles, showPolys, xBox, yBox, } from './endoHelp';

const mygons = polyGrid(20)(6);

const stateToProps = ({ projects, }) => {
  console.log('state', projects);

  // showCircles(mygons);
  // showPolys(mygons);
  return ({ shapes: polyGrid(projects.length)(6), });

  // return ({ shapes: mygons, });
};

// console.log('mygons', mygons);
const style = {
  width: '100%',
  height: '100%',
};

class Endo extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   // this.state = { color: props.initialColor, };
  // }
  componentDidMount() {
    const { shapes, } = this.props;
    
    console.log('componentDidMountshapes', shapes);
    showCircles(shapes);
    showPolys(shapes);
  }

  // componentWillReceiveProps({ shapes, }) {
  //   showCircles(shapes);
  //   showPolys(shapes);
  // }
  
  componentDidUpdate(prev, pp) {
    const { shapes, } = this.props;
  
    console.log('componentDidUpdate prev', prev);
    console.log('pp', pp);
    console.log('shapes', shapes);
    showCircles(shapes);
    showPolys(shapes);
  }

  // componentWillUpdate(prev) {
  //   const { shapes, } = this.props;
  //
  //   console.log('componentWillUpdate prev', prev);
  //   console.log('shapes', shapes);
  //   showCircles(shapes);
  //   showPolys(shapes);
  // }

  // componentWillReceiveProps({ shapes, projects, }) {
  //   showCircles(shapes);
  //   showPolys(shapes);
  // }

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
