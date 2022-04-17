import React from 'react';
import {NavLink} from 'react-router-dom';
import css from "../../Pages/RestaurantListPage/RestaurantPageList.module.css";
import logo from '../../img/logo.svg';

const Header = () => {
    return (
        <div className={css.header_style}>
            <div>
                <NavLink className={css.header_logo} to={'/'}><img src={logo} alt="logo"/></NavLink>
            </div>
            <div className={css.header_links}>
                <span><NavLink className={css.header_link} to={'/'}>Places</NavLink></span>
                <span><NavLink className={css.header_link} to={'/'}>Cooperation</NavLink></span>
                <span><NavLink className={css.header_link} to={'/'}>About us</NavLink></span>
                <span><NavLink className={css.header_link} to={'/'}>Login</NavLink></span>
            </div>
        </div>
    );
};

export {Header};