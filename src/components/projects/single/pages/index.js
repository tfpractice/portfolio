import * as FenData from './fenugreek';
import * as Bee from './bee';
import * as Graph from './graph';
import * as Game from './game';
import * as C4 from './connect';
import * as Rummy from './rummy';
import * as CDux from './connectRedux';
import * as Venery from './venery';
import * as FilmRatr from './filmRatr';
import * as RumDux from './rumRedux';

const xData = () => null;

export const slugMap = {
  bee52: Bee,
  venery: Venery,
  filmratr: FilmRatr,
  'game-grid': Game,
  'graph-curry': Graph,
  'connect-four': C4,
  'rummy-rules': Rummy,
  'rummy-redux': RumDux,
  'connect-four-redux': CDux,
  'fenugreek-collections': FenData,
};
export const getProject = slug =>
  new Set(Object.keys(slugMap)).has(slug) ? slugMap[slug] : xData;

export const hasDemos = slug => !!getProject(slug).Demo;
export const getDemos = slug => getProject(slug).Demo || '';

export const hasSlides = slug => !!getProject(slug).slides;
export const getSlides = slug => getProject(slug).slides || [];
export const getTech = slug =>
  getProject(slug).tech || [
    'written in es6, transpiled with Rollup',
    'continuous integration with Travis CI',
    'documentation site deployed on surge',
  ];

export const getContent = slug => getProject(slug).content || '';
