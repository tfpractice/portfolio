import { END_GAME, NEW_GAME, } from './constants';

const start = () => state => ({ inPlay: true, });
const end = () => state => ({ inPlay: false, });

export const newGame = () =>
({ type: NEW_GAME, curry: start(), });

export const endGame = () =>
({ type: END_GAME, curry: end(), });
