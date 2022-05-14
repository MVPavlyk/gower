import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import rootCss from '../../root.module.css';
import css from './Header.module.css';
import logo from '../../img/logo.svg';

import {useDispatch, useSelector} from 'react-redux';
import {switchTheme} from '../../store/slices/theme.slice';

const Header = () => {

    const [show, setShow] = useState(false);

    const showBurger = () => {
        setShow(!show);
    };

    const { pathname } = useLocation();

    useEffect(() => {
        setShow(false)
    }, [pathname]);


    const {dark} = useSelector(state => state['themeReducers']);

    const dispatch = useDispatch();

    const switchT = () => {
        dispatch(switchTheme());
    };

    return (
        <div className={css.main_header}>
            <div className={rootCss.container}>
                <div className={css.header_wrap}>
                    <div>
                        <NavLink className={css.header_logo} to={'/'}><img src={logo} alt="logo"/></NavLink>
                    </div>
                    <div className={css.header_links}>
                        <div>
                            <button onClick={() => switchT()}
                                    className={dark ? css.dark_switch_btn : css.switch_btn}>
                                {dark ? 'White Theme' : 'Dark Theme'}
                            </button>
                        </div>
                        <NavLink className={css.header_link} to={'/'}>Places</NavLink>
                        <NavLink className={css.header_link} to={'/'}>Cooperation</NavLink>
                        <NavLink className={css.header_link} to={'/'}>About us</NavLink>
                        <NavLink className={css.header_link} to={'/'}>Login</NavLink>
                    </div>
                    <div className={css.burger_btn} onClick={() => showBurger()}>
                        <div> </div>
                        <div> </div>
                        <div> </div>
                    </div>
                </div>
            </div>
            <div className={show ? css.burger_menu_show : css.burger_menu}>
                <div>
                    <button onClick={() => switchT()}
                            className={dark ? css.dark_switch_btn : css.switch_btn}>
                        {dark ? 'White Theme' : 'Dark Theme'}
                    </button>
                </div>
                <NavLink className={css.header_link} to={'/'}>Login</NavLink>
                <NavLink className={css.header_link} to={'/'}>Places</NavLink>
                <NavLink className={css.header_link} to={'/'}>Cooperation</NavLink>
                <NavLink className={css.header_link} to={'/'}>About us</NavLink>
            </div>
        </div>
    );
};

export {Header};