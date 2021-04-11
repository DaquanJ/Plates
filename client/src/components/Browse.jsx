import axios from 'axios';
import React, { useState, useEffect } from 'react';

const apikey = process.env.REACT_APP_API_KEY;
const appid = process.env.REACT_APP_API_ID;

const Browse = () => {

    const [browse, setBrowse] = useState([])

    async function getPlates() {
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=food&app_id=${appid}&app_key=${apikey}&to=30`)
            setBrowse(res.data.hits)
            console.log(res.data.hits)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPlates()
    }, [])

    return (
        <div>
            <h1>Browse Food </h1>
        </div>
    );
}

export default Browse;