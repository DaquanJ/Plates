import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral'

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
            document.querySelector('#added').innerHTML = 'Your item has been added to the cart !'
        } catch (error) {
            console.error(error)
            document.querySelector('#added').innerHTML = `Sorry your request failed: ${error}`
        }
    }
    async function addToFavorites(e) {
        e.preventDefault()
        try {
            const newFavorite = await axios.post('http://localhost:8080/favorites/', plate)
            console.log(newFavorite.data)
            document.querySelector('#added').innerHTML = 'Your item has been added to Favorites !'
        } catch (error) {
            console.error(error)
            document.querySelector('#added').innerHTML = `Sorry your request failed: ${error}`
        }
    }


    useEffect(() => {
        getPlate();
    }, [])

    return (
        <div>
            {
                plate &&
                <div>
                    <img src={plate.image} alt={plate.name} />
                    <h1> {plate.name} </h1>
                    <h2> {plate.description} </h2>
                    <p> price: ${numeral(plate.price).format('0.00')} </p>
                    <button onClick={(e) => addToCart(e)}>Add To Cart</button>
                    <button onClick={(e) => addToFavorites(e)} >Add To Favorites</button>
                    <p id='added' >  </p>
                </div>

            }
        </div>
    );
}

export default Plate;