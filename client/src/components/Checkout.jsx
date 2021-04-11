import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {

    const [checkout, setCheckout] = useState({})

    function handleChange(e) {
        const { id, value } = e.target;
        setCheckout({ ...checkout, [id]: value })
        console.log(checkout)
    }

    async function submitCheckout(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/checkout', checkout)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <div>

            <form onSubmit={(e) => submitCheckout(e)} onChange={(e) => handleChange(e)}>
                <input type="text" id='email' placeholder='Email' />
                <input type="text" id='firstName' placeholder='First Name' />
                <input type="text" id='lastName' placeholder='Last Name' />
                <input type="text" id='address' placeholder='Address' />
                <input type="text" id='city' placeholder='City' />
                <input type="text" id='phone' placeholder='Phone' />
                <input type="submit" value='Continue To Payment' />
            </form>
        </div>
    );
}

export default Checkout;