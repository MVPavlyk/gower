import React from 'react';
import css from './Footer.module.css';
import rootCss from '../../root.module.css';
import {NavLink} from 'react-router-dom';
import logo from '../../img/logo.svg';
import {useSelector} from 'react-redux';

const Footer = () => {

    const {EN} = useSelector(state => state['languageReducers']);

    return (
        <div className={css.footer}>
            <div className={rootCss.container}>
                <div className={css.footer_wrap}>
                    <div className={css.footer_links}>
                        <NavLink className={css.footer_link} to={'/'}>{EN ? "Places" : "Місця"}</NavLink>
                        <NavLink className={css.footer_link} to={'/'}>{EN ? "Cooperation" : "Співпраця"}</NavLink>
                    </div>
                    <div>
                        <NavLink className={css.footer_logo} to={'/'}><img src={logo} alt="logo"/></NavLink>
                    </div>
                    <div className={css.footer_info}>
                        <div className={css.footer_info_titles}>{EN ? "Contacts" : "Контакти"}</div>
                        <a className={css.footer_info_content} href={'/'}>example@gmail.com</a>
                        <a className={css.footer_info_content} href={'/'}>t/me.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Footer};