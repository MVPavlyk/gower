import React from 'react';
import css from './DescriptionPage.module.css';
import {useSelector} from 'react-redux';
import {DescriptionBlock} from '../../Components';

const DescriptionPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (
        <>
            {oneRestaurant.description &&
                <div className={css.desc_page}>
                    {oneRestaurant.description.map(descBlock =>
                        <DescriptionBlock key={descBlock.desc_img} descBlock={descBlock}/>
                    )}
                </div>}
        </>

    );
};

export {DescriptionPage};