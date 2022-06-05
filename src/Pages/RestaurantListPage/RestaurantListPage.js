import React, {useEffect, useState} from 'react';
import {RestaurantBlock} from '../../Components';
import {Navbar} from '../../Components';
import css from './RestaurantPageList.module.css';

import {useDispatch, useSelector} from 'react-redux';
import {getPlacesByQuery, getPlacesPaginated, setCurrent} from '../../store';
import arrow_left from '../../img/arrow-left.svg';
import arrow_right from '../../img/arraw-right.svg';

const RestaurantListPage = () => {
    const {EN} = useSelector(state => state['languageReducers']);
    const {query} = useSelector(state => state['placesReducers']);
    const {dark} = useSelector(state => state['themeReducers']);
    const {placesPage, pageNum} = useSelector(state => state['placesReducers']);

    const dispatch = useDispatch();

    const [allPages, setAllPages] = useState(1);

    useEffect(() => {
        setAllPages(placesPage?.pageCount)
    }, [placesPage]);

    useEffect(() => {
        if(query){
            dispatch(getPlacesByQuery({pageNum: pageNum, pageSize: 5, query: query})).then(()=> window.scrollTo(0, 0));
        } else {
            dispatch(getPlacesPaginated({pageNum: pageNum, pageSize: 5})).then(()=> window.scrollTo(0, 0));
        }

    }, [pageNum, query]);

    const prevPage = () => {
        if (!(pageNum === 1)) {
            const number = pageNum - 1;
            dispatch(setCurrent(number));
        }
    };

    const nextPage = () => {
        if (!(pageNum === allPages)) {
            const number = pageNum + 1;
            dispatch(setCurrent(number));
        }
    };

    return (
        <>
            <Navbar/>
            <div className={dark ? css.restaurant__wrap_dark : css.restaurant__wrap}>
                {
                    placesPage && !!placesPage?.results?.length && placesPage?.results.map(restaurant => <RestaurantBlock
                        key={restaurant.id} restaurant={restaurant}/>)
                }
            </div>
            <div className={css.page_buttons}>
                <img src={arrow_left} alt="arrowLeft" onClick={() => prevPage()}/>
                <div className={css.page_number}>
                    {EN ? 'Page ' : 'Сторінка '} {pageNum} {EN ? ' from ' : ' з '} {allPages}
                </div>
                <img src={arrow_right} alt="arrowRight" onClick={() => nextPage()}/>
            </div>
        </>
    );
};

export {RestaurantListPage};