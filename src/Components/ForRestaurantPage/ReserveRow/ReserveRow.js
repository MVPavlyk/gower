import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTable} from '../../../store';
import css from './ReserveRow.module.css';
import x from '../../../img/X.svg'

const ReserveRow = ({table}) => {
    const dispatch = useDispatch();

    const deleter = (table) => {
        dispatch(deleteTable(table));
    };

    return (
        <>
            <div className={css.reserve_row}>
                <div className={css.reserve_content_block}>
                    1
                </div>
                <div className={css.reserve_content_block}>
                    {table.number}
                </div>
                <div className={css.reserve_content_block}>
                    {table.capacity}
                </div>
               {/* <div className={css.reserve_content_block}>
                    08.05.22 <br/>
                    17:30
                </div>*/}
                <div className={css.delete_btn} onClick={() => deleter(table)}>
                    <img src={x} alt="x"/>
                </div>
            </div>
        </>
    );
};

export {ReserveRow};