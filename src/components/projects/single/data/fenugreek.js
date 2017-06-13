
export const info = 'a library of utilities for functionally handling collections in javascript';

export const highlights = [
  'allows a high degree of interoperability between Javascript collections',
  'recasts native variadic functions as partially applied/curried unary functions',
  'implements mathematical set functions',
];

export const technicals = [ 'built with es6, and bundled with Rollup', ];
export const future = [
  `make this part of a monorepo in the way of MaterialUI, enabling a more fluent,
  and specific import export process`,
];

const files = [
  {
    data: 'allows a high degree of interoperability between arrays, Maps, and Sets collections such as Maps',
    blobUrl: '',
  },
  { data: 'recasts native variadic functions as partially applied/curried unary functions   of composability', },
  { data: 'implements mathematical set functions', },
];

export const slides = files;
export const devEx = [
  `this was my first attempt at writing a library from a functional
   perspective. And most of the complicated issues were architectural. On a modular
   level, exporting a single function per module seemed like a draconian exercise in 
   code-etiqutte, so I decided to group similar functions together. This led to
    complications with circular dependencies and  naming conventions.`,
    
  `On a per fucntion level, the decision to partially apply presented a number of orthogonal issues.
    If the native function such as Array#push(elem) requires both an array and an element,
    should it be written as push(array)(elem) or push(elem)(array). Thinking that this 
    module would be collection focused, I decided that most of the fucntions should take
    in an array, and would be simplify api learning curve. 
    This question is still unresolved, and some functions, partiuarly those like
    Array#map, Array#filter, and Array#reduce have permuted counterParts`,
];
export const thoughts = devEx;
