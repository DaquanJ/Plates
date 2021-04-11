import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;
const appid = process.env.REACT_APP_API_ID

const Searched = ({ match }) => {

    const [items, setItems] = useState([])

    async function getItems() {
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=${match.params.search}&app_id=${appid}&app_key=${apikey}&to=30`)
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
            {items.map(item =>
                <div key={item.recipe.url} >
                    <img src={item.recipe.image} alt={item.recipe.label} />
                    <Link to={`/plate/${item.recipe.label}`}>  <p> {item.recipe.label} </p> </Link>
                </div>)}
        </div>
    );
}

export default Searched;