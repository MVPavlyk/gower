import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Map, ReservedTable, ReserveForms} from '../../Components';
import css from './MapPage.module.css';
import {sendReserve} from '../../store';

const MapPage = () => {
    const {oneRestaurant} = useSelector(state => state['placeReducers']);
    const {tables} = useSelector(state => state['tableReducers']);

    const dispatch = useDispatch();

    const send = () => {
        dispatch(sendReserve());
    };

    return (
        <>
            {oneRestaurant.halls &&
                <div className={css.map_page}>
                    <div className={css.map_wrap}>
                        {oneRestaurant.halls.map(hall => <Map hall={hall} key={hall.number}/>)}
                    </div>
                    {!!tables.length &&
                        <>
                            <div className={css.map_bottom}>
                                <div className={css.reserved_tables}>
                                    <div className={css.reserved_title}>
                                        Резерв
                                    </div>
                                    <div className={css.table_header}>
                                        <div className={css.table_header_block}>
                                            Зал
                                        </div>
                                        <div className={css.table_header_block}>
                                            Столик
                                        </div>
                                        <div className={css.table_header_block}>
                                            К-сть місць
                                        </div>
                                        <div className={css.table_header_block}>
                                            Дата та час
                                        </div>
                                        <div className={css.table_header_block}>
                                        </div>
                                    </div>
                                    <div className={css.table_data}>{tables.map(table =>
                                        <ReservedTable table={table} key={table.number}/>)}
                                    </div>
                                </div>
                                <ReserveForms/>
                            </div>
                            <div className={css.reserve_btn} onClick={() => send()}>
                                Зарезервувати
                            </div>
                        </>

                    }
                </div>
            }
        </>
    );
};

export {MapPage};