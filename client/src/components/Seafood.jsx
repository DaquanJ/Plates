import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const apikey = process.env.REACT_APP_API_KEY;
const appid = process.env.REACT_APP_API_ID;

const Seafood = () => {

    const [food, setFood] = useState([]);

    const getSeafood = async () => {
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=seafood&app_id=${appid}&app_key=${apikey}&to=10`)
            setFood(res.data.hits);
            console.log(res.data.hits);
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        getSeafood();
    }, [])

    return (
        <div>
            <h1> Seafood </h1>
            {food.map(item =>
                <div key={item.recipe.url} >
                    <img src={item.recipe.image} alt={item.recipe.label} />
                    <Link to={`/plate/${item.recipe.label}`}>  <p> {item.recipe.label} </p> </Link>
                </div>)}
        </div>
    );
}

export default Seafood;