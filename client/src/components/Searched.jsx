import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import numeral from 'numeral';
import '../styles/searched.css';

const apikey = process.env.REACT_APP_API_KEY;
const appid = process.env.REACT_APP_API_ID

const Searched = ({ match }) => {

    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=${match.params.search}&app_id=${appid}&app_key=${apikey}&to=20`)
            setItems(res.data.hits)
            console.log(res.data.hits)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getItems()
    }, [match.params.search])

    return (
        <div>
            <h1> choose any {match.params.search} </h1>
            <div className='searched_items' >
                {items.map(item =>
                    <div id='items' key={item.recipe.url} >
                        <img src={item.recipe.image} alt={item.recipe.label} />
                        <Link id='searched-link' to={`/plate/${item.recipe.label}`}>  <p> {item.recipe.label} <br /> price: ${numeral(item.recipe.totalDaily.CHOCDF.quantity).format('0.00')} </p> </Link>
                    </div>)}
            </div>
        </div>
    );
}

export default Searched;