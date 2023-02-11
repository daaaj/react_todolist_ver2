import { combineReducers, createStore } from 'redux';
import todoReducer from '../modules/todoModule';

const rootReducer = combineReducers({
    // 모듈(리듀서) 다 집어넣어~!!
    todoReducer,
});
const store = createStore(rootReducer);

export default store;
