import React from 'react';
import css from './ReserveForms.module.css';

const ReserveForms = () => {
    return (
        <div className={css.forms_wrap}>
            <div className={css.forms_title}>Контактні дані</div>
            <div className={css.form_block}>
                <div className={css.reserve_text}>
                    Ім’я та прізвище
                </div>
                <label>
                    <input className={css.reserve_input}/>
                </label>
            </div>
            <div className={css.form_block}>
                <div className={css.reserve_text}>
                    Номер телефону
                </div>
                <label>
                    <input className={css.reserve_input}/>
                </label>
            </div>
            <div className={css.form_block}>
                <div className={css.reserve_text}>
                    Email
                </div>
                <label>
                    <input className={css.reserve_input}/>
                </label>
            </div>
        </div>
    );
};

export {ReserveForms};