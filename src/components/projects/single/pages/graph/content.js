export const content = `
## Game Graph

I've scripted many classical algorithms and data strucutres in a number of languages and found the process to be both exhausting and illuminating, none of them has excited me more than graphs. Particularly because of the freedom to demonstrate relationships logically. This particular collection based iteration in Javascipt has been my most fruitful, as the freedom of first-class functions allowed the flexibility to add functionality without the particularities of Java Interfaces, Ruby Modules, and the prototype chain.

In many ways, this project has made me the programmer I am today. The process involved translating _Algorithms, 4th Edition_ by Robert Sedgewick and Kevin Wayne, from Java to
Object-Oriented Javascript, to functional Javascript.

After successfully implementing the basic functionality, I wanted to put them to use in a number of ways, particularly in
designing algorithms for things like tic-tac-toe and playings cards. But extensibility was a nightmare

~~~js
//Examples
~~~ 

The problems I encountered therein deepened my understanding of the node module system, various programming paradigms, and the importance of preferring composition over inheritance. It is now used in many of my libraries.

This project being both functional and collection based, uses es6 Maps as the base class. With the ability to hold object references as keys, rather than Primitive types, the entire notion of the "Vertex/Node class" could be done away with, and more excitingly, the Graph class itself. I could focus entirely on the traversals and relationships. It all starts with two functions (one borrowed from another library I wrote)

~~~js
// **addMap** \`:: Map[{k:v}] -> k -> v -> Map[{k:v}]\`
// adds an element to a Map;
export const addMap = c => k => v => asMap(c).set(k, v);


// **addNodeBin** \`:: ( Map<edge>, node ) -> Map<edge>\`
// adds a node:adjacency list pair to an edgelist
export const addNodeBin = (edges, src) => addMap(edges)(src)(asMap(get(edges)(src)));

~~~

\`asMap\` takes a collection as its first argument and coerces it to a Map of key, value, pairs. \`addMap\` is a sequence of three unary functions that accept a collection, a key, and a values and returns a map with the associated parameters. and \`addNodeBin\` is a binary function that accepts a Map of edges and a source node and returns a collection of edges


~~~js
// **graph** \`:: [Node] -> Map<edge>\`
// adds  {node: adjacencyList} pairs ot an Edgelist
export const graph = (...elems) => elems.reduce(addNodeBin, new Map);

// **nodes** \`::  Map<edge> ->  [node]
// returns an array of the nodes
export const nodes = edges => spreadK(asMap(edges));

// **adj** \`::  Map<edge> ->  node  -> Map<{node: Number}>\`
// returns the nodes adjacency list
export const adj = edges => src => asMap(get(edges)(src));

// **neighbors** \`::  Map<edge> ->  node  -> [node]\`
// returns the nodes neighbors
export const neighbors = edges => src => nodes(adj(edges)(src));

~~~
`;

export const tech = [
  'built with es6, bundled with Rollup',
  '90% code-coverage, tested with Jest',
  'full documentation deployed on surge',
]; export const major = {
  caption: `## Game Graph`,
  content: `

I've scripted many classical algorithms and data strucutres in a number of languages and found the process to be both exhausting and illuminating, none of them has excited me more than graphs. Particularly because of the freedom to demonstrate relationships logically. This particular collection based iteration in Javascipt has been my most fruitful, as the freedom of first-class functions allowed the flexibility to add functionality without the particularities of Java Interfaces, Ruby Modules, and the prototype chain.

In many ways, this project has made me the programmer I am today. The process involved translating _Algorithms, 4th Edition_ by Robert Sedgewick and Kevin Wayne, from Java to
Object-Oriented Javascript, to functional Javascript.

After successfully implementing the basic functionality, I wanted to put them to use in a number of ways, particularly in
designing algorithms for things like tic-tac-toe and playings cards. But extensibility was a nightmare

~~~js
//Examples
~~~ 

The problems I encountered therein deepened my understanding of the node module system, various programming paradigms, and the importance of preferring composition over inheritance. It is now used in many of my libraries.

This project being both functional and collection based, uses es6 Maps as the base class. With the ability to hold object references as keys, rather than Primitive types, the entire notion of the "Vertex/Node class" could be done away with, and more excitingly, the Graph class itself. I could focus entirely on the traversals and relationships. It all starts with two functions (one borrowed from another library I wrote)

~~~js
// **addMap** \`:: Map[{k:v}] -> k -> v -> Map[{k:v}]\`
// adds an element to a Map;
export const addMap = c => k => v => asMap(c).set(k, v);


// **addNodeBin** \`:: ( Map<edge>, node ) -> Map<edge>\`
// adds a node:adjacency list pair to an edgelist
export const addNodeBin = (edges, src) => addMap(edges)(src)(asMap(get(edges)(src)));

~~~

\`asMap\` takes a collection as its first argument and coerces it to a Map of key, value, pairs. \`addMap\` is a sequence of three unary functions that accept a collection, a key, and a values and returns a map with the associated parameters. and \`addNodeBin\` is a binary function that accepts a Map of edges and a source node and returns a collection of edges


~~~js
// **graph** \`:: [Node] -> Map<edge>\`
// adds  {node: adjacencyList} pairs ot an Edgelist
export const graph = (...elems) => elems.reduce(addNodeBin, new Map);

// **nodes** \`::  Map<edge> ->  [node]
// returns an array of the nodes
export const nodes = edges => spreadK(asMap(edges));

// **adj** \`::  Map<edge> ->  node  -> Map<{node: Number}>\`
// returns the nodes adjacency list
export const adj = edges => src => asMap(get(edges)(src));

// **neighbors** \`::  Map<edge> ->  node  -> [node]\`
// returns the nodes neighbors
export const neighbors = edges => src => nodes(adj(edges)(src));

~~~
`,
};

export const sections = [ major ]
