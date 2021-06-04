import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

    const getFavorites = async () => {
        try {
            const res = await axios.get('http://localhost:8080/favorites/')
            setFavorites(res.data)
            console.log(res.data)
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
                    <div>
                        <h1> {favorite.name} </h1>
                        <img src={favorite.image} alt="dish" />
                        <p> {favorite.description} </p>
                        <button onClick={() => deleteFavorite(favorite.id)} > Remove {favorite.name} </button>
                    </div>
                )
            }
        </div>
    );
}

export default Favorites;