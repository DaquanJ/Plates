import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../styles/checkout.css';

const Checkout = () => {

    const [checkout, setCheckout] = useState({})

    function handleChange(e) {
        const { id, value } = e.target;
        setCheckout({ ...checkout, [id]: value })
        // console.log(checkout)
    }

    async function submitCheckout(e) {
        e.preventDefault();
        try {
            const res = await axios.post('https://e-plates.herokuapp.com/checkout', checkout)
            // console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <div>

            <form className='checkout_form' onSubmit={(e) => submitCheckout(e)} onChange={(e) => handleChange(e)}>
                <h2 id='contact'> Contact information </h2>
                <input type="text" id='email' placeholder='Email' />
                <h2 id='shipping' > Shipping address  </h2>
                <input type="text" id='firstName' placeholder='First Name' />
                <input type="text" id='lastName' placeholder='Last Name' />
                <input type="text" id='address' placeholder='Address' />
                <input type="text" id='city' placeholder='City' />
                <input type="text" id='phone' placeholder='Phone' />
                <Link id='cart-link' to='/cart' > <input type="button" id='back-to-cart' value='< Back to Cart' /></Link>
                <Link id='pay-link' to='/payment' > <input id='pay' type="submit" value='Continue To Payment' /></Link>
            </form>
        </div>
    );
}

export default Checkout;