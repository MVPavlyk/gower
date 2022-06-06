import React, {useState} from 'react';
import css from './CreateTableForm.module.css';
import createCss from '../CreatePlaceForm/CreatePlaceForm.module.css';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
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
            type: table.type,
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

    const {dark} = useSelector(state => state['themeReducers']);
    const {EN} = useSelector(state => state['languageReducers']);

    return (
        <>
            <form
                className={createCss.add_place_form}
                onSubmit={handleSubmit(assignTable)}
            >
                <h4>{EN ? "Create new table" : "Додати новий стіл"}</h4>
                <input
                    type="text"
                    className={dark ? createCss.add_place_input_dark : createCss.add_place_input}
                    {...register('top')}
                    placeholder={EN ? "top" : "зверху"}
                />
                <input
                    type="text"
                    className={dark ? createCss.add_place_input_dark : createCss.add_place_input}
                    {...register('left')}
                    placeholder={EN ? "left" : "зліва"}
                />
                <input
                    type="text"
                    className={dark ? createCss.add_place_input_dark : createCss.add_place_input}

                    {...register('transform')}
                    placeholder={EN ? "transform" : "поворот"}
                />
                <input
                    type="number"
                    className={dark ? createCss.add_place_input_dark : createCss.add_place_input}
                    {...register('capacity')}
                    placeholder={EN ? "capacity" : "вмістимість"}
                />
                <input
                    type="text"
                    className={dark ? createCss.add_place_input_dark : createCss.add_place_input}
                    {...register('type')}
                    placeholder="type"
                />
                <input
                    type="number"
                    className={dark ? createCss.add_place_input_dark : createCss.add_place_input}
                    {...register('number')}
                    placeholder="number"
                />
                <input
                    type="number"
                    className={dark ? createCss.add_place_input_dark : createCss.add_place_input}
                    {...register('placeId')}
                    placeholder={EN ? "placeId" : "Id місця"}
                />
                <button className={dark ? createCss.add_place_btn_dark : createCss.add_place_btn}>{EN ? "ADD" : "ДОДАТИ"}</button>
            </form>
            {!!tableArray.length &&
                <div className={css.tables_to_send}>
                    <div className={css.tables_to_send_header}>
                        <div className={css.header_block}>
                            {EN ? "PLACE" : "МІСЦЕ"}
                        </div>
                        <div className={css.header_block}>
                            {EN ? "LEFT" : "ЛІВО"}
                        </div>
                        <div className={css.header_block}>
                            {EN ? "TOP" : "ВЕРХ"}
                        </div>
                        <div className={css.header_block}>
                            {EN ? "ROTATE" : "КУТ"}
                        </div>
                    </div>

                    {tableArray.map(table => <TableRow key={table.top} table={table} tableArray={tableArray} setTableArray={setTableArray}/>)}
                    <div className={dark ? css.send_tables_btn_dark : css.send_tables_btn} onClick={() => sendTables()}>{EN ? "SEND" : "ВІДПРАВИТИ"}</div>

                </div>
            }
        </>
    );
};

export {CreateTableForm};