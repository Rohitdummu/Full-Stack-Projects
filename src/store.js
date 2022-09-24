import {createStore} from 'redux';
import reducerFn from './reducer'
const store = createStore(reducerFn)

export default store;
