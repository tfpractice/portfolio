import * as d3 from 'd3';
import { teal, pink, } from 'material-ui/styles';

const sortSkills = arr => arr.sort((a, b) => a.name.length - b.name.length);
const typeSort = arr => arr.sort((a, b) =>
  (arr.map(s => s.type)).indexOf(a.type) - (arr.map(s => s.type)).indexOf(b.type));

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
  'susy', ];
  
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
  'jasmine', ];
    
const design = [
  { name: 'css3', type: 'DESIGN', },
  { name: 'sass', type: 'DESIGN', },
  { name: 'susy', type: 'DESIGN', },
  { name: 'material design', type: 'DESIGN', },
  { name: 'bootstrap', type: 'DESIGN', },
];

const markup = [
  { name: 'svg', type: 'MARKUP', },
  { name: 'handlebars', type: 'MARKUP', },
  { name: 'erb', type: 'MARKUP', },
  { name: 'markdown', type: 'MARKUP', },
  { name: 'babel', type: 'MARKUP', },
];

const inter = [
  { name: 'bootstrap', type: 'JS', },
  { name: 'd3js', type: 'JS', },
  { name: 'jquery', type: 'JS', },
  { name: 'react', type: 'JS', },
  { name: 'react-router', type: 'JS', },
  { name: 'redux', type: 'JS', },
];

const dbs = [
  { name: 'mongoDB', type: 'DATA', },
  { name: 'graphQL', type: 'DATA', },
  { name: 'mySQL', type: 'DATA', },
  { name: 'firebase', type: 'DATA', },
];

const langs = [
  { name: 'ruby', type: 'LANG', },
  { name: 'java', type: 'LANG', },
  { name: 'php', type: 'LANG', },
  { name: 'javascript', type: 'LANG', },
];

const tests = [
  { name: 'rspec', type: 'TDD', },
  { name: 'jest', type: 'TDD', },
  { name: 'jasmine', type: 'TDD', },
];
  
const bframe = [
  { name: 'ruby on rails', type: 'FRAMEWORK', },
  { name: 'nodejs', type: 'FRAMEWORK', },
  { name: 'wordpress', type: 'FRAMEWORK', },
  { name: 'express', type: 'FRAMEWORK', },
  { name: 'redux', type: 'FRAMEWORK', },
];

export const fSkills = [ ...sortSkills(design), ...sortSkills(markup), ...sortSkills(inter), ];
export const bSkills = [ ...sortSkills(dbs), ...sortSkills(langs), ...sortSkills(tests), ...sortSkills(bframe), ];
export const fTypes = new Set(fSkills.map(s => s.type));
export const bTypes = new Set(bSkills.map(s => s.type));

export const fScale = d3.scaleOrdinal([ '#00796b', '#212121', '#E91E63', '#757575', ])
  .domain(fTypes);
  
export const bScale = d3.scaleOrdinal([ '#00796b', '#212121', '#757575', '#E91E63', ])
  .domain(bTypes);
  
const fInfo = `
My time in the wilderness of front end development has been key to my versatility as a developer. I've chased changing standards, cobbled fussy solutions, and frequently cycled through frameworks hoping to find a system that would work consistently. Though frustrating, this process has given me a breadth of knowledge, and a set of auxilliary skill, and made me a particularly quick study.

I specialize in Data Visualization, Responsive Design, and Static App Deployment
`;

const bInfo = `
Coming from an arts background, I treat coding as craft, and thrive amidst the almost limitless possibilities of what can be programmed using which techniques. This formal obsession characterizes many of my personal projects–—often spanning multiple repositories––which I treat as sketchbooks. 

Being so process-driven, I've become intimately familiar with the nuances of programming across paradigms, and an expert at refactoring. I specialize in rewriting class-based object oriented code in a modular, functional style. And prioritize work that is testable, composable, and extensible. I write code constantly, and I write it well.
`;

export const frontEnd = {
  category: 'Frontend',
  headline: 'Frontend Frustrations',
  info: fInfo,
  skills: (fTech),
  skillSet: typeSort(fSkills),
};

export const backEnd = {
  category: 'Backend',
  headline: 'Coding as Craft',
  info: bInfo,
  skills: (bTech),
  skillSet: typeSort(bSkills),
};
