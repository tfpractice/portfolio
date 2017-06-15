import Fenugreek, * as FenData from './fenugreek';
import * as Graph from './graph';
const xData = () => null;

export const slugMap = {
  'fenugreek-collections': FenData,
  'graph-curry': Graph,
};
export const getProject = slug =>
  new Set(Object.keys(slugMap)).has(slug) ? slugMap[slug] : xData;
export const getDemos = slug =>
  getProject(slug).Demo || xData;

export const getSlides = slug =>
  getProject(slug).slides || [];
export const getTech = slug =>
  getProject(slug).tech || [];
export const getContent = slug =>
  getProject(slug).content || '';
