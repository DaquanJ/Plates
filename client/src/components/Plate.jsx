import axios from 'axios';
import React, { useState, useEffect } from 'react';

const apikey = process.env.REACT_APP_API_KEY;
const appid = process.env.REACT_APP_API_ID;

const Plate = ({ match }) => {

    const [plate, setPlate] = useState(null)

    async function getPlate() {
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=${match.params.name}&app_id=${appid}&app_key=${apikey}`)
            setPlate(res.data.hits[0])
            console.log(res.data.hits[0])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPlate();
    }, [])

    return (
        <div>
            {
                plate &&
                <div>
                    <img src={plate.recipe.image} alt={plate.recipe.label} />
                    <h1> {plate.recipe.label} </h1>
                    <form action="">
                        <input type="submit" value="Add To Cart" />
                    </form>
                </div>

            }
        </div>
    );
}

export default Plate;