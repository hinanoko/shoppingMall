import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { beverage, fresh, frozen, home, petFood } from '../redux/actions/products-acts';
import "../style/header.css"

const Header = function () {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const goToCart = function () {
        navigate('/cart')
    }


    const goToFresh = function () {
        dispatch(fresh())
        //console.log(dispatch(fresh()))
    }

    const goToBeverage = function () {
        dispatch(beverage())
        //console.log(dispatch(beverage()))
    }

    const goToFrozen = function () {
        dispatch(frozen())
        //console.log(dispatch(beverage()))
    }

    const goToHome = function () {
        dispatch(home())
        //console.log(dispatch(beverage()))
    }

    const goToPetFood = function () {
        dispatch(petFood())
        //console.log(dispatch(beverage()))
    }

    return (
        <div className="header-container">
            <div className="header-left">
                <button className="header-button cart-button" onClick={goToCart}>
                    Cart
                </button>
            </div>
            <div className="store-name">
                {/* 在这里放置商店名称 */}
                <h1>Online Store</h1>
            </div>
            <div className="header-right">
                <button className="header-button fresh-button" onClick={goToFresh}>
                    Fresh
                </button>
                <button className="header-button beverage-button" onClick={goToBeverage}>
                    Beverage
                </button>
                <button className="header-button frozen-button" onClick={goToFrozen}>
                    Frozen
                </button>
                <button className="header-button home-button" onClick={goToHome}>
                    Home
                </button>
                <button className="header-button petFood-button" onClick={goToPetFood}>
                    PetFood
                </button>
            </div>
        </div>
    );
}

export default Header;