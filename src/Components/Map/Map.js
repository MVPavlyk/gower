import React from 'react';
import css from './Map.module.css';
import {Table} from '../Table/Table';

const Map = ({hall}) => {
    return (
        <div className={css.map}>
            <img
                className={css.map_bg}
                src={hall.map_bg}
                alt={`hall_${hall.number}`}
            />
            {hall.tables.map(table => <Table table={table} key={table.number}/>)}
        </div>
    );
};

export {Map};