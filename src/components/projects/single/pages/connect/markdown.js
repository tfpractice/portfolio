export const content = `## Connect Four Functional
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

. `;
