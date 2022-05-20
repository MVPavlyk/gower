import React from 'react';
import rootCss from '../../root.module.css';
import css from './Navbar.module.css';


import {useDispatch, useSelector} from 'react-redux';
import {switchTheme} from '../../store/slices/theme.slice';

const Navbar = () => {

    const {dark} = useSelector(state => state['themeReducers']);

    const dispatch = useDispatch();

    const switchT = () => {
        dispatch(switchTheme());
    };

    return (
        <div className={dark ? css.main_navbar_dark : css.main_navbar}>
            <div className={rootCss.container}>
                <div className={css.nav_wrap}>
                    <form className={dark ? css.search_box_dark : css.search_box}>
                        <button className={css.search_btn}>
                        </button>
                        <input type="text" className={css.search_input} placeholder="Search..."/>
                    </form>
                    <div className={css.nav_links}>
                        <div>
                            <button className={dark ? css.nav_link_dark : css.nav_link}>
                            </button>
                        </div>
                        <div>
                            <button className={dark ? css.nav_link_dark : css.nav_link}>
                            </button>
                        </div>
                        <div>
                            <button onClick={() => switchT()} className={dark ? css.dark_switch_btn : css.switch_btn}>
                                <div className={dark ? css.dark_switch_btn_ball : css.switch_btn_ball}>

                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Navbar};