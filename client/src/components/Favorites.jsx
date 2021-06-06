import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

    const getFavorites = async () => {
        try {
            const res = await axios.get('http://localhost:8080/favorites/')
            setFavorites(res.data)
            localStorage.setItem('favorites', res.data.length)
            console.log(favorites)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteFavorite = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8080/favorites/${id}`)
            setFavorites([...favorites].filter(item => item.id !== id))
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getFavorites();
    }, [])

    return (
        <div>
            <h1> Favorites </h1>
            {
                favorites.map(favorite =>
                    <div key={favorite.id} >
                        <img src={favorite.image} alt="dish" />
                        <Link to={`/plate/${favorite.name}`} > <h1> {favorite.name} </h1> </Link>
                        <p> {favorite.description} </p>
                        <p> price: ${numeral(favorite.price).format('0.00')} </p>
                        <button onClick={() => deleteFavorite(favorite.id)} > Remove {favorite.name} </button>
                    </div>
                )
            }
        </div>
    );
}

export default Favorites;