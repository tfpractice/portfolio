import Fenugreek, * as FenData from './fenugreek';

const xData = () => null;

export const slugMap = { 'fenugreek-collections': FenData, };

export const getDemos = slug =>
  new Set(Object.keys(slugMap)).has(slug) ? slugMap[slug].Demo : xData;
export const getProject = slug =>
  new Set(Object.keys(slugMap)).has(slug) ? slugMap[slug] : xData;
export const getSlides = slug =>
  new Set(Object.keys(slugMap)).has(slug) ? slugMap[slug].slides : [];
