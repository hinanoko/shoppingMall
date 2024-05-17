import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchItem, inputItem } from '../redux/actions/products-acts';
import axios from 'axios';
import "../style/search.css"
import img from '../icons/search.png'

const Sider = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const dispatch = useDispatch();

    const handleSearch = async () => {
        console.log('Search Keyword:', searchKeyword);
        try {
            const response = await axios.get(`http://localhost:8001/product/search?keyword=${searchKeyword}`);
            console.log('Search Result:', response.data);
            dispatch(inputItem(response.data))
            dispatch(searchItem())
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    const handleInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    return (
        <div >
            <p>Search the Item you want: </p>

            <div class="search_member_container">
                <div class="search_container_start">

                    <div class="search_icon_container">
                        <img class="search_icon" src={img} alt="Search Icon"></img>
                    </div>

                    <div class="search_input_container">
                        <input class="search_input"
                            placeholder="search item"
                            type="text"
                            value={searchKeyword}
                            onChange={handleInputChange}></input>
                    </div>

                    <div class="search_submit_btn_container">
                        <div class="search_btn" onClick={handleSearch}>Search</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sider;