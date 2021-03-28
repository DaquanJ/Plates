import React, { useState, useEffect } from 'react';

import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;
const appid = process.env.REACT_APP_API_ID;

const Search = () => {

    const [food, setFood] = useState([]);
    const [search, setSearch] = useState({});

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=${search.search}&app_id=${appid}&app_key=${apikey}`)
            setFood(res.data.hits)
            console.log(res.data.hits)
        } catch (error) {
            console.error(error)
        }
    }

    function handleChange(e) {

        const { name, value } = e.target;
        setSearch({ [name]: value })
        console.log(search)
    }

    // useEffect(() => {
    //     getFood()
    // }, [])

    return (
        <div>
            <form onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="search" id="search" placeholder="Search" />
            </form>
        </div>
    );
}

export default Search;