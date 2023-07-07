import React from 'react'
import '../components/Navbar.css';
import Cart from '../pages/Cart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBar = () => {

    const items = useSelector((state) => state.cart);

    return (
        <div>
            <nav>
                <ul className='navUlItems'>
                    <Link to="/" className='navLiItems'>Home</Link>
                    <Link to="/product" className='navLiItems'>Products</Link>
                    <Link to="/feature" className='navLiItems'>Features</Link>
                    <Link to="/contact" className='navLiItems'>Contact us </Link>

                </ul>

                <Link className="navLiCart" to="/cart"> Cart </Link>
                <span> Cart Items: {items.length}</span>
            </nav>



        </div>
    )
}

export default NavBar