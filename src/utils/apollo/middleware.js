const post = ({ response, }, next) => next();
const pre = (req, next) => next();

const preWare = (applyMiddleware = pre) => ({ applyMiddleware, });
const postWare = (applyAfterware = post) => ({ applyAfterware, });

const preLog = (req, next) => {
  next();
};

const postLog = ({ response, }, next) => {
  next();
};

export const reqLogger = preWare(preLog);
export const resLogger = postWare(postLog);
