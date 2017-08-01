import { ApolloClient } from 'react-apollo';
import networkInterface from './interface';

const initClient = (headers, initialState) => new ApolloClient({
  initialState,
  networkInterface,
  ssrMode: !process.browser,
  queryDeduplication: true,
});

export default initClient;
