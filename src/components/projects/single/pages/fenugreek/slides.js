
export const slides = [{
  caption: 'allows a high degree of interoperability between Javascript collections',
  
  content: `
  ~~~javascript
  // **isIterable** ~:: obj -> bool  ~
  // checks if an object is iterable
  export const isIterable = o => !!o[Symbol.iterator];

  // **iterify** ~:: obj -> iterable  ~
  // returns the object or an Iterable<a> containging the object
  export const iterify = o => isIterable(o) ? o : [ o, ];
  ~~~
  
  // **spread** ~:: Iterable<a> -> Iterable<a>~
  // returns an Iterable<a> of the collections default iterator
  export const spread = (coll = []) => [ ...iterify(coll), ];
`,
},
{
  caption: 'recasts native variadic functions as partially applied/curried unary functions',
  content: `
  ~~~js

// **first** ``:: Iterable<a> -> a `` 
// returns the first element of an iterable
export const first = (c = []) => spread(c).shift();

// **last** ``:: Iterable<a> -> a``  
// returns the last element of an iterable
export const last = (c = []) => spread(c).pop();
  
// **map** :: Iterable<a>  -> (a->b) -> [b]
// returns an Iterable<a> of the return values of a
// function called on each element of an iterable
export const map = coll => fn => spread(coll).map(fn);

// **mapTo** :: (a->b) -> Iterable<a>  -> [b]
// returns an Iterable<a> of the return values of a
// function called on each element of an iterable
export const mapTo = fn => coll => map(coll)(fn);
~~~ `,
},
{
  caption: 'implements mathematical set functions',
  content: `
~~~js
// **inter** ``:: Iterable<a> -> Iterable<a> -> [a]``  
// returns elements shared between two iterables;
export const inter = c0 => c1 => spread(c0).filter(hasK(c1));

// **diff** ``:: Iterable<a> -> Iterable<a> -> [a]``  
// returns elements of the first iterable absent from the second iterable
export const diff = c0 => c1 => spread(c0).filter(xhasK(c1));

// **union** ``:: Iterable<a> -> Iterable<a> -> [a]``  
// returns elements of both iterables
export const union = c0 => c1 => spread(c0).concat(diff(c1)(c0));
~~~
`,
},
];
