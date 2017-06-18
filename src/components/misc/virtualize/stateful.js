import { withState, } from 'recompose';

export const stateful = withState('index', 'setIndex', ({ index = 0, }) => index);
export const ixHandler = (i) => { console.log('ixHandleri', i); return i; };
