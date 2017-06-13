import Fenugreek from './fenugreek';

const xData = () => null;

export const demoMap = { 'fenugreek-collections': Fenugreek, };

export const getDemos = (slug) => {
  
  return new Set(Object.keys(demoMap)).has(slug) ? demoMap[slug] : xData;
};

//
// export const getProject =(slug){
//   return new Set(Object.keys(demoMap)).has(slug) ? demoMap[slug] : xData;
//
// }
