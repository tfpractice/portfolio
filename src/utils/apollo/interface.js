import { createNetworkInterface, } from 'react-apollo';

// import { authWare, reqLogger, resLogger, } from './middleware';
//
const networkInterface = createNetworkInterface({
  uri: 'https://us-west-2.api.scaphold.io/graphql/tfp-portfolio',
  opts: { credentials: 'same-origin', },
});

// .use([ authWare, reqLogger, ]).useAfter([ resLogger, ]);

export default networkInterface;
