## Game Grid  

This project applies a simple 2D matrix of rows and columns onto takes the work I've done in [Graph theory](/graph-curry). Having gone through a cadre of extensibility failures in my previous graph algorithms, (links to git repos), building this was actually lots of fun. Whereas in a more free-wheeling graph structure, the developer takes active role in assigning relationships between nodes, columns and rows have an inherent that's visible to the naked eye. Telling a computer to see that, however, proved more difficult.

## The Nodes 
The nodes in this case are simple immutable objects with three properties: column and row—which point to indices in the larger grid—and id, which combines of the previous two fields. Both properties comes with getter/setter methods for both of these properties, which avoid errors with sensible defaults and maintains immutability.

## The Grid


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

// **genNodes** `::  (Number, Number) -> [Node]`
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

// **grid** `::  (Number, Number) -> Map<edge>`
// returns a Map of edges with the specified number of columns and rows
export const grid = (c = 0, r = 0) => graph(...genNodes(c, r));

// **joinGrid** `::  Map<edge>  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their neighbors
export const joinGrid = grid => nodes(grid).reduce(joinAdj, grid);

// **colGrid** `::  Map<edge> -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their column neighbors
export const colGrid = grid => nodes(grid).reduce(joinCols, grid);

// **rowGrid** `::  Map<edge>  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their row neighbors
export const rowGrid = grid => nodes(grid).reduce(joinRows, grid);

// **posGrid** `::  Map<edge>  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their positive neighbors
export const posGrid = grid => nodes(grid).reduce(joinPVectors, grid);

// **negGrid** `::  (Map<edge>, node)  -> Map<edge>`
// returns a copy of a grid with edges joining all nodes with all their negative neighbors
export const negGrid = grid => nodes(grid).reduce(joinNVectors, grid);

~~~


## Connect Four Functional
With the work of recognizing and establishing connections handled in [game grid](/game-grid), all i had to do for this library was add a player type, and check for its presence on a node. Developing this library a elegant exercise in extending this simple function. 

#Extension
The player type is a simple object with name, and id properties, with getter/setter functions. Along with the name properties from Game Grid, the Node type here contains a player property, along with getter/setter functions ~claim~ and ~unclaim~ to set this property. On top of the all important query function, ~isFree~ checks if the player property is null.

This simple query easily extends to a collection of nodes, and forms there basis of the column API. Since connect four over can only choose a particular column, ~hasFree~ checks if any of these nodes in a given collection are unclaimed; ~nextFree~ returns the first unclaimed 

This extends further into there game API which exposes a ~Next~ and claimNext functions. The Game object contains both an array of node objects and a reference to the currently selected column. 
Next returns the next free node in the current column send claim assigned that node to the active player. 

This bubbling effect wherein a relatively minor operation grows to characterize an entire system facilitates ironclad, elegant API that with foolproof composition. appears throughout this and many of my projects

Game type is a simple object with nodes player s and a current column index properties along with their with associated accessory functions. 

Rather than a assigning a first and second prayer properties the players fields is an array of player objects which rotates after every turn. The active player use the player currently in the first piston. This a void there potential clunkiness of some thing like if (this.currentPlayer===this.player1)
{this.currebtPkster=this.player1}
And hoping that there aren't any edge cases. 

. 


The library follows loosely a"query command"structure where the objects are immutable,properties are accessed and assigned via functions. 
Most of the operators are two part unary functions that take first a property of a certain BAE type (node, player, cold) and lastly try hg e object to beer modified. This monadic structure allowed for a very truly exciting composition. 


Beer 52__________
Side and ranks were simple to imagine but the cyclically structure of the ranks complicated there implementation. 

There ranks empty modular arithmetic for minimum and maximum rank distance along with neighboring rankcomparisons so that the ranks previous rank for an ace is king and there next rank is two.  

The card type consist of rank and sit properties and accessors anger leverages the tank modules compositors for comparison and look ahead adjacency

Immutable decks


Rummy______\\\
This was far me complex of a task than I had anticipated. Given the simplicity of the card library I had developed. Without delving to deploy into the various conditions the comprise rummy there are three basic rules that were central to the developer experience. 


