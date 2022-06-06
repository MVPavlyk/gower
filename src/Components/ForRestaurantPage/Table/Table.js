import React, {useEffect, useState} from 'react';
import css from './Table.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {addTable} from '../../../store';


const Table = ({table}) => {
    const {tables} = useSelector(state => state['tableReducers']);
    const dispatch = useDispatch();

    let isCorrect = tables.includes(table);

    const chooseTable = (table) => {
        if (!isCorrect) {
            dispatch(addTable(table));
        }
    };

    const [className, setClassName] = useState();

    useEffect(() => {
        table.isFree ? setClassName(table.type) : setClassName(`${table.type}_reserved`)
    });


    return (
        <div
            // className={css[table.type]}
            className={css[className]}
            style={
                {
                    top: table.top,
                    left: table.left,
                    transform: `rotate(${table.transform}deg)`
                }
            }
            onClick={() => chooseTable(table)}
        >
        </div>
    );
};

export {Table};