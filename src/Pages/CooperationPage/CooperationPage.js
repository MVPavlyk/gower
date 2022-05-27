import React from 'react';

import cooperation_1 from '../../img/Cooperation_1.png'
import cooperation_2 from '../../img/Cooperation_2.png'
import cooperation_3 from '../../img/Cooperation_3.png'
import mail_photo from '../../img/Mail.svg'
import telega_photo from '../../img/Telega.svg'
import insta_photo from '../../img/Insta.svg'
import mail_photo_dark from '../../img/Mail_dark.svg'
import telega_photo_dark from '../../img/Telega_dark.svg'
import insta_photo_dark from '../../img/Insta_dark.svg'
import css from "../CooperationPage/CooperationPage.module.css";

import {useSelector} from 'react-redux';
import {Carousel} from "react-responsive-carousel";

const CooperationPage = () => {

    const {EN} = useSelector(state => state['languageReducers']);
    const {dark} = useSelector(state => state['themeReducers']);
    return (
        <div className={dark ? css.cooperation_wrap_dark : css.cooperation_wrap}>
            <div className={css.title}>
                { EN ? 'Cooperation with goWer is:' : 'Cпівпраця з goWer — це' }
            </div>
            <Carousel className={css.carousel_wrap}>
                <div>
                    <img src={cooperation_1} alt="cooperation"/>
                    <div className={css.text_in_photo}>  { EN ? 'Satisfied customers' : 'Задоволені клієнти' } </div>
                </div>
                <div>
                    <img src={cooperation_2} alt="cooperation"/>
                    <div className={css.text_in_photo}> { EN ? 'Convenient booking system' : 'Зручна система бронювання' } </div>
                </div>
                <div>
                    <img src={cooperation_3 } alt="cooperation"/>
                    <div className={css.text_in_photo}> { EN ? 'Simplification of work for staff' : 'Спрощення роботи для персоналу' }</div>
                </div>

            </Carousel>
            <div className={css.contacts}> { EN ? 'Our contacts:' : 'Наші контакти:' } </div>
            <div className={css.mail}>
                <img  src={ dark ? mail_photo_dark : mail_photo} alt="mail_photo"/>
                <div className={css.text}>
                    Email:  example228@gmail.com
                </div>
            </div>
            <div className={css.telegram}>
                <img src={dark ? telega_photo_dark : telega_photo} alt="telega_photo"/>
                <div className={css.text}>
                    Telegram: t.me/@goWer
                </div>
            </div>
            <div className={css.instagram}>
                <img src={dark ? insta_photo_dark : insta_photo} alt="insta_photo"/>
                <div className={css.text}>
                    Instagram: @goWer
                </div>
            </div>            
        </div>
    );
};

export {CooperationPage};