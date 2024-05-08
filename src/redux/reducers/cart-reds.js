import {
    INCREASE, DECREASE,
    ID_3000, ID_3001, ID_3002, ID_3003, ID_3004, ID_3005, ID_3006, ID_3007,
    ID_1000, ID_1001, ID_1002, ID_1003, ID_1004, ID_1005,
    ID_2000, ID_2001, ID_2002, ID_2003, ID_2004, ID_2005, ID_2006,
    ID_4000, ID_4001, ID_4002, ID_4003, ID_4004, ID_4005, ID_5000,
    ID_5001, ID_5002, ID_5003, ID_5004, CLEAR
} from "../constants/cart-const";

const initialState = {
    ID3000: {
        quantity: 0,
        name: "Product A",
        price: 10.99,
        unit: "kg"
    },
    ID3001: {
        quantity: 0,
        name: "Product B",
        price: 5.99,
        unit: "piece"
    },
    ID3002: {
        quantity: 0,
        name: "Product C",
        price: 15.99,
        unit: "box"
    },
    ID3003: {
        quantity: 0,
        name: "Product D",
        price: 8.49,
        unit: "kg"
    },
    ID3004: {
        quantity: 0,
        name: "Product E",
        price: 3.29,
        unit: "piece"
    },
    ID3005: {
        quantity: 0,
        name: "Product F",
        price: 12.99,
        unit: "box"
    },
    ID3006: {
        quantity: 0,
        name: "Product G",
        price: 6.99,
        unit: "kg"
    },
    ID3007: {
        quantity: 0,
        name: "Product H",
        price: 4.79,
        unit: "piece"
    },
    ID1000: {
        quantity: 0,
        name: "Product I",
        price: 9.99,
        unit: "kg"
    },
    ID1001: {
        quantity: 0,
        name: "Product J",
        price: 7.49,
        unit: "piece"
    },
    ID1002: {
        quantity: 0,
        name: "Product K",
        price: 11.99,
        unit: "box"
    },
    ID1003: {
        quantity: 0,
        name: "Product L",
        price: 14.99,
        unit: "kg"
    },
    ID1004: {
        quantity: 0,
        name: "Product M",
        price: 4.99,
        unit: "piece"
    },
    ID1005: {
        quantity: 0,
        name: "Product N",
        price: 8.99,
        unit: "box"
    },
    ID2000: {
        quantity: 0,
        name: "Product O",
        price: 16.49,
        unit: "kg"
    },
    ID2001: {
        quantity: 0,
        name: "Product P",
        price: 2.99,
        unit: "piece"
    },
    ID2002: {
        quantity: 0,
        name: "Product Q",
        price: 19.99,
        unit: "box"
    },
    ID2003: {
        quantity: 0,
        name: "Product R",
        price: 13.99,
        unit: "kg"
    },
    ID2004: {
        quantity: 0,
        name: "Product S",
        price: 5.49,
        unit: "piece"
    },
    ID2005: {
        quantity: 0,
        name: "Product T",
        price: 7.99,
        unit: "box"
    },
    ID2006: {
        quantity: 0,
        name: "Product U",
        price: 3.79,
        unit: "kg"
    },
    ID4000: {
        quantity: 0,
        name: "Product V",
        price: 18.99,
        unit: "piece"
    },
    ID4001: {
        quantity: 0,
        name: "Product W",
        price: 6.49,
        unit: "kg"
    },
    ID4002: {
        quantity: 0,
        name: "Product X",
        price: 12.29,
        unit: "box"
    },
    ID4003: {
        quantity: 0,
        name: "Product Y",
        price: 20.99,
        unit: "kg"
    },
    ID4004: {
        quantity: 0,
        name: "Product Z",
        price: 4.29,
        unit: "piece"
    },
    ID4005: {
        quantity: 0,
        name: "Product AA",
        price: 9.79,
        unit: "box"
    },
    ID5000: {
        quantity: 0,
        name: "Product AB",
        price: 15.49,
        unit: "kg"
    },
    ID5001: {
        quantity: 0,
        name: "Product AC",
        price: 3.29,
        unit: "piece"
    },
    ID5002: {
        quantity: 0,
        name: "Product AD",
        price: 11.79,
        unit: "box"
    },
    ID5003: {
        quantity: 0,
        name: "Product AE",
        price: 17.99,
        unit: "kg"
    },
    ID5004: {
        quantity: 0,
        name: "Product AF",
        price: 6.49,
        unit: "piece"
    },
    // 其他 ID 的初始状态
};


