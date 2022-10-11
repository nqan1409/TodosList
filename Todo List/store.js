import { createStore } from './core.js';
import reducer from './reducer.js';
import withLogger from './logger.js';

const { attach, connect, dispacth } = createStore(withLogger(reducer));

window.dispacth = dispacth;

export { attach, connect };
