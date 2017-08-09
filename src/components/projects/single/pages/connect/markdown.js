export const content = `## Connect Four Functional
With the work of recognizing and establishing connections handled in [game grid](/game-grid), all i had to do for this library was add a player type, and check for its presence on a node. Developing this library a elegant exercise in extending this simple function. 

## Extension
Along with the column and row properties from Game Grid, the node type here contains a player property, along with functions ~claim~ and ~unclaim~ to set this property. On top of the all important query function, ~isFree~ checks if the player property is null.

This simple query easily extends to a collection of nodes, and forms there basis of the column API. ~hasFree~ checks if any of these nodes in a given collection are unclaimed; ~nextFree~ returns the first unclaimed node. 

This extends further into the game API which exposes a ~next~ and ~claimNext~ functions. The Game object contains an array of nodes and a reference to the currently selected column. 
Next returns the next free node in the current column ~select~ claims that node to the active player. 

This bubbling effect wherein a relatively minor operation grows to characterize an entire system facilitates an ironclad, elegant API that with foolproof composition. It appears throughout this and many of my projects

## Monads and Immutability
Many of the base types in this package are simple objects without methods. The API provides accessor functions to retrieve and assign these values. The function getCol returns this property and the function setCol takes an integer, and a game object and returns a new game object with that property set.  While producing an excess of boilerplate code, this/query/command pattern provides sensible defaults, and enables secure functional pipelining.

The Game type consists of two arrays, nodes and players, and two integers, min–the number of connected nodes to consider a winning set– and a currentColumn index. T It is here that the tedium of acessors functions becomes very useful. 

Rather than a assigning a first and second prayer properties the players fields is an array of player objects which rotates after every turn. The active player is the player currently in the first position. This avoids there potential clunkiness of some thing like if (this.currentPlayer===this.player1)
{this.currebtPkster=this.player1}
And hoping against any edge cases. On top of this, all functions that manipulate the type, return a new obect of that type, making revisions a non-issue.


. `;

const states = {
  caption: `Accommodates games of various win states`,
  content: `
~~~js
const C4 = setMin(3)(game());
const C5 = setMin(4)(game());

  
C4 {   
    column: 0,
    inPlay: false,
    min: 3,
    players: [...],
    nodes: [...],
  }
    
    
C5 {   
    column: 0,
    inPlay: false,
    min: 4,
    players: [...],
    nodes: [...],
  }
~~~
`,
};

const objects = {
  caption: `implements the entire game logic without any custom classes`,
  content: `
  ~~~js
  
// players
const dick = player('Dick', 0, 0); ...... { name: 'Dick', score: 0, id: 0 }
const jane = player('Jane', 0, 1); ...... { name: 'Dick', score: 0, id: 0 }
  
// nodes  
{ column: 0, row: 1, id: '<c0_r1>', player: null },
{ column: 0, row: 2, id: '<c0_r2>', player: null },
{ column: 0, row: 3, id: '<c0_r3>', player: null },

// game
{   
    column: 0,
    inPlay: false,
    min: 3,
    players: [
       { name: 'player0', score: 0, id: 0 },
       { name: 'player1', score: 0, id: 1 }, ],
    nodes: [
       { column: 0, row: 0, id: '<c0_r0>', player: null },
       ...
       { column: 6, row: 5, id: '<c6_r5>', player: null }, ],
  }

  ~~~~
`,
};

const monad = {
  caption: `Maintains Immutable game state with a monadic API`,
  content: `
~~~js
  
const dick = player('Dick', 0, 0);
const jane = player('Jane', 0, 1);

const tog0 = game([ dick, jane ]);
const tog1 = togglePlayers(tog0);
const tog2 = togglePlayers(tog1);

active(tog0) { name: 'Dick', score: 0, id: 0 }
// the tog0 object never changes,
// a new game is returned after each operation

active(tog1) { name: 'Jane', score: 0, id: 1 }
active(tog0) { name: 'Dick', score: 0, id: 0 }

active(tog2) { name: 'Dick', score: 0, id: 0 }
active(tog0) { name: 'Dick', score: 0, id: 0 }

~~~~
`,
};

export const slides = [ states, objects, monad ];
