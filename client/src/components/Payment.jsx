import React, { useState, useEffect } from 'react';

const Payment = () => {

    const [payment, setPayment] = useState({})

    function handleChange(e) {
        const { id, value } = e.target;
        setPayment({ ...payment, [id]: value })
        console.log(payment)
    }

    async function submitPayment(e) {
        e.preventDefault();
        document.querySelector('#pay-form').innerHTML = '<h1>Thank you for your purchase !</h1>'
    }



    return (
        <div>


            <form id='pay-form' onSubmit={(e) => submitPayment(e)} onChange={(e) => handleChange(e)}>
                <input type="text" id='cardNumber' placeholder='Card Number' />
                <input type="text" id='cardName' placeholder='Name on card' />
                <input type="text" id='cardExp' placeholder='Expiration dat (MM / YY)' />
                <input type="text" id='secCode' placeholder='Security code' />
                <input type="submit" value='Pay Now' />
            </form>

        </div>
    );
}

export default Payment;