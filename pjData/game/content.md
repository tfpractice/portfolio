## Game Grid  

This project takes the work I've done in Graph theory and applies a simple 2D matrix of rows and columns. Having gone through the grueling work rewriting algorithms for extensibility, building this was actually lots of fun. Whereas in amore free-wheeling graph structure, one needs to take a more active role in assigning relationships between nodes, columns and rows have an inherent that's visible to the naked eye. Telling a computer to see that, however, proved more diffult.

## The Nodes 
THe nodes in this case are simple immutable objects with three properties: column and row—which point to indices in the larger grid— and an id field, which is a combination of the previous two fields.

## The Relationships
This relationships between these nodes is conceptually very simple, but programmatically more involved than i had originally imagined. While it is clear that a node at <col2_row3> is diagonally adjacent to <col3_row2>, it requires a bit trigonometry to get a script to  understand that.

~~~js
// **colDiff** `::  Node-> Node -> Number`
// returns the difference of two nodes column properties
export const colDiff = n0 => n1 => column(n0) - column(n1);

// **rowDiff** `::  Node-> Node -> Number`
// returns the difference of two nodes row properties
export const rowDiff = n0 => n1 => row(n0) - row(n1);

// **sameCol** `:: Node -> Node -> Boolean`
// checks for equality between two nodes column properties
export const sameCol = n0 => n1 => abs(colDiff(n0)(n1)) === 0;

// **sameRow** `::  Node -> Node -> Boolean`
// checks for equality between two nodes row properties
export const sameRow = n0 => n1 => abs(rowDiff(n0)(n1)) === 0;

~~~ 

While adjacency itself can be measured with a simple Absolute value comparison, the quality of that adjacency is particularly relevant in many board games (tic-tac-toe, checkers, etc). And this required some more work

~~~js
// **tangent** `::  Node-> Node -> Number`
// returns the column difference to row difference ratio of two nodes
export const tangent = n0 => n1 => rowDiff(n0)(n1) / colDiff(n0)(n1);

// **angleBetween** `::  Node -> Node -> Number`
// returns a the angle between two nodes in radians
export const angleBetween = a => b => ((atan(tangent(a)(b)) % PI) + PI) % PI;
// checks if two nodes lie on the same positive diagonal
export const samePVector = n0 => n1 => angleBetween(n0)(n1) === PI * 0.25;

// **sameNVector** `::  Node -> Node -> Boolean`
// checks if two nodes lie on the same negative diagonal
export const sameNVector = n0 => n1 => angleBetween(n0)(n1) === PI * 0.75;

~~~

## The algorithm
And after developing both a general and particular algorithms for connectedness, there had to be ways to connect these nodes programmatically for the grid to be successfull.

~~~js

// **byAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all nodes
export const byAdj = nodes => src => filter(nodes)(isNeighbor(src));

// **rowAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all rows
export const rowAdj = nodes => src => filter(byAdj(nodes)(src))(sameRow(src));

// **colAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all columns
export const colAdj = nodes => src => filter(byAdj(nodes)(src))(sameCol(src));

// **posAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all positive diagonals
export const posAdj = nodes => src => filter(byAdj(nodes)(src))(samePVector(src));

// **negAdj** `::  Map<edge> ->  node  -> Map<edge>`
// returns a graph with edges connecting all negative diagonal
export const negAdj = nodes => src => filter(byAdj(nodes)(src))(sameNVector(src));


~~~
