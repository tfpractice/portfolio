const sortSkills = arr => arr.sort((a, b) => a.length - b.length);

const fInfo = `
## Frontend Frustrations

My time in the wilderness of front end development has been key to my versatility as a developer. I've chased changing standards, cobbled fussy solutions, and frequently cycled through frameworks hoping to find a system that would work consistently. Though frustrating, this process has given me a breadth of knowledge, and a set of auxilliary skill, and made me a particularly quick study.

I specialize in Data Visualization, Responsive Design, and Static App Deployment
`;

const fTech = [
  'react', 'jQuery', 'css', 'handlebars', 'redux', 'Bootstrap', 'material design',
  'apollo', 'd3js', 'sass', 'susy', ];

const bInfo = `
## Coding as Craft
Coming from an arts background, I treat coding as craft, and thrive amidst the almost limitless possibilities of what can be programmed using which techniques. This formal obsession characterizes many of my personal projects–—often spanning multiple repositories––which I treat as sketchbooks. 

Being so process-driven, I've become intimately familiar with the nuances of programming across paradigms, and an expert at refactoring. I specialize in rewriting class-based object oriented code in a modular, functional style. And prioritize work that is testable, composable, and extensible. I write code constantly, and I write it well.
`;
const bTech = [
  'nodejs', 'express', 'redux', 'ruby', 'php', 'mongoDB', 'firebase', 'mySQL',
  'ruby', 'graphQL', 'jest', 'rspec', 'jasmine', ];
  
export const frontEnd = {
  category: 'Frontend',
  headline: 'Frontend Frustrations',
  info: fInfo,
  skills: sortSkills(fTech),
};
export const backEnd = {
  category: 'Backend',
  headline: 'Coding as Craft',
  info: bInfo,
  skills: sortSkills(bTech),
};
