import React, { useEffect, useState } from 'react';
import "../style/product.css";
import { useDispatch, useSelector } from 'react-redux';
import { increaseToCart, decreaseToCart } from '../redux/actions/cart-acts';
import '../style/button.css'; // 导入按钮样式文件

const Home = () => {
    const dispatch = useDispatch();

    const cartHandler = useSelector(state => state.cartHandler);

    const [items, setItems] = useState([]);

    const getImagePath = (productName) => {
        // 在这里根据产品名称构建动态图片路径
        return require(`../images/${productName}.jpg`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8001/product/getHome');
                if (response.ok) {
                    const data = await response.json();
                    setItems(data.data); // 将获取到的数据存储到 items 中
                    console.log(data.data); // 可以在控制台查看获取的数据
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };

        fetchData(); // 调用获取数据的函数
    }, []); // 空数组作为第二个参数，表示该 effect 只在组件挂载时执行一次

    const increase = function (item) {
        const id = item.product_id
        const quantity = item.in_stock
        const string_ID = `ID${id}`;
        const ID_cart_quantity = cartHandler[string_ID].quantity; // 从 cartHandler 中获取状态
        console.log(ID_cart_quantity)
        console.log(quantity)
        if (quantity - ID_cart_quantity > 0) {
            dispatch(increaseToCart(id, item.product_name, item.unit_price, item.unit_quantity))
        } else {
            alert("not enough")
        }
    }

    const decrease = function (item) {
        const id = item.product_id
        console.log(id)
        const string_ID = `ID${id}`;
        const ID_cart_quantity = cartHandler[string_ID].quantity; // 从 cartHandler 中获取状态
        console.log(ID_cart_quantity)
        if (ID_cart_quantity > 0) {
            dispatch(decreaseToCart(id, item.product_name, item.unit_price, item.unit_quantity))
        }
        else {
            alert("it is zero now")
        }
    }

    return (
        <div className="grid-container">
            {items.length > 0 ? (
                items.map((item) => (
                    <div key={item.product_id} className="grid-item">
                        <img src={getImagePath(item.product_id)} alt={item.product_name} width="190" height="150"></img>
                        <p>Name: {item.product_name}</p>
                        <p>Price: {item.unit_price}</p>
                        {/* 可根据实际数据结构添加更多展示信息 */}
                        <div className="button-container">
                            <button className="button-75" onClick={() => increase(item)}><span className="text">+</span></button>
                            <button className="button-75" onClick={() => decrease(item)}><span className="text">-</span></button>
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading or No Data Available</div>
            )}
        </div>
    );
};

export default Home;