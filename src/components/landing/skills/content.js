import * as d3 from 'd3';

// import { teal, pink, } from 'material-ui/styles';

const fTech = [
  'react',
  'jQuery',
  'css',
  'handlebars',
  'redux',
  'Bootstrap',
  'material design',
  'apollo',
  'd3js',
  'sass',
  'susy',
];

const bTech = [
  'nodejs',
  'express',
  'redux',
  'ruby',
  'php',
  'mongoDB',
  'firebase',
  'mySQL',
  'ruby',
  'graphQL',
  'jest',
  'rspec',
  'jasmine',
];
const DESIGN = 'Design';
const MARKUP = 'Markup';
const JS = 'Javascript';
const DATA = 'Databases';
const TDD = 'Test Driven Development';
const LANG = 'Languages';
const FRAMEWORK = 'Frameworks';

const design = [
  { name: 'css3', type: DESIGN },
  { name: 'sass', type: DESIGN },
  { name: 'susy', type: DESIGN },
  { name: 'bootstrap', type: DESIGN },
  { name: 'material design', type: DESIGN },
];

const markup = [
  { name: 'svg', type: MARKUP },
  { name: 'handlebars', type: MARKUP },
  { name: 'erb', type: MARKUP },
  { name: 'markdown', type: MARKUP },
  { name: 'babel', type: MARKUP },
];

const inter = [
  { name: 'd3js', type: JS },
  { name: 'jquery', type: JS },
  { name: 'react', type: JS },
  { name: 'react-router', type: JS },
  { name: 'redux', type: JS },
];

const dbs = [
  { name: 'mongoDB', type: DATA },
  { name: 'graphQL', type: DATA },
  { name: 'mySQL', type: DATA },
  { name: 'firebase', type: DATA },
];

const langs = [
  { name: 'ruby', type: LANG },
  { name: 'java', type: LANG },
  { name: 'php', type: LANG },
  { name: 'javascript', type: LANG },
];

const tests = [
  { name: 'rspec', type: TDD },
  { name: 'jest', type: TDD },
  { name: 'jasmine', type: TDD },
];

const bframe = [
  { name: 'ruby on rails', type: FRAMEWORK },
  { name: 'nodejs', type: FRAMEWORK },
  { name: 'wordpress', type: FRAMEWORK },
  { name: 'express', type: FRAMEWORK },
  { name: 'redux', type: FRAMEWORK },
];

const sortSkills = arr => arr.sort((a, b) => a.name.length - b.name.length);

export const fSkills = [
  ...sortSkills(design),
  ...sortSkills(markup),
  ...sortSkills(inter),
];

export const bSkills = [
  ...sortSkills(dbs),
  ...sortSkills(langs),
  ...sortSkills(tests),
  ...sortSkills(bframe),
];

const typeSet = arr => [ ...new Set(arr.map(s => s.type)) ];
const typeSort = arr =>
  arr.sort((a, b) => {
    const types = [ ...new Set(arr.map(s => s.type)) ];

    return types.indexOf(a.type) - types.indexOf(b.type);
  });

const defStack = { stack: 'BACK' };

export const stackTypes = [ 'BACK', 'FRONT', 'BOTH', '' ];
export const getStack = ({ stack } = defStack) => stack;
export const stackSort = (a, b) => getStack(b) - getStack(a);

const sExtent = tools => d3.extent(tools.map(getStack));
const sIdx = tools => t => sExtent(tools).indexOf(getStack(t));
const compareIDX = tools => (a, b) => sIdx(tools)(a) - sIdx(tools)(b);

export const tSort = tools => [ ...tools ].sort(compareIDX(tools));

export const fTypes = new Set(fSkills.map(s => s.type));
export const bTypes = new Set(bSkills.map(s => s.type));
export const fScale = d3
  .scaleOrdinal([ '#00796b', '#212121', '#D81B60', '#757575' ])
  .domain(fTypes);

export const bScale = d3
  .scaleOrdinal([ '#00796b', '#212121', '#757575', '#D81B60' ])
  .domain(bTypes);

export const stackScale = d3
  .scaleOrdinal([ '#00796b', '#212121', '#757575', '#D81B60' ])
  .domain(stackTypes);

const fInfo = `
My time in the wilderness of frontend development has been key to my versatility as a developer. Chasing changing standards, hacking fussy solutions, and cycling through frameworks has given me a breadth of knowledge, experience, and made me a particularly quick study.

I specialize in Data Visualization, Responsive Design, and Static App Deployment
`;

const bInfo = `
Coming from an arts background, I treat coding as craft, and thrive amidst the almost limitless solutions to programming problems. This formal obsession characterizes many of my personal projects—often spanning multiple repositories—which I treat as sketchbooks. 

Being so process-driven, I now know the nuances of programming across paradigms, and am an expert at refactoring. I especially enjoy rewriting classical object-oriented code in a functional style. I write code constantly, and I write it well.
`;

export const frontEnd = {
  category: 'Frontend',
  headline: 'Frontend Frontiers',
  info: fInfo,
  skills: fTech,
  skillSet: fSkills,
};

export const backEnd = {
  category: 'Backend',
  headline: 'Coding as Craft',
  info: bInfo,
  skills: bTech,
  skillSet: bSkills,
};

export const skillTypes = [ frontEnd, backEnd ];