1. Sets/plays/books can be composed of art least three cards of the same rank across suits or successive ranks within the same suit. 8h8d8s or 5 hg 6h7h

2. Already established sets can be appended to if the rules aren't violated. An8h can be alleged to a457h set

3. Players can draw from the devil of remaining cards and must discard after each turn. Drawing from the discard pile of allowed under two conditions. A) the player draws the top cards or b) a card further down the pile will produce a set when combined with the players hand or sets already played. If b then such a set card must be immediately played. 
 
3. If at any point in the game there discard pile contains a card that can be appended to a set, th use is called rummy. And there player to first claim this event takes the cards into their own play pile. 



Sharing leveraging there must basic of compositors from be 52 made set composition relatively easy with two functions

import { diffSuit, isRankAdj, sameRank, sameSuit, } from 'bee52';

export const suitAdj = c0 => c1 => [ sameRank(c0), diffSuit(c0), ].every(f => f(c1));
export const rankAdj = c0 => c1 => [ sameSuit(c0), isRankAdj(c0), ].every(f => f(c1));

Graph theory facilitated connecting cards based on these primary comparisons and calculating all possible sequences and rank sets in any set of cards. Full sets were just those whose length exceeded 2

The immutability enforced in be 52 enabled ahead strategizing. Since adding and removing cards from a collection produced a new collection, one could easily check for all possible sets in hand if you were to draw a particular cards. Without ever M modifying the original hand. 

This look ahead capacity set the stage for of partial sets which form the basis of points 2 and 3 above. 



General set evaluation was more complex and began with applying an abstraction of mathematical set theory. Sets were considered rather equal if there length of the bidirectional difference between them was zero. Abc-bc=a but bc-abc=[]. 

In order to qualify as a set or sequence a given sry of cards had to have me than over card in it and all potential sets withing that grit had to match there given set. Alternatively one could sort the cards by ranks and then perform an accumulating pairwise comparison you check for a rank distance greater than one. But wit the cyclocross nature of ranks this work involved choosing a random start point and knowing her to compare endpoints. Jqka is easy enough as long as j is assumed to be there lowest in the set. Qakj obj there other hand is difficult because if q use there lucky then we get qkaj and j had a min distance of 3 and Max distance of 10. Eric with require use to retry all permutation s until Jqka. And don't even get me started on 567. Also I had written the graph library and it has yet to fail me. H

This seemingly long-winded approach was desirable in that the cards provided couldn't be feasibly compared one by one 

Ug

Connect redux_____
Functional program MBA aware working with redux a breeze. In terms of actions and reducers my code was already written fort me. 

Firebase was a doozy 

D3 visualization and ready was trash 

Rummy redux____

Same shit 
Unicode problems 
House much reducers 


Filmratr 
Server renewing never again 
Static deployment p just popping 
MongoDB aggregation s
Maximum normalization s LITTLE OD
Gabe grids 
Trigonometrically assigned node relativities based on column and row positions 
(Grid radians )

Nodes
Cadj radj

Performs separate graphs horizontal vertical and birth diagonal connections from given sry nodes 
(4grids


Provided a minimal expressive API for maximum extensibility 
SelectxsetColumn


Connect 4
 

Maintains Immutable game state with an expressive monadic API


 
Accommodates games of various win states
 
implements the entire game logic without as any custom classes

Function all programming test driven development gamer design

Bee52
Leverages graph algorithms to build relationship based on suit and rank 
(2spades--->3spades--->4spades)


Collection based functional approach allowed fort a fluent API that treated a single card and a deck identically 
(Addhand--->2s--->[as,3h,]--->[as,2s,3h])

Value agnostic comparisons ensures consistent results no matter which game these a ply 
(AdjRanks--->4H->[3,5])


Rummy 
builds a highly complex rules set onto simple two property objects

Leverages graph theory to properly determine successive gestures 
CanDraw

Composes sets based on identity of rank across suites and identity of suit through a sequence of ranks 
RankAdj
SuutAdj
