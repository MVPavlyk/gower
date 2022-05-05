import React from 'react';
import css from './DescriptionPage.module.css';
import rootCss from '../../root.module.css';
import {useSelector} from 'react-redux';
import {DescriptionBlock} from '../../Components';

const DescriptionPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);

    return (
        <>
            {oneRestaurant.description &&
                <div className={css.desc_page}>
                    <div className={rootCss.container}>
                        <div className={css.desc_wrap}>{oneRestaurant.description.map(descBlock =>
                            <DescriptionBlock key={descBlock.desc_img} descBlock={descBlock}/>)}</div>
                    </div>
                </div>}
        </>

    );
};

export {DescriptionPage};