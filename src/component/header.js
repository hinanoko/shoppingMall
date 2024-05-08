import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { beverage, fresh, frozen, home, petFood } from '../redux/actions/products-acts';

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
        <div>
            <p>this is the header</p>
            <button onClick={goToCart}>Cart</button>
            <button onClick={goToFresh}>Fresh</button>
            <button onClick={goToBeverage}>Beverage</button>
            <button onClick={goToFrozen}>Frozen</button>
            <button onClick={goToHome}>Home</button>
            <button onClick={goToPetFood}>PetFood</button>
        </div>
    );
}

export default Header;