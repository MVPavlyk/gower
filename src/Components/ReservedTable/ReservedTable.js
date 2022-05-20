import React from 'react';
import css from './ReservedTable.module.css';
import {ReserveRow} from '../ReserveRow/ReserveRow';
import {useSelector} from 'react-redux';

const ReservedTable = ({tables}) => {

    const {dark} = useSelector(state => state['themeReducers']);

    return (
        <div className={css.reserved_table}>
            <div className={dark ? css.reserved_header_dark : css.reserved_header}>
                <div className={css.reserved_header_block}>
                    Зал
                </div>
                <div className={css.reserved_header_block}>
                    Столик
                </div>
                <div className={css.reserved_header_block}>
                    К-сть місць
                </div>
                <div className={css.reserved_header_block}>
                    Дата та час
                </div>
                <div className={css.empty_block}>

                </div>
            </div>
            {tables.map(table => <ReserveRow table={table} key={table.number}/>)}

        </div>
    );
};

export {ReservedTable};