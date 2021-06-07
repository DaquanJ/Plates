import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral'

import '../styles/plate.css';

const apikey = process.env.REACT_APP_API_KEY;
const appid = process.env.REACT_APP_API_ID;

const Plate = ({ match }) => {

    const [plate, setPlate] = useState([])

    async function getPlate() {
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=${match.params.name}&app_id=${appid}&app_key=${apikey}`)
            setPlate({
                image: res.data.hits[0].recipe.image,
                description: res.data.hits[0].recipe.cuisineType ? res.data.hits[0].recipe.cuisineType[0] : null,
                name: res.data.hits[0].recipe.label,
                price: res.data.hits[0].recipe.totalDaily.CHOCDF.quantity
            })
            console.log(res.data.hits)
        } catch (error) {
            console.error(error)
        }
    }

    async function addToCart(e) {
        e.preventDefault()
        try {
            const newCart = await axios.post('http://localhost:8080/cart/', plate)
            console.log(newCart.data)
            document.querySelector('h3').innerHTML = '<h4>Your item has been added to the cart !</h4>'
        } catch (error) {
            console.error(error)
            document.querySelector('h3').innerHTML = `Sorry your request failed: ${error}`
        }
    }
    async function addToFavorites(e) {
        e.preventDefault()
        try {
            const newFavorite = await axios.post('http://localhost:8080/favorites/', plate)
            console.log(newFavorite.data)
            document.querySelector('h3').innerHTML = '<h4>Your item has been added to Favorites !</h4>'
        } catch (error) {
            console.error(error)
            document.querySelector('h3').innerHTML = `Sorry your request failed: ${error}`
        }
    }


    useEffect(() => {
        getPlate();
    }, [])

    return (
        <div>
            {
                plate &&
                <div className='plate' >
                    <img src={plate.image} alt={plate.name} />
                    <h2> {plate.name} </h2>
                    <p> price: ${numeral(plate.price).format('0.00')} </p>
                    <h3> {plate.description} </h3>
                    <h4 id='added' >  </h4>
                    <button id='add-to-cart' onClick={(e) => addToCart(e)}>Add To Cart</button>
                    <button id='add-to-favs' onClick={(e) => addToFavorites(e)} >Add To Favorites</button>
                </div>

            }
        </div>
    );
}

export default Plate;