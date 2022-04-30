import React from 'react';
import css from './ReservedTable.module.css';
import {useDispatch} from 'react-redux';
import {deleteTable} from '../../store';

const ReservedTable = ({table}) => {
    const dispatch = useDispatch();

    const deleter = (table) => {
        dispatch(deleteTable(table));
    };

    return (
        <div className={css.reserved_block}>
            <div className={css.reserved_data_block}>
                1
            </div>
            <div className={css.reserved_data_block}>
                {table.number}
            </div>
            <div className={css.reserved_data_block}>
                {table.size}
            </div>
            <div className={css.reserved_data_block}>
                30.04.2022
            </div>
            <div className={css.button_wrap}>
                <div className={css.delete_btn} onClick={() => deleter(table)}>
                    Видалити
                </div>
            </div>
        </div>
    );
};

export {ReservedTable};