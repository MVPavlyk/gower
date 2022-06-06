import React, {useEffect} from 'react';
import css from './MyPlaceTable.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {change, freeTable, getTablesOfPlace, occupyTable} from '../../../store';


const MyPlaceTable = ({table, placeId}) => {
    const {EN} = useSelector(state => state['languageReducers']);
    const {dark} = useSelector(state => state['themeReducers']);

    const {status} = useSelector(state => state['ownerReducers']);

    const dispatch = useDispatch();

    const tableAction = () => {
        (table.isFree ? dispatch(occupyTable(table.id)) : dispatch(freeTable(table.id)));
        setTimeout(()=> {
            dispatch(change())
        }, 100)
    };

    return (
        <div className={css.table_block}>
            <div className={css.number}>{table.number}</div>
            <div className={css.status}>{table.isFree ? (EN ? 'Free' : 'Вільно') : (EN ? 'Taken' : 'Зайнято')}</div>
            <div className={css.table_buttons}>
                <div
                    className={table.isFree ? dark ? css.table_btn_active_dark :css.table_btn_active : dark ? css.table_btn_disable_dark : css.table_btn_disable}
                    onClick={() => tableAction()}
                >
                    {table.isFree ? (EN ? 'Occupy' : 'Зайняти') : (EN ? 'Free up' : 'Звільнити')}
                </div>
            </div>
        </div>
    );
};

export {MyPlaceTable};