import * as FenData from './fenugreek';
import * as Graph from './graph';
import * as Game from './game';

const xData = () => null;

export const slugMap = {
  'fenugreek-collections': FenData,
  'graph-curry': Graph,
  'game-grid': Game,
};
export const getProject = slug =>
  new Set(Object.keys(slugMap)).has(slug) ? slugMap[slug] : xData;

export const hasDemos = slug => !!getProject(slug).Demo;
export const getDemos = slug => getProject(slug).Demo || '';

export const hasSlides = slug => !!getProject(slug).slides;
export const getSlides = slug => getProject(slug).slides || [];
export const getTech = slug =>
  getProject(slug).tech || [
    'built with es6, bundled with Rollup',
    '90% code-coverage, tested with Jest',
    'full documentation deployed on surge',
  ];

export const getContent = slug => getProject(slug).content || '';
