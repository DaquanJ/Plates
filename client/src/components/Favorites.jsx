import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

import '../styles/favorites.css';

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

    const getFavorites = async () => {
        try {
            const res = await axios.get('https://e-plates.herokuapp.com/favorites/')
            setFavorites(res.data)
            localStorage.setItem('favorites', res.data.length)
            console.log(favorites)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteFavorite = async (id) => {
        try {
            const res = await axios.delete(`https://e-plates.herokuapp.com/favorites/${id}`)
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
            {favorites.length > 0 ? <h1> Favorites </h1> : <h1> You haven't added any items to favorites ! </h1>}
            {
                favorites.map(favorite =>
                    <div className='favorites' key={favorite.id} >
                        <img src={favorite.image} alt="dish" />
                        <Link id='fav-link' to={`/plate/${favorite.name}`} > <h2> {favorite.name} </h2> </Link>
                        <p> price: ${numeral(favorite.price).format('0.00')} </p>
                        <button id='remove-item' onClick={() => deleteFavorite(favorite.id)} > Remove {favorite.name} </button>
                    </div>
                )
            }
        </div>
    );
}

export default Favorites;