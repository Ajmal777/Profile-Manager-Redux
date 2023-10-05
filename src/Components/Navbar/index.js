import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='brand'>
                <h1>Users List</h1>
            </div>
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/add'>Add User</Link>
            </div>
        </div>
    )
}

export default Navbar;