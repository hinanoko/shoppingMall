import {
    ID_3000, ID_3001, ID_3002, ID_3003, ID_3004, ID_3005, ID_3006, ID_3007,
    ID_1000, ID_1001, ID_1002, ID_1003, ID_1004, ID_1005,
    ID_2000, ID_2001, ID_2002, ID_2003, ID_2004, ID_2005, ID_2006,
    ID_4000, ID_4001, ID_4002, ID_4003, ID_4004, ID_4005, ID_5000,
    ID_5001, ID_5002, ID_5003, ID_5004, INCREASE, DECREASE, CLEAR
} from "../constants/cart-const";

// 映射不同的ID和对应的操作
const idToActionMap = {
    3000: ID_3000,
    3001: ID_3001,
    3002: ID_3002,
    3003: ID_3003,
    3004: ID_3004,
    3005: ID_3005,
    3006: ID_3006,
    3007: ID_3007,
    1000: ID_1000,
    1001: ID_1001,
    1002: ID_1002,
    1003: ID_1003,
    1004: ID_1004,
    1005: ID_1005,
    2000: ID_2000,
    2001: ID_2001,
    2002: ID_2002,
    2003: ID_2003,
    2004: ID_2004,
    2005: ID_2005,
    2006: ID_2006,
    4000: ID_4000,
    4001: ID_4001,
    4002: ID_4002,
    4003: ID_4003,
    4004: ID_4004,
    4005: ID_4005,
    5000: ID_5000,
    5001: ID_5001,
    5002: ID_5002,
    5003: ID_5003,
    5004: ID_5004,
};

export const increaseToCart = (ID, name, price, unit) => ({
    ID: idToActionMap[ID],
    type: INCREASE,
    name,
    price,
    unit
});

export const decreaseToCart = (ID, name, price, unit) => ({
    ID: idToActionMap[ID],
    type: DECREASE,
    name,
    price,
    unit
});

export const clearTheCart = () => ({
    type: CLEAR
})