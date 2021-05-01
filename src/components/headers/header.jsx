import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import '../cart-icon/cart-icon'
import CartIcon from '../cart-icon/cart-icon'

const Header = () => {
    return (
        <nav className='nav-menu container'>
            <div className='logo'>
                <Link to='/'>K^2J_shop</Link>
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
            </ul>
            <CartIcon/>
        </nav>
    );
};

export default Header;
