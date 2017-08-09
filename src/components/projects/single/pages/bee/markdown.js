const SAS = {
  caption: `Suits, Ranks, and Cycles`,
  content: `Designing suits and ranks seemed simple enough, but the categorical suits and the cyclical ranks meant that things owuld have to get more complex. The ranks employ modular arithmetic to calculate minimum and maximu rank distance between cards. This way Ace was both before and after a King by 12 and 1 respectiveky.
  ~~~js

  export const idx = arr => r => arr.indexOf(lower(r));
  export const modIdx = arr => id => arr[((id + arr.length) % arr.length)];

  const get = map => k => new Map(map).get(k);

  export const getNext = arr => r => modIdx(arr)(get(idxMap(arr))(r) + 1);
  export const getPrev = arr => r => modIdx(arr)(get(idxMap(arr))(r) - 1);

  export const next = r => getNext(RANKS)(r);
  export const prev = r => getPrev(RANKS)(r);

  ~~~


  The card type consists of rank and suit properties, and an id field that combines the two. A number of functions operate on cards using the comparison functions from the rank and suit modules.
  ~~~js

  export const rankVal = r => VALUES.get(lower(r));
  export const diff = a => b => (norm(rankVal(a) - rankVal(b)));

  export const isHigher = a => b => rankVal(b) > rankVal(a);
  export const isLower = a => b => rankVal(b) < rankVal(a);

  export const dist = a => b => isHigher(a)(b) ? diff(a)(b) : diff(b)(a);
  export const maxDist = a => b => isLower(a)(b) ? diff(a)(b) : diff(b)(a);
  export const minDist = dist;
  ~~~

  In order to maitain both immutabiity and uniqueness across a collection of cards. 
`,
};

const full = `
## Suits, Ranks, and Cycles
Designing suits and ranks seemed simple enough, but the categorical suits and the cyclical ranks meant that things owuld have to get more complex. The ranks employ modular arithmetic to calculate minimum and maximu rank distance between cards. This way Ace was both before and after a King by 12 and 1 respectiveky.
~~~js

export const idx = arr => r => arr.indexOf(lower(r));
export const modIdx = arr => id => arr[((id + arr.length) % arr.length)];

const get = map => k => new Map(map).get(k);

export const getNext = arr => r => modIdx(arr)(get(idxMap(arr))(r) + 1);
export const getPrev = arr => r => modIdx(arr)(get(idxMap(arr))(r) - 1);

export const next = r => getNext(RANKS)(r);
export const prev = r => getPrev(RANKS)(r);

~~~


The card type consists of rank and suit properties, and an id field that combines the two. A number of functions operate on cards using the comparison functions from the rank and suit modules.
~~~js

export const rankVal = r => VALUES.get(lower(r));
export const diff = a => b => (norm(rankVal(a) - rankVal(b)));

export const isHigher = a => b => rankVal(b) > rankVal(a);
export const isLower = a => b => rankVal(b) < rankVal(a);

export const dist = a => b => isHigher(a)(b) ? diff(a)(b) : diff(b)(a);
export const maxDist = a => b => isLower(a)(b) ? diff(a)(b) : diff(b)(a);
export const minDist = dist;
~~~

In order to maitain both immutabiity and uniqueness across a collection of cards. 
`;

export const content = full;

const graphs = {
  caption: 'builds suit- and rank-based relationships via graph theory',
  content: `
~~~js
const AH = card('a', 'HEARTS');
const AS = card('a', 'SPADES');
const KS = card('K', 'SPADES');
const 2D = card('2','DIAMONDS');

ranksHigher(KS)(AS) //  true
ranksLower(AS)(KS) // true
hasAdjRank('a')(2D) //  true
adjRanks(2D) // [ 'a', '3', ];

~~~`,
};

const cycles = {
  caption: 'employs modular aritmetic to manage rank comparisons',
  content: `
    
  ~~~js
  
  next(K) // A
  prev(K) // Q
  
  minDist('A')('2') 1
  maxDist('A')('2') 12

  ~~~
`,
};
const decks = {
  caption: 'provides methods for dealing, sorting, drawing imuutable decks',
  content: `
  ~~~js
  suitSort(deck())
    [ { rank: '2', suit: 'CLUBS', id: '2_CLUBS' },
      { rank: '4', suit: 'CLUBS', id: '4_CLUBS' },
      { rank: 'a', suit: 'CLUBS', id: 'a_CLUBS' },
      { rank: '5', suit: 'CLUBS', id: '5_CLUBS' },
      { rank: '7', suit: 'CLUBS', id: '7_CLUBS' },
      ...
      
  rankSort(myDeck) 
    [ { rank: '2', suit: 'HEARTS', id: '2_HEARTS' },
      { rank: '2', suit: 'SPADES', id: '2_SPADES' },
      { rank: '2', suit: 'DIAMONDS', id: '2_DIAMONDS' },
      { rank: '2', suit: 'CLUBS', id: '2_CLUBS' },
      { rank: '3', suit: 'SPADES', id: '3_SPADES' },
      ...
  ~~~~
`,
};

export const slides = [ graphs, cycles, decks ];
