import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { Link, NavLink } from 'react-router-dom';
import { RawPath } from '../visualization';

export const style = { color: '#fff', textDecoration: 'none' };

export const sections = [
  '#frontMatter',
  '#about',
  '#teaching',
  '#apps',
  '#libs',
];

export const linkName = (k) => {
  const sliced = k.slice(1);

  if (sliced === 'apps') {
    return 'APPLICATIONS';
  } else if (sliced === 'libs') {
    return 'LIBRARIES';
  }
  return sliced.toUpperCase();
};
export const ixMap = new Map(sections.map((k, i) => [ k, i ]));

export const hexIcon = (
  <SvgIcon transform="scale(1.3)" viewBox="-1,-1,2,2">
    <RawPath />
  </SvgIcon>
);

export const lMap = new Map(
  sections.map((k, i) => (i ? [ k, linkName(k) ] : [ k, hexIcon ]))
);

export const getIndex = (key = '#frontMatter') =>
  ixMap.has(key) ? ixMap.get(key) : 0;

export const getLabel = (key = '#frontMatter') =>
  lMap.has(key)
    ? <NavLink to={`/${key}`} style={style}>
      {lMap.get(key)}
    </NavLink>
    : '';
