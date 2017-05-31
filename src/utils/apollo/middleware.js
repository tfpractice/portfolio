import { ApolloClient, createNetworkInterface, } from 'react-apollo';

// import * as stream from 'stream';
// console.log('stream', stream());
const post = ({ response, }, next) => next();
const pre = (req, next) => next();

const preWare = (applyMiddleware = pre) => ({ applyMiddleware, });
const postWare = (applyAfterware = post) => ({ applyAfterware, });

const preLog = (req, next) => {
  console.log('APOLLO REQUEST IN PRGRESS ');

  // console.log('req', req);
  next();
};

const auth = (req, next) => {
  if (!req.options.headers) {
    req.options.headers = {};
  }
  if (process.browser) {
    const token = localStorage.getItem('purchasr_token');

    req.options.headers.authorization = token ? `Bearer ${token}` : null;
  }
  next();
};

const postLog = ({ response, ...rest }, next) => {
  console.log('APOLLO RESPONSE IN PRGRESS ');

  // console.log('response', response);
  // console.log('rest', rest);
  next();
};

// export const authWare = preWare(auth);
export const reqLogger = preWare(preLog);
export const resLogger = postWare(postLog);
