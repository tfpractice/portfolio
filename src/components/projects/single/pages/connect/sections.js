
const extension = {
  header: 'Extension',
  content: `Along with the column and row properties from Game Grid, the node type here contains a player property, along with functions ~claim~ and ~unclaim~ to set this property. On top of the all important query function, ~isFree~ checks if the player property is null.

This simple query easily extends to a collection of nodes, and forms there basis of the column API. ~hasFree~ checks if any of these nodes in a given collection are unclaimed; ~nextFree~ returns the first unclaimed node. 

This extends further into the game API which exposes a ~next~ and ~claimNext~ functions. The Game object contains an array of nodes and a reference to the currently selected column. 
Next returns the next free node in the current column ~select~ claims that node to the active player. 

This bubbling effect wherein a relatively minor operation grows to characterize an entire system facilitates an ironclad, elegant API that with foolproof composition. It appears throughout this and many of my projects
`,
}
const monads = {
  caption: 'Monads and Immutability',
  content: `Many of the base types in this package are simple objects without methods. The API provides accessor functions to retrieve and assign these values. The function getCol returns this property and the function setCol takes an integer, and a game object and returns a new game object with that property set.  While producing an excess of boilerplate code, this/query/command pattern provides sensible defaults, and enables secure functional pipelining.

The Game type consists of two arrays, nodes and players, and two integers, min–the number of connected nodes to consider a winning set– and a currentColumn index. T It is here that the tedium of acessors functions becomes very useful. 

Rather than a assigning a first and second prayer properties the players fields is an array of player objects which rotates after every turn. The active player is the player currently in the first position. This avoids there potential clunkiness of some thing like if (this.currentPlayer===this.player1)
{this.currebtPkster=this.player1}
And hoping against any edge cases. On top of this, all functions that manipulate the type, return a new obect of that type, making revisions a non-issue.

`,
}

export const sections = [ monads, extension ];
