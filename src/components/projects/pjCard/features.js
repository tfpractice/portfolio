import React from 'react';
import { SwipeTabs } from '../../misc';
import { pColors, slug } from '../../../utils';

import { getSlides } from '../single/';

const def = {
  category: 'LIB',
  details: [
    { caption: 'built with es6, bundled with Rollup' },
    { caption: '90% code-coverage, tested with Jest' },
    { caption: 'full documentation deployed on surge' },
  ],
  features: [
    'built with es6, bundled with Rollup',
    '90% code-coverage, tested with Jest',
    'full documentation deployed on surge',
  ],
};
const Features = ({ features, details, category }) =>
  (<SwipeTabs iHue={pColors[category]}>
    <Features tabLabel="tech" data={features} />
    <Features tabLabel="highlights" data={[ ...details ].map(d => d.caption)} />
  </SwipeTabs>);

export default Features;
