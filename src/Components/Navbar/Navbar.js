import React from 'react';
import rootCss from '../../root.module.css';
import css from './Navbar.module.css';
import search from '../../img/search.svg';
import sort from '../../img/sort.svg';
import filter from '../../img/filter.svg';

import {useSelector} from 'react-redux';

const Navbar = () => {

    const {dark} = useSelector(state => state['themeReducers']);

    return (
        <div className={dark ? css.main_navbar_dark : css.main_navbar}>
            <div className={rootCss.container}>
                <div className={css.nav_wrap}>
                    <form className={dark ? css.search_box_dark : css.search_box}>
                        <button className={css.search_btn}>
                            <img src={search} alt="search"/>
                        </button>
                        <input type="text" className={css.search_input} placeholder="Search..."/>
                    </form>
                    <div className={css.nav_links}>
                        <div>
                            <button className={dark ? css.nav_link_dark : css.nav_link}>
                                <img src={sort} alt="sort"/> Sorting
                            </button>
                        </div>
                        <div>
                            <button className={dark ? css.nav_link_dark : css.nav_link}>
                                <img src={filter} alt="filter"/> Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Navbar};