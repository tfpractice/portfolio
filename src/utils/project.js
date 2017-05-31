export const slug = ({ title, }) => title.toLowerCase().replace(/(\W)/, '-');
export const matchSlug = param => project => param === slug(project);
export const findMatch = param => projects => projects.find(matchSlug(param));
