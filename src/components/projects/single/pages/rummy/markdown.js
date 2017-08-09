const rules = {
  caption: `builds a highly complex rules set onto simple two property objects`,
  content: `### builds a highly complex rules set onto simple two property objects
~~~js
const AH = card('a', 'HEARTS');
const AS = card('a', 'SPADES');
const KS = card('K', 'SPADES');
const 2D = card('2','DIAMONDS');

ranksHigher(KS)(AS)   true
ranksLower(AS)(KS)  true
hasAdjRank('a')(2D)   true
adjRanks(2D)  [ 'a', '3', ];

~~~`,
};

const strategy = {
  caption: `Leverages graph theory to properly determine successive gestures `,
  content: `### Leverages graph theory to properly determine successive gestures     
~~~js
const AH = card('a', 'HEARTS');
const AS = card('a', 'SPADES');
const KS = card('K', 'SPADES');
const 2D = card('2','DIAMONDS');

ranksHigher(KS)(AS) .........  true
ranksLower(AS)(KS) ......... true
hasAdjRank('a')(2D) .........  true
adjRanks(2D) ......... [ 'a', '3', ];

~~~`,
};
const sets = {
  caption: `composes sets based on identity of rank across suites and identity of suit through a sequence of ranks `,
  content: `### composes sets based on identity of rank across suits and identity of suit through a sequence of ranks 
  ~~~js
  const myDeck = deck();
  const D2 = card('2', 'DIAMONDS');

  byAdj(D2)(myDeck) 
    [ { rank: 'a', suit: 'DIAMONDS', id: 'a_DIAMONDS' },
    { rank: '3', suit: 'DIAMONDS', id: '3_DIAMONDS' } ]
  
  bySet(D2)(myDeck)
    [ { rank: '2', suit: 'SPADES', id: '2_SPADES' },
    { rank: '2', suit: 'HEARTS', id: '2_HEARTS' },
    { rank: '2', suit: 'CLUBS', id: '2_CLUBS' } ]      
~~~`,
};

export const slides = [ sets, rules, strategy ];
export const content = `This was far me complex of a task than I had anticipated. Given the simplicity of the card library I had developed. Without delving to deploy into the various conditions the comprise rummy there are three basic rules that were central to the developer experience. 


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
`;
