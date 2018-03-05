import {createStore} from 'redux';
import {addTodoItem} from './Reducer';

const store = createStore(addTodoItem);

export default store;