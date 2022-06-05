import React, {useState} from 'react';
import css from './CreateTableForm.module.css';
import createCss from '../CreatePlaceForm/CreatePlaceForm.module.css';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {createTable} from '../../../store';
import {TableRow} from '../../ForRestaurantPage';

const CreateTableForm = () => {
    const {
        register, handleSubmit
    } = useForm();

    const [tableArray, setTableArray] = useState([]);

    const dispatch = useDispatch();

    const assignTable = (table, e) => {
        const array = [...tableArray];
        array.push({
            id: 0,
            top: table.top,
            left: table.left,
            transform: table.transform,
            capacity: +table.capacity,
            number: +table.number,
            placeId: +table.placeId,
            isFree: true
        });
        setTableArray(array);
        e.target.reset();
    };

    const sendTables = () => {
        dispatch(createTable(tableArray)).then(setTableArray([]));

    };

    return (
        <>
            <form
                className={createCss.add_place_form}
                onSubmit={handleSubmit(assignTable)}
            >
                <h4>Create new table</h4>
                <input
                    type="text"
                    className={createCss.add_place_input}
                    {...register('top')}
                    placeholder="top"
                />
                <input
                    type="text"
                    className={createCss.add_place_input}
                    {...register('left')}
                    placeholder="left"
                />
                <input
                    type="text"
                    className={createCss.add_place_input}
                    {...register('transform')}
                    placeholder="transform"
                />
                <input
                    type="number"
                    className={createCss.add_place_input}
                    {...register('capacity')}
                    placeholder="capacity"
                />
                <input
                    type="text"
                    className={createCss.add_place_input}
                    {...register('type')}
                    placeholder="type"
                />
                <input
                    type="number"
                    className={createCss.add_place_input}
                    {...register('number')}
                    placeholder="number"
                />
                <input
                    type="number"
                    className={createCss.add_place_input}
                    {...register('placeId')}
                    placeholder="placeId"
                />
                <button className={createCss.add_place_btn}>ADD</button>
            </form>
            {!!tableArray.length &&
                <div className={css.tables_to_send}>
                    <div className={css.tables_to_send_header}>
                        <div className={css.header_block}>
                            PLACE
                        </div>
                        <div className={css.header_block}>
                            LEFT
                        </div>
                        <div className={css.header_block}>
                            TOP
                        </div>
                        <div className={css.header_block}>
                            ROTATE
                        </div>
                    </div>
                    {tableArray.map(table => <TableRow key={table.top} table={table} tableArray={tableArray}
                                                       setTableArray={setTableArray}/>)}
                    <div className={css.send_tables_btn} onClick={() => sendTables()}>SEND</div>
                </div>
            }
        </>
    );
};

export {CreateTableForm};