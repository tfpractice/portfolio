import { filter, } from 'fenugreek-collections';

export const slug = ({ title, }) => title.toLowerCase().replace(/(\W)/, '-');
export const matchSlug = param => project => param === slug(project);
export const findMatch = param => projects => projects.find(matchSlug(param));

export const isApp = ({ category, }) => category === 'APP';
export const isLib = ({ category, }) => category === 'LIB';
export const isScr = ({ category, }) => category === 'SCRIPT';

export const appFilt = projects => filter(projects)(isApp);
export const libFilt = projects => filter(projects)(isLib);
export const scrFilt = projects => filter(projects)(isScr);
