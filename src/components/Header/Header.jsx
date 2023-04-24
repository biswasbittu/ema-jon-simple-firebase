import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user,logedOut}= useContext(AuthContext)
    console.log(user)

    const handleLoggedOut =()=>{
        logedOut()
        .then(()=>{

        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                {user && <span className='text-white'>Welcome :{user.email} <button onClick={handleLoggedOut}>Log Out</button></span> }
            </div>
        </nav>
    );J
};

export default Header;