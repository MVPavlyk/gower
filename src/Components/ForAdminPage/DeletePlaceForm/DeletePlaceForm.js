import React, {useState} from 'react';
import createCss from '../CreatePlaceForm/CreatePlaceForm.module.css';
import css from './DeletePlaceForm.module.css';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {deletePlace} from '../../../store';

const DeletePlaceForm = () => {
    const {
        register, handleSubmit
    } = useForm();

    const dispatch = useDispatch();

    const [error, serError] = useState(false);

    const deleteUserReq = (obj, e) => {
        if (obj.password === 'moskal') {
            dispatch(deletePlace(obj.id));
            serError(false);
            e.target.reset();
        } else {
            serError(true);
        }
    };

    const {dark} = useSelector(state => state['themeReducers']);
    const {EN} = useSelector(state => state['languageReducers']);

    return (
        <form onSubmit={handleSubmit(deleteUserReq)} className={createCss.add_place_form}>
            <h4>{EN ? "Delete place" : "Видалити місце"}</h4>
            <input
                className={dark ? createCss.add_place_input_dark : createCss.add_place_input}
                type="text"
                {...register('id')}
                placeholder="id"
                autoCorrect="off"
                autoComplete="off"
            />
            <input className={dark ? createCss.add_place_input_dark : createCss.add_place_input}
                   type="text"
                   {...register('password')}
                   placeholder={EN ? "password" : "пароль"}
                   autoCorrect="off"
                   autoComplete="off"
            />
            <button className={css.delete_btn}>{EN ? "delete" : "видалити"}</button>
            {error && <div className={css.error}>Error</div>}
        </form>
    );
};

export {DeletePlaceForm};