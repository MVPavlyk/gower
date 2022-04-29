import React from 'react';
import css from './MenuPage.module.css';
import {useSelector} from 'react-redux';

const MenuPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (
        <>
            {oneRestaurant.menu &&
                <div className={css.menu_page}>
                    {oneRestaurant.menu.map(image =>
                        <img
                            src={`https://drive.google.com/uc?export=view&id=${image}`}
                            alt={oneRestaurant.name}
                            key={`${image}`}
                        />
                    )}
                </div>
            }
        </>
    );
};

export {MenuPage};