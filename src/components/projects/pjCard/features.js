import React from 'react';

import { SwipeTabs } from '../../misc';
import { pColors } from '../../../utils';

const Features = ({ features, details, category }) =>
  (<SwipeTabs iHue={pColors[category]}>
    <Features tabLabel="tech" data={features} />
    <Features tabLabel="highlights" data={[ ...details ].map(d => d.caption)} />
  </SwipeTabs>);

export default Features;
