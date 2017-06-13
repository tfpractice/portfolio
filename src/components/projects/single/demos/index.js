import Fenugreek from './fenugreek';

// export const getE

const xData = () => null;

export const demoMap = { 'fenugreek-collections': Fenugreek, };

export const getDemos = (slug) => {
  console.log('Object.keys(slugMap)', Object.keys(demoMap));
  return new Set(Object.keys(demoMap)).has(slug) ? demoMap[slug] : xData;
};
