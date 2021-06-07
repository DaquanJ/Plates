import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import Search from './Search';

const Nav = () => {
    return (
        <div className="navigation" >
            <Search />

            <h2>Plates</h2>
            <ul>
                <Link id='nav-link' to='/'> <li>Browse</li> </Link>
                <Link id='nav-link' to='/cart'> <li>Cart {`(${localStorage.getItem('cartItems')})`} </li> </Link>

            </ul>

            <h2>My Plates</h2>
            <ul>
                <Link id='nav-link' to='/favorites' > <li>Favorites {`(${localStorage.getItem('favorites')})`} </li> </Link>


            </ul>

        </div>
    );

}

export default Nav;