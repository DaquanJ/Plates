import React, { useState, useEffect } from 'react';

import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;
const appid = process.env.REACT_APP_API_ID;

const Search = () => {

    const [food, setFood] = useState([]);
    const [search, setSearch] = useState({});

    async function getFood() {
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=${search.search}&app_id=${appid}&app_key=${apikey}`)
            setFood(res.data.hits)
            console.log(res.data.hits)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getFood()
    }, [])

    return (
        <div>
            <input type="text" placeholder="search food" />
        </div>
    );
}

export default Search;