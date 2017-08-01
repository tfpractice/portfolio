import { createNetworkInterface } from 'react-apollo';

import { reqLogger, resLogger } from './middleware';

const networkInterface = createNetworkInterface({
  uri: 'https://us-west-2.api.scaphold.io/graphql/tfp-portfolio',
  opts: { credentials: 'same-origin' },
})
  .use([ reqLogger ])
  .useAfter([ resLogger ]);

export default networkInterface;
