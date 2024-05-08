import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        state: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, street, city, state, phone } = formData;

        if (name && email && street && city && state && phone) {

            //console.log(formData);
            axios.delete('http://localhost:8001/cart/deleteAll')
            navigate('/confirm')
        } else {

            alert('Please fill in all required fields.');
        }
    };

    return (
        <div>
            <h2>Payment Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} placeholder="input your name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} placeholder="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="street">Street:</label>
                    <input type="text" id="street" name="street" value={formData.street} placeholder="street" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={formData.city} placeholder="city" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <select id="state" name="state" value={formData.state} onChange={handleChange}>
                        <option value="">Select State</option>
                        <option value="NSW">NSW</option>
                        <option value="QLD">QLD</option>
                        <option value="ACT">ACT</option>
                        <option value="NT">NT</option>
                        <option value="SA">SA</option>
                        <option value="TAS">TAS</option>
                        <option value="VIC">VIC</option>
                        <option value="WA">WA</option>
                        {/* Add other states here */}
                    </select>
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="like: 0456789123" value={formData.phone} onChange={handleChange} />
                    <small>Format: 10 digits</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Payment;