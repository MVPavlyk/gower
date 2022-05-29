import React from 'react';
import rootCss from '../../root.module.css';
import css from './Navbar.module.css';
import search from '../../img/search.svg';
import search_dark from '../../img/search_white.svg';
import sort from '../../img/sort.svg';
import sort_dark from '../../img/sort_dark.svg';
import filter from '../../img/filter.svg';
import filter_dark from '../../img/filter_dark.svg';


import {useDispatch, useSelector} from 'react-redux';
import {switchTheme, switchLanguage} from '../../store';

const Navbar = () => {

    const {dark} = useSelector(state => state['themeReducers']);
    const {EN} = useSelector(state => state['languageReducers']);

    const dispatch = useDispatch();

    const switchT = () => {
        dispatch(switchTheme());
    };

    const switchL = () => {
        dispatch(switchLanguage());
    };

    return (
        <div className={dark ? css.main_navbar_dark : css.main_navbar}>
            <div className={rootCss.container}>
                <div className={css.nav_wrap}>
                    <form className={dark ? css.search_box_dark : css.search_box}>
                        <button className={css.search_btn}>
                            <img src={dark ? search_dark : search} alt="search"/>
                        </button>
                        <input type="text" className={css.search_input} placeholder={EN ? "Search..." : "Пошук..."}/>
                    </form>
                    <div className={css.nav_links}>
                        {/*<div>
                            <button className={dark ? css.nav_link_dark : css.nav_link}>
                                <img src={dark ? sort_dark : sort} alt="sort"/> {EN ? "Sorting" : "Сортування"}
                            </button>
                        </div>
                        <div>
                            <button className={dark ? css.nav_link_dark : css.nav_link}>
                                <img src={dark ? filter_dark : filter} alt="filter"/> {EN ? "Filter" : "Фільтр"}
                            </button>
                        </div>*/}
                        <div>
                            <button onClick={() => switchT()} className={dark ? css.dark_switch_btn : css.switch_btn}>
                                <div className={dark ? css.dark_switch_btn_ball : css.switch_btn_ball}>

                                </div>
                                <div className={ dark ? css.dark_switch_btn_name : css.switch_btn_name}>
                                    {dark ? "dark mode" : "white mode"}
                                </div>
                            </button>
                        </div>
                        <div>
                            <button onClick={() => switchL()} className={EN ? ( dark ? css.switch_btn_en_dark : css.switch_btn_en) : (dark ? css.switch_btn_uk_dark : css.switch_btn_uk)}>
                                <div className={EN ? css.switch_btn_ball_en : css.switch_btn_ball_uk}>

                                </div>
                                <div className={EN ? ( dark ? css.switch_btn_name_en_dark : css.switch_btn_name_en) : ( dark ? css.switch_btn_name_uk_dark : css.switch_btn_name_uk)}>
                                    {EN ? "EN" : "UK"}
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