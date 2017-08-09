export const slides = [
  {
    caption: `enables cross-collection interoperability`,
    content: `      
~~~js 
const myObj = {name:john, age:12};
const myArr = [1,2,3];
const mySet =  new Set([1,2,3]);


isIterable(myObj); .......... false
isIterable(myArr); .......... true
isIterable(mySet); .......... true

iterify(myObj); .......... [{name:john, age:12}]
iterify(myArr); .......... [1,2,3]
iterify(mySet); ..........  Set{1,2,3}

spread(myObj); .......... [{name:john, age:12}];
spread(myArr); .......... [1,2,3];
spread(mySet); .......... [1,2,3];
      
~~~
`,
  },
  {
    caption: 'recasts native variadic methods as curried unary functions',
    content: `
~~~js
const myArr = [1,2,3];
const mySet =  new Set([3,4,5]);
const double= x=> x*2
  
first(myArr) .........  1
first(mySet) .........  3

last(myArr) .........  3
last(mySet) .........  5

mapTo(double)(myArr) .........  [2,4,6]
mapTo(double)(mySet) .........  [6,8,10]
~~~

`,
  },
  {
    caption:
      'provides mathematical set functions absent in native JS implementation',
    content: `
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
  },
];
