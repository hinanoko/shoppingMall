import { GET_BEVERAGE, GET_FRESH, GET_FROZEN, GET_HOME, GET_PETFOOD, GET_SEARCH, INPUT_ITEM } from "../constants/products-const";

const initialState = {
    products: '',
    newProducts: '',
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRESH:
            return {
                ...state,
                products: "FRESH"
            }
        case GET_BEVERAGE:
            return {
                ...state,
                products: "BEVERAGE"
            }
        case GET_FROZEN:
            return {
                ...state,
                products: "FROZEN"
            }
        case GET_HOME:
            return {
                ...state,
                products: "HOME"
            }
        case GET_PETFOOD:
            return {
                ...state,
                products: "PETFOOD"
            }
        case GET_SEARCH:
            return {
                ...state,
                products: "SEARCH"
            }
        case INPUT_ITEM:
            return {
                ...state,
                newProducts: action.newProduct
            }
        default:
            return state;
    }
}
