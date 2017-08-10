const keyless = {
  caption: `enables keyless, node-agnostic graphs`,
  content: `### enables keyless, node-agnostic graphs

~~~js
// creates six node objects
const sixNodes = [ ...Array(6).keys() ].map(x => 'n'+x);
sixNodes .... [ 'n0', 'n1', 'n2', 'n3', 'n4', 'n5' ]

// adds them all to a graph
const sixGraph = graph(...sixNodes);
sixGraph .... Map {
     'n0' => Map {},
     'n1' => Map {},
     'n2' => Map {},
     'n3' => Map {},
     'n4' => Map {},
     'n5' => Map {} }

// only retrieves the even nodes
const evenNodes = sixNodes.filter((n, i) => i % 2 === 0);
evenNodes ..... [ 'n0', 'n2', 'n4' ]

// add edges between all even nodes
const evenGraph = evenNodes.reduce(
  (gr, nd) => addEdges(gr)(nd)(...evenNodes),
  sixGraph
);

evenGraph ..... Map {
      'n0' => Map { 'n0' => 0, 'n2' => 0, 'n4' => 0 },
      'n1' => Map {},
      'n2' => Map { 'n0' => 0, 'n2' => 0, 'n4' => 0 },
      'n3' => Map {},
      'n4' => Map { 'n0' => 0, 'n2' => 0, 'n4' => 0 },
      'n5' => Map {} }
~~~
`,
};
const algortihms = {
  caption: `functionally implements classical graph algortihms `,

  content: `### functionally implements classical graph algortihms
  ~~~javascript
  const depthn2 = dfs(evenGraph)(evenNodes[1]);
  const breadtn2 = bfs(evenGraph)(evenNodes[1]);
      
  // depth first search from start to all connected nodes
  depthn2 Map {
    'n2' => { pred: 'n2', length: 2, weight: 0 },
    'n0' => { pred: 'n0', length: 4, weight: 0 },
    'n4' => { pred: 'n4', length: 8, weight: 0 } }
  
  
  // breadth first search from start to all connected nodes
  breadtn2 Map {
    'n2' => { pred: null, length: 1, weight: 0 },
    'n0' => { pred: 'n2', length: 2, weight: 0 },
    'n4' => { pred: 'n0', length: 3, weight: 0 } }
    
    
  // maps each node to a set of connected nodes
  components(evenGraph) Map {
    'n0' => Set { 'n0', 'n2', 'n4' },
    'n2' => Set { 'n0', 'n2', 'n4' },
    'n4' => Set { 'n0', 'n2', 'n4' },
    'n1' => Set { 'n1' },
    'n3' => Set { 'n3' },
    'n5' => Set { 'n5' } }
  
  // returns maximal set of all connected components
  componentSet(evenGraph) Set {
    Set { 'n0', 'n2', 'n4' },
    Set { 'n1' },
    Set { 'n3' },
    Set { 'n5' } }
  ~~~
`,
};
const collected = {
  caption: `leverages es6 collections to avoid custom-classes and ease extensions`,
  content: `### leverages es6 collections to avoid custom-classes and ease extensions

~~~js
// here are the graph algortihms extended in my game grid libary
import { Graph, } from 'graph-curry';
import { byAdj, colAdj, negAdj, posAdj, rowAdj, } from './filter';

const { addEdges, nodes, } = Graph;

// **joinAdj** '::  (Map<edge>, node)  -> Map<edge>'
// returns a copy of a grid with edges joining a nodes and all its neighbors
export const joinAdj = (g, n) => addEdges(g)(n, 0)(...byAdj(nodes(g))(n));

// **joinCols** '::  (Map<edge>, node)  -> Map<edge>'
// returns a copy of a grid with edges joining a nodes and all its column neighbors
export const joinCols = (g, n) => addEdges(g)(n, 0)(...colAdj(nodes(g))(n));

// **joinRows** '::  (Map<edge>, node)  -> Map<edge>'
// returns a copy of a grid with edges joining a nodes and all its row neighbors
export const joinRows = (g, n) => addEdges(g)(n, 0)(...rowAdj(nodes(g))(n));

~~~
`,
};

export const slides = [ keyless, algortihms, collected ];
