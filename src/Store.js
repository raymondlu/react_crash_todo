import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './Reducer';
import thunkMiddleware from 'redux-thunk'

const initState = {
    // TODO
};

const middlewares = [thunkMiddleware];
const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (f) => f,
);

export default createStore(reducer, initState, storeEnhancers);