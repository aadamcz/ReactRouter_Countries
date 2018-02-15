import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/index';
import DevTools from './DevTools';
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducers, DevTools.instrument(), composeWithDevTools(
	applyMiddleware(thunkMiddleware)));

export default store;