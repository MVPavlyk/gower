import React from 'react';
import css from './Footer.module.css';
import rootCss from '../../root.module.css';
import {NavLink} from 'react-router-dom';
import logo from '../../img/logo.svg';

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={rootCss.container}>
                <div className={css.footer_wrap}>
                    <div className={css.footer_links}>
                        <NavLink className={css.footer_link} to={'/'}>Places</NavLink>
                        <NavLink className={css.footer_link} to={'/'}>Cooperation</NavLink>
                        <NavLink className={css.footer_link} to={'/'}>About us</NavLink>
                    </div>
                    <div>
                        <NavLink className={css.footer_logo} to={'/'}><img src={logo} alt="logo"/></NavLink>
                    </div>
                    <div className={css.footer_info}>
                        <div className={css.footer_info_titles}>Contacts</div>
                        <div className={css.footer_info_titles}>Email:</div>
                        <a className={css.footer_info_content} href={'/'}>example@gmail.com</a>
                        <div className={css.footer_info_titles}>Telegram:</div>
                        <a className={css.footer_info_content} href={'/'}>t/me.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Footer};