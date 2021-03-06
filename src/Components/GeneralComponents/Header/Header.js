import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import rootCss from '../../../root.module.css';
import css from './Header.module.css';
import logo from '../../../img/logo.svg';

import {useSelector} from 'react-redux';

const Header = () => {

    const {EN} = useSelector(state => state['languageReducers']);

    const [show, setShow] = useState(false);

    const showBurger = () => {
        setShow(!show);
    };

    const {user, roles} = useSelector(state => state['userReducers']);

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
                        <NavLink className={css.header_link} to={'/'}>{EN ? 'Places' : 'Місця'}</NavLink>
                        <NavLink className={css.header_link}
                                 to={'/cooperation'}>{EN ? 'Cooperation' : 'Співпраця'}
                        </NavLink>
                        {user && <NavLink className={css.header_link}
                                          to={'myBookings'}>{EN ? 'My bookings' : 'Мої бронювання'}
                        </NavLink>}
                        {user && roles && !!roles?.length && roles?.includes('PlaceOwner') &&
                            <NavLink className={css.header_link}
                                     to={'/myPlaces'}>{EN ? 'My places' : 'Мої заклади'}
                            </NavLink>
                        }
                        <NavLink className={css.header_link}
                                 to={user ? 'user' : '/login'}>{user ? user.firstName : EN ? 'Login' : 'Вхід'}
                        </NavLink>
                    </div>
                    <div className={css.burger_btn} onClick={() => showBurger()}>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>
            <div className={show ? css.burger_menu_show : css.burger_menu}>
                <NavLink className={css.header_link}
                         to={user ? 'user' : '/login'}>{user ? user.firstName : EN ? 'Login' : 'Вхід'}</NavLink>
                {user && roles && !!roles?.length && roles.includes('PlaceOwner') &&
                    <NavLink className={css.header_link}
                             to={'/myPlaces'}>{EN ? 'My places' : 'Мої заклади'}
                    </NavLink>
                }
                {user && <NavLink className={css.header_link}
                                  to={'myBookings'}>{EN ? 'My bookings' : 'Мої бронювання'}
                </NavLink>}
                <NavLink className={css.header_link} to={'/'}>{EN ? 'Places' : 'Місця'}</NavLink>
                <NavLink className={css.header_link} to={'/cooperation'}>{EN ? 'Cooperation' : 'Співпраця'}</NavLink>
            </div>
        </div>
    );
};

export {Header};