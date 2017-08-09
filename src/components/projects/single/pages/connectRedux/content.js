const auth = {
  caption: `integrates redux and firebase authentication with redux store`,
  content: `### integrates redux and firebase authentication with redux store
~~~javascript
export const onlineHandler = (store) => {
  // when a user creates a connection
  // add that player to the game
  onlineRef.on('child_added', (snap) => {
    hasName(snap) && store.dispatch(addPlayer(snap.val()));
  });

  onlineRef.on('child_changed', (snap) => {
    if (curDiscon(snap)) {
      // if the logged in user's client lacks 'connections'
      // log them out
      store.dispatch(logout());
    } 
    ...
    else if (hasConn(snap)) {
    // if the logged in user db reference changes 
    // in a way that is unrelated to 'connections'
    // add the updated player to the game
      store.dispatch(addPlayer(snap.val()));
    }
  });
};
~~~
`,
};
const vis = {
  caption: `integrates react rendering with d3 visualization`,
  content: `### integrates react rendering with d3 visualization
~~~js
// React component representing node objects
const Node = ({ node: { column, row, id, }, fill }) =>(
  <circle 
    id={id} 
    className="nodeCircle"
    cx={column * 10} cy={row * 10} 
  />
);

// d3 selection to manipulate node objects
export const nodeSelect = nArr =>
  d3
    .select('.boardVis')
    .selectAll('.colGroup')
    .data(cIDs(nArr))
    .selectAll('.nodeCircle')
    .data(byCol(nArr));
~~~
`,
};

const client = {
  caption: `manages identical game state across clients`,
  content: `### manages identical game state across clients
  ~~~js
  // redux middleware to only apply state updates 
  // that did not originate from this client
  export const fireMid = ({ dispatch, getState, }) => next => (action) => {
    const result = next(action);
    
    if (GAME_ACTIONS.has(action.type)) {
      if (action.type !== 'UPDATE_GAME') {
        gameRef.set(getState().game);
      }
    }
    
    return result;
  };

~~~
`,
};

export const slides = [ auth, vis, client ];
