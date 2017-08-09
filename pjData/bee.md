##Bee52

##Suits, Ranks, and Cycles
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
