import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { FadeIn, } from 'animate-components';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { MarkdownPreview, } from 'react-marked-markdown';
import { Graph, Show, } from 'graph-curry';

// import { byAdj, colAdj, negAdj, posAdj, rowAdj, } from './filter';

import { mapTo, spreadK, } from 'fenugreek-collections';

import SwipeableViews from 'react-swipeable-views';

const { addEdges, nodes, graph, adj, neighbors, } = Graph;
const { graphString, } = Show;

const localNums = spreadK(Array(20));

const isFizz = n => n % 3 === 0;
const isBuzz = n => n % 3 === 0;
const fizzables = nums => nums.filter(isFizz);
const buzzables = nums => nums.filter(isBuzz);

const joinFizz = (g, n) => addEdges(g)(n, 0)(...fizzables(nodes(g)));
const joinBuzz = (g, n) => addEdges(g)(n, 0)(...buzzables(nodes(g)));

const fizzGraph = nums => nodes(graph(...nums)).reduce(joinFizz, nums);
const buzzGraph = nums => nodes(graph(...nums)).reduce(joinBuzz, nums);

// console.log('graphString(fizzGraph(localNums))', graphString(fizzGraph(localNums)));
// console.log('adj', adj(fizzGraph(localNums))(2));
// console.log('fizzGraph(localNums)', fizzGraph(localNums));
const dubstring = `~~~js
 const isFizz = n => n % 3 === 0;

 const fizzables = nums => nums.filter(isFizz);



 const joinFizz = (g, n) => addEdges(g)(n, 0)(...fizzables(nodes(g)));

  ~~~
`;
const halfStr = `
~~~js
const buzzables = nums => nums.filter(isBuzz);

const joinBuzz = (g, n) => addEdges(g)(n, 0)(...buzzables(nodes(g)));

const buzzGraph = nums => nodes(nums).reduce(joinBuzz, nums);

~~~
`;
const resStr = `
~~~js
const buzzables = nums => nums.filter(isBuzz);

const joinBuzz = (g, n) => addEdges(g)(n, 0)(...buzzables(nodes(g)));

const buzzGraph = nums => nodes(nums).reduce(joinBuzz, nums);

~~~`;

const main = `
  MapTo is a function in two parts. 
  
  First it takes a function which operates ideally on a single argument

  ~~~js
  const mapTo = fn => coll => map(coll)(fn);
  ~~~

  Then it returns a second function which takes a collection
  and returns that function applied to each element of the collection
  
  Given a unary function called \`double\` which takes a single number and doubles it
  
  ~~~js
  const double = x => x * 2;
  ~~~
  and doubles it and a collection (nums) of numbers
  
  ~~~js
  mapTo(double)(numbers)
  ~~~
  
  should return an array containing all those numbers doubled
  
`;

{ }

const double = x => x * 2;
const halve = x => x / 2;

class MapEx extends Component {
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
      <Card>
        <CardHeader title="mapTo(fn)(coll)" />
        <CardContent>
          <Grid container justify="center">
            <Grid item xs={11}>
              <Text component="div" type="body2">
                <MarkdownPreview value={main}/>
              </Text>
            </Grid>
            <Text > {graphString(fizzGraph(localNums)).split('}', 3)} </Text>
            {/* <Text align="center" type="display1"> {this.state.numbers.join()} </Text> */}

            <Grid item xs={11}>
              <SwipeableViews enableMouseEvents>

                <Text component="div" type="body2">
                  <MarkdownPreview value={dubstring}/>
                </Text>
                <Text component="div" type="body2">
                  <MarkdownPreview value={halfStr}/>
                </Text>
                <Text component="div" type="body2">
                  <MarkdownPreview value={resStr}/>
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
    
    );
  }
}
export default (MapEx);
