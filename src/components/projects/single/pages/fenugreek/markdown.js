
export const markdown = `
## Fenugreek Collections
This is one of the projects I've been most proud of, and marks the moment in my development experience at which my interests moved from programming solutions to programming about programming. Having developed a certain comfort with the complicated things I could do _with_ code, I became interested in what the code _itself_ could do. And as I was moving toward a more collection-based functional style, I decided to fully investigate the Array.

With es6 and the advent of collections Maps, Set, WekaMaps, and WeakSets, many of my programmatic problems had been addressed, but I had very little interest in validations, prototype checking, and \`try...catch\` blocks, so this projects main purpose was to allow for a certain interoperability between these collections.

The conceptual root of this entire project is iterability, and in javascript all collections have the \`[Symbol.iterator]\` property. This led to two functions which form the basis of the project

~~~javascript
// **isIterable** ~:: obj -> bool  ~
// checks if an object is iterable
export const isIterable = o => !!o[Symbol.iterator];

// **iterify** ~:: obj -> iterable  ~
// returns the object or an Iterable<a> containging the object
export const iterify = o => isIterable(o) ? o : [ o, ];
~~~

With the need to develop a general API, much of the project coerces things into an Array via the ~iterify~ and the ~spread*~ functions.

~~~javascript
import { iterify, } from './iterable';

// **spread** ~:: Iterable<a> -> Iterable<a>~
// returns an Iterable<a> of the collections default iterator
export const spread = (coll = []) => [ ...iterify(coll), ];

// **spreadK** ~:: Iterable<a> -> Iterable<a>~
// returns an Iterable<a> of the collections keys
export const spreadK = (coll = []) => spread(iterify(coll).keys());

// **spreadV** ~:: Iterable<a> -> Iterable<a>~
// returns an Iterable<a> of the collections values
export const spreadV = (coll = []) => spread(iterify(coll).values());

// **spreadE** ~:: Iterable<a> -> Iterable<a>~
// returns an Iterable<a> of the collections entries
export const spreadE = (coll = []) => spread(iterify(coll).entries());
~~~
Once I had successfully coerced things to the structure I wanted, most validations were reduced to a simple ternary expression, and abstracting native methods such as \`Array#push\` and \`Array#slice\` became a breeze.

~~~javascript
// **first** ~:: Iterable<a> -> a~  
// returns the first element of an iterable
export const first = (c = []) => spread(c).shift();

// **last** ~:: Iterable<a> -> a~  
// returns the last element of an iterable
export const last = (c = []) => spread(c).pop();

export const rest = coll => spread(coll).slice(1);

~~~

And then the real fun began. I could explore deeper theoretical interests in monoids/monads, partial application and currying, and immutability. All without the pesky context of meeting a spec for an actual application.

I knew that I would want "collections in, collections out", and that \`Array#map\` \`Array#reduce\` and \`Array#filter\` would help with this. This is why many of the unary functions have a binary counterpart.


~~~javascript
// **tuple** ~:: a -> a -> [a]~  
// returns a [val, key] Iterable<a>
export const tuple = val => key => [ key, val, ];

// **tupleBin** ~:: (a, a) -> [a]~  
// returns a [val, key] Iterable<a>
export const tupleBin = (v, k) => tuple(v)(k);

// **append** ~:: Iterable<a> -> a -> [a]~  
// concatenates an iterable and an object
export const append = coll => val => [ ...iterify(coll), val, ];

// **appendBin** ~:: (Iterable<a>,a) -> [a]~  
// concatenates an iterable and an object
export const appendBin = (c, v) => append(c)(v);
~~~


The final and most important part of this project was implementing a more robust mathematical set operations than provided by js itself. While many external implementations of set methods are key-based (using an id-accessor function/property), my interest in immutability and interoperability suggested that I was only changing the containers, and not the objects themselves. 

~~~javascript
// **inter** ~:: Iterable<a> -> Iterable<a> -> [a]~  
// returns elements shared between two iterables;
export const inter = c0 => c1 => spread(c0).filter(hasK(c1));

// **diff** ~:: Iterable<a> -> Iterable<a> -> [a]~  
// returns elements of the first iterable absent from the second iterable
export const diff = c0 => c1 => spread(c0).filter(xhasK(c1));

// **union** ~:: Iterable<a> -> Iterable<a> -> [a]~  
// returns elements of both iterables
export const union = c0 => c1 => spread(c0).concat(diff(c1)(c0));
~~~

`;

export const tech = [
  'built with es6, bundled with Rollup',
  '90% code-coverage, tested with Jest',
  'full documentation deployed on surge',
];
