import React from 'react';
import cooperation_1 from '../../img/Cooperation_1.png';
import cooperation_2 from '../../img/Cooperation_2.png';
import cooperation_3 from '../../img/Cooperation_3.png';
import css from './CooperationPage.module.css';
import {useSelector} from 'react-redux';

const CooperationPage = () => {

    const {EN} = useSelector(state => state['languageReducers']);
    const {dark} = useSelector(state => state['themeReducers']);
    return (
        <div className={dark ? css.cooperation_wrap_dark : css.cooperation_wrap}>
            <div className={css.title}> {EN ? 'Cooperation with goWer - is:' : 'Співпраця з goWer - це:'} </div>
            <div className={css.photo_wrap}>
                <div className={css.main_block}>
                    <div className={css.info}>
                        {EN ? 'Satisfied customers' : 'Задоволені клієнти'}
                    </div>
                    <img src={cooperation_1} alt="cooperation_1"/>
                </div>
                <div className={css.main_block}>
                    <div className={css.info_right}>
                        {EN ? 'Convenient booking system' : 'Зручна система бронювання'}
                    </div>
                    <img src={cooperation_2} alt="cooperation_2"/>
                </div>
                <div className={css.main_block}>
                    <div className={css.info}>
                        {EN ? 'Simplification of work for staff' : 'Спрощення роботи для персоналу'}
                    </div>
                    <img src={cooperation_3} alt="cooperation_3"/>
                </div>
            </div>
            <div className={css.question}> {EN ? 'How to become a goWer partner?' : 'Як стати партнером goWer?'} </div>
            <div className={css.email}>Email: dimaLoh228@gmail.com</div>
            <div className={css.telegram}>Telegram: t.me/@dimaZnovLoh</div>
            <div className={css.instagram}>Instagram: @goWer</div>
        </div>
    );
};

export {CooperationPage};