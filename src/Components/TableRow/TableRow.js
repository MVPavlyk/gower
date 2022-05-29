import React from 'react';
import css from './TableRow.module.css';
import blockCss from '../CreateTableForm/CreateTableForm.module.css';
import X from '../../img/Cross.svg';


const TableRow = ({table, tableArray, setTableArray}) => {

    const deleteTable = () => {
        const array = [...tableArray];
        setTableArray(array.filter(tableToDel => tableToDel !== table));

    };

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
            <div className={css.cross_div}><img className={css.cross} src={X} alt="x" onClick={() => deleteTable()}/></div>
        </div>
    );
};

export {TableRow};