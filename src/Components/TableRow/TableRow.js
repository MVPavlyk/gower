import React from 'react';
import css from './TableRow.module.css';
import blockCss from '../CreateTableForm/CreateTableForm.module.css'

const TableRow = ({table}) => {
    return (
        <div className={css.table_row}>
            <div className={blockCss.header_block}>
                {table.placeId}
            </div>
            <div className={blockCss.header_block}>
                {table.left}
            </div>
            <div className={blockCss.header_block}>
                {table.top}
            </div>
            <div className={blockCss.header_block}>
                {table.transform}
            </div>
        </div>
    );
};

export {TableRow};