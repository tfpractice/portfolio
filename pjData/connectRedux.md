## Connect Four
This was one of my earliest react/redux apps and I was very proud of how easily it was to get the game logic to work. The imuutable and functional approach I tok in designing the library made integration into redux a snap. Implementing a naturalistic user experience was an entirely different concern altogether.

The game API was simple by design and so designing the 'SET_COLUMN' and 'CLAIM_NODE' actions was no biggie, but in my game, the columns are less real pieces of Hasbro plastic, and more of a  collection of nodes. With my previous experience with D3, and the knowledge that SVG elements are legitimate DOM elements, I went that route.

The Board is a simple <svg> tag with a viewbox set to scale appropriately for the number of columns and rows needed for the game. The Columns are <g> tags which group together node elements, represented by <circle> tags. 

Because connect four traditionally only allows users to interface directly with the columms, I implemented a mouseover event that sets the current column, and a clickHandler that claims the next free node in that column if available. This all worked fantastically, and I honestly could have stopped there. 

But then I realized that because this was in fact pixels on a screen and not hasbro plastic, that the positions of the nodes on screen didn't need to mimic the actual structure of the original game for the logic to work properly. the nodes could be placed anywhere as long as the underlying column and row data remained intact. I've implemented a d3js force-simulation to allow a certain degree of mobility with the nodes, but the constant recalculations required of by d3 and its affinity for global scoping, did not combine efficiently with immutable state and redux. I've tried almost everything, including a web-worker, so the fantasy of swirling circles is slated for later developement.
