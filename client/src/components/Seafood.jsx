import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import '../styles/browse.css';

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
            <div className='plates' >
                {food.map(item =>
                    <div id='items' key={item.recipe.url} >
                        <img src={item.recipe.image} alt={item.recipe.label} />
                        <Link id='browse-link' to={`/plate/${item.recipe.label}`}>  <p> {item.recipe.label} <br /> price: ${numeral(item.recipe.totalDaily.CHOCDF.quantity).format('0.00')} </p> </Link>
                    </div>)}
            </div>
        </div>
    );
}

export default Seafood;