import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { FadeIn, } from 'animate-components';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';

import { mapTo, } from 'fenugreek-collections';

import SwipeableViews from 'react-swipeable-views';

// `
// // **mapTo** ':: (a->b) -> Iterable<a>  -> [b]'
// // returns an Iterable<a> of the return values of a
// // function called on each element of an iterable
// export const mapTo = fn => coll => map(coll)(fn);`;

const dubstring = `doubleNums() {
  const { numbers, } = this.state;

  this.setState({
    numbers: mapTo(double)(numbers),
  });
}`;
const halfStr = `halveNums() {
  const { numbers, } = this.state;
  
  this.setState({
    numbers: mapTo(halve)(numbers),
  });
}`;
const resStr = `resetNums() {
  this.setState({ 
    numbers: [ 1, 2, 3, 4, ],
  });
}`;

//
// // **filtBy** ':: (a->bool) -> Iterable<a>  -> [a]'
// // returns the iterable's values which return true for a given function
// export const filtBy = fn => coll => filter(coll)(fn);
const double = x => x * 2;
const halve = x => x / 2;
const stateToProps = ({ projects, }) => ({ projects, });

class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [ 1, 2, 3, 4, ],
      names: [ 'tom', 'dick', 'harry', ],
    };
  }
  
  doubleNums() {
    const { numbers, } = this.state;
    
    this.setState({ numbers: mapTo(double)(numbers), });
  }
  
  halveNums() {
    const { numbers, } = this.state;
    
    this.setState({ numbers: mapTo(halve)(numbers), });
  }
  
  resetNums() {
    this.setState({ numbers: [ 1, 2, 3, 4, ], });
  }
  
  render () {
    const props = this.props;

    return (
      <Grid container justify="center" align="center" direction="column" className="Fenugreek-main">
        <Grid item xs={11} sm={10} >
          <Card>
            <CardHeader title="mapTo(fn)(coll)" />
            <CardContent>
              <Grid container justify="center">
                <Grid item xs={11}>
                  <Text type="body2">
                    {`MapTo is a function in two parts. First it takes a function fn.

                      Then it returns a second function which takes a collection 'coll'
                      and returns that function applied to each element of the collection

                      Given a unary function called 'double' which takes a single number (num)
                `}
                  </Text>
                  <Grid item xs={11}>
                    <Text type="body2">
                      <pre>
                        export const mapTo = fn => coll => map(coll)(fn)
                      </pre>
                    </Text>
                  </Grid>
                </Grid>
                <Text align="center" type="display1"> {this.state.numbers.join()} </Text>

                <Grid item xs={11}>
                  <SwipeableViews enableMouseEvents>

                    <Text type="body2">
                      <pre>
                        {`${dubstring}`}
                      </pre>
                    </Text>

                    <Text type="body2">
                      <pre>
                        {`${halfStr}`}
                      </pre>
                    </Text>

                    <Text type="body2">
                      <pre>
                        {`${resStr}`}
                      </pre>
                    </Text>

                  </SwipeableViews>
                </Grid>
              </Grid>

            </CardContent>

            <CardActions>
              <Grid container align="center" justify="center">
                <Grid item ><Button onClick={() => this.doubleNums()}>Double</Button></Grid>
                <Grid item ><Button onClick={() => this.halveNums()}>Halve</Button></Grid>
                <Grid item ><Button onClick={() => this.resetNums()}>Reset</Button></Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
export default connect(stateToProps)(Examples);