export const cartReducer = (state = initialState, action) => {
    if (action.type === CLEAR) {
        return {
            ID3000: { ...state.ID3000, quantity: 0 },
            ID3001: { ...state.ID3001, quantity: 0 },
            ID3002: { ...state.ID3002, quantity: 0 },
            ID3003: { ...state.ID3003, quantity: 0 },
            ID3004: { ...state.ID3004, quantity: 0 },
            ID3005: { ...state.ID3005, quantity: 0 },
            ID3006: { ...state.ID3006, quantity: 0 },
            ID3007: { ...state.ID3007, quantity: 0 },
            ID1000: { ...state.ID1000, quantity: 0 },
            ID1001: { ...state.ID1001, quantity: 0 },
            ID1002: { ...state.ID1002, quantity: 0 },
            ID1003: { ...state.ID1003, quantity: 0 },
            ID1004: { ...state.ID1004, quantity: 0 },
            ID1005: { ...state.ID1005, quantity: 0 },
            ID2000: { ...state.ID2000, quantity: 0 },
            ID2001: { ...state.ID2001, quantity: 0 },
            ID2002: { ...state.ID2002, quantity: 0 },
            ID2003: { ...state.ID2003, quantity: 0 },
            ID2004: { ...state.ID2004, quantity: 0 },
            ID2005: { ...state.ID2005, quantity: 0 },
            ID2006: { ...state.ID2006, quantity: 0 },
            ID4000: { ...state.ID4000, quantity: 0 },
            ID4001: { ...state.ID4001, quantity: 0 },
            ID4002: { ...state.ID4002, quantity: 0 },
            ID4003: { ...state.ID4003, quantity: 0 },
            ID4004: { ...state.ID4004, quantity: 0 },
            ID4005: { ...state.ID4005, quantity: 0 },
            ID5000: { ...state.ID5000, quantity: 0 },
            ID5001: { ...state.ID5001, quantity: 0 },
            ID5002: { ...state.ID5002, quantity: 0 },
            ID5003: { ...state.ID5003, quantity: 0 },
            ID5004: { ...state.ID5004, quantity: 0 },
        };
    }
    switch (action.ID) {
        case ID_3000:
            if (action.type === INCREASE) {
                return { ...state, ID3000: { ...state.ID3000, quantity: state.ID3000.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID3000.quantity > 0) {
                return { ...state, ID3000: { ...state.ID3000, quantity: state.ID3000.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_3001:
            if (action.type === INCREASE) {
                return { ...state, ID3001: { ...state.ID3001, quantity: state.ID3001.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID3001.quantity > 0) {
                return { ...state, ID3001: { ...state.ID3001, quantity: state.ID3001.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_3002:
            if (action.type === INCREASE) {
                return { ...state, ID3002: { ...state.ID3002, quantity: state.ID3002.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID3002.quantity > 0) {
                return { ...state, ID3002: { ...state.ID3002, quantity: state.ID3002.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_3003:
            if (action.type === INCREASE) {
                return { ...state, ID3003: { ...state.ID3003, quantity: state.ID3003.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID3003.quantity > 0) {
                return { ...state, ID3003: { ...state.ID3003, quantity: state.ID3003.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_3004:
            if (action.type === INCREASE) {
                return { ...state, ID3004: { ...state.ID3004, quantity: state.ID3004.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID3004.quantity > 0) {
                return { ...state, ID3004: { ...state.ID3004, quantity: state.ID3004.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_3005:
            if (action.type === INCREASE) {
                return { ...state, ID3005: { ...state.ID3005, quantity: state.ID3005.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID3005.quantity > 0) {
                return { ...state, ID3005: { ...state.ID3005, quantity: state.ID3005.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_3006:
            if (action.type === INCREASE) {
                return { ...state, ID3006: { ...state.ID3006, quantity: state.ID3006.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID3006.quantity > 0) {
                return { ...state, ID3006: { ...state.ID3006, quantity: state.ID3006.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_3007:
            if (action.type === INCREASE) {
                return { ...state, ID3007: { ...state.ID3007, quantity: state.ID3007.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID3007.quantity > 0) {
                return { ...state, ID3007: { ...state.ID3007, quantity: state.ID3007.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_1000:
            if (action.type === INCREASE) {
                return { ...state, ID1000: { ...state.ID1000, quantity: state.ID1000.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID1000.quantity > 0) {
                return { ...state, ID1000: { ...state.ID1000, quantity: state.ID1000.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_1001:
            if (action.type === INCREASE) {
                return { ...state, ID1001: { ...state.ID1001, quantity: state.ID1001.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID1001.quantity > 0) {
                return { ...state, ID1001: { ...state.ID1001, quantity: state.ID1001.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_1002:
            if (action.type === INCREASE) {
                return { ...state, ID1002: { ...state.ID1002, quantity: state.ID1002.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID1002.quantity > 0) {
                return { ...state, ID1002: { ...state.ID1002, quantity: state.ID1002.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_1003:
            if (action.type === INCREASE) {
                return { ...state, ID1003: { ...state.ID1003, quantity: state.ID1003.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID1003.quantity > 0) {
                return { ...state, ID1003: { ...state.ID1003, quantity: state.ID1003.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_1004:
            if (action.type === INCREASE) {
                return { ...state, ID1004: { ...state.ID1004, quantity: state.ID1004.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID1004.quantity > 0) {
                return { ...state, ID1004: { ...state.ID1004, quantity: state.ID1004.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_1005:
            if (action.type === INCREASE) {
                return { ...state, ID1005: { ...state.ID1005, quantity: state.ID1005.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID1005.quantity > 0) {
                return { ...state, ID1005: { ...state.ID1005, quantity: state.ID1005.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_2000:
            if (action.type === INCREASE) {
                return { ...state, ID2000: { ...state.ID2000, quantity: state.ID2000.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID2000.quantity > 0) {
                return { ...state, ID2000: { ...state.ID2000, quantity: state.ID2000.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_2001:
            if (action.type === INCREASE) {
                return { ...state, ID2001: { ...state.ID2001, quantity: state.ID2001.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID2001.quantity > 0) {
                return { ...state, ID2001: { ...state.ID2001, quantity: state.ID2001.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_2002:
            if (action.type === INCREASE) {
                return { ...state, ID2002: { ...state.ID2002, quantity: state.ID2002.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID2002.quantity > 0) {
                return { ...state, ID2002: { ...state.ID2002, quantity: state.ID2002.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_2003:
            if (action.type === INCREASE) {
                return { ...state, ID2003: { ...state.ID2003, quantity: state.ID2003.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID2003.quantity > 0) {
                return { ...state, ID2003: { ...state.ID2003, quantity: state.ID2003.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_2004:
            if (action.type === INCREASE) {
                return { ...state, ID2004: { ...state.ID2004, quantity: state.ID2004.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID2004.quantity > 0) {
                return { ...state, ID2004: { ...state.ID2004, quantity: state.ID2004.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_2005:
            if (action.type === INCREASE) {
                return { ...state, ID2005: { ...state.ID2005, quantity: state.ID2005.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID2005.quantity > 0) {
                return { ...state, ID2005: { ...state.ID2005, quantity: state.ID2005.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_2006:
            if (action.type === INCREASE) {
                return { ...state, ID2006: { ...state.ID2006, quantity: state.ID2006.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID2006.quantity > 0) {
                return { ...state, ID2006: { ...state.ID2006, quantity: state.ID2006.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_4000:
            if (action.type === INCREASE) {
                return { ...state, ID4000: { ...state.ID4000, quantity: state.ID4000.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID4000.quantity > 0) {
                return { ...state, ID4000: { ...state.ID4000, quantity: state.ID4000.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_4001:
            if (action.type === INCREASE) {
                return { ...state, ID4001: { ...state.ID4001, quantity: state.ID4001.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID4001.quantity > 0) {
                return { ...state, ID4001: { ...state.ID4001, quantity: state.ID4001.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_4002:
            if (action.type === INCREASE) {
                return { ...state, ID4002: { ...state.ID4002, quantity: state.ID4002.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID4002.quantity > 0) {
                return { ...state, ID4002: { ...state.ID4002, quantity: state.ID4002.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_4003:
            if (action.type === INCREASE) {
                return { ...state, ID4003: { ...state.ID4003, quantity: state.ID4003.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID4003.quantity > 0) {
                return { ...state, ID4003: { ...state.ID4003, quantity: state.ID4003.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_4004:
            if (action.type === INCREASE) {
                return { ...state, ID4004: { ...state.ID4004, quantity: state.ID4004.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID4004.quantity > 0) {
                return { ...state, ID4004: { ...state.ID4004, quantity: state.ID4004.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_4005:
            if (action.type === INCREASE) {
                return { ...state, ID4005: { ...state.ID4005, quantity: state.ID4005.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID4005.quantity > 0) {
                return { ...state, ID4005: { ...state.ID4005, quantity: state.ID4005.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_5000:
            if (action.type === INCREASE) {
                return { ...state, ID5000: { ...state.ID5000, quantity: state.ID5000.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID5000.quantity > 0) {
                return { ...state, ID5000: { ...state.ID5000, quantity: state.ID5000.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_5001:
            if (action.type === INCREASE) {
                return { ...state, ID5001: { ...state.ID5001, quantity: state.ID5001.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID5001.quantity > 0) {
                return { ...state, ID5001: { ...state.ID5001, quantity: state.ID5001.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_5002:
            if (action.type === INCREASE) {
                return { ...state, ID5002: { ...state.ID5002, quantity: state.ID5002.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID5002.quantity > 0) {
                return { ...state, ID5002: { ...state.ID5002, quantity: state.ID5002.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_5003:
            if (action.type === INCREASE) {
                return { ...state, ID5003: { ...state.ID5003, quantity: state.ID5003.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID5003.quantity > 0) {
                return { ...state, ID5003: { ...state.ID5003, quantity: state.ID5003.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        case ID_5004:
            if (action.type === INCREASE) {
                return { ...state, ID5004: { ...state.ID5004, quantity: state.ID5004.quantity + 1, name: action.name, price: action.price, unit: action.unit } };
            } else if (action.type === DECREASE && state.ID5004.quantity > 0) {
                return { ...state, ID5004: { ...state.ID5004, quantity: state.ID5004.quantity - 1, name: action.name, price: action.price, unit: action.unit } };
            }
            return state;
        default:
            return state;
    }
}
