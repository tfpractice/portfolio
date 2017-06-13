
// import * as stream from 'stream';

const post = ({ response, }, next) => next();
const pre = (req, next) => next();

const preWare = (applyMiddleware = pre) => ({ applyMiddleware, });
const postWare = (applyAfterware = post) => ({ applyAfterware, });

const preLog = (req, next) => {
  // 

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
  // 

  next();
};

export const reqLogger = preWare(preLog);
export const resLogger = postWare(postLog);
