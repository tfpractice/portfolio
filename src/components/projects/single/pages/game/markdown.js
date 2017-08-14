const adjacency = {
  caption: 'establishes node-adjacency via polar coordinates',
  content: `### establishes node-adjacency via polar coordinates`,
};
const multiple = {
  caption: 'calculates multiple graphs given any set of nodes',
  content: `### calculates multiple graphs given any set of nodes`,
};

const extended = {
  caption: 'encourages extension via a minimal API',
  content: `### encourages extension via a minimal API`,
};

export const slides = [ adjacency, multiple, extended ];
export const markdown = `## Game Grid  

This project applies a simple 2D matrix of rows and columns onto takes the work I've done in [Graph theory](/graph-curry). Having gone through a cadre of extensibility failures in my previous graph algorithms, (links to git repos), building this was actually lots of fun. Whereas in a more free-wheeling graph structure, the developer takes active role in assigning relationships between nodes, columns and rows have an inherent that's visible to the naked eye. Telling a computer to see that, however, proved more difficult.

## The Nodes 
The nodes in this case are simple immutable objects with three properties: column and row—which point to indices in the larger grid—and id, which combines of the previous two fields. Both properties comes with getter/setter methods for both of these properties, which avoid errors with sensible defaults and maintains immutability.


## The Relationships
While conceptually very simple, recognizing the relationships between rows and columns was more involved than I had originally imagined. Because the nodes had their own references to their positions, the actual existence of Column and Row types these as distinct types was irrelevant. A simple absolute value comparison would be enough to determine that <col2_row3> is horizontally adjacent to <col1_row3>, and so I built a set of comparitor functions:

~~~js
// **colDiff** ~::  Node-> Node -> Number~
// returns the difference of two nodes column properties
export const colDiff = n0 => n1 => column(n0) - column(n1);

// **rowDiff** ~::  Node-> Node -> Number~
// returns the difference of two nodes row properties
export const rowDiff = n0 => n1 => row(n0) - row(n1);

// **sameCol** ~:: Node -> Node -> Boolean~
// checks for equality between two nodes column properties
export const sameCol = n0 => n1 => abs(colDiff(n0)(n1)) === 0;

// **sameRow** ~::  Node -> Node -> Boolean~
// checks for equality between two nodes row properties
export const sameRow = n0 => n1 => abs(rowDiff(n0)(n1)) === 0;

// **samePos** ~::  Node -> Node -> Boolean~
// checks if two nodes share position
export const samePos = c0 => c1 => sameCol(c0)(c1) && sameRow(c0)(c1);

// **diffPos** ~::  Node -> Node -> Boolean~
// checks if two nodes don't share position
export const diffPos = src => alt => !samePos(src)(alt);
~~~ 

While this worked in determining the mathematical adjacency of nodes, the quality of that adjacency is important in many board games (tic-tac-toe, checkers, etc).  It is not enough to know that <c2_r3> is in some way adjacent to <c3_r2>, the direction of that connection must be specified. From my work in [data visualization](https://github.com/tfpractice/endogenesis), I knew that this would involve some trigonometry:

~~~js
// **tangent** ~::  Node-> Node -> Number~
// returns the column difference to row difference ratio of two nodes
export const tangent = n0 => n1 => rowDiff(n0)(n1) / colDiff(n0)(n1);

// **angleBetween** ~::  Node -> Node -> Number~
// returns a the angle between two nodes in radians
export const angleBetween = a => b => ((atan(tangent(a)(b)) % PI) + PI) % PI;

// checks if two nodes lie on the same positive diagonal
export const samePVector = n0 => n1 => angleBetween(n0)(n1) === PI / 4;

// **sameNVector** ~::  Node -> Node -> Boolean~
// checks if two nodes lie on the same negative diagonal
export const sameNVector = n0 => n1 => angleBetween(n0)(n1) === (PI *3 /4);

~~~

Starting from two simple functions ~colDiff~ and ~rowDiff~, I was able to build a robust and foolproof method of checking both general and particular adjacency within a grid:

~~~js

// **cAdj** ~::  Node -> Node -> Boolean~
// checks if two nodes lie on the same column
export const cAdj = n0 => n1 => abs(colDiff(n0)(n1)) < 2;

// **rAdj** ~:: Node -> Node -> Boolean
// checks if two nodes lie on the same row
export const rAdj = n0 => n1 => abs(rowDiff(n0)(n1)) < 2;

// **isNeighbor** ~::  Map<edge> ->  node  -> Map<edge>~
// checks if two different nodes are neighbors
export const isNeighbor = a => b => diffPos(a)(b) && cAdj(a)(b) && rAdj(a)(b);

~~~

## The Grid
But checking relationships between simple objects is very different than establishing them. In order for this to be in any way useful, I had to establish these connections programmatically. Combining my [collection utiltiies](/fenugreek-collections), with my work in graphs, this process was  cinch. Given any collection of nodes, I could now easily establish various types of graphs,based on any combination of relationships.

~~~js

// **genNodes** ~::  (Number, Number) -> [Node]~
// returns an array of nodes the specified number of columns and rows
export const genNodes = (cols = 0, rows = 0) => {
  let nArr = [];

  for (let c = cols - 1; c >= 0; c--) {
    for (let r = rows - 1; r >= 0; r--) {
      nArr.unshift(node(c, r));
    }
  }

  return nArr;
};

// **grid** ~::  (Number, Number) -> Map<edge>~
// returns a Map of edges with the specified number of columns and rows
export const grid = (c = 0, r = 0) => graph(...genNodes(c, r));

// **joinGrid** ~::  Map<edge>  -> Map<edge>~
// returns a copy of a grid with edges joining all nodes with all their neighbors
export const joinGrid = grid => nodes(grid).reduce(joinAdj, grid);

// **colGrid** ~::  Map<edge> -> Map<edge>~
// returns a copy of a grid with edges joining all nodes with all their column neighbors
export const colGrid = grid => nodes(grid).reduce(joinCols, grid);

// **rowGrid** ~::  Map<edge>  -> Map<edge>~
// returns a copy of a grid with edges joining all nodes with all their row neighbors
export const rowGrid = grid => nodes(grid).reduce(joinRows, grid);

// **posGrid** ~::  Map<edge>  -> Map<edge>~
// returns a copy of a grid with edges joining all nodes with all their positive neighbors
export const posGrid = grid => nodes(grid).reduce(joinPVectors, grid);

// **negGrid** ~::  (Map<edge>, node)  -> Map<edge>~
// returns a copy of a grid with edges joining all nodes with all their negative neighbors
export const negGrid = grid => nodes(grid).reduce(joinNVectors, grid);

~~~
`;
export const content = markdown;

export const tech = [
  'built with es6, bundled with Rollup',
  '90% code-coverage, tested with Jest',
  'full documentation deployed on surge',
];
