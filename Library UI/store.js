import { createStore } from './core.js';
import reducer from './reducer.js';

const { attach, connect, dispacth } = createStore(reducer);

window.dispacth = dispacth;

export { attach, connect };
