import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Nav.css';
import Search from './Search';

const Nav = () => {
    return (
        <div className="navigation" >
            <Search />

            <h2>Plates</h2>
            <ul>
                <Link to='/'> <li>Browse</li> </Link>
                <Link to='/cart'> <li>Cart {localStorage.getItem('cartItems')} </li> </Link>

            </ul>

            <h2>My Plates</h2>
            <ul>
                <li>All</li>
                <Link to='/favorites' > <li>Favorites</li> </Link>
            </ul>

        </div>
    );

}

export default Nav;