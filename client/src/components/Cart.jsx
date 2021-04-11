import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [cart, setCart] = useState([])

    async function getCart() {
        try {
            const res = await axios.get('http://localhost:8080/cart/')
            setCart(res.data)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    async function deleteItem(id) {
        try {
            const res = await axios.delete(`http://localhost:8080/cart/${id}`)
            setCart([...cart].filter(cart => cart.id !== id))
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCart()
    }, [])

    return (
        <div>
            {cart.map(item =>
                <div key={item.id} >
                    <h1> Your Order </h1>
                    <img src={item.image} alt={item.name} />
                    <h1> {item.name} </h1>
                    <p> price: ${numeral(item.price).format('0.00')} </p>
                    <Link to='/checkout'> <button> {`Check Out - $${numeral(item.price).format('0.00')} `} </button> </Link>
                    <button onClick={() => deleteItem(item.id)} > {`Remove ${item.name}`} </button>
                </div>
            )}
        </div>
    );
}

export default Cart;