import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from '../reducers';

// const configureStore = () => {
//     const middlewares = [];
//     const enhancer = process.env.NODE_ENV === 'production'
//     ? compose(applyMiddleware(...middlewares))
//     : composeWithDevTools(applyMiddleware(...middlewares))
//     const store = createStore(reducer,enhancer);
//     return store;
// }

const configureStore = createStore(reducer, composeWithDevTools());

export default configureStore;

