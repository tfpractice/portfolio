import * as Fenugreek from './fenugreek';
import * as Graph from './graph';

const xData = {
  technicals: [],
  techniques: [],
  slides: [],
  highlights: [],
  thoughts: [],
  devEx: [],
  future: [],
};

export const slugMap = {
  'fenugreek-collections': Fenugreek,
  'graph-curry': Graph,
};

export const slugData = (slug) => {
  console.log('Object.keys(slugMap)', Object.keys(slugMap));
  return new Set(Object.keys(slugMap)).has(slug) ? slugMap[slug] : xData;
};
