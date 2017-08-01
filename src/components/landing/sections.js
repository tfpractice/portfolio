import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

import { RawPath } from '../visualization';

export const style = { overflowX: 'hidden' };

export const sections = [
  '#frontMatter',
  '#about',
  '#teaching',
  '#apps',
  '#libs',
];
export const ixMap = new Map(sections.map((k, i) => [ k, i ]));

export const hexIcon = (
  <SvgIcon transform="scale(1.3)" viewBox="-1,-1,2,2">
    <RawPath />
  </SvgIcon>
);

export const lMap = new Map(
  sections.map((k, i) => (i ? [ k, k.slice(1).toUpperCase() ] : [ k, hexIcon ]))
);

export const getIndex = (key = '#frontMatter') =>
  ixMap.has(key) ? ixMap.get(key) : 0;

export const getLabel = (key = '#frontMatter') =>
  lMap.has(key) ? lMap.get(key) : '';
