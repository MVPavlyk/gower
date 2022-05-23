import React from 'react';
import css from './AboutUsPage.module.css'
import Maks from '../../img/Maks.png'
import Mykola from '../../img/Mykola.png'
import Dima from '../../img/Dima.png'
import Sania from '../../img/Sania.png'
import Yarik from '../../img/Yarik.png'
import Nadia from '../../img/Nadia.png'
import {useSelector, UseSelector} from 'react-redux';

const AboutUsPage = () => {

    const {dark} = useSelector(state => state['themeReducers']);

    return (
        <div className={dark ? css.person_wrap_dark : css.person_wrap}>
            <div className={css.main_block_person}>
                <img src={Maks} alt="Макс" className={css.img}/>
                <div className={css.describe_block_right}>
                    <div className={css.name_right}>
                        Mаксим Кук
                    </div>
                    <div className={css.describe_right}>
                        Team-lead
                        FullStack
                    </div>
                </div>
            </div>
            <div className={css.main_block_person}>

                <div className={css.describe_block_left}>
                    <div className={css.name_left}>
                        Олександр Орловський
                    </div>
                    <div className={css.describe_left}>
                        Back-end
                    </div>
                </div>
                <img src={Sania} alt="Sania" className={css.img}/>
            </div>
            <div className={css.main_block_person}>
                <img src={Dima} alt="Dima" className={css.img}/>
                <div className={css.describe_block_right}>
                    <div className={css.name_right}>
                        Дмитро Войтків
                    </div>
                    <div className={css.describe_right}>
                        Back-end
                    </div>
                </div>
            </div>
            <div className={css.main_block_person}>

                <div className={css.describe_block_left}>
                    <div className={css.name_left}>
                        Надія Хасишин
                    </div>
                    <div className={css.describe_left}>
                        Design
                        Front-end
                    </div>
                </div>
                <img src={Nadia} alt="Nadia" className={css.img}/>
            </div>
            <div className={css.main_block_person}>
                <img src={Yarik} alt="Yarik" className={css.img}/>
                <div className={css.describe_block_right}>
                    <div className={css.name_right}>
                        Ярослав Собко
                    </div>
                    <div className={css.describe_right}>
                        Front-end
                    </div>
                </div>
            </div>
            <div className={css.main_block_person}>

                <div className={css.describe_block_left}>
                    <div className={css.name_left}>
                        Микола Павлик
                    </div>
                    <div className={css.describe_left}>
                        Front end
                    </div>
                </div>
                <img src={Mykola} alt="Mykola" className={css.img}/>
            </div>
        </div>
    );
};

export {AboutUsPage};