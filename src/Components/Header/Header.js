import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import rootCss from '../../root.module.css';
import css from './Header.module.css';
import logo from '../../img/logo.svg';

import {useDispatch, useSelector} from 'react-redux';
import {switchTheme} from '../../store';

const Header = () => {

    const {EN} = useSelector(state => state['languageReducers']);

    const [show, setShow] = useState(false);

    const showBurger = () => {
        setShow(!show);
    };

    const {user} = useSelector(state => state['userReducers']);

    const {pathname} = useLocation();

    useEffect(() => {
        setShow(false);
    }, [pathname]);

    return (
        <div className={css.main_header}>
            <div className={rootCss.container}>
                <div className={css.header_wrap}>
                    <div>
                        <NavLink className={css.header_logo} to={'/'}><img src={logo} alt="logo"/></NavLink>
                    </div>
                    <div className={css.header_links}>
                        <div>
                        </div>
                        <NavLink className={css.header_link} to={'/'}>{EN ? "Places" : "Місця"}</NavLink>
                        <NavLink className={css.header_link} to={'/'}>{EN ? "Cooperation" : "Співпраця"}</NavLink>
                        <NavLink className={css.header_link} to={'/'}>{EN ? "About us" : "Про нас"}</NavLink>
                        <NavLink className={css.header_link} to={'/login'}>{user ? user.firstName : 'Login'}</NavLink>
                    </div>
                    <div className={css.burger_btn} onClick={() => showBurger()}>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>
            <div className={show ? css.burger_menu_show : css.burger_menu}>
                <NavLink className={css.header_link} to={'/'}>Login</NavLink>
                <NavLink className={css.header_link} to={'/'}>Places</NavLink>
                <NavLink className={css.header_link} to={'/'}>Cooperation</NavLink>
                <NavLink className={css.header_link} to={'/login'}>About us</NavLink>
            </div>
        </div>
    );
};

export {Header};