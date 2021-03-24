import React from 'react';

const Nav = () => {
    return (
        <div className="navigation" >
            <h2> Plates </h2>
            <ul>
                <li>Browse</li>
                <li>Cart</li>
            </ul>

            <h2> My Plates </h2>
            <ul>
                <li>All</li>
                <li>Favorites</li>
            </ul>
        </div>
    );

}

export default Nav;