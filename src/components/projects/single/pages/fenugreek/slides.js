const variadic = {
  caption: 'recasts native variadic methods as curried unary functions',
  content: `### recasts native variadic methods as curried unary functions
~~~js
const jsArr = [1, 2, 3];
const myArr = [1, 2, 3];
const double= x=> x * 2

jsArr.shift() .........  1
first(myArr) .........  1

jsArr.pop() .........  3
last(myArr) .........  3

jsArr.map(double) .........  [2, 4, 6]
mapTo(double)(myArr) .........  [2, 4, 6]
~~~

`,
};

const interop = {
  caption: `enables cross-collection interoperability`,
  content: `### enables cross-collection interoperability
~~~js 
const myObj = {name: 'john', age: 12}
const myArr = [1, 2, 3];
const mySet =  new Set([1, 2, 3]);
const myMap = new Map()
  .set('one', 1)
  .set('two', 2)
  .set('three', 3)
  .set('four', 4);

first(myArr) .........  1
first(mySet) .........  3
first(myMap) ......... [ 'one', 1 ]
  
  
last(myArr) .........  3
last(mySet) .........  5
last(myMap) ......... [ 'four', 4 ]
 


isIterable(myObj); .......... false
isIterable(myArr); .......... true
isIterable(mySet); .......... true
isIterable(myMap); .......... true

iterify(myObj); .......... [{name: 'john', age: 12}]
iterify(myArr); .......... [1, 2, 3]
iterify(mySet); ..........  Set{1, 2, 3}
iterify(myMap) ...... Map { 
  'one' => 1,
  'two' => 2,
  'three' => 3,
  'four' => 4
 }
 
spread(myObj); .......... [{name: 'john', age: 12}];
spread(myArr); .......... [1, 2, 3];
spread(mySet); .......... [1, 2, 3];
spread(myMap) ...... [ 
  [ 'one', 1 ], 
  [ 'two', 2 ], 
  [ 'three', 3 ], 
  [ 'four', 4 ] ]

first(myObj) .........  { name: 'john', age: 12 }
first(myArr) .........  1
first(mySet) .........  3
first(myMap) .........  [ 'one', 1 ]
~~~
`,
};
const sets = {
  caption:
    'provides mathematical set functions absent in native JS implementation',
  content: `### provides mathematical set functions absent in native JS implementation
~~~js
const myArr = [1,2,3];
const mySet =  new Set([3,4,5]);
const yourSet =  new Set([3,6,9]);
const double= x => x * 2

inter(mySet)(yourSet) ..........  [3]
union(yourSet)(mySet) ..........  [3,4,5,6,9]

diff(mySet)(yourSet) ..........  [4,5]
diff(yourSet)(mySet) ..........  [6,9]
~~~
`,
};

export const slides = [ variadic, interop, sets ];
