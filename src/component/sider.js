import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Sider = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const dispatch = useDispatch();

    const handleSearch = async () => {
        console.log('Search Keyword:', searchKeyword);
        try {
            const response = await axios.get(`http://localhost:8001/product/search?keyword=${searchKeyword}`);
            console.log('Search Result:', response.data);
            //dispatch
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    return (
        <div>
            <p>this is the sider</p>
            <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Enter search keyword"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Sider;