import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {}

export const store = createStore(rootReducer, initialState,
    compose(
        applyMiddleware(...[thunk]),
    )
);

export default store;