import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../style/payment.css"

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
            <div className='header'>
                <div className='store-name'>
                    <h1>online store payment</h1>
                </div>
            </div>
            <div className="payment-container">
                <h2>Payment Information</h2>
                <form onSubmit={handleSubmit} className="payment-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} placeholder="Input your name" onChange={handleChange} className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="street">Street:</label>
                        <input type="text" id="street" name="street" value={formData.street} placeholder="Street" onChange={handleChange} className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" value={formData.city} placeholder="City" onChange={handleChange} className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <select id="state" name="state" value={formData.state} onChange={handleChange} className="form-input">
                            <option value="">Select State</option>
                            <option value="NSW">NSW</option>
                            <option value="QLD">QLD</option>
                            <option value="ACT">ACT</option>
                            <option value="NT">NT</option>
                            <option value="SA">SA</option>
                            <option value="TAS">TAS</option>
                            <option value="VIC">VIC</option>
                            <option value="WA">WA</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="e.g. 0456789123" value={formData.phone} onChange={handleChange} className="form-input" />
                        <small>Format: 10 digits</small>
                    </div>
                    <div class="card-options">
                        <div class="card-option">
                            <div class="card-checkbox">
                                <input type="radio" id="card1" name="card" checked></input>
                                <label for="card1"></label>
                            </div>
                            <div class="card-image">
                                <img src="card1.png" alt="Card 1"></img>
                            </div>
                            <div class="card-number">1234 5678 9012 3456</div>
                            <div class="card-cvv">123</div>
                        </div>

                        <div class="card-option">
                            <div class="card-checkbox">
                                <input type="radio" id="card2" name="card"></input>
                                <label for="card2"></label>
                            </div>
                            <div class="card-image">
                                <img src="card2.png" alt="Card 2"></img>
                            </div>
                            <div class="card-number">5678 9012 3456 7890</div>
                            <div class="card-cvv">456</div>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Payment;