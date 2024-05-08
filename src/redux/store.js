import { productReducer } from "./reducers/products-reds";
import { cartReducer } from "./reducers/cart-reds";
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
    productHandler: productReducer,
    cartHandler: cartReducer
})

const initialState = {}

const store = createStore(
    rootReducer,
    initialState
)

export default store