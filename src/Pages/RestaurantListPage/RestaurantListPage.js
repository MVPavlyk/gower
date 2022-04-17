import React from 'react';
import {RestaurantBlock} from '../../Components';
import {Navbar} from '../../Components';
import css from './RestaurantPageList.module.css'

const RestaurantListPage = () => {
    const storrage = [
        {
            id: 1,
            name: 'Кафе-Бар “У Марти”',
            address: 'Вул. Степана Бандери 2',
            time: '09:00 - 21:00',
            img: './img/u_marty.png'
        },
        {
            id: 2,
            name: 'Ресторан  “Панорама”',
            address: 'Вул. Степана Бандери 3',
            time: '09:00 - 21:00',
            img: './img/panorama.png'
        }
    ]


    return (
        <div className={css.restaurant__wrap}>
            <Navbar/>
            {
                storrage.map(restaurant => <RestaurantBlock key={restaurant.id} restaurant={restaurant}/>)
            }
        </div>
    );
};

export {RestaurantListPage};