import React from 'react';
import {NavLink} from "react-router-dom";
import css from "../../Pages/RestaurantListPage/RestaurantPageList.module.css";
import search from "../../img/search.svg";
import sort from "../../img/sort.svg";
import filter from "../../img/filter.svg";


const Navbar = () => {
    return (
        <div className={css.navbar_style}>
            <div className={css.search_box}>
                <NavLink className={css.search_btn} to={'/'}><img src={search} alt="search"/></NavLink>
                <input type="text" placeholder={"Search..."}/>
            </div>
            <div className={css.nav_links}>
                <span>
                    <button className={css.nav_link}>
                        <img src={sort} alt="sort"/> Sorting
                    </button>
                </span>
                <span>
                    <button className={css.nav_link} >
                        <img src={filter} alt="filter"/> Filter
                    </button>
                </span>
            </div>
        </div>
    );
};

export {Navbar};