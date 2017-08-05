import { filter } from 'fenugreek-collections';

export const slug = ({ title }) => title.toLowerCase().replace(/(\W)/, '-');
export const matchSlug = param => project => param === slug(project);
export const findMatch = slg => pjs => !!pjs.length && pjs.find(matchSlug(slg));

export const isApp = ({ category }) => category === 'APP';
export const isLib = ({ category }) => category === 'LIB';
export const isScr = ({ category }) => category === 'SCRIPT';

export const appFilt = projects => filter(projects)(isApp);
export const libFilt = projects => filter(projects)(isLib);
export const scrFilt = projects => filter(projects)(isScr);

export const pColors = {
  APP: 'rgba(255,0,255,1)',
  LIB: 'rgba(0,255,255,1)',
};
export const dStyles = {
  APP: { backgroundColor: pColors.APP },
  LIB: { backgroundColor: pColors.LIB },
};
