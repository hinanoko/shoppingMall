import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from 'axios'
import { clearTheCart } from "../redux/actions/cart-acts";
import { useNavigate } from "react-router-dom";
import '../style/cart.css';

const Cart = () => {
    const allItems = [
        "ID3000", "ID3001", "ID3002", "ID3003", "ID3004", "ID3005", "ID3006", "ID3007",
        "ID1000", "ID1001", "ID1002", "ID1003", "ID1004", "ID1005",
        "ID2000", "ID2001", "ID2002", "ID2003", "ID2004", "ID2005", "ID2006",
        "ID4000", "ID4001", "ID4002", "ID4003", "ID4004", "ID4005", "ID5000",
        "ID5001", "ID5002", "ID5003", "ID5004"
    ];

    const cartItems = useSelector(state => state.cartHandler);

    const filteredItems = allItems.filter(itemId => cartItems[itemId].quantity > 0);

    const [showItemRes, setShowItemRes] = useState([]);
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const itemsToUpdate = [];
        const itemsToKeep = [];
        const itemsToSave = filteredItems.map(itemId => ({
            id: itemId,
            number: cartItems[itemId].quantity,
            name: cartItems[itemId].name,
            price: cartItems[itemId].price,
            unit: cartItems[itemId].unit
        }));
        console.log(itemsToSave)
        axios.get('http://localhost:8001/cart/takeItem')
            .then(response => {
                const allItemRes = response.data.allItemRes;
                //console.log(allItemRes)
                //console.log(itemsToSave)

                itemsToSave.forEach(itemToSave => {
                    if (allItemRes.some(item => item.product_id === itemToSave.id)) {
                        //console.log(itemToSave.id);
                        itemsToUpdate.push({ product_id: itemToSave.id, product_number: itemToSave.number });
                    } else {
                        itemsToKeep.push({
                            id: itemToSave.id, number: itemToSave.number,
                            price: itemToSave.price, unit: itemToSave.unit, name: itemToSave.name
                        });
                    }
                });

                axios.post('http://localhost:8001/cart/addItem', itemsToKeep).then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error);
                }).then(() => {
                    axios.put("http://localhost:8001/cart/changeItem", itemsToUpdate).then(response => {
                        console.log(response)
                    }).catch(error => {
                        console.log(error)
                    }).then(() => {
                        axios.get('http://localhost:8001/cart/takeItem')
                            .then(response => {
                                setShowItemRes(response.data.allItemRes);
                                setIsCartEmpty(response.data.allItemRes.length === 0);
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });

        console.log("1111111111111111111111", itemsToKeep)
        console.log("22222222222222222222222", itemsToUpdate)

        dispatch(clearTheCart())
    }, []);

    const getImagePath = (productName) => {
        const cleanedProductName = productName.replace(/^ID/, '');

        // 在这里根据产品名称构建动态图片路径
        return require(`../images/${cleanedProductName}.jpg`);
    };

    const handleRemoveItem = function (id) {
        //console.log(id)
        axios.delete(`http://localhost:8001/cart/deleteItem?product_id=${id}`).then(response => {
            console.log(response)
            window.location.reload(); // 刷新页面
        }).catch(error => {
            console.log(error)
        })
    }

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        showItemRes.forEach(item => {
            totalPrice += item.unit_price * item.product_number;
        });
        return totalPrice.toFixed(2);
    };

    const clearCart = function () {
        axios.delete(`http://localhost:8001/cart/deleteAll`).then(response => {
            console.log(response)
            window.location.reload(); // 刷新页面
        }).catch(error => {
            console.log(error)
        })
    }

    const addOneItem = function (id) {
        const productAdd = ({ productId: id })
        axios.post(`http://localhost:8001/cart/addOne`, productAdd).then(response => {
            console.log(response)
            window.location.reload();
        }).catch(error => {
            console.log(error)
        })
    }

    const decreaseItem = function (id) {
        const productAdd = ({ productId: id })
        axios.post(`http://localhost:8001/cart/decreaseOne`, productAdd).then(response => {
            console.log(response)
            window.location.reload();
        }).catch(error => {
            console.log(error)
        })
    }

    const goToPayment = function () {
        navigate('/payment')
    }

    return (
        <div>
            <div className="header">
                <div className="store-name">
                    <h1>Online Store Cart</h1>
                </div>
            </div>
            <div className="main">
                <p style={{ fontSize: "25px", color: "brown" }}>your information of the cart:</p>
                <div className="item-header">
                    <span className="item-label-Image">Image</span>
                    <span className="item-label-Detail">Details</span>
                    <span className="item-label">Total</span>
                    <span className="item-label-Remove">Quantity</span>
                    <span className="item-label-Action">Action</span>
                </div>
                <div className="cart-items">
                    {showItemRes.map(item => (
                        <div className="cart-item" key={item.id}>
                            <div className="item-image">
                                <img src={getImagePath(item.product_id)} alt={item.product_name} />
                            </div>
                            <div className="item-details">
                                <h3>{item.product_name}</h3>
                                <p>Unit Price: ${item.unit_price}</p>
                                <p>Unit Quantity: {item.unit_quantity}</p>
                            </div>
                            <div className="item-total-price">
                                <span>Total: ${(item.product_number * item.unit_price).toFixed(2)}</span>
                            </div>
                            <div className="quantity-controls">
                                <button className="quantity-btn" onClick={() => decreaseItem(item.product_id)}>-</button>
                                <span className="quantity-value">{item.product_number}</span>
                                <button className="quantity-btn" onClick={() => { addOneItem(item.product_id) }}>+</button>
                            </div>
                            <div className="remove-button">
                                <button onClick={() => handleRemoveItem(item.product_id)}>
                                    <span className="icon-container"></span>
                                    <span className="text-container">Remove</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="total-price">
                    <p>Total Price: ${calculateTotalPrice()}</p>
                </div>
                <div className="pay-button-container">
                    <button className="clear-button" onClick={() => clearCart()}>Clear</button>
                    <button className="pay-button" onClick={() => goToPayment()} disabled={isCartEmpty}>GoToPay</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
