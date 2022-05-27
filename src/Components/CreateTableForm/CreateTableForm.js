import React from 'react';
import css from './CreateTableForm.module.css';
import createCss from '../CreatePlaceForm/CreatePlaceForm.module.css';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {createTable} from '../../store';

const CreateTableForm = () => {
    const {
        register, handleSubmit
    } = useForm();

    const dispatch = useDispatch();

    const assignTable = (table) => {
        dispatch(createTable({tables: [{...table, isFree: true/*, id: 0*/}]}));
    };

    return (
        <form className={createCss.add_place_form} onSubmit={handleSubmit(assignTable)}>
            <input
                type="number"
                className={createCss.add_place_input}
                {...register('top')}
                placeholder="top"
            />
            <input
                type="number"
                className={createCss.add_place_input}
                {...register('left')}
                placeholder="left"
            />
            <input
                type="number"
                className={createCss.add_place_input}
                {...register('transform')}
                placeholder="transform"
            />
            <input
                type="number"
                className={createCss.add_place_input}
                {...register('capacity')}
                placeholder="capacity"
            />
            <input
                type="number"
                className={createCss.add_place_input}
                {...register('placeId')}
                placeholder="placeId"
            />
            <button className={createCss.add_place_btn}>ADD</button>

        </form>
    );
};

export {CreateTableForm};