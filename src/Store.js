import {createStore} from 'redux';
import reducer from './Reducer';

const initState = {
    // TODO
};

const store = createStore(reducer, initState);

export default store;