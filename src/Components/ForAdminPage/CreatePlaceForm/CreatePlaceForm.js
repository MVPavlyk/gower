import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

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

    return (
        <form className={css.add_place_form} onSubmit={handleSubmit(sendPlace)}>
            <h4>Create place</h4>
            <input
                className={css.add_place_input}
                type="text"
                {...register('name')}
                placeholder="name"
                autoComplete="off"
            />
            <input
                type="text"
                {...register('shortName')}
                placeholder="shortName"
                className={css.add_place_input}
                autoComplete="off"
            />
            <input
                type="text"
                {...register('location')}
                placeholder="location"
                className={css.add_place_input}
                autoComplete="off"
            />
            <input
                type="text"
                {...register('latitude')}
                placeholder="latitude"
                className={css.add_place_input}
                autoComplete="off"
            />
            <input
                type="text"
                {...register('longitude')}
                placeholder="longitude"
                className={css.add_place_input}
                autoComplete="off"
            />
            <input
                type="number"
                {...register('userId')}
                placeholder="userId"
                className={css.add_place_input}
            />
            <button className={css.add_place_btn}>send</button>
        </form>
    );
};

export {CreatePlaceForm};