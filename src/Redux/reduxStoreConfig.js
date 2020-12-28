import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { ShopReducer } from './Reducers/reducers'
const initialStore = []
const ReduxStore = createStore(ShopReducer, initialStore, applyMiddleware(thunk));
export default ReduxStore;