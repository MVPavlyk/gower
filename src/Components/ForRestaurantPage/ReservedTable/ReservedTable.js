import React from 'react';
import css from './ReservedTable.module.css';

import {useDispatch, useSelector} from 'react-redux';
import {deleteTable} from '../../../store';

import {ReserveRow} from '../ReserveRow/ReserveRow';

const ReservedTable = ({tables}) => {

    const {EN} = useSelector(state => state['languageReducers']);
    const {dark} = useSelector(state => state['themeReducers']);


    return (
        <div className={css.reserved_table}>
            <div className={dark ? css.reserved_header_dark : css.reserved_header}>
                <div className={css.reserved_header_block}>
                    {EN ? 'Hall' : 'Зал'}
                </div>
                <div className={css.reserved_header_block}>
                    {EN ? 'Table' : 'Столик'}
                </div>
                <div className={css.reserved_header_block}>
                    {EN ? '№ of seats' : 'К-сть місць'}
                </div>
             {/*   <div className={css.reserved_header_block}>
                    {EN ? 'Date & Time' : 'Дата та час'}
                </div>*/}
                <div className={css.empty_block}>

                </div>
            </div>
            {tables.map(table => <ReserveRow table={table} key={table.number}/>)}

        </div>
    );
};

export {ReservedTable};