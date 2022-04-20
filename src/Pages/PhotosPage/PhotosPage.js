import React from 'react';
import css from './PhotosPage.module.css'
import {useSelector} from 'react-redux';
import left_arrow from "../../img/left_arrow.svg";
import right_arrow from "../../img/right_arrow.svg";



const PhotosPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (
        <div className={css.photos_page}>
            <div className={css.photo_title}>Фото "Панорами"</div>
            <div className={css.photo_slider}>
                <div className={css.arrows_style}>
                    <button>
                        <img src={left_arrow} alt="left_arrow"/>
                    </button>
                </div>
                <img
                    src={`https://drive.google.com/uc?export=view&id=${oneRestaurant.photo_p_1_img}`}
                    alt={oneRestaurant.name}
                />
                <div className={css.arrows_style}>
                    <button>
                        <img src={right_arrow} alt="right_arrow"/>
                    </button>
                </div>
            </div>

        </div>
    );
};

export {PhotosPage};