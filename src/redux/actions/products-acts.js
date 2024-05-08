import { GET_BEVERAGE, GET_FRESH, GET_FROZEN, GET_HOME, GET_PETFOOD, GET_SEARCH } from "../constants/products-const";


export const fresh = () => ({
    type: GET_FRESH,
});

export const beverage = () => ({
    type: GET_BEVERAGE,
});

export const frozen = () => ({
    type: GET_FROZEN,
});

export const home = () => ({
    type: GET_HOME,
});

export const petFood = () => ({
    type: GET_PETFOOD,
});

export const searchItem = () => ({
    type: GET_SEARCH,
});