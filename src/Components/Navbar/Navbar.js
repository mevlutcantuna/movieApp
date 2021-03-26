import React from 'react';
import '../../Styles/Navbar.scss';
import {Link} from "react-router-dom";
import {routes} from "../../Router/Routes";

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='navbar__right'>
                <div className='navbar__right__title'>
                    <span className='navbar__right__title__movie'>Movie</span>
                    <span className='navbar__right__title__up'>Up</span>
                </div>
                <div className='navbar__right__link'>
                    <Link style={linkStyle} to={routes.Home.path}>{routes.Home.title}</Link>
                    <Link style={linkStyle} to={routes.Favourites.path}>{routes.Favourites.title}</Link>
                </div>
            </div>
            <div className='navbar__left'>
                <input placeholder='Enter movie name here' className='navbar__left__input'/>
            </div>
        </div>
    );
}

const linkStyle = {
    textDecoration: 'none',
    marginRight:'1rem',
    color:'black',
    fontSize:'16px'
}

export default Navbar;