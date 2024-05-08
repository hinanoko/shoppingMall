import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios, { all } from 'axios'
import { clearTheCart } from "../redux/actions/cart-acts";
import { useNavigate } from "react-router-dom";
import '../style/cart.css'; // 导入样式文件

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


        /* axios.post('http://localhost:8001/cart/addItem', itemsToSave).then(response => {
            //console.log(response.data.success)
        }).catch(error => {
            console.log(error)
        }) */

        console.log("1111111111111111111111", itemsToKeep)
        console.log("22222222222222222222222", itemsToUpdate)

        dispatch(clearTheCart())
    }, []);

    const handleRemoveItem = function (id) {
        //console.log(id)
        axios.delete(`http://localhost:8001/cart/deleteItem?product_id=${id}`).then(response => {
            console.log(response)
            window.location.reload(); // 刷新页面
        }).catch(error => {
            console.log(error)
        })
    }

    const goToPayment = function () {
        navigate('/payment')
    }

    return (
        <div>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Number</th>
                        <th>Unit Price</th>
                        <th>Unit Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {showItemRes.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.product_id}</td>
                            <td>{item.product_name}</td>
                            <td>{item.product_number}</td>
                            <td>{item.unit_price}</td>
                            <td>{item.unit_quantity}</td>
                            <td>
                                <button onClick={() => handleRemoveItem(item.product_id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={() => goToPayment()}>GoToPay</button>
        </div>
    );
};

export default Cart;