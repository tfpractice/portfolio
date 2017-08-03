import React from 'react';
import { SwipeTabs } from '../../misc';
import { colors } from './';

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
const Features = ({ features, details, category } = def) =>
  (<SwipeTabs iHue={colors[category]}>
    <Features tabLabel="tech" data={features} />
    <Features tabLabel="highlights" data={[ ...details ].map(d => d.caption)} />
  </SwipeTabs>);

export default Features;
