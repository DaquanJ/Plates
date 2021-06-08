import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/Nav.css';

const apikey = process.env.REACT_APP_API_KEY;
const appid = process.env.REACT_APP_API_ID;

const Search = () => {

    const [search, setSearch] = useState({ search: '' });

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=${search.search}&app_id=${appid}&app_key=${apikey}`)
            // console.log(res.data.hits)
        } catch (error) {
            console.error(error)
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setSearch({ [name]: value })
    }

    return (
        <div>
            <form onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
                <Link to={`/search/${search.search}`}>  <input type="text" name="search" id="search" placeholder="What are you craving ?" /> </Link>
            </form>
        </div>
    );
}

export default Search;