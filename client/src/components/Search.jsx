import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Search = () => {

    const [food, setFood] = useState([]);
    const [search, setSearch] = useState({});



    return (
        <div>
            <input type="text" placeholder="search food" />
        </div>
    );
}

export default Search;