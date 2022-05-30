import React from 'react';
import {useSelector} from 'react-redux';
import {Carousel} from "react-responsive-carousel";

import cooperation_1 from '../../img/CooperationPage/сooperation_1.png'
import cooperation_2 from '../../img/CooperationPage/сooperation_2.png'
import cooperation_3 from '../../img/CooperationPage/сooperation_3.png'

import telegram from '../../img/CooperationPage/telegram.svg'
import telegram_dark from '../../img/CooperationPage/telegram_dark.svg'
import instagram from '../../img/CooperationPage/instagram.svg'
import instagram_dark from '../../img/CooperationPage/instagram_dark.svg'
import email from '../../img/CooperationPage/email.svg'
import email_dark from '../../img/CooperationPage/email_dark.svg'

import css from "../CooperationPage/CooperationPage.module.css";

const CooperationPage = () => {

    const {EN} = useSelector(state => state['languageReducers']);
    const {dark} = useSelector(state => state['themeReducers']);
    return (
        <div className={dark ? css.cooperation_wrap_dark : css.cooperation_wrap}>
            <div className={css.title}>
                {EN ? 'Cooperation with goWer is:' : 'Cпівпраця з goWer — це'}
            </div>
            <Carousel className={css.carousel_wrap}>
                <div>
                    <img src={cooperation_1} alt="cooperation"/>
                    <div className={css.text_in_photo}>  {EN ? 'Satisfied customers' : 'Задоволені клієнти'} </div>
                </div>
                <div>
                    <img src={cooperation_2} alt="cooperation"/>
                    <div
                        className={css.text_in_photo}> {EN ? 'Convenient booking system' : 'Зручна система бронювання'} </div>
                </div>
                <div>
                    <img src={cooperation_3} alt="cooperation"/>
                    <div
                        className={css.text_in_photo}> {EN ? 'Simplification of work for staff' : 'Спрощення роботи для персоналу'}</div>
                </div>

            </Carousel>
            <div className={css.contacts}> {EN ? 'Our contacts:' : 'Наші контакти:'} </div>
            <div className={css.contacts_wrap}>
                <div className={css.contacts_block}>
                    <img src={dark ? email_dark : email} alt="email"/>
                    <div className={css.text}>
                        Email: example228@gmail.com
                    </div>
                </div>
                <div className={css.contacts_block}>
                    <img src={dark ? telegram_dark : telegram} alt="telegram"/>
                    <div className={css.text}>
                        Telegram: t.me/@goWer
                    </div>
                </div>
                <div className={css.contacts_block}>
                    <img src={dark ? instagram_dark : instagram} alt="instagram"/>
                    <div className={css.text}>
                        Instagram: @goWer
                    </div>
                </div>
            </div>
        </div>
    );
};

export {CooperationPage};