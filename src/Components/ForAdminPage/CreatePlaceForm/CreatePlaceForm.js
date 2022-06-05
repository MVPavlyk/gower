import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import css from './CreatePlaceForm.module.css';
import {addPlace} from '../../../store';

const CreatePlaceForm = () => {
    const {
        register, handleSubmit
    } = useForm();

    const dispatch = useDispatch();

    const sendPlace = (place, e) => {
        dispatch(addPlace(place));
        e.target.reset();
        // console.log({...place, id: 0, allTables: 0, freeTables: 0});
    };

    const {dark} = useSelector(state => state['themeReducers']);
    const {EN} = useSelector(state => state['languageReducers']);

    return (
        <form className={css.add_place_form} onSubmit={handleSubmit(sendPlace)}>
            <h4>{EN ? "Create place" : "Створити місце"}</h4>
            <input
                className={dark ? css.add_place_input_dark : css.add_place_input}
                type="text"
                {...register('name')}
                placeholder={EN ? "name" : "ім'я"}
                autoComplete="off"
            />
            <input
                type="text"
                {...register('shortName')}
                placeholder={EN ? "shortName" : "коротке ім'я"}
                className={dark ? css.add_place_input_dark : css.add_place_input}
                autoComplete="off"
            />
            <input
                type="text"
                {...register('location')}
                placeholder={EN ? "location" : "локація"}
                className={dark ? css.add_place_input_dark : css.add_place_input}
                autoComplete="off"
            />
            <input
                type="text"
                {...register('workTime')}
                placeholder="workTime"
                className={css.add_place_input}
                autoComplete="off"
            />
            <input
                type="text"
                {...register('rating')}
                placeholder="rating"
                className={css.add_place_input}
                autoComplete="off"
            />
            <input
                type="text"
                {...register('latitude')}
                placeholder={EN ? "latitude" : "широта"}
                className={dark ? css.add_place_input_dark : css.add_place_input}
                autoComplete="off"
            />
            <input
                type="text"
                {...register('longitude')}
                placeholder={EN ? "longitude" : "довгота"}
                className={dark ? css.add_place_input_dark : css.add_place_input}
                autoComplete="off"
            />
            <input
                type="number"
                {...register('userId')}
                placeholder={EN ? "userId" : "Id користувача"}
                className={dark ? css.add_place_input_dark : css.add_place_input}
            />
            <button className={dark ? css.add_place_btn_dark : css.add_place_btn}>{EN ? "send" : "відправити"}</button>
        </form>
    );
};

export {CreatePlaceForm};