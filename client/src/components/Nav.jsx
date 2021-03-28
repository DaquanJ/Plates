import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Nav.css';
import Search from './Search';

const Nav = () => {
    return (
        <div className="navigation" >
            <Link to='/search'> <Search /> </Link>

            <h2>Plates</h2>
            <ul>
                <Link to='/browse'> <li>Browse</li> </Link>
                <Link to='/cart'> <li>Cart</li> </Link>
            </ul>

            <h2>My Plates</h2>
            <ul>
                <li>All</li>
                <li>Favorites</li>
            </ul>

        </div>
    );

}

export default Nav;