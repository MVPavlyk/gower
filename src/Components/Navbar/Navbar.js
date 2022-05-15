import React from 'react';
import rootCss from '../../root.module.css';
import css from './Navbar.module.css';
import search from '../../img/search.svg';
import search_dark from '../../img/search_white.svg';
import sort from '../../img/sort.svg';
import sort_dark from '../../img/sort_dark.svg';
import filter from '../../img/filter.svg';
import filter_dark from '../../img/filter_dark.svg';

import {useSelector} from 'react-redux';

const Navbar = () => {

    const {dark} = useSelector(state => state['themeReducers']);

    return (
        <div className={dark ? css.main_navbar_dark : css.main_navbar}>
            <div className={rootCss.container}>
                <div className={css.nav_wrap}>
                    <form className={dark ? css.search_box_dark : css.search_box}>
                        <button className={css.search_btn}>
                            <img src={dark ? search_dark : search} alt="search"/>
                        </button>
                        <input type="text" className={css.search_input} placeholder="Search..."/>
                    </form>
                    <div className={css.nav_links}>
                        <div>
                            <button className={dark ? css.nav_link_dark : css.nav_link}>
                                <img src={dark ? sort_dark : sort} alt="sort"/> Sorting
                            </button>
                        </div>
                        <div>
                            <button className={dark ? css.nav_link_dark : css.nav_link}>
                                <img src={dark ? filter_dark : filter} alt="filter"/> Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Navbar};