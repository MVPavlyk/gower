import React from 'react';
import {useSelector} from 'react-redux';
import css from './DescriptionBlock.module.css';

const DescriptionBlock = ({descBlock}) => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (
        <div className={css.desc_block}>
            <div className={css.desc_page_text}>
                {descBlock.desc_p}
            </div>

            <div className={css.desc_page_photo}>
                <img
                    src={descBlock.desc_img}
                    alt={oneRestaurant.name}
                />
            </div>
        </div>
    );
};

export {DescriptionBlock};